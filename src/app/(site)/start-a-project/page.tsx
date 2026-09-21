import type { Metadata } from "next";
import { getStartHereContent } from "@/lib/content/queries/startHere";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import { buildPageMetadata } from "@/lib/seo";
import StartProjectHeroSection from "@/components/start-here/StartProjectHeroSection";
import StartProjectPathsSection from "@/components/start-here/StartProjectPathsSection";
import StartProjectProcessSection from "@/components/start-here/StartProjectProcessSection";
import StartProjectContactSection from "@/components/start-here/StartProjectContactSection";

export const metadata: Metadata = buildPageMetadata({
  title: "Start a Project",
  description:
    "Start a project or explore the diagnostic — websites, platforms, and digital systems in Zambia.",
});

export default async function StartAProjectPage() {
  const { siteSettings } = await getStartHereContent();
  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <>
      <StartProjectHeroSection />
      <StartProjectPathsSection />
      <StartProjectProcessSection />
      <StartProjectContactSection contact={shell.contact} />
    </>
  );
}
