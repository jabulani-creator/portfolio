import type CaseStudy from "../../../types/CaseStudy";
import type { CaseStudyV2Fields } from "../../../types/CaseStudyV2";
import {
  STATIC_APPROACH_STEPS,
  type CaseStudyPageModel,
} from "../../../types/CaseStudyV2";
import {
  getHeroContextFromStudy,
  getOpportunityFromStudy,
  getRoleLineFromStudy,
  migrateCaseStudyV1ToV2,
} from "./migrateCaseStudyV1ToV2";
import { getWhatBuiltFromCms } from "./caseStudyWhatBuilt";

function nonEmpty(items: (string | undefined)[]): string[] {
  return items.map((i) => i?.trim()).filter((i): i is string => Boolean(i));
}

function platformToExperiences(
  columns: CaseStudyV2Fields["platformColumns"]
): { label: string; items: string[] }[] {
  if (!columns?.length) return [];
  return columns
    .map((c) => ({
      label: c.label?.trim() ?? "",
      items: nonEmpty(c.items ?? []),
    }))
    .filter((c) => c.label && c.items.length > 0);
}

function shiftsFromOutcomes(v2: CaseStudyV2Fields): { before: string; after: string }[] {
  return (v2.outcomes ?? [])
    .filter((o) => o.type === "shift" && o.before && o.after)
    .map((o) => ({ before: o.before!, after: o.after! }));
}

function beforeAfterColumns(v2: CaseStudyV2Fields): {
  before: string[];
  after: string[];
} {
  const items = v2.storyBeforeAfter?.items ?? [];
  if (items.length) {
    return {
      before: items.map((i) => i.before?.trim() || i.label?.trim()).filter(Boolean) as string[],
      after: items.map((i) => i.after?.trim()).filter(Boolean) as string[],
    };
  }
  const shifts = shiftsFromOutcomes(v2);
  return {
    before: shifts.map((s) => s.before),
    after: shifts.map((s) => s.after),
  };
}

/** Single view model for the marketing case study page — no slug merge chain. */
export function toCaseStudyPageModel(study: CaseStudy): CaseStudyPageModel {
  const v2 = migrateCaseStudyV1ToV2(study);
  const challenge = v2.challenge ?? {};
  const experiences = platformToExperiences(v2.platformColumns);
  const { before, after } = beforeAfterColumns(v2);
  const whatChanged = shiftsFromOutcomes(v2);

  const approachSteps =
    v2.approach?.steps
      ?.filter((s) => s.name?.trim())
      .map((s) => ({
        name: s.name!.trim(),
        detail: s.detail?.trim() ?? "",
      })) ?? STATIC_APPROACH_STEPS;

  return {
    heroSubtitle:
      v2.heroSubtitle?.trim() || study.title,
    roleLine: getRoleLineFromStudy(study, v2),
    heroContext: getHeroContextFromStudy(study, v2),
    builtPills: nonEmpty(v2.deliverables ?? []),
    problemTitle:
      challenge.headline?.trim() ||
      "The problem",
    problemChannels: nonEmpty(challenge.signals ?? []),
    opportunity: getOpportunityFromStudy(study) || challenge.body?.trim() || "",
    experiencesTitle:
      v2.featuresSectionTitle?.trim() ||
      (experiences.length > 1
        ? `One system. ${experiences.length} connected parts.`
        : experiences.length
          ? "Key capabilities"
          : "Overview"),
    experiences,
    whatBuilt: getWhatBuiltFromCms(study),
    beforeColumn: before,
    afterColumn: after,
    whatChanged:
      whatChanged.length > 0
        ? whatChanged
        : before
            .map((b, i) => ({ before: b, after: after[i] ?? "" }))
            .filter((row) => row.before && row.after),
    approachTitle: v2.approach?.intro?.trim() || "",
    approachSteps,
  };
}

export function usesMarketingCaseStudyLayout(study: CaseStudy): boolean {
  const v2 = migrateCaseStudyV1ToV2(study);
  if (v2.layout === "legacy") return false;
  if (study.useMarketingPageLayout === false) return false;
  return true;
}

export function getPublicStoryThreads(study: CaseStudy) {
  const v2 = migrateCaseStudyV1ToV2(study);
  return (v2.storyThreads ?? []).filter(
    (t) =>
      t.editorialMeta?.visibility !== "private" &&
      t.editorialMeta?.visibility !== "internal"
  );
}

export function hasDeepDiveContent(study: CaseStudy): boolean {
  const v2 = migrateCaseStudyV1ToV2(study);
  const d = v2.deepDive;
  if (!d) return false;
  return Boolean(
    d.executiveSummary ||
      d.audiencePersonas?.length ||
      d.journeySteps?.length ||
      d.revenueEngines?.length ||
      d.fixLayers?.length ||
      d.recommendationHeadline ||
      d.blueprintMonospace ||
      d.outcomeRows?.length ||
      d.investigation?.approach ||
      d.investigation?.findings?.length ||
      d.narrativeSpine?.observation ||
      d.narrativeSpine?.evidence
  );
}

export { migrateCaseStudyV1ToV2, mergeV2OntoCaseStudy } from "./migrateCaseStudyV1ToV2";
