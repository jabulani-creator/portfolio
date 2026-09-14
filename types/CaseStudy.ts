export type RevenueLeak = {
  title?: string;
  description?: string;
  frictionQuote?: string;
  businessImpact?: string;
  recommendedFix?: string;
};

export type ProblemCategory =
  | "revenue"
  | "operations"
  | "communication"
  | "customerExperience"
  | "marketing"
  | "trust"
  | "administration"
  | "data"
  | "technology"
  | "process"
  | "growth";

export type DisplayImportance = "primary" | "secondary" | "supporting";

export type ContentVisibility = "public" | "private" | "internal";

export type Problem = {
  title?: string;
  description?: string;
  category?: ProblemCategory;
  evidence?: string;
  businessImpact?: string;
  priority?: number;
  frictionQuote?: string;
  recommendedFix?: string;
  visibility?: ContentVisibility;
  importance?: DisplayImportance;
};

export type ProblemSolutionMap = {
  title?: string;
  problemSummary?: string;
  problemIndex?: number;
  whyItMattered?: string;
  decision?: string;
  solution?: string;
  implementation?: string;
  outcome?: string;
  features?: string[];
  importance?: DisplayImportance;
  visibility?: ContentVisibility;
};

export type BusinessContext = {
  businessDescription?: string;
  businessModel?: string;
  audiences?: string[];
  operatingContext?: string;
  existingChannels?: string[];
  businessGoals?: string[];
};

export type Investigation = {
  approach?: string;
  sources?: string[];
  findings?: string[];
};

export type Workflow = {
  title?: string;
  steps?: string[];
};

export type EvidenceRecordType =
  | "metric"
  | "quote"
  | "observation"
  | "screenshot"
  | "analytics"
  | "demo";

export type EvidenceRecord = {
  type?: EvidenceRecordType;
  title?: string;
  description?: string;
  value?: string;
  source?: string;
  date?: string;
  visibility?: ContentVisibility;
  importance?: DisplayImportance;
};

export type Testimonial = {
  quote?: string;
  person?: string;
  role?: string;
  organization?: string;
  permissionToPublish?: boolean;
};

export type OutcomeMetric = {
  label?: string;
  value?: string;
  isTarget?: boolean;
};

export type CaseStudyCategory =
  | "diagnostic"
  | "build"
  | "strategy"
  | "software";

export type EngagementType = "client" | "anonymized" | "composite";

export type ContextStat = {
  label?: string;
  value?: string;
};

export type NarrativeAnchor =
  | "observation"
  | "evidence"
  | "decision"
  | "implementation"
  | "outcome";

export type CaseStudySectionId =
  | NarrativeAnchor
  | "business"
  | "investigation"
  | "problems"
  | "solutions"
  | "impact";

export type EvidenceMediaKind =
  | "screenshot"
  | "diagram"
  | "photo"
  | "redacted_report";

export type EvidenceMedia = {
  url?: string;
  alt?: string;
  caption?: string;
  sectionAnchor?: NarrativeAnchor;
  kind?: EvidenceMediaKind;
};

export type ContentBlockType = "callout" | "pullQuote";

export type ContentBlockPlacement = "scope" | "quote" | "end";

export type ContentBlock = {
  blockType?: ContentBlockType;
  placement?: ContentBlockPlacement;
  text?: string;
  quote?: string;
  attribution?: string;
};

export type BeforeAfterItem = {
  label?: string;
  before?: string;
  after?: string;
  explanation?: string;
};

export type BeforeAfter = {
  headline?: string;
  items?: BeforeAfterItem[];
};

export type DeliverableTeaser = {
  label?: string;
  description?: string;
  href?: string;
  externalUrl?: string;
  fileUrl?: string;
};

