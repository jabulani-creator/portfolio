import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  productName: string;
  primaryCta: PrimaryCtaType;
  turnaround?: string;
  priceLabel?: string;
};

export default function FinalCtaSection({
  productName,
  primaryCta,
  turnaround,
  priceLabel,
}: Props) {
  return (
    <Section className="bg-cd-txt text-white">
      <h2 className="text-2xl font-semibold md:text-3xl">
        Ready to find out where customers get stuck?
      </h2>
      <p className="mt-4 max-w-xl leading-relaxed text-cd-shade">
        Book the {productName}. You will know what to fix first, whether you
        need a new website, and what happens next — before committing to a full
        build.
      </p>
      {(turnaround || priceLabel) && (
        <p className="mt-4 text-sm text-cd-shade">
          {turnaround && <span>Turnaround: {turnaround}</span>}
          {turnaround && priceLabel && <span> · </span>}
          {priceLabel && <span>From {priceLabel}</span>}
        </p>
      )}
      <div className="mt-8">
        <PrimaryCta cta={primaryCta} className="bg-white text-cd-txt hover:bg-cd-bck" />
      </div>
    </Section>
  );
}
