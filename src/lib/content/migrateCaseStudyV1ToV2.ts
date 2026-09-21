import type CaseStudy from "../../../types/CaseStudy";
import {
  getBusinessNarrative,
  getCategoryLabel,
  getOutcomeMetrics,
  getProblemSolutionMaps,
  getProblems,
  getTestimonialDisplay,
} from "../../../types/CaseStudy";
import type {
  CaseStudyChallenge,
  CaseStudyDeepDive,
  CaseStudyOutcome,
  CaseStudyPlatformColumn,
  CaseStudyProofMedia,
  CaseStudyStoryThread,
  CaseStudyV2Fields,
  CaseStudyWhatBuiltSection,
} from "../../../types/CaseStudyV2";
import { DEFAULT_EDITORIAL_META } from "../../../types/CaseStudyV2";
import { CASE_STUDY_MARKETING_FALLBACK } from "./caseStudyMarketingContent";
import { getCaseStudyStoryLayer } from "./caseStudyStoryContent";
import { normalizeWhatBuiltRows } from "./caseStudyWhatBuilt";

function hasV2StoryContent(v2: CaseStudyV2Fields | undefined): boolean {
  if (!v2) return false;
  return Boolean(
    v2.heroSubtitle?.trim() ||
      v2.deliverables?.length ||
      v2.challenge?.headline?.trim() ||
      v2.platformColumns?.length ||
      v2.whatBuilt?.length ||
      v2.storyThreads?.length ||
      v2.outcomes?.length ||
      v2.deepDive
  );
}

function mapsToPlatformColumns(
  study: CaseStudy
): CaseStudyPlatformColumn[] | undefined {
  const maps = getProblemSolutionMaps(study);
  if (!maps.length) return undefined;
  return maps.map((m) => ({
    label: m.title?.trim() || "Capability",
    items:
      m.features?.filter(Boolean) ||
      [m.solution, m.implementation, m.outcome].filter(Boolean) as string[],
  }));
}

function mapsToWhatBuilt(study: CaseStudy): CaseStudyWhatBuiltSection[] | undefined {
  const maps = getProblemSolutionMaps(study);
  if (!maps.length) return undefined;
  return maps
    .map((m) => ({
      title: m.title?.trim() || "Solution",
      body:
        [m.solution, m.implementation].filter(Boolean).join(" ") ||
        m.problemSummary?.trim() ||
        "",
    }))
    .filter((s) => s.body);
}

function mapsToThreads(study: CaseStudy): CaseStudyStoryThread[] | undefined {
  const maps = getProblemSolutionMaps(study);
  if (!maps.length) return undefined;
  return maps.map((m, index) => ({
    title: m.title,
    description: m.problemSummary,
    priority: index + 1,
    editorialMeta: {
      visibility: m.visibility ?? DEFAULT_EDITORIAL_META.visibility,
      importance: m.importance ?? DEFAULT_EDITORIAL_META.importance,
    },
    solution: {
      decision: m.decision,
      implementation: m.implementation,
      features: m.features,
      outcome: m.outcome,
    },
  }));
}

function problemsToThreads(study: CaseStudy): CaseStudyStoryThread[] | undefined {
  const problems = getProblems(study);
  if (!problems.length) return undefined;
  return problems.map((p, index) => ({
    title: p.title,
    description: p.description,
    category: p.category,
    priority: p.priority ?? index + 1,
    editorialMeta: {
      visibility: p.visibility ?? DEFAULT_EDITORIAL_META.visibility,
      importance: p.importance ?? DEFAULT_EDITORIAL_META.importance,
    },
    solution: {
      implementation: p.recommendedFix,
      outcome: p.businessImpact,
    },
  }));
}

function buildChallengeFromV1(study: CaseStudy): CaseStudyChallenge {
  const mp = study.marketingPage;
  const fallback = CASE_STUDY_MARKETING_FALLBACK[study.slug];
  return {
    headline:
      mp?.problemTitle?.trim() ||
      fallback?.problemTitle ||
      study.strategicThesis?.trim()?.split("\n")[0] ||
      study.problems?.[0]?.title?.trim() ||
      "The problem",
    body: study.contextSummary?.trim() || study.excerpt?.trim(),
    signals:
      mp?.problemSignals?.filter(Boolean) ||
      fallback?.problemChannels ||
      study.businessContext?.existingChannels?.filter(Boolean) ||
      study.problems?.slice(0, 8).map((p) => p.title?.trim()).filter(Boolean),
  };
}