type CaseStudy = {
  _id: string;
  title: string;
  slug: string;
  clientLabel?: string;
  contextSummary?: string;
  excerpt: string;
  observation: string;
  evidence: string;
  decision: string;
  implementation: string;
  outcome: string;
  heroImage?: string;
  heroImageAlt?: string;
  featured?: boolean;
  category?: CaseStudyCategory;
  oneLineThesis?: string;
  role?: string;
  context?: string;
  period?: string;
  projectTags?: string;
  projectType?: string[];
  strategicThesis?: string;
  customerJourney?: string;
  revenueLeaks?: RevenueLeak[];
  problems?: Problem[];
  problemSolutionMaps?: ProblemSolutionMap[];
  businessContext?: BusinessContext;
  investigation?: Investigation;
  workflows?: Workflow[];
  evidenceRecords?: EvidenceRecord[];
  testimonial?: Testimonial;
  outcomeHighlight?: string;
  /** @deprecated Prefer outcomeMetrics — normalized in query layer */
  outcomeMetric?: OutcomeMetric;
  outcomeMetrics?: OutcomeMetric[];
  clientQuote?: string;
  clientQuoteAttribution?: string;
  liveUrl?: string;
  engagementDuration?: string;
  engagementType?: EngagementType;
  contextStats?: ContextStat[];
  scopeNote?: string;
  evidenceMedia?: EvidenceMedia[];
  deliverableTeaser?: DeliverableTeaser;
  techStack?: string[];
  beforeAfter?: BeforeAfter;
  closingBridge?: string;
  contentBlocks?: ContentBlock[];
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
};

export default CaseStudy;

export function getCategoryLabel(category?: CaseStudyCategory): string {
  switch (category) {
    case "diagnostic":
      return "Business Diagnostic";
    case "build":
      return "Digital Build";
    case "strategy":
      return "Digital Strategy";
    case "software":
      return "Software / Platform";
    default:
      return "Case study";
  }
}

export function getProblemCategoryLabel(
  category?: ProblemCategory
): string {
  switch (category) {
    case "revenue":
      return "Revenue";
    case "operations":
      return "Operations";
    case "communication":
      return "Communication";
    case "customerExperience":
      return "Customer experience";
    case "marketing":
      return "Marketing";
    case "trust":
      return "Trust";
    case "administration":
      return "Administration";
    case "data":
      return "Data";
    case "technology":
      return "Technology";
    case "process":
      return "Process";
    case "growth":
      return "Growth";
    default:
      return "Problem";
  }
}

export function getEngagementTypeLabel(
  type?: EngagementType
): string | null {
  switch (type) {
    case "anonymized":
      return "Client name withheld for privacy.";
    case "composite":
      return "Composite illustration based on representative client work.";
    default:
      return null;
  }
}

function mapRevenueLeaksToProblems(leaks?: RevenueLeak[]): Problem[] {
  if (!leaks?.length) {
    return [];
  }
  return leaks.map((leak) => ({
    title: leak.title,
    description: leak.description,
    frictionQuote: leak.frictionQuote,
    businessImpact: leak.businessImpact,
    recommendedFix: leak.recommendedFix,
    category: "revenue" as ProblemCategory,
  }));
}

export function getProblems(study: Pick<CaseStudy, "problems" | "revenueLeaks">): Problem[] {
  const fromProblems = study.problems?.filter((p) => p.title || p.description);
  if (fromProblems?.length) {
    return fromProblems;
  }
  return mapRevenueLeaksToProblems(study.revenueLeaks);
}

export function getProblemsForPublic(
  study: Pick<CaseStudy, "problems" | "revenueLeaks">,
  limit = 3
): Problem[] {
  const all = getProblems(study).filter(
    (p) => p.visibility !== "internal" && p.visibility !== "private"
  );
  const sorted = [...all].sort((a, b) => {
    const pa = a.priority ?? 99;
    const pb = b.priority ?? 99;
    return pa - pb;
  });
  return sorted.slice(0, limit);
}

export function getProblemSolutionMaps(
  study: Pick<CaseStudy, "problemSolutionMaps">
): ProblemSolutionMap[] {
  return study.problemSolutionMaps?.filter((m) => m.title || m.solution) ?? [];
}

