import Section from "@/components/ui/Section";

const steps = [
  { name: "Diagnose", detail: "Understand the business and customer journey." },
  { name: "Design", detail: "Translate findings into a better experience." },
  { name: "Build", detail: "Develop the digital system that fixes it." },
  { name: "Improve", detail: "Measure and iterate — including Ongoing Care." },
];

export default function OfferMethodologySection() {
  return (
    <Section variant="dark">
      <p className="studio-eyebrow text-white/50">Methodology</p>
      <h2 className="mt-3 font-display text-3xl font-bold">
        Diagnose → Design → Build → Improve
      </h2>
      <p className="mt-4 max-w-2xl text-white/70">
        This page sells step one — the productized Digital Experience
        Diagnostic. Build and improve follow only when the evidence supports
        them.
      </p>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.name}>
            <p className="font-display text-3xl font-bold text-white/20">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-display text-lg font-bold">{step.name}</p>
            <p className="mt-2 text-sm text-white/65">{step.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
