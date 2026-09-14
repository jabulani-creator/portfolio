import Section from "@/components/ui/Section";
import DeliverablesList from "./DeliverablesList";
import { OfferDeliverable } from "../../../types/Offer";

type Props = {
  productName: string;
  deliverables: OfferDeliverable[];
};

export default function OfferDeliverablesSection({
  productName,
  deliverables,
}: Props) {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt">
        What you receive
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">
        The {productName} is a fixed-scope product — not an open-ended
        engagement. After one week, these eight outputs land in your inbox,
        followed by a live walkthrough.
      </p>
      <div className="mt-8">
        <DeliverablesList deliverables={deliverables} />
      </div>
    </Section>
  );
}
