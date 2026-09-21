import type CaseStudy from "../../../types/CaseStudy";
import type { CaseStudyWhatBuiltSection } from "../../../types/CaseStudyV2";

/** Public site: only Sanity `whatBuilt[]` (Story tab). No slug TS fallbacks. */
export function normalizeWhatBuiltRows(
  rows: CaseStudyWhatBuiltSection[] | undefined
): CaseStudyWhatBuiltSection[] {
  if (!rows?.length) return [];
  return rows
    .map((s) => ({
      title: s.title?.trim() ?? "",
      body: s.body?.trim() ?? "",
      caption: s.caption?.trim(),
      imageUrl: s.imageUrl,
      imageAlt: s.imageAlt?.trim(),
    }))
    .filter((s) => s.title && s.body);
}

export function getWhatBuiltFromCms(study: CaseStudy): CaseStudyWhatBuiltSection[] {
  return normalizeWhatBuiltRows(study.whatBuilt);
}
