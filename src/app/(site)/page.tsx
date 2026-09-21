import type { Metadata } from "next";
import { getHomePageContent } from "@/lib/content/queries/home";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import { buildPageMetadata } from "@/lib/seo";
import EditorialHeroSection from "@/components/home/EditorialHeroSection";
import HomeWhatIBuildSection from "@/components/home/HomeWhatIBuildSection";
import HomePhilosophySection from "@/components/home/HomePhilosophySection";
import HomeMethodSection from "@/components/home/HomeMethodSection";
import HomeProblemStoriesSection from "@/components/home/HomeProblemStoriesSection";
import InvestigatedBusinessesSection from "@/components/home/InvestigatedBusinessesSection";
import MirrorPainSection from "@/components/home/MirrorPainSection";
import HomeAboutTeaser from "@/components/home/HomeAboutTeaser";
import HomeFinalCtaSection from "@/components/home/HomeFinalCtaSection";

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  return buildPageMetadata({
    title: "Home",
    description:
      shell.categoryHeadline ??
      "Websites, digital systems, and automation for organisations in Zambia.",
  });
}

export default async function Home() {
  const { siteSettings, caseStudies } = await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  const primaryCta = shell.primaryCta ?? {
    label: "Start a Project",
    href: "/start-a-project",
  };

  return (
    <>
      <EditorialHeroSection
        primaryCta={primaryCta}
        localTrustLine={shell.localTrustLine}
      />
      <HomeWhatIBuildSection />
      <HomePhilosophySection primaryCta={primaryCta} />
      <HomeMethodSection />
      <InvestigatedBusinessesSection caseStudies={caseStudies} />
      <HomeProblemStoriesSection caseStudies={caseStudies} />
      <MirrorPainSection />
      <HomeAboutTeaser />
      <HomeFinalCtaSection primaryCta={primaryCta} contact={shell.contact} />
    </>
  );
}
