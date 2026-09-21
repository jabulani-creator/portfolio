/**
 * Patch case studies with v2 fields derived from v1 (+ TS fallbacks via same logic as site).
 *
 * Before running:
 *   sanity dataset export <dataset> backup.tar.gz
 *
 * Usage:
 *   npx tsx scripts/migrate-case-study-v2.ts --dry-run
 *   npx tsx scripts/migrate-case-study-v2.ts --apply
 */
import { createClient } from "@sanity/client";
import {
  buildWhatBuiltForMigration,
  migrateCaseStudyV1ToV2,
} from "../src/lib/content/migrateCaseStudyV1ToV2";
import type CaseStudy from "../types/CaseStudy";
import { MIGRATION_WHAT_BUILT_SEEDS } from "./case-study-migration-seeds";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

const dryRun = !process.argv.includes("--apply");

if (!projectId || !dataset) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET");
  process.exit(1);
}

if (!token && !dryRun) {
  console.error("Set SANITY_API_TOKEN to apply patches");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const projection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  observation,
  evidence,
  decision,
  implementation,
  outcome,
  oneLineThesis,
  role,
  contextSummary,
  strategicThesis,
  problems,
  problemSolutionMaps,
  businessContext,
  investigation,
  evidenceRecords,
  testimonial,
  outcomeHighlight,
  outcomeMetrics,
  outcomeMetric,
  clientQuote,
  clientQuoteAttribution,
  beforeAfter,
  evidenceMedia[]{
    caption,
    sectionAnchor,
    kind,
    "url": image.asset->url,
    "alt": image.alt
  },
  marketingPage,
  useMarketingPageLayout,
  projectType,
  layout,
  heroSubtitle,
  deliverables,
  challenge,
  platformColumns,
  whatBuilt,
  storyBeforeAfter,
  approach,
  storyThreads,
  proofMedia,
  outcomes,
  deepDive
}`;

async function main() {
  const docs = await client.fetch<(CaseStudy & { _id: string })[]>(
    `*[_type == "caseStudy"]${projection}`
  );

  console.log(
    dryRun
      ? `Dry run — ${docs.length} documents\n`
      : `Applying v2 patches to ${docs.length} documents\n`
  );

  for (const doc of docs) {
    const v2 = migrateCaseStudyV1ToV2(doc);
    const whatBuilt = buildWhatBuiltForMigration(
      doc,
      MIGRATION_WHAT_BUILT_SEEDS[doc.slug]
    );
    const patch = {
      layout: v2.layout,
      heroSubtitle: v2.heroSubtitle,
      deliverables: v2.deliverables,
      challenge: v2.challenge,
      featuresSectionTitle: v2.featuresSectionTitle,
      platformColumns: v2.platformColumns,
      whatBuilt: whatBuilt?.map((s) => ({
        _type: "object",
        title: s.title,
        body: s.body,
        ...(s.caption ? { caption: s.caption } : {}),
      })),
      storyBeforeAfter: v2.storyBeforeAfter,
      approach: v2.approach,
      storyThreads: v2.storyThreads,
      outcomes: v2.outcomes,
      deepDive: v2.deepDive,
    };

    console.log(`  ${doc.slug}: columns=${v2.platformColumns?.length ?? 0} built=${whatBuilt?.length ?? 0} outcomes=${v2.outcomes?.length ?? 0}`);

    if (!dryRun) {
      await client.patch(doc._id).set(patch).commit();
    }
  }

  if (dryRun) {
    console.log("\nRe-run with --apply to write patches.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