export function getPrimaryMaps(
  study: Pick<CaseStudy, "problemSolutionMaps">
): ProblemSolutionMap[] {
  return getProblemSolutionMaps(study).filter(
    (m) =>
      m.visibility !== "internal" &&
      m.visibility !== "private" &&
      (m.importance ?? "primary") === "primary"
  );
}

export function getSecondaryMaps(
  study: Pick<CaseStudy, "problemSolutionMaps">
): ProblemSolutionMap[] {
  return getProblemSolutionMaps(study).filter(
    (m) =>
      m.visibility !== "internal" &&
      m.visibility !== "private" &&
      m.importance === "secondary"
  );
}

export function getPublicEvidenceRecords(
  study: Pick<CaseStudy, "evidenceRecords">
): EvidenceRecord[] {
  return (
    study.evidenceRecords?.filter(
      (r) =>
        r.visibility !== "internal" &&
        r.visibility !== "private" &&
        (r.title || r.description || r.value)
    ) ?? []
  );
}

export function getTestimonialDisplay(
  study: Pick<
    CaseStudy,
    "testimonial" | "clientQuote" | "clientQuoteAttribution"
  >
): { quote: string; attribution?: string } | null {
  const t = study.testimonial;
  if (t?.quote?.trim() && t.permissionToPublish !== false) {
    const parts = [t.person, t.role, t.organization].filter(Boolean);
    return {
      quote: t.quote.trim(),
      attribution: parts.length ? parts.join(" · ") : undefined,
    };
  }
  if (study.clientQuote?.trim()) {
    return {
      quote: study.clientQuote.trim(),
      attribution: study.clientQuoteAttribution,
    };
  }
  return null;
}

export function getFirstPrimaryMapOutcome(
  study: Pick<CaseStudy, "problemSolutionMaps">
): string | undefined {
  const map = getPrimaryMaps(study)[0];
  return map?.outcome?.trim() || undefined;
}

export function getOutcomeMetrics(
  study: Pick<CaseStudy, "outcomeMetrics" | "outcomeMetric">
): OutcomeMetric[] {
  const fromArray = study.outcomeMetrics?.filter(
    (m) => m && (m.label || m.value)
  );
  if (fromArray?.length) {
    return fromArray;
  }
  const legacy = study.outcomeMetric;
  if (legacy && (legacy.label || legacy.value)) {
    return [legacy];
  }
  return [];
}

export function getEvidenceMediaForSection(
  media: EvidenceMedia[] | undefined,
  anchor: NarrativeAnchor
): EvidenceMedia[] {
  if (!media?.length) {
    return [];
  }
  return media.filter(
    (item) =>
      item.url &&
      (item.sectionAnchor ?? "evidence") === anchor
  );
}

export function getDeliverableTeaserHref(teaser?: {
  href?: string;
  externalUrl?: string;
  fileUrl?: string;
}): string | undefined {
  if (!teaser) {
    return undefined;
  }
  return teaser.href ?? teaser.externalUrl ?? teaser.fileUrl;
}

export function getContentBlocksForPlacement(
  blocks: ContentBlock[] | undefined,
  placement: ContentBlockPlacement
): ContentBlock[] {
  if (!blocks?.length) {
    return [];
  }
  return blocks.filter((block) => {
    const where = block.placement ?? "end";
    if (where !== placement) {
      return false;
    }
    if (block.blockType === "pullQuote") {
      return Boolean(block.quote?.trim());
    }
    if (block.blockType === "callout") {
      return Boolean(block.text?.trim());
    }
    return false;
  });
}

export function getBusinessNarrative(study: CaseStudy): string {
  return (
    study.businessContext?.businessDescription?.trim() || study.observation
  );
}

export function getInvestigationNarrative(study: CaseStudy): string {
  const parts: string[] = [];
  if (study.investigation?.approach?.trim()) {
    parts.push(study.investigation.approach.trim());
  }
  if (study.evidence?.trim()) {
    parts.push(study.evidence.trim());
  }
  return parts.join("\n\n");
}
