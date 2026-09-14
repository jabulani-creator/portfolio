import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
} from "@/lib/content/queries/caseStudies";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import CaseStudyHeader from "@/components/case-studies/CaseStudyHeader";
import CaseStudyStickyNav, {
  StickySection,
} from "@/components/case-studies/CaseStudyStickyNav";
import NarrativeSection from "@/components/case-studies/NarrativeSection";
import CaseStudyCta from "@/components/case-studies/CaseStudyCta";
import CustomerJourneyStrip from "@/components/case-studies/CustomerJourneyStrip";
import ClientQuoteSection from "@/components/case-studies/ClientQuoteSection";
import CaseStudyProjectNav from "@/components/case-studies/CaseStudyProjectNav";
import ContextStatsSection from "@/components/case-studies/ContextStatsSection";
import EvidenceMediaSection from "@/components/case-studies/EvidenceMediaSection";
import ScopeNoteSection from "@/components/case-studies/ScopeNoteSection";
import DeliverableTeaserSection from "@/components/case-studies/DeliverableTeaserSection";
import BeforeAfterSection from "@/components/case-studies/BeforeAfterSection";
import ClosingBridgeSection from "@/components/case-studies/ClosingBridgeSection";
import CaseStudyContentBlocks from "@/components/case-studies/CaseStudyContentBlocks";
import ProblemsSection from "@/components/case-studies/ProblemsSection";
import ProblemSolutionSection from "@/components/case-studies/ProblemSolutionSection";
import StrategyThesisSection from "@/components/case-studies/StrategyThesisSection";
import TechnologyRoleSection from "@/components/case-studies/TechnologyRoleSection";
import InvestigationDetailSection from "@/components/case-studies/InvestigationDetailSection";
import WorkflowsSection from "@/components/case-studies/WorkflowsSection";
import EvidenceImpactSection from "@/components/case-studies/EvidenceImpactSection";
import { buildPageMetadata } from "@/lib/seo";
import type CaseStudy from "../../../../../types/CaseStudy";
import {
  getBusinessNarrative,
  getContentBlocksForPlacement,
  getEvidenceMediaForSection,
  getInvestigationNarrative,
  getOutcomeMetrics,
  getPrimaryMaps,
  getProblemSolutionMaps,
  getProblemsForPublic,
  getTestimonialDisplay,
  NarrativeAnchor,
} from "../../../../../types/CaseStudy";

type Props = {
  params: Promise<{ slug: string }>;
};

function buildStickySections(caseStudy: CaseStudy): StickySection[] {
  const sections: StickySection[] = [];
  let step = 1;

  const add = (id: string, label: string) => {
    sections.push({ id, step, label });
    step += 1;
  };

  if (getBusinessNarrative(caseStudy)?.trim()) {
    add("cs-business", "Business");
  }
  if (getInvestigationNarrative(caseStudy)?.trim()) {
    add("cs-investigation", "Investigation");
  }
  if (getProblemsForPublic(caseStudy).length) {
    add("cs-problems", "Problems");
  }
  if (getPrimaryMaps(caseStudy).length || getProblemSolutionMaps(caseStudy).length) {
    add("cs-solutions", "Solutions");
  }
  const hasImpact =
    getOutcomeMetrics(caseStudy).length > 0 ||
    caseStudy.beforeAfter?.items?.length ||
    getTestimonialDisplay(caseStudy);
  if (hasImpact) {
    add("cs-impact", "Impact");
  }

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
  const outcomeMetrics = getOutcomeMetrics(caseStudy);
  const stickySections = buildStickySections(caseStudy);
  const testimonial = getTestimonialDisplay(caseStudy);
  const maps = getProblemSolutionMaps(caseStudy);
  const strategicThesis =
    caseStudy.strategicThesis?.trim() ||
    caseStudy.decision?.split("\n\n")[0]?.trim();
  const strategyBody =
    caseStudy.strategicThesis?.trim() && caseStudy.decision?.trim()
      ? caseStudy.decision
      : caseStudy.strategicThesis?.trim()
        ? undefined
        : caseStudy.decision;

  const blocksScope = getContentBlocksForPlacement(
    caseStudy.contentBlocks,
    "scope"
  );
  const blocksQuote = getContentBlocksForPlacement(
    caseStudy.contentBlocks,
    "quote"
  );
  const blocksEnd = getContentBlocksForPlacement(
    caseStudy.contentBlocks,
    "end"
  );

  return (
    <>
      <CaseStudyHeader caseStudy={caseStudy} />
      <CaseStudyStickyNav sections={stickySections} />

      <NarrativeSection
        label="The business"
        body={getBusinessNarrative(caseStudy)}
        step={1}
        sectionId="cs-business"
      />
      {caseStudy.contextStats && (
        <ContextStatsSection stats={caseStudy.contextStats} />
      )}
      {caseStudy.customerJourney && (
        <CustomerJourneyStrip journey={caseStudy.customerJourney} />
      )}
      <SectionEvidence caseStudy={caseStudy} anchor="observation" />

      <NarrativeSection
        label="Investigation"
        body={getInvestigationNarrative(caseStudy)}
        step={2}
        sectionId="cs-investigation"
        variant="light"
      />
      <InvestigationDetailSection investigation={caseStudy.investigation} />
      <SectionEvidence caseStudy={caseStudy} anchor="evidence" />

      <ProblemsSection caseStudy={caseStudy} />

      {maps.length > 0 && <ProblemSolutionSection maps={maps} />}

      {strategicThesis && (
        <StrategyThesisSection
          thesis={strategicThesis}
          body={strategyBody}
          step={3}
        />
      )}

      {caseStudy.implementation?.trim() && (
        <NarrativeSection
          label="Design / build"
          body={caseStudy.implementation}
          step={4}
          sectionId="cs-implementation"
        />
      )}
      <SectionEvidence caseStudy={caseStudy} anchor="implementation" />
      <WorkflowsSection workflows={caseStudy.workflows} />

      {caseStudy.outcome?.trim() && (
        <NarrativeSection
          label="Outcome"
          body={caseStudy.outcome}
          step={5}
          sectionId="cs-outcome"
          variant="light"
        />
      )}
      <SectionEvidence caseStudy={caseStudy} anchor="outcome" />

      {caseStudy.beforeAfter && (
        <BeforeAfterSection beforeAfter={caseStudy.beforeAfter} />
      )}

      <EvidenceImpactSection
        caseStudy={caseStudy}
        metrics={outcomeMetrics}
      />

      <CaseStudyContentBlocks blocks={blocksScope} />
      {caseStudy.scopeNote && <ScopeNoteSection note={caseStudy.scopeNote} />}

      {testimonial && (
        <ClientQuoteSection
          quote={testimonial.quote}
          attribution={testimonial.attribution}
        />
      )}
      <CaseStudyContentBlocks blocks={blocksQuote} />

      {caseStudy.deliverableTeaser && (
        <DeliverableTeaserSection teaser={caseStudy.deliverableTeaser} />
      )}

      <TechnologyRoleSection
        techStack={caseStudy.techStack}
        role={caseStudy.role}
      />

      <CaseStudyContentBlocks blocks={blocksEnd} />
      {caseStudy.closingBridge && (
        <ClosingBridgeSection text={caseStudy.closingBridge} />
      )}
      <CaseStudyProjectNav
        previous={adjacent.previous}
        next={adjacent.next}
      />
      <CaseStudyCta primaryCta={shell.primaryCta} />
    </>
  );
}
