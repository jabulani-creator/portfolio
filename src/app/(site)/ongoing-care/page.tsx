import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { getRetainerOffer } from "@/lib/content/queries/retainer";
import { getDefaultRetainerOffer } from "@/lib/content/defaults";
import { buildPageMetadata } from "@/lib/seo";
import RetainerScopeList from "@/components/retainer/RetainerScopeList";
import ProgressionPath from "@/components/retainer/ProgressionPath";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";

export const metadata: Metadata = buildPageMetadata({
  title: "Ongoing Care",
  description:
    "Standing monthly upkeep after your diagnostic and build — content, SEO basics, and review monitoring.",
});

export default async function OngoingCarePage() {
  const [retainer, siteSettings] = await Promise.all([
    getRetainerOffer(),
    getSiteSettings(),
  ]);

  const data = retainer ?? getDefaultRetainerOffer();
  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <>
      <Section className="pt-12 md:pt-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-cd-cta">
          Standing offer
        </p>
        <h1 className="mt-3 text-3xl font-bold text-cd-txt md:text-4xl">
          {data.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-cd-shade">
          {data.summary}
        </p>
        {data.priceLabel && (
          <p className="mt-4 text-sm font-medium text-cd-txt">
            Typical investment: {data.priceLabel}
          </p>
        )}
      </Section>

      <ProgressionPath
        progressionCopy={data.progressionCopy}
        className="bg-white"
      />

      <Section>
        <h2 className="text-2xl font-semibold text-cd-txt">
          What ongoing care includes
        </h2>
        <div className="mt-6">
          <RetainerScopeList items={data.scopeItems} />
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="text-2xl font-semibold text-cd-txt">Who it is for</h2>
        <p className="mt-4 leading-relaxed text-cd-shade">
          {data.idealClientFit}
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-cd-txt">
          Where this fits in the journey
        </h2>
        <p className="mt-4 leading-relaxed text-cd-shade">
          {data.followOnExplanation}
        </p>
        <p className="mt-4 text-sm text-cd-shade">
          Ongoing Care is not a subscription checkout on this site. If it fits
          after your diagnostic or build, we scope it in a direct conversation —
          the same way you book the first engagement.
        </p>
      </Section>

      <Section className="bg-cd-txt text-white">
        <h2 className="text-2xl font-semibold">Not there yet?</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-cd-shade">
          Every client journey starts with the diagnostic. Book that first — then
          build and ongoing care follow only if they make sense.
        </p>
        <div className="mt-8">
          <PrimaryCta
            cta={shell.primaryCta}
            className="bg-white text-cd-txt hover:bg-cd-bck"
          />
        </div>
      </Section>
    </>
  );
}
