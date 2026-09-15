import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/content/queries/caseStudies";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import { buildStoryLayerFromCaseStudy } from "@/lib/content/caseStudyStoryContent";
import CaseStudyStickyNav, {
  StickySection,
} from "@/components/case-studies/CaseStudyStickyNav";
import CaseStudyStoryHero from "@/components/case-studies/story/CaseStudyStoryHero";
import BusinessEnginesSection from "@/components/case-studies/story/BusinessEnginesSection";
import AudiencePersonasSection from "@/components/case-studies/story/AudiencePersonasSection";
import JourneyBreakpointScreen from "@/components/case-studies/story/JourneyBreakpointScreen";
import RankedLeaksSection from "@/components/case-studies/story/RankedLeaksSection";
import FixLayersSection from "@/components/case-studies/story/FixLayersSection";
import RecommendationSection from "@/components/case-studies/story/RecommendationSection";
import SystemBlueprintSection from "@/components/case-studies/story/SystemBlueprintSection";
import OutcomeShiftTable from "@/components/case-studies/story/OutcomeShiftTable";
import CaseStudyRoleStrip from "@/components/case-studies/story/CaseStudyRoleStrip";
import FullDiagnosticArchive from "@/components/case-studies/story/FullDiagnosticArchive";
import SimilarProblemCta from "@/components/case-studies/story/SimilarProblemCta";
import EvidenceMediaSection from "@/components/case-studies/EvidenceMediaSection";
import EvidenceImpactSection from "@/components/case-studies/EvidenceImpactSection";
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
import { buildPageMetadata } from "@/lib/seo";
import type CaseStudy from "../../../../../types/CaseStudy";
import {
  getBusinessNarrative,
  getContentBlocksForPlacement,
  getEvidenceMediaForSection,
  getInvestigationNarrative,
  getOutcomeMetrics,
  getProblemSolutionMaps,
  getTestimonialDisplay,
  NarrativeAnchor,
} from "../../../../../types/CaseStudy";
import { getLeaksForDisplay } from "@/lib/caseStudyVisualHelpers";

type Props = {
  params: Promise<{ slug: string }>;
};

function buildStoryStickyNav(
  story: ReturnType<typeof buildStoryLayerFromCaseStudy>,
  caseStudy: CaseStudy
): StickySection[] {
  const sections: StickySection[] = [];
  let step = 1;
  const add = (id: string, label: string) => {
    sections.push({ id, step, label });
    step += 1;
  };

  if (story.revenueEngines?.length) add("cs-business", "Business");
  if (story.audiencePersonas?.length) add("cs-audiences", "Customers");
  if (story.journeySteps?.length) add("cs-journey-breaks", "Journey");
  if (getLeaksForDisplay(caseStudy).length) add("cs-leaks", "Leaks");
  if (story.fixLayers?.length) add("cs-fix-layers", "Fix");
  if (story.recommendationHeadline) add("cs-recommendation", "Rec");
  if (story.blueprintMonospace) add("cs-blueprint", "Blueprint");
  if (story.outcomeRows?.length) add("cs-outcome", "Outcome");
  add("cs-full-diagnostic", "Evidence");

  return sections;
}

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return buildPageMetadata({
      title: "Case Study Not Found",
      description: "This case study is not available.",
    });
  }

  return buildPageMetadata({
    title: caseStudy.seoTitle ?? caseStudy.title,
    description: caseStudy.seoDescription ?? caseStudy.excerpt,
    image: caseStudy.heroImage,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const [caseStudy, siteSettings, adjacent] = await Promise.all([
    getCaseStudyBySlug(slug),
    getSiteSettings(),
    getAdjacentCaseStudies(slug),
  ]);

  if (!caseStudy) {
    notFound();
  }

  const shell = siteSettings ?? getDefaultSiteShell();
  const story = buildStoryLayerFromCaseStudy(slug, caseStudy);
  const stickySections = buildStoryStickyNav(story, caseStudy);
  const outcomeMetrics = getOutcomeMetrics(caseStudy);
  const maps = getProblemSolutionMaps(caseStudy);
  const testimonial = getTestimonialDisplay(caseStudy);
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

  const implementationMedia = getEvidenceMediaForSection(
    caseStudy.evidenceMedia,
    "implementation"
  );

  return (
    <>
      <CaseStudyStoryHero caseStudy={caseStudy} story={story} />
      <CaseStudyStickyNav sections={stickySections} />

      <BusinessEnginesSection story={story} />
      <AudiencePersonasSection story={story} />
      <JourneyBreakpointScreen story={story} />
      <RankedLeaksSection caseStudy={caseStudy} />
      <FixLayersSection story={story} />
      <RecommendationSection story={story} />
      <SystemBlueprintSection story={story} />

      {implementationMedia.length > 0 && (
        <SectionEvidence caseStudy={caseStudy} anchor="implementation" />
      )}

      <OutcomeShiftTable story={story} />

      {outcomeMetrics.length > 0 && (
        <EvidenceImpactSection caseStudy={caseStudy} metrics={outcomeMetrics} />
      )}

      <CaseStudyRoleStrip story={story} caseStudy={caseStudy} />

      <FullDiagnosticArchive>
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

      <SimilarProblemCta primaryCta={shell.primaryCta} next={adjacent.next} />
    </>
  );
}
