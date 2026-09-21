import Section from "@/components/ui/Section";

const steps = [
  {
    name: "Investigate",
    detail:
      "Review the customer journey, digital touchpoints, competitors, reviews, and available evidence.",
  },
  {
    name: "Diagnose",
    detail:
      "Identify where the experience breaks and which problems matter most.",
  },
  {
    name: "Decide",
    detail:
      "Turn findings into a prioritized plan — including whether you need a website, system, process change, automation, or something else.",
  },
];

export default function OfferMethodologySection() {
  return (
    <Section variant="default" className="section-rule">
      <p className="studio-eyebrow">The process</p>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        Investigate → Diagnose → Decide
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        The diagnostic doesn&apos;t automatically lead to a website. It leads to a
        decision — backed by evidence.
      </p>
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.name} className="studio-card">
            <p className="mono-index">[ {String(i + 1).padStart(2, "0")} ]</p>
            <p className="mt-3 font-display text-lg font-bold text-cd-txt">
              {step.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
