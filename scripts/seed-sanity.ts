/**
 * Seed case studies into Sanity (write token required).
 *
 * Usage:
 *   1. .env.local: NEXT_PUBLIC_SANITY_PROJECT_ID + SANITY_API_TOKEN
 *   2. npm run seed:sanity
 *
 * Optional: SEED_PUBLISH=true — sets isPublished on seeded docs
 */

import { config as loadEnv } from "dotenv";
import { resolve } from "path";

loadEnv({ path: resolve(process.cwd(), ".env.local") });
loadEnv({ path: resolve(process.cwd(), ".env") });

async function main() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  if (!projectId) {
    console.error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local\n" +
        "sanity.io/manage → your project → Settings → copy Project ID into .env.local"
    );
    process.exit(1);
  }

  const token = process.env.SANITY_API_TOKEN?.trim();
  if (!token) {
    console.error(
      "Missing SANITY_API_TOKEN in .env.local\n" +
        "sanity.io/manage → your project → API → Tokens → Editor"
    );
    process.exit(1);
  }

  const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";
  const publish = process.env.SEED_PUBLISH === "true";

  const { createClient } = await import("@sanity/client");
  const { buildEmmasdaleCaseStudyDocument } = await import(
    "./seed/case-studies/emmasdale"
  );
  const { buildNikwisaCaseStudyDocument } = await import(
    "./seed/case-studies/nikwisa"
  );

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2023-08-29",
    token,
    useCdn: false,
  });

  const documents = [
    buildEmmasdaleCaseStudyDocument({ isPublished: publish }),
    buildNikwisaCaseStudyDocument({ isPublished: publish }),
  ];

  for (const doc of documents) {
    const result = await client.createOrReplace(doc);
    console.log(
      `Upserted ${result._type} ${result._id} (published: ${(doc as { isPublished?: boolean }).isPublished ?? false})`
    );
  }

  console.log(
    "\nDone. Emmasdale: open /admin → Case Study → Emmasdale → add hero, What I built screenshots, optional card images → Publish."
  );
  console.log(
    "  Manual only: heroImage, whatBuilt[].image, storyThreads[].cardImage, proofMedia[], seoTitle/seoDescription, quote attribution."
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
