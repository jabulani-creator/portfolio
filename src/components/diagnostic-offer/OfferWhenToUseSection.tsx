import Section from "@/components/ui/Section";

const layers = [
  { label: "Can't be found?", detail: "Google, social, local visibility" },
  { label: "Can't be understood?", detail: "Messaging, pricing, information" },
  { label: "Can't be trusted?", detail: "Reviews, credibility, presentation" },
  { label: "Can't be contacted?", detail: "WhatsApp, forms, booking friction" },
  {
    label: "Can't be operated efficiently?",
    detail: "Repetitive manual processes",
  },
];

export default function OfferWhenToUseSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-16">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">
        When investigation comes first
      </h2>
      <p className="mt-3 max-w-xl text-sm text-cd-shade">
        You know something isn&apos;t working, but you&apos;re not sure what.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((layer) => (
          <li key={layer.label} className="rounded-lg border border-cd-border bg-white p-4">
            <p className="text-sm font-semibold text-cd-txt">{layer.label}</p>
            <p className="mt-1 text-xs text-cd-shade">{layer.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
