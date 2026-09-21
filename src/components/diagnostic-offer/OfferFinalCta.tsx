import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  productName: string;
  primaryCta: PrimaryCtaType;
  turnaround?: string;
};

export default function OfferFinalCta({
  productName,
  primaryCta,
  turnaround,
}: Props) {
  const cta = {
    ...primaryCta,
    label: "Start a conversation",
    href: primaryCta.href || "/start-a-project",
  };

  return (
    <Section variant="dark">
      <h2 className="font-display text-3xl font-bold">
        Not sure if a {productName} is the right next step?
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-white/75">
        Start with a short conversation. I&apos;ll recommend the appropriate
        scope — diagnostic, discovery, or a direct build path — and provide a
        clear quotation before any work begins.
      </p>
      {turnaround && (
        <p className="mt-4 text-sm text-white/60">
          Typical diagnostic delivery: {turnaround} once scope is agreed
        </p>
      )}
      <div className="mt-8">
        <PrimaryCta cta={cta} variant="inverse" />
      </div>
    </Section>
  );
}
