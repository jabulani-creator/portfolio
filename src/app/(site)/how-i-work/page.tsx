import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { getHowIWorkContent } from "@/lib/content/queries/howIWork";
import { getSiteSettings } from "@/lib/content/queries/site";
import {
  getDefaultHowIWorkContent,
  getDefaultSiteShell,
} from "@/lib/content/defaults";
import ProcessStepsList from "@/components/how-i-work/ProcessStepsList";
import ScopeBoundary from "@/components/how-i-work/ScopeBoundary";
import BuildFollowOn from "@/components/how-i-work/BuildFollowOn";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How I Work",
  description:
    "How the digital experience diagnostic runs — and what is honestly in scope today.",
});

export default async function HowIWorkPage() {
  const [content, siteSettings] = await Promise.all([
    getHowIWorkContent(),
    getSiteSettings(),
  ]);

  const data = content ?? getDefaultHowIWorkContent();
  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <>
      <Section className="pt-12 md:pt-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-cd-cta">
          Process
        </p>
        <h1 className="mt-3 text-3xl font-bold text-cd-txt md:text-4xl">
          How I work
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cd-shade">{data.intro}</p>
      </Section>
      <ProcessStepsList steps={data.processSteps} />
      <ScopeBoundary line={data.scopeBoundaryLine} />
      <BuildFollowOn
        summary={data.buildFollowOnSummary}
        primaryCta={shell.primaryCta}
      />
    </>
  );
}
