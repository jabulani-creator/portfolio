import type {
  CaseStudyCategory,
  ContentVisibility,
  DisplayImportance,
  EngagementType,
  ProblemCategory,
} from "./CaseStudy";

export type CaseStudyLayout = "marketing" | "legacy";

export type EditorialMeta = {
  visibility?: ContentVisibility;
  importance?: DisplayImportance;
};

export type CaseStudyChallenge = {
  headline?: string;
  body?: string;
  signals?: string[];
};

export type CaseStudyPlatformColumn = {
  label?: string;
  items?: string[];
};

export type CaseStudyWhatBuiltSection = {
  title?: string;
  body?: string;
  caption?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type CaseStudyApproachStep = {
  name?: string;
  detail?: string;
};

export type CaseStudyApproach = {
  intro?: string;
  steps?: CaseStudyApproachStep[];
};

export type CaseStudyStoryThreadSolution = {
  decision?: string;
  implementation?: string;
  features?: string[];
  outcome?: string;
};

/** Where a thread appears on the public site. `private`/`internal` visibility always wins — hidden everywhere. */
export type StoryThreadPlacement =
  | "archiveOnly"
  | "caseStudyMain"
  | "caseStudyAndHome";

export type CaseStudyStoryThread = {
  title?: string;
  /** Globally unique id for anchors (e.g. emmasdale-quarterly-reports). */
  threadKey?: string;
  description?: string;
  /** Flowing story for main-page cards; structured fields stay for archive. */
  narrative?: string;
  /** What was hard while building (optional). */
  buildChallenge?: string;
  placement?: StoryThreadPlacement;
  cardEyebrow?: string;
  cardImageUrl?: string;
  cardImageAlt?: string;
  category?: ProblemCategory;
  priority?: number;
  editorialMeta?: EditorialMeta;
  solution?: CaseStudyStoryThreadSolution;
};

export type CaseStudyBeforeAfterRow = {
  label?: string;
  before?: string;
  after?: string;
};

export type CaseStudyBeforeAfterBlock = {
  headline?: string;
  items?: CaseStudyBeforeAfterRow[];
};

export type CaseStudyOutcomeType = "metric" | "shift" | "highlight" | "quote";

export type CaseStudyOutcome = {
  type?: CaseStudyOutcomeType;
  label?: string;
  value?: string;
  before?: string;
  after?: string;
  quote?: string;
  attribution?: string;
  isTarget?: boolean;
  visibility?: ContentVisibility;
};

export type CaseStudyProofMediaKind =
  | "screenshot"
  | "diagram"
  | "photo"
  | "redacted_report";

export type CaseStudyProofMedia = {
  url?: string;
  alt?: string;
  caption?: string;
  kind?: CaseStudyProofMediaKind;
  sectionAnchor?: string;
};

export type CaseStudyDeepDiveExecutiveSummary = {
  title?: string;
  situation?: string;
  problem?: string;
  investigated?: string[];
  built?: { heading?: string; bullets?: string[] }[];
  result?: string;
  roleLine?: string;
};

export type CaseStudyDeepDivePersona = {
  label?: string;
  question?: string;
  needs?: string[];
};

export type CaseStudyDeepDiveJourneyStep = {
  label?: string;
  status?: "ok" | "warn" | "critical";
  note?: string;
};

export type CaseStudyDeepDiveEngine = {
  label?: string;
  detail?: string;
};

export type CaseStudyDeepDiveInvestigation = {
  approach?: string;
  sources?: string[];
  findings?: string[];
};

/** Optional collapsed “Behind the build” content — all fields optional. */
export type CaseStudyDeepDive = {
  executiveSummary?: CaseStudyDeepDiveExecutiveSummary;
  audiencePersonas?: CaseStudyDeepDivePersona[];
  journeySteps?: CaseStudyDeepDiveJourneyStep[];
  revenueEngines?: CaseStudyDeepDiveEngine[];
  fixLayers?: string[];
  recommendationHeadline?: string;
  blueprintMonospace?: string;
  outcomeRows?: { before?: string; after?: string }[];
  investigation?: CaseStudyDeepDiveInvestigation;
  narrativeSpine?: {
    observation?: string;
    evidence?: string;
    decision?: string;
    implementation?: string;
    outcome?: string;
  };
};

/** v2 authoring fields (Sanity + normalized shape). */
export type CaseStudyV2Fields = {
  layout?: CaseStudyLayout;
  heroSubtitle?: string;
  deliverables?: string[];
  challenge?: CaseStudyChallenge;
  platformColumns?: CaseStudyPlatformColumn[];
  whatBuilt?: CaseStudyWhatBuiltSection[];
  storyBeforeAfter?: CaseStudyBeforeAfterBlock;
  approach?: CaseStudyApproach;
  storyThreads?: CaseStudyStoryThread[];
  proofMedia?: CaseStudyProofMedia[];
  outcomes?: CaseStudyOutcome[];
  deepDive?: CaseStudyDeepDive;
  featuresSectionTitle?: string;
};

export type CaseStudyPageModel = {
  heroSubtitle: string;
  roleLine: string;
  heroContext: string;
  builtPills: string[];
  problemTitle: string;
  problemChannels: string[];
  opportunity: string;
  experiencesTitle: string;
  experiences: { label: string; items: string[] }[];
  whatBuilt: CaseStudyWhatBuiltSection[];
  beforeColumn: string[];
  afterColumn: string[];
  whatChanged: { before: string; after: string }[];
  approachTitle: string;
  approachSteps: { name: string; detail: string }[];
};

export const DEFAULT_EDITORIAL_META: EditorialMeta = {
  visibility: "public",
  importance: "primary",
};

export const STATIC_APPROACH_STEPS: { name: string; detail: string }[] = [
  { name: "Investigate", detail: "Context · channels · workflows" },
  { name: "Diagnose", detail: "Find friction and priorities" },
  { name: "Architect", detail: "Decide what to build" },
  { name: "Build", detail: "Ship the solution" },
  { name: "Improve", detail: "Measure and iterate" },
];

export type CaseStudyV2Meta = {
  category?: CaseStudyCategory;
  engagementType?: EngagementType;
};
