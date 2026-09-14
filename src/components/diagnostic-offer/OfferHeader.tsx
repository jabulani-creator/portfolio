import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";
import Offer from "../../../types/Offer";

type Props = {
  offer: Offer;
  productName: string;
  primaryCta: PrimaryCtaType;
};

export default function OfferHeader({
  offer,
  productName,
  primaryCta,
}: Props) {
  return (
    <Section variant="default" className="pt-20 md:pt-28">
      <p className="studio-eyebrow">Flagship offer · Step 01 Diagnose</p>
      <h1 className="studio-headline mt-4">{offer.title || productName}</h1>
      <p className="mt-6 text-lg leading-relaxed text-cd-shade">
        {offer.summary}
      </p>
      <div className="mt-8 flex flex-wrap items-end gap-8">
        {offer.priceLabel && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cd-shade">
              Investment
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-cd-cta">
              {offer.priceLabel}
            </p>
            {offer.priceNote && (
              <p className="mt-2 text-sm text-cd-shade">{offer.priceNote}</p>
            )}
          </div>
        )}
        {offer.turnaround && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cd-shade">
              Turnaround
            </p>
            <p className="mt-1 text-lg font-semibold text-cd-txt">
              {offer.turnaround}
            </p>
          </div>
        )}
      </div>
      <div className="mt-8">
        <PrimaryCta cta={primaryCta} />
      </div>
    </Section>
  );
}
