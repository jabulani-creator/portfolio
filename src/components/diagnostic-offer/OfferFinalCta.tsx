import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  productName: string;
  primaryCta: PrimaryCtaType;
  turnaround?: string;
  priceLabel?: string;
};

export default function OfferFinalCta({
  productName,
  primaryCta,
  turnaround,
  priceLabel,
}: Props) {
  return (
    <Section variant="dark">
      <h2 className="font-display text-3xl font-bold">
        Book the {productName}
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-white/75">
        You will know what you get, by when, and for how much — before any build
        conversation starts.
      </p>
      {(turnaround || priceLabel) && (
        <p className="mt-4 text-sm text-white/60">
          {turnaround && <span>{turnaround}</span>}
          {turnaround && priceLabel && <span> · </span>}
          {priceLabel && <span>{priceLabel}</span>}
        </p>
      )}
      <div className="mt-8">
        <PrimaryCta cta={primaryCta} variant="inverse" />
      </div>
    </Section>
  );
}
