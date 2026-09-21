import Section from "@/components/ui/Section";
import DeliverablesList from "./DeliverablesList";
import { OfferDeliverable } from "../../../types/Offer";

type Props = {
  deliverables: OfferDeliverable[];
};

export default function OfferDeliverablesSection({ deliverables }: Props) {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">What I investigate</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        Eight defined outputs
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        A structured investigation with named deliverables — not an open-ended
        website review. Scope and depth are agreed before work begins; delivery is
        typically about one week once access is in place.
      </p>
      <div className="mt-10">
        <DeliverablesList deliverables={deliverables} numbered />
      </div>
    </Section>
  );
}
