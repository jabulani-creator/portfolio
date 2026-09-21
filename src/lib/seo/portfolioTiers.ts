import type CaseStudy from "../../../types/CaseStudy";

/** Portfolio URL tiers (marketplace hub rules do not apply; intent ownership does). */

export const SITEMAP_STATIC_PATHS: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}[] = [
  // Tier A — money + conversion
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/start-a-project", priority: 0.95, changeFrequency: "monthly" },
  { path: "/digital-experience-diagnostic", priority: 0.95, changeFrequency: "monthly" },
  // Tier B — proof
  { path: "/case-studies", priority: 0.9, changeFrequency: "weekly" },
  // Tier C — trust
  { path: "/how-i-work", priority: 0.75, changeFrequency: "monthly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  // Tier D (e.g. /ongoing-care) omitted — indexable if linked, not sitemap-promoted
];

/** Case studies in sitemap: public slugs with enough copy to be a real landing page. */
export function isCaseStudySitemapWorthy(study: CaseStudy): boolean {
  const description = study.seoDescription?.trim() || study.excerpt?.trim();
  return Boolean(study.title?.trim() && description && description.length >= 40);
}

export function caseStudySitemapPriority(study: CaseStudy): number {
  if (study.featured) return 0.88;
  return isCaseStudySitemapWorthy(study) ? 0.78 : 0.5;
}
