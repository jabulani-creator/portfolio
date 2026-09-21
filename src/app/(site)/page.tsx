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

const HOME_TITLE =
  "Websites, Digital Systems & Automation in Lusaka — Jabulani";

const STALE_HOME_TITLES = new Set([
  "Home",
  "Jabulani — Websites, Digital Systems & Automation",
  "Digital Experience Consultant",
  "Get found. Get understood. Serve customers better",
]);

export async function generateMetadata(): Promise<Metadata> {
  const { siteSettings } = await getHomePageContent();
  const shell = siteSettings ?? getDefaultSiteShell();
  const cmsTitle = shell.seoDefaults?.title?.trim();
  const title =
    cmsTitle && !STALE_HOME_TITLES.has(cmsTitle) ? cmsTitle : HOME_TITLE;

  return buildPageMetadata({
    title,
    description:
      shell.seoDefaults?.description?.trim() ||
      shell.categoryHeadline ||
      "Websites, digital systems, and automation for businesses and organisations in Lusaka, Zambia.",
    path: "/",
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
