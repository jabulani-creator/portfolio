import Section from "@/components/ui/Section";
import { OfferDeliverable } from "../../../types/Offer";

const SHORT: Record<string, string> = {
  "Customer Journey Map": "Discover → evaluate → act, mapped end to end.",
  "Website & Experience Audit": "Clarity, speed, mobile, and key actions on site.",
  "Local Search / Google Business Profile Audit": "Listings accuracy and local discovery.",
  "Customer Review Analysis": "Patterns in what customers repeat in reviews.",
  "Competitive Experience Comparison": "How peers present offers and reduce friction.",
  "Commercial Friction Analysis": "Evidence-backed risks to enquiries and bookings.",
  "Prioritized Action Plan": "What to fix first — and what can wait.",
  "90-Minute Strategy Walkthrough": "Live review of findings — not a PDF alone.",
};

type Props = {
  deliverables: OfferDeliverable[];
};

export default function OfferDeliverableCards({ deliverables }: Props) {
  const items = [...deliverables].sort((a, b) => a.order - b.order);

  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-16">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">What you receive</h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <article
            key={item.title}
            className="rounded-lg border border-cd-border bg-white p-4"
          >
            <p className="font-mono text-[10px] text-cd-shade">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-sm font-bold leading-snug text-cd-txt">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-cd-shade">
              {SHORT[item.title] ?? item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
