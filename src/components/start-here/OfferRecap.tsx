import Section from "@/components/ui/Section";
import DeliverablesList from "@/components/diagnostic-offer/DeliverablesList";
import Offer from "../../../types/Offer";
import { OfferDeliverable } from "../../../types/Offer";

type Props = {
  offer: Offer;
  deliverables: OfferDeliverable[];
  productName: string;
};

function OfferSummaryCards({ offer }: { offer: Offer }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
      {offer.turnaround && (
        <div className="studio-card p-4 py-3.5 sm:p-6 sm:py-5">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade sm:text-xs">
            Typical timing
          </p>
          <p className="mt-1.5 text-base font-bold sm:mt-2 sm:text-lg">
            {offer.turnaround}
          </p>
          <p className="mt-2 text-xs text-cd-shade">Confirmed when scope is agreed</p>
        </div>
      )}
      <div className="studio-card p-4 py-3.5 sm:p-6 sm:py-5">
        <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade sm:text-xs">
          Investment
        </p>
        <p className="mt-1.5 text-sm leading-relaxed sm:mt-2 sm:text-base">
          Scoped after we talk — clear quotation before any work begins.
        </p>
      </div>
    </div>
  );
}

function DeliverablesBlock({
  deliverables,
}: {
  deliverables: OfferDeliverable[];
}) {
  return (
    <>
      <h2 className="text-xl font-bold tracking-tight md:mt-12">
        What a diagnostic can include
      </h2>
      <div className="mt-6">
        <DeliverablesList deliverables={deliverables} />
      </div>
    </>
  );
}

export default function OfferRecap({
  offer,
  deliverables,
  productName,
}: Props) {
  return (
    <>
      <Section
        variant="default"
        className="flex min-h-[calc(100dvh-7.75rem)] flex-col justify-center gap-5 py-0 pt-4 md:min-h-0 md:block md:gap-0 md:py-24 md:pt-28"
      >
        <div>
          <p className="studio-eyebrow">Start here</p>
          <h1 className="mt-2 font-display text-[1.65rem] font-bold leading-[1.12] tracking-tight text-cd-txt sm:mt-4 sm:text-display">
            Start a project or a conversation
          </h1>
          <p className="studio-body mt-3 max-w-2xl sm:mt-6">
            Tell me what you&apos;re trying to achieve — a build, a messy customer
            journey, or both. If a {productName} is the right tool, we&apos;ll
            scope it together before anything is signed off.
          </p>
        </div>

        <div className="shrink-0 md:mt-10">
          <OfferSummaryCards offer={offer} />
        </div>

        <div className="mt-12 hidden md:block">
          <DeliverablesBlock deliverables={deliverables} />
        </div>
      </Section>

      <section
        className="section-rule border-t border-cd-border bg-cd-bck2 pb-10 pt-8 md:hidden"
        aria-label="Diagnostic deliverables"
      >
        <div className="mx-auto w-11/12 max-w-6xl">
          <DeliverablesBlock deliverables={deliverables} />
        </div>
      </section>
    </>
  );
}
