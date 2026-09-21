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
  const cta = {
    ...primaryCta,
    label: offer.ctaLabel?.trim() || "Start a conversation",
    href: primaryCta.href || "/start-a-project",
  };

  const summary =
    offer.summary?.trim() ||
    "A structured investigation into how customers discover, evaluate, and interact with your organisation.";

  return (
    <Section variant="default" className="pt-20 pb-10 md:pt-28 md:pb-12">
      <h1 className="studio-headline max-w-3xl">{offer.title || productName}</h1>
      <p className="mt-6 max-w-2xl text-xl font-semibold leading-snug text-cd-txt">
        Find where your customer journey breaks before you spend money fixing it.
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        {summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
        {offer.turnaround && (
          <li className="rounded-full border border-cd-border px-3 py-1.5">
            {offer.turnaround}
          </li>
        )}
        <li className="rounded-full border border-cd-border px-3 py-1.5">
          Scoped investigation
        </li>
        <li className="rounded-full border border-cd-border px-3 py-1.5">
          90-minute walkthrough
        </li>
      </ul>
      <div className="mt-8">
        <PrimaryCta cta={cta} variant="solid" />
      </div>
    </Section>
  );
}
