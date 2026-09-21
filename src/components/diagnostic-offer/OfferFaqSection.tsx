import Section from "@/components/ui/Section";
import { OfferFaqItem } from "../../../types/Offer";

type Props = {
  faq: OfferFaqItem[];
};

export default function OfferFaqSection({ faq }: Props) {
  const items = [...faq].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <Section variant="light" id="faq">
      <p className="studio-eyebrow">FAQ</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt">
        Common questions
      </h2>
      <dl className="mt-10 space-y-8">
        {items.map((item) => (
          <div key={item.question} className="border-t border-cd-shade/15 pt-8">
            <dt className="font-display text-lg font-bold text-cd-txt">
              {item.question}
            </dt>
            <dd className="mt-3 leading-relaxed text-cd-shade">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
