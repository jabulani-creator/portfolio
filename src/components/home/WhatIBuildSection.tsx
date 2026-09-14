import Section from "@/components/ui/Section";

const capabilities = [
  {
    title: "Digital experiences",
    body: "Websites and platforms designed around customer journeys.",
  },
  {
    title: "Business diagnostics",
    body: "Investigating where digital experiences lose customers.",
  },
  {
    title: "Digital strategy",
    body: "Turning business problems into practical digital systems.",
  },
  {
    title: "Software",
    body: "Operational tools, booking flows, and internal systems.",
  },
  {
    title: "Automation",
    body: "Reducing repetitive manual work where it blocks growth.",
  },
];

export default function WhatIBuildSection() {
  return (
    <Section variant="light">
      <p className="studio-eyebrow">What I build</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-cd-txt md:text-3xl">
        Capability without a services brochure.
      </h2>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => (
          <div key={cap.title} className="border-t border-cd-cta/30 pt-6">
            <h3 className="font-display text-lg font-bold text-cd-txt">
              {cap.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cd-shade">
              {cap.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
