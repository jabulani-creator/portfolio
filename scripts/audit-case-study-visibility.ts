/**
 * Pre-migrate audit: list v1 fields marked private/internal before mapping to outcomes[].
 *
 * Usage: npx tsx scripts/audit-case-study-visibility.ts
 */
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

type Row = { slug: string; area: string; title: string; visibility: string };

async function main() {
  const docs = await client.fetch<
    {
      slug: string;
      problems?: { title?: string; visibility?: string }[];
      problemSolutionMaps?: { title?: string; visibility?: string }[];
      evidenceRecords?: { title?: string; visibility?: string }[];
      outcomes?: { type?: string; visibility?: string; quote?: string }[];
    }[]
  >(
    `*[_type == "caseStudy"]{
      "slug": slug.current,
      problems[]{ title, visibility },
      problemSolutionMaps[]{ title, visibility },
      evidenceRecords[]{ title, visibility },
      outcomes[]{ type, visibility, quote }
    }`
  );

  const flagged: Row[] = [];
  for (const doc of docs) {
    for (const p of doc.problems ?? []) {
      if (p.visibility && p.visibility !== "public") {
        flagged.push({
          slug: doc.slug,
          area: "problems",
          title: p.title ?? "(untitled)",
          visibility: p.visibility,
        });
      }
    }
    for (const m of doc.problemSolutionMaps ?? []) {
      if (m.visibility && m.visibility !== "public") {
        flagged.push({
          slug: doc.slug,
          area: "problemSolutionMaps",
          title: m.title ?? "(untitled)",
          visibility: m.visibility,
        });
      }
    }
    for (const e of doc.evidenceRecords ?? []) {
      if (e.visibility && e.visibility !== "public") {
        flagged.push({
          slug: doc.slug,
          area: "evidenceRecords",
          title: e.title ?? "(untitled)",
          visibility: e.visibility,
        });
      }
    }
    for (const o of doc.outcomes ?? []) {
      if (o.visibility && o.visibility !== "public") {
        flagged.push({
          slug: doc.slug,
          area: "outcomes",
          title: o.type ?? "outcome",
          visibility: o.visibility,
        });
      }
    }
  }

  if (!flagged.length) {
    console.log("No non-public visibility flags found on case studies.");
    return;
  }

  console.log("Non-public content (review before migrate):\n");
  for (const row of flagged) {
    console.log(`  ${row.slug} · ${row.area} · ${row.title} · ${row.visibility}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
