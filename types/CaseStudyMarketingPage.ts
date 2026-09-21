export type CaseStudyMarketingFeature = {
  label: string;
  items: string[];
};

export type CaseStudyMarketingBuildSection = {
  title: string;
  body: string;
  imageUrl?: string;
  imageAlt?: string;
};

export type CaseStudyMarketingOutcomeShift = {
  before: string;
  after: string;
};

export type CaseStudyMarketingApproachStep = {
  name: string;
  detail: string;
};

/** Public case study page (visual sales layer) — all lists are unbounded in CMS. */
export type CaseStudyMarketingPage = {
  heroSubtitle?: string;
  roleLine?: string;
  heroContext?: string;
  deliverables?: string[];
  problemTitle?: string;
  problemSignals?: string[];
  opportunity?: string;
  featuresSectionTitle?: string;
  features?: CaseStudyMarketingFeature[];
  buildSections?: CaseStudyMarketingBuildSection[];
  beforeItems?: string[];
  afterItems?: string[];
  outcomeShifts?: CaseStudyMarketingOutcomeShift[];
  approachIntro?: string;
  approachSteps?: CaseStudyMarketingApproachStep[];
};

export type CaseStudyMarketing = {
  heroSubtitle: string;
  roleLine: string;
  heroContext: string;
  builtPills: string[];
  problemTitle: string;
  problemChannels: string[];
  opportunity: string;
  experiencesTitle: string;
  experiences: CaseStudyMarketingFeature[];
  whatBuilt?: CaseStudyMarketingBuildSection[];
  beforeColumn: string[];
  afterColumn: string[];
  whatChanged: CaseStudyMarketingOutcomeShift[];
  approachTitle: string;
  approachSteps: CaseStudyMarketingApproachStep[];
};
