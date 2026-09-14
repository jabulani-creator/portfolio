/**
 * Print Sanity project + document counts (read-only).
 * Usage: npm run sanity:verify
 */

import { config as loadEnv } from "dotenv";
import { resolve } from "path";

loadEnv({ path: resolve(process.cwd(), ".env.local") });
loadEnv({ path: resolve(process.cwd(), ".env") });

async function main() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  if (!projectId) {
    console.error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local (Settings → Project ID)"
    );
    process.exit(1);
  }

  const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

  const { createClient } = await import("@sanity/client");

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-08-29",
    useCdn: false,
  });

  console.log("Sanity project ID:", projectId);
  console.log("Dataset:", dataset);

  const types = [
    "caseStudy",
    "siteSettings",
    "offer",
    "founderProfile",
  ] as const;

  for (const type of types) {
    const count = await client.fetch<number>(
      `count(*[_type == $type])`,
      { type }
    );
    console.log(`  ${type}: ${count}`);
  }

  const publishedCases = await client.fetch<number>(
    `count(*[_type == "caseStudy" && (showOnWebsite == true || isPublished == true)])`
  );
  console.log(`  caseStudy (show on website): ${publishedCases}`);
  console.log("\nStudio: http://localhost:3000/admin");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
