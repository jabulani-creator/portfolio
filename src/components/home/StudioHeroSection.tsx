"use client";

import Link from "next/link";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";
import PrimaryCta from "@/components/layout/PrimaryCta";
import Section from "@/components/ui/Section";

type Props = {
  siteTitle: string;
  categoryHeadline?: string;
  localTrustLine?: string;
  primaryCta: PrimaryCtaType;
  offerHref?: string;
};

export default function StudioHeroSection({
  siteTitle,
  categoryHeadline,
  localTrustLine,
  primaryCta,
  offerHref = "/digital-experience-diagnostic",
}: Props) {
  return (
    <Section variant="default" className="relative overflow-hidden pt-20 md:pt-28">
      <p
        className="pointer-events-none absolute -right-4 top-8 select-none font-display text-[8rem] font-bold leading-none text-cd-cta/5 md:text-[12rem]"
        aria-hidden
      >
        TWG
      </p>
      <p className="studio-eyebrow">Digital experience studio</p>
      <h1 className="studio-headline mt-6 max-w-4xl">{siteTitle}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cd-shade md:text-xl">
        {categoryHeadline ??
          "I investigate digital problems, design better experiences, and build the systems that fix them."}
      </p>
      {localTrustLine && (
        <p className="mt-4 text-sm font-medium text-cd-cta">{localTrustLine}</p>
      )}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
        <PrimaryCta cta={primaryCta} />
        <Link
          href={offerHref}
          className="text-sm font-semibold uppercase tracking-wide text-cd-cta underline-offset-4 hover:underline"
        >
          See the diagnostic offer →
        </Link>
      </div>
    </Section>
  );
}
