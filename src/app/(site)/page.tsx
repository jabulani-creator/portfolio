import type { Metadata } from "next";
import { getHomePageContent } from "@/lib/content/queries/home";
import {
  getDefaultOffer,
  getDefaultSiteShell,
  getProductName,
} from "@/lib/content/defaults";
import { buildPageMetadata } from "@/lib/seo";
import DiagnosticHeroSection from "@/components/home/DiagnosticHeroSection";
import MethodologyGridSection from "@/components/home/MethodologyGridSection";
import FeaturedCaseSection from "@/components/home/FeaturedCaseSection";
import DiagnosticScopeSection from "@/components/home/DiagnosticScopeSection";
import FinalDiagnosticCta from "@/components/home/FinalDiagnosticCta";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  return buildPageMetadata({
    title: "Home",
    description:
      shell.categoryHeadline ??
      "Investigate why your digital presence is not working, then build the fix.",
  });
}

export default async function Home() {
  const { siteSettings, offer, caseStudies, featuredCaseStudy } =
    await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  const offerData = offer ?? getDefaultOffer();
  const productName = getProductName(shell.homepageVariant);
  const featured = featuredCaseStudy ?? caseStudies[0];

  const primaryCta = shell.primaryCta ?? {
    label: "Book a Digital Experience Diagnostic",
    href: "/start-here",
  };

  const deliverables =
    offerData.deliverables?.length > 0
      ? offerData.deliverables
      : getDefaultOffer().deliverables;

  return (
    <>
      <DiagnosticHeroSection
        productName={productName}
        primaryCta={primaryCta}
        featuredSlug={featured?.slug ?? "emmasdale-sda-church"}
      />
      <MethodologyGridSection />
      {featured && <FeaturedCaseSection caseStudy={featured} />}
      <DiagnosticScopeSection
        deliverables={deliverables}
        primaryCta={primaryCta}
        priceLabel={offerData.priceLabel}
      />
      <FinalDiagnosticCta
        primaryCta={primaryCta}
        priceLabel={offerData.priceLabel}
        turnaround={offerData.turnaround}
      />
    </>
  );
}
