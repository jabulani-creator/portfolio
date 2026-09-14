import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  productName: string;
  categoryHeadline?: string;
  primaryCta: PrimaryCtaType;
};

export default function HeroSection({
  productName,
  categoryHeadline,
  primaryCta,
}: Props) {
  return (
    <Section className="pt-12 md:pt-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-cd-cta">
        Digital Experience Consultant
      </p>
      <h1 className="mt-4 text-3xl font-bold leading-tight text-cd-txt md:text-5xl">
        Most businesses don&apos;t need a new website.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-cd-txt md:text-xl">
        They need to understand why customers aren&apos;t taking the next step.
      </p>
      {categoryHeadline && (
        <p className="mt-4 leading-relaxed text-cd-shade">{categoryHeadline}</p>
      )}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <PrimaryCta cta={primaryCta} />
        <Link
          href="/digital-experience-diagnostic"
          className="text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
        >
          See what the {productName} includes →
        </Link>
      </div>
    </Section>
  );
}