function buildOutcomesFromV1(study: CaseStudy): CaseStudyOutcome[] {
  const outcomes: CaseStudyOutcome[] = [];
  const testimonial = getTestimonialDisplay(study);
  if (testimonial?.quote) {
    outcomes.push({
      type: "quote",
      quote: testimonial.quote,
      attribution: testimonial.attribution,
    });
  }
  if (study.outcomeHighlight?.trim()) {
    outcomes.push({ type: "highlight", value: study.outcomeHighlight.trim() });
  }
  for (const m of getOutcomeMetrics(study)) {
    outcomes.push({
      type: "metric",
      label: m.label,
      value: m.value,
      isTarget: m.isTarget,
    });
  }
  const shifts =
    study.marketingPage?.outcomeShifts ||
    CASE_STUDY_MARKETING_FALLBACK[study.slug]?.whatChanged;
  if (shifts?.length) {
    for (const row of shifts) {
      outcomes.push({
        type: "shift",
        before: row.before,
        after: row.after,
      });
    }
  } else if (study.beforeAfter?.items?.length) {
    for (const item of study.beforeAfter.items) {
      if (item.before && item.after) {
        outcomes.push({
          type: "shift",
          before: item.before,
          after: item.after,
        });
      }
    }
  }
  for (const rec of study.evidenceRecords ?? []) {
    if (rec.visibility === "private" || rec.visibility === "internal") continue;
    if (rec.type === "quote" && rec.title) {
      outcomes.push({
        type: "quote",
        quote: rec.description || rec.title,
        attribution: rec.source,
      });
    } else if (rec.value || rec.title) {
      outcomes.push({
        type: "metric",
        label: rec.title,
        value: rec.value,
      });
    }
  }
  return outcomes;
}

function buildProofMediaFromV1(study: CaseStudy): CaseStudyProofMedia[] | undefined {
  if (!study.evidenceMedia?.length) return undefined;
  return study.evidenceMedia
    .filter((m) => m.url)
    .map((m) => ({
      url: m.url,
      alt: m.alt,
      caption: m.caption,
      kind: m.kind,
      sectionAnchor: m.sectionAnchor,
    }));
}

function buildStoryThreadsForSlug(study: CaseStudy): CaseStudyStoryThread[] | undefined {
  if (study.storyThreads?.length) return undefined;

  const featureThreads: Record<string, CaseStudyStoryThread[]> = {
    "emmasdale-sda-church": [
      {
        title: "Digital bulletin",
        description: "Weekly information was split across PDFs, WhatsApp, and announcements.",
        priority: 1,
        editorialMeta: { ...DEFAULT_EDITORIAL_META },
        solution: {
          decision: "One digital bulletin as the weekly home for church information.",
          implementation: "Mobile-friendly bulletin members can open all week.",
          outcome: "Fewer repeated questions and a single place to check updates.",
        },
      },
      {
        title: "Prayer wall",
        description: "Prayer requests often stayed in private messages.",
        priority: 2,
        editorialMeta: { ...DEFAULT_EDITORIAL_META },
        solution: {
          decision: "Shared prayer where appropriate; confidential care stays protected.",
          implementation: "Prayer wall plus pastoral workflows with clear visibility rules.",
          outcome: "Community prayer without exposing sensitive care details.",
        },
      },
      {
        title: "Quarterly reports",
        description: "Department reports depended on paper and in-person office visits.",
        priority: 3,
        editorialMeta: { ...DEFAULT_EDITORIAL_META },
        solution: {
          decision: "Leaders submit structured reports from their phones.",
          implementation: "Role-based reporting in the leadership dashboard.",
          outcome: "Less admin friction for volunteer ministry leaders.",
        },
      },
    ],
  };

  return featureThreads[study.slug];
}

function buildWhatBuiltFromV1(study: CaseStudy): CaseStudyWhatBuiltSection[] | undefined {
  if (study.whatBuilt?.length) {
    return study.whatBuilt
      .map((s) => ({
        title: s.title,
        body: s.body,
        caption: s.caption,
        imageUrl: s.imageUrl,
        imageAlt: s.imageAlt,
      }))
      .filter((s) => s.title && s.body);
  }
  const mp = study.marketingPage?.buildSections;
  if (mp?.length) {
    return mp.map((s) => ({
      title: s.title,
      body: s.body,
      imageUrl: s.imageUrl,
      imageAlt: s.imageAlt,
    }));
  }
  return mapsToWhatBuilt(study) || (study.implementation?.trim()
    ? [{ title: "What was built", body: study.implementation.trim() }]
    : undefined);
}

/** One-time migration: CMS rows, then legacy v1 fields, then optional slug seeds. */
export function buildWhatBuiltForMigration(
  study: CaseStudy,
  slugSeeds?: CaseStudyWhatBuiltSection[]
): CaseStudyWhatBuiltSection[] | undefined {
  const cms = normalizeWhatBuiltRows(study.whatBuilt);
  if (cms.length) return cms;
  const inferred = buildWhatBuiltFromV1(study);
  if (inferred?.length) return inferred;
  return slugSeeds?.length ? slugSeeds : undefined;
}

