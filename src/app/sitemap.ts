import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/content/queries/caseStudies";
import { getSiteUrl } from "@/lib/seo";
import {
  caseStudySitemapPriority,
  isCaseStudySitemapWorthy,
  SITEMAP_STATIC_PATHS,
} from "@/lib/seo/portfolioTiers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();
  const caseStudies = await getCaseStudies();

  const staticEntries: MetadataRoute.Sitemap = SITEMAP_STATIC_PATHS.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies
    .filter(isCaseStudySitemapWorthy)
    .map((study) => ({
      url: `${base}/case-studies/${study.slug}`,
      lastModified: study.publishedAt ? new Date(study.publishedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: caseStudySitemapPriority(study),
    }));

  return [...staticEntries, ...caseStudyEntries];
}
