import { OfferDeliverable } from "../../../types/Offer";

type Props = {
  deliverables: OfferDeliverable[];
};

export default function DeliverablesList({ deliverables }: Props) {
  const sorted = [...deliverables].sort((a, b) => a.order - b.order);

  return (
    <ol className="space-y-6">
      {sorted.map((item, index) => (
        <li key={item.title} className="border-l-2 border-cd-cta pl-4">
          <p className="font-semibold text-cd-txt">
            {index + 1}. {item.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-cd-shade">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
