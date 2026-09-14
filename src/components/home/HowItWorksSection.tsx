import Section from "@/components/ui/Section";

const steps = [
  {
    title: "Investigate",
    description:
      "Map how customers discover, evaluate, and contact your business today.",
  },
  {
    title: "Evidence",
    description:
      "Audit your website, listings, reviews, and competitors — with specifics, not guesses.",
  },
  {
    title: "Roadmap",
    description:
      "Rank what to fix first by leverage. You will know whether you even need a new website.",
  },
  {
    title: "Build",
    description:
      "If a build is the right fix, it happens after diagnosis — based on evidence, not assumptions.",
  },
];

export default function HowItWorksSection() {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt md:text-3xl">
        How it works
      </h2>
      <div className="mt-8 space-y-8">
        {steps.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cd-cta text-sm font-bold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold text-cd-txt">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-cd-shade">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
