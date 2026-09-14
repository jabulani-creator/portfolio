import Link from "next/link";
import Section from "@/components/ui/Section";
import { OfferDeliverable } from "../../../types/Offer";

type Props = {
  productName: string;
  deliverables: OfferDeliverable[];
  turnaround?: string;
};

export default function DiagnosticSection({
  productName,
  deliverables,
  turnaround,
}: Props) {
  const sorted = [...deliverables].sort((a, b) => a.order - b.order);

  return (
    <Section>
      <h2 className="text-2xl font-semibold text-cd-txt md:text-3xl">
        The {productName}
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">
        Here is exactly what gets investigated — fixed scope, defined outputs,
        {turnaround ? ` delivered in ${turnaround}.` : " delivered in about one week."}
      </p>
      <ol className="mt-8 space-y-6">
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
      <Link
        href="/digital-experience-diagnostic"
        className="mt-8 inline-block text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
      >
        Full offer details →
      </Link>
    </Section>
  );
}
