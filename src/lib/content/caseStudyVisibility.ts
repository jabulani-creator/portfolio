/**
 * Slugs excluded from the public site until client approval.
 * CMS entries with these slugs are not listed or reachable on the marketing site.
 */
export const EXCLUDED_PUBLIC_CASE_STUDY_SLUGS = new Set<string>(["cross-park"]);

export function isPublicCaseStudySlug(slug: string): boolean {
  return !EXCLUDED_PUBLIC_CASE_STUDY_SLUGS.has(slug);
}

export function filterPublicCaseStudies<T extends { slug: string }>(studies: T[]): T[] {
  return studies.filter((s) => isPublicCaseStudySlug(s.slug));
}
