import Section from "@/components/ui/Section";
import { OfferDeliverable } from "../../../types/Offer";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  deliverables: OfferDeliverable[];
  primaryCta: PrimaryCtaType;
  priceLabel?: string;
};

export default function DiagnosticScopeSection({
  deliverables,
  primaryCta,
  priceLabel,
}: Props) {
  const sorted = [...deliverables].sort((a, b) => a.order - b.order);

  return (
    <Section variant="default" id="diagnostic-scope" className="section-rule">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        The Diagnostic Scope
      </h2>
      <p className="studio-body mt-4 max-w-2xl">
        Eight fixed-scope audits delivered in about one week — plus a live
        walkthrough call.
        {priceLabel ? (
          <>
            {" "}
            Investment:{" "}
            <span className="font-semibold text-cd-txt">{priceLabel}</span>.
          </>
        ) : null}
      </p>
      <div className="mt-12 grid divide-x divide-y divide-cd-border border border-cd-border sm:grid-cols-2">
        {sorted.map((item) => (
          <div key={item.title} className="p-6">
            <p className="font-mono text-xs text-cd-shade">
              {String(item.order).padStart(2, "0")}.
            </p>
            <h3 className="mt-2 font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-cd-shade">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <PrimaryCta cta={primaryCta} variant="solid" className="px-8 py-3" />
      </div>
    </Section>
  );
}
