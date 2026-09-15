import type { Metadata } from "next";
import { getHomePageContent } from "@/lib/content/queries/home";
import { getDefaultOffer, getDefaultSiteShell } from "@/lib/content/defaults";
import { buildPageMetadata } from "@/lib/seo";
import EditorialHeroSection from "@/components/home/EditorialHeroSection";
import CustomerJourneyIdeaSection from "@/components/home/CustomerJourneyIdeaSection";
import InvestigatedBusinessesSection from "@/components/home/InvestigatedBusinessesSection";
import DiagnosticLeaksPreviewSection from "@/components/home/DiagnosticLeaksPreviewSection";
import VisualMethodPipelineSection from "@/components/home/VisualMethodPipelineSection";
import FixCanLookLikeSection from "@/components/home/FixCanLookLikeSection";
import MirrorPainSection from "@/components/home/MirrorPainSection";
import HomeAboutTeaser from "@/components/home/HomeAboutTeaser";
import FinalDiagnosticCta from "@/components/home/FinalDiagnosticCta";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  return buildPageMetadata({
    title: "Home",
    description:
      shell.categoryHeadline ??
      "Find where your customers get stuck — then build what fixes it.",
  });
}

export default async function Home() {
  const { siteSettings, offer, caseStudies } = await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  const offerData = offer ?? getDefaultOffer();

  const primaryCta = shell.primaryCta ?? {
    label: "Book a Digital Experience Diagnostic",
    href: "/start-here",
  };

  return (
    <>
      <EditorialHeroSection primaryCta={primaryCta} />
      <CustomerJourneyIdeaSection />
      <InvestigatedBusinessesSection caseStudies={caseStudies} />
      <DiagnosticLeaksPreviewSection />
      <VisualMethodPipelineSection />
      <FixCanLookLikeSection />
      <MirrorPainSection />
      <HomeAboutTeaser />
      <FinalDiagnosticCta
        primaryCta={primaryCta}
        priceLabel={offerData.priceLabel}
        turnaround={offerData.turnaround}
      />
    </>
  );
}
