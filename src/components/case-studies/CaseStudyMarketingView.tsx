import type CaseStudy from "../../../types/CaseStudy";
import type { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";
import {
  getBusinessNarrative,
  getContentBlocksForPlacement,
  getEvidenceMediaForSection,
  getInvestigationNarrative,
  getProblemSolutionMaps,
  getTestimonialDisplay,
  NarrativeAnchor,
} from "../../../types/CaseStudy";
import { migrateCaseStudyV1ToV2 } from "@/lib/content/migrateCaseStudyV1ToV2";
import {
  toCaseStudyPageModel,
  hasDeepDiveContent,
  getPublicStoryThreads,
} from "@/lib/content/toCaseStudyPageModel";
import type { CaseStudyPageModel } from "../../../types/CaseStudyV2";
import CaseStudyMarketingHero from "@/components/case-studies/marketing/CaseStudyMarketingHero";
import CaseStudyExperiencesTable from "@/components/case-studies/marketing/CaseStudyExperiencesTable";
import CaseStudyProblemBand from "@/components/case-studies/marketing/CaseStudyProblemBand";
import CaseStudyProblemStoriesBand from "@/components/case-studies/marketing/CaseStudyProblemStoriesBand";
import CaseStudyWhatBuiltSection from "@/components/case-studies/marketing/CaseStudyWhatBuiltSection";
import CaseStudyBeforeAfterBand from "@/components/case-studies/marketing/CaseStudyBeforeAfterBand";
import CaseStudyWhatChangedSection from "@/components/case-studies/marketing/CaseStudyWhatChangedSection";
import CaseStudyApproachSection from "@/components/case-studies/marketing/CaseStudyApproachSection";
import CaseStudyFeaturedQuote from "@/components/case-studies/marketing/CaseStudyFeaturedQuote";
import FullDiagnosticArchive from "@/components/case-studies/story/FullDiagnosticArchive";
import SimilarProblemCta from "@/components/case-studies/story/SimilarProblemCta";
import EvidenceMediaSection from "@/components/case-studies/EvidenceMediaSection";
import NarrativeSection from "@/components/case-studies/NarrativeSection";
import InvestigationDetailSection from "@/components/case-studies/InvestigationDetailSection";
import ProblemSolutionSection from "@/components/case-studies/ProblemSolutionSection";
import StrategyThesisSection from "@/components/case-studies/StrategyThesisSection";
import WorkflowsSection from "@/components/case-studies/WorkflowsSection";
import BeforeAfterSection from "@/components/case-studies/BeforeAfterSection";
import ClientQuoteSection from "@/components/case-studies/ClientQuoteSection";
import ScopeNoteSection from "@/components/case-studies/ScopeNoteSection";
import TechnologyRoleSection from "@/components/case-studies/TechnologyRoleSection";
import ClosingBridgeSection from "@/components/case-studies/ClosingBridgeSection";
import CaseStudyContentBlocks from "@/components/case-studies/CaseStudyContentBlocks";
import CaseStudyExecutiveSummarySection from "@/components/case-studies/story/CaseStudyExecutiveSummarySection";
import BusinessEnginesSection from "@/components/case-studies/story/BusinessEnginesSection";
import AudiencePersonasSection from "@/components/case-studies/story/AudiencePersonasSection";
import JourneyBreakpointScreen from "@/components/case-studies/story/JourneyBreakpointScreen";
import RankedLeaksSection from "@/components/case-studies/story/RankedLeaksSection";
import FixLayersSection from "@/components/case-studies/story/FixLayersSection";
import RecommendationSection from "@/components/case-studies/story/RecommendationSection";
import SystemBlueprintSection from "@/components/case-studies/story/SystemBlueprintSection";
import OutcomeShiftTable from "@/components/case-studies/story/OutcomeShiftTable";
import { buildStoryLayerFromCaseStudy, deepDiveToStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  slug: string;
  caseStudy: CaseStudy;
  primaryCta: PrimaryCtaType;
  nextCaseStudy: CaseStudy | null;
};

function SectionEvidence({
  caseStudy,
  anchor,
}: {
  caseStudy: CaseStudy;
  anchor: NarrativeAnchor;
}) {
  const items = getEvidenceMediaForSection(caseStudy.evidenceMedia, anchor);
  return items.length ? <EvidenceMediaSection items={items} /> : null;
}

export default function CaseStudyMarketingView({
  slug,
  caseStudy,
  primaryCta,
  nextCaseStudy,
}: Props) {
  const marketing: CaseStudyPageModel = toCaseStudyPageModel(caseStudy);
  const v2 = migrateCaseStudyV1ToV2(caseStudy);
  const story = hasDeepDiveContent(caseStudy)
    ? deepDiveToStoryLayer(v2.deepDive!)
    : buildStoryLayerFromCaseStudy(slug, caseStudy);
  const testimonial = getTestimonialDisplay(caseStudy);
  const threadMaps = getPublicStoryThreads(caseStudy).map((t) => ({
    title: t.title,
    problemSummary: t.description,
    decision: t.solution?.decision,
    solution: t.solution?.implementation,
    implementation: t.solution?.implementation,
    outcome: t.solution?.outcome,
    features: t.solution?.features,
  }));
  const maps =
    threadMaps.length > 0 ? threadMaps : getProblemSolutionMaps(caseStudy);
  const strategicThesis =
    caseStudy.strategicThesis?.trim() ||
    caseStudy.decision?.split("\n\n")[0]?.trim();
  const strategyBody =
    caseStudy.strategicThesis?.trim() && caseStudy.decision?.trim()
      ? caseStudy.decision
      : undefined;

  const blocksScope = getContentBlocksForPlacement(caseStudy.contentBlocks, "scope");
  const blocksQuote = getContentBlocksForPlacement(caseStudy.contentBlocks, "quote");
  const blocksEnd = getContentBlocksForPlacement(caseStudy.contentBlocks, "end");

  return (
    <>
      <CaseStudyMarketingHero caseStudy={caseStudy} marketing={marketing} />
      {marketing.experiences.length > 0 && (
        <CaseStudyExperiencesTable marketing={marketing} />
      )}
      {(marketing.problemTitle ||
        marketing.problemChannels.length > 0 ||
        marketing.opportunity) && <CaseStudyProblemBand marketing={marketing} />}
      <CaseStudyProblemStoriesBand caseStudy={caseStudy} />
      {marketing.whatBuilt.length > 0 && (
        <CaseStudyWhatBuiltSection caseStudy={caseStudy} marketing={marketing} />
      )}
      {(marketing.beforeColumn.length > 0 || marketing.afterColumn.length > 0) && (
        <CaseStudyBeforeAfterBand marketing={marketing} />
      )}
      {marketing.whatChanged.length > 0 && (
        <CaseStudyWhatChangedSection marketing={marketing} />
      )}
      {marketing.approachSteps.length > 0 && (
        <CaseStudyApproachSection marketing={marketing} />
      )}
      {testimonial && (
        <CaseStudyFeaturedQuote
          quote={testimonial.quote}
          attribution={testimonial.attribution}
        />
      )}

      <FullDiagnosticArchive>
        <p className="mb-8 max-w-2xl text-sm text-cd-shade">
          Business context → customer journeys → evidence → diagnosis →
          recommendations → architecture → implementation
        </p>
        {story.executiveSummary && (
          <CaseStudyExecutiveSummarySection summary={story.executiveSummary} />
        )}
        <BusinessEnginesSection
          story={story}
          enginesTitle={`${story.revenueEngines?.length ?? 3} connected audiences`}
        />
        <AudiencePersonasSection story={story} />
        <JourneyBreakpointScreen story={story} />
        <RankedLeaksSection
          caseStudy={caseStudy}
          heading="Major points of friction"
        />
        <FixLayersSection story={story} />
        <RecommendationSection story={story} />
        <SystemBlueprintSection story={story} />
        <SectionEvidence caseStudy={caseStudy} anchor="implementation" />
        <OutcomeShiftTable story={story} />
        {getBusinessNarrative(caseStudy) && (
          <NarrativeSection
            label="Business context"
            body={getBusinessNarrative(caseStudy)}
            step={1}
          />
        )}
        {getInvestigationNarrative(caseStudy) && (
          <NarrativeSection
            label="Investigation"
            body={getInvestigationNarrative(caseStudy)}
            step={2}
            variant="light"
          />
        )}
        <InvestigationDetailSection investigation={caseStudy.investigation} />
        <SectionEvidence caseStudy={caseStudy} anchor="evidence" />
        {maps.length > 0 && <ProblemSolutionSection maps={maps} />}
        {strategicThesis && (
          <StrategyThesisSection thesis={strategicThesis} body={strategyBody} step={3} />
        )}
        {caseStudy.implementation?.trim() && (
          <NarrativeSection label="Implementation" body={caseStudy.implementation} step={4} />
        )}
        <WorkflowsSection workflows={caseStudy.workflows} />
        {caseStudy.outcome?.trim() && (
          <NarrativeSection
            label="Outcome narrative"
            body={caseStudy.outcome}
            step={5}
            variant="light"
          />
        )}
        {caseStudy.beforeAfter && <BeforeAfterSection beforeAfter={caseStudy.beforeAfter} />}
        <CaseStudyContentBlocks blocks={blocksScope} />
        {caseStudy.scopeNote && <ScopeNoteSection note={caseStudy.scopeNote} />}
        {testimonial && (
          <ClientQuoteSection
            quote={testimonial.quote}
            attribution={testimonial.attribution}
          />
        )}
        <CaseStudyContentBlocks blocks={blocksQuote} />
        <TechnologyRoleSection techStack={caseStudy.techStack} role={caseStudy.role} />
        <CaseStudyContentBlocks blocks={blocksEnd} />
        {caseStudy.closingBridge && <ClosingBridgeSection text={caseStudy.closingBridge} />}
      </FullDiagnosticArchive>

      <SimilarProblemCta primaryCta={primaryCta} next={nextCaseStudy} />
    </>
  );
}
