import Link from "next/link";
import Section from "@/components/ui/Section";
import Offer from "../../../types/Offer";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  productName: string;
  offer: Offer;
  primaryCta: PrimaryCtaType;
};

export default function DiagnosticStripSection({
  productName,
  offer,
  primaryCta,
}: Props) {
  return (
    <Section variant="dark">
      <div className="md:flex md:items-center md:justify-between md:gap-12">
        <div className="max-w-xl">
          <p className="studio-eyebrow text-cd-sp">Flagship offer</p>
          <h2 className="mt-3 font-display text-3xl font-bold">{productName}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">{offer.summary}</p>
          <p className="mt-6 text-sm text-white/60">
            {offer.turnaround} · {offer.priceLabel}
            {offer.priceNote ? ` · ${offer.priceNote}` : ""}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:mt-0 md:shrink-0">
          <PrimaryCta cta={primaryCta} />
          <Link
            href="/digital-experience-diagnostic"
            className="text-center text-sm font-semibold uppercase tracking-wide text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            Full offer details →
          </Link>
        </div>
      </div>
    </Section>
  );
}
