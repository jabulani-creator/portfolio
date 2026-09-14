import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
  priceLabel?: string;
  turnaround?: string;
};

export default function FinalDiagnosticCta({
  primaryCta,
  priceLabel,
  turnaround = "~1 week",
}: Props) {
  return (
    <Section variant="default" className="pb-24 md:pb-32">
      <div className="rounded-2xl bg-cd-txt px-8 py-14 text-center text-white md:px-16 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Ready to fix your digital presence?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
          Get a technical roadmap in {turnaround}.
          {priceLabel ? ` Investment ${priceLabel}.` : ""}
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCta cta={primaryCta} variant="inverse" />
        </div>
      </div>
    </Section>
  );
}
