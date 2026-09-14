import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ProseContent from "@/components/ui/ProseContent";
import { getAboutContent } from "@/lib/content/queries/about";
import { getSiteSettings } from "@/lib/content/queries/site";
import {
  getDefaultFounderProfile,
  getDefaultSiteShell,
} from "@/lib/content/defaults";
import AdvantageBlock from "@/components/about/AdvantageBlock";
import AboutCta from "@/components/about/AboutCta";
import FounderIntro from "@/components/about/FounderIntro";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "Investigation before build. Evidence-based implementation after diagnosis.",
});

export default async function AboutPage() {
  const [profile, siteSettings] = await Promise.all([
    getAboutContent(),
    getSiteSettings(),
  ]);

  const data = profile ?? getDefaultFounderProfile();
  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <>
      <FounderIntro profile={data} />

      <Section variant="light">
        <div className="grid gap-6 md:grid-cols-2">
          <AdvantageBlock
            title="Investigation advantage"
            body={data.investigationAdvantage}
          />
          <AdvantageBlock
            title="Implementation advantage"
            body={data.implementationAdvantage}
          />
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-2xl font-bold text-cd-txt">
          Background
        </h2>
        <p className="mt-4 leading-relaxed text-cd-shade">
          {data.credibilityCopy}
        </p>
        {data.body && data.body.length > 0 && (
          <div className="mt-6">
            <ProseContent value={data.body} />
          </div>
        )}
      </Section>

      <AboutCta primaryCta={shell.primaryCta} />
    </>
  );
}
