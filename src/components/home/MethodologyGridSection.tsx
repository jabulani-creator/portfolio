import Section from "@/components/ui/Section";

const steps = [
  {
    index: "01",
    title: "Diagnose",
    subtitle: "Audit",
    body: "Map the business, customer journey, listings, reviews, and competitors. Rank revenue leaks with evidence.",
  },
  {
    index: "02",
    title: "Design",
    subtitle: "Architect",
    body: "Translate findings into experience architecture — what to fix first, what to defer, and what not to build.",
  },
  {
    index: "03",
    title: "Build",
    subtitle: "Implement",
    body: "Ship the digital system when the diagnostic proves it is the right fix — not before.",
  },
  {
    index: "04",
    title: "Improve",
    subtitle: "Iterate",
    body: "Measure, maintain, and refine. Ongoing Care when the business needs consistent upkeep.",
  },
];

export default function MethodologyGridSection() {
  return (
    <Section variant="default" id="methodology" className="section-rule">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
        The Methodology
      </h2>
      <p className="studio-body mt-4 max-w-2xl">
        A fixed sequence — not a menu of services. Each step earns the next.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <article key={step.index} className="studio-card">
            <p className="mono-index">
              [ {step.index} ] {step.title}
            </p>
            <h3 className="mt-4 text-lg font-bold">{step.subtitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
