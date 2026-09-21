import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
  ctaLabel?: string;
};

export default function OfferPricingSection({ primaryCta, ctaLabel }: Props) {
  const cta = {
    ...primaryCta,
    label: ctaLabel?.trim() || "Start a conversation",
    href: primaryCta.href || "/start-a-project",
  };

  return (
    <Section variant="default" id="pricing">
      <p className="studio-eyebrow">Investment</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        What does it cost?
      </h2>
      <div className="studio-card mt-6 max-w-2xl">
        <p className="text-sm leading-relaxed text-cd-shade md:text-base">
          Diagnostic engagements are scoped according to the organisation,
          available evidence, and depth of investigation required.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-cd-shade md:text-base">
          After the initial conversation, I&apos;ll recommend the appropriate scope
          and provide a clear quotation before any work begins.
        </p>
      </div>
      <div className="mt-8">
        <PrimaryCta cta={cta} variant="solid" />
      </div>
      <p className="mt-6 text-sm text-cd-shade">
        Already know what you need built?{" "}
        <a
          href="/start-a-project#start-project"
          className="font-semibold text-cd-txt underline-offset-4 hover:underline"
        >
          Start a project instead →
        </a>
      </p>
    </Section>
  );
}
