import CaseStudy from "../../../types/CaseStudy";
import { HOME_CASE_STUDY_ORDER } from "./homeCaseStudyTeasers";

export function orderHomeCaseStudies(studies: CaseStudy[]): CaseStudy[] {
  const bySlug = new Map(studies.map((s) => [s.slug, s]));
  const ordered: CaseStudy[] = [];
  for (const slug of HOME_CASE_STUDY_ORDER) {
    const study = bySlug.get(slug);
    if (study) ordered.push(study);
  }
  for (const study of studies) {
    if (!ordered.some((s) => s.slug === study.slug)) ordered.push(study);
  }
  return ordered.slice(0, 4);
}