function buildDeepDiveFromV1(study: CaseStudy): CaseStudyDeepDive | undefined {
  const story = getCaseStudyStoryLayer(study.slug);
  const hasStory =
    story.executiveSummary ||
    story.audiencePersonas?.length ||
    story.journeySteps?.length ||
    story.revenueEngines?.length ||
    story.fixLayers?.length ||
    story.recommendationHeadline ||
    story.blueprintMonospace ||
    story.outcomeRows?.length;

  const spine =
    study.observation?.trim() ||
    study.evidence?.trim() ||
    study.decision?.trim() ||
    study.implementation?.trim() ||
    study.outcome?.trim();

  if (!hasStory && !spine && !study.investigation) return undefined;

  return {
    executiveSummary: story.executiveSummary,
    audiencePersonas: story.audiencePersonas,
    journeySteps: story.journeySteps,
    revenueEngines: story.revenueEngines,
    fixLayers: story.fixLayers,
    recommendationHeadline: story.recommendationHeadline,
    blueprintMonospace: story.blueprintMonospace,
    outcomeRows: story.outcomeRows,
    investigation: study.investigation,
    narrativeSpine: spine
      ? {
          observation: study.observation,
          evidence: study.evidence,
          decision: study.decision,
          implementation: study.implementation,
          outcome: study.outcome,
        }
      : undefined,
  };
}

/** Map legacy CMS + code fallbacks into v2 fields (does not mutate input). */
export function migrateCaseStudyV1ToV2(study: CaseStudy): CaseStudyV2Fields {
  const existing = study as CaseStudy & CaseStudyV2Fields;
  if (hasV2StoryContent(existing)) {
    return {
      layout: existing.layout ?? (study.useMarketingPageLayout === false ? "legacy" : "marketing"),
      heroSubtitle: existing.heroSubtitle,
      deliverables: existing.deliverables,
      challenge: existing.challenge,
      platformColumns: existing.platformColumns,
      whatBuilt: existing.whatBuilt,
      storyBeforeAfter: existing.storyBeforeAfter,
      approach: existing.approach,
      storyThreads: existing.storyThreads,
      proofMedia: existing.proofMedia,
      outcomes: existing.outcomes,
      deepDive: existing.deepDive,
      featuresSectionTitle: existing.featuresSectionTitle,
    };
  }

  const mp = study.marketingPage;
  const fallback = CASE_STUDY_MARKETING_FALLBACK[study.slug];

  return {
    layout: study.useMarketingPageLayout === false ? "legacy" : "marketing",
    heroSubtitle:
      mp?.heroSubtitle?.trim() ||
      fallback?.heroSubtitle ||
      study.oneLineThesis?.trim() ||
      study.excerpt?.trim(),
    deliverables:
      mp?.deliverables?.filter(Boolean) ||
      fallback?.builtPills ||
      study.projectType?.filter(Boolean),
    challenge: buildChallengeFromV1(study),
    platformColumns:
      mp?.features?.map((f) => ({ label: f.label, items: f.items })) ||
      fallback?.experiences ||
      mapsToPlatformColumns(study),
    whatBuilt: buildWhatBuiltFromV1(study),
    storyBeforeAfter: study.beforeAfter
      ? {
          headline: study.beforeAfter.headline,
          items: study.beforeAfter.items,
        }
      : fallback?.beforeColumn?.length
        ? {
            items: fallback.beforeColumn.map((before, i) => ({
              before,
              after: fallback.afterColumn[i] ?? "",
            })),
          }
        : undefined,
    approach: mp?.approachSteps?.length
      ? {
          intro: mp.approachIntro,
          steps: mp.approachSteps,
        }
      : fallback?.approachSteps?.length
        ? {
            intro: fallback.approachTitle,
            steps: fallback.approachSteps,
          }
        : undefined,
    storyThreads:
      study.storyThreads?.length
        ? study.storyThreads
        : mapsToThreads(study) ||
          problemsToThreads(study) ||
          buildStoryThreadsForSlug(study),
    proofMedia: buildProofMediaFromV1(study),
    outcomes: buildOutcomesFromV1(study),
    deepDive: buildDeepDiveFromV1(study),
    featuresSectionTitle:
      mp?.featuresSectionTitle?.trim() || fallback?.experiencesTitle,
  };
}

export function mergeV2OntoCaseStudy(study: CaseStudy): CaseStudy & CaseStudyV2Fields {
  const v2 = migrateCaseStudyV1ToV2(study);
  return { ...study, ...v2, whatBuilt: study.whatBuilt };
}

export function getHeroContextFromStudy(study: CaseStudy, v2: CaseStudyV2Fields): string {
  return (
    study.marketingPage?.heroContext?.trim() ||
    CASE_STUDY_MARKETING_FALLBACK[study.slug]?.heroContext ||
    study.contextSummary?.trim() ||
    study.excerpt?.trim() ||
    getBusinessNarrative(study).slice(0, 400)
  );
}

export function getRoleLineFromStudy(study: CaseStudy, v2: CaseStudyV2Fields): string {
  return (
    study.marketingPage?.roleLine?.trim() ||
    CASE_STUDY_MARKETING_FALLBACK[study.slug]?.roleLine ||
    study.role?.trim() ||
    study.projectType?.join(" · ") ||
    getCategoryLabel(study.category) ||
    "Case study"
  );
}

export function getOpportunityFromStudy(study: CaseStudy): string {
  return (
    study.marketingPage?.opportunity?.trim() ||
    CASE_STUDY_MARKETING_FALLBACK[study.slug]?.opportunity ||
    study.decision?.trim()?.split("\n\n")[0] ||
    ""
  );
}
