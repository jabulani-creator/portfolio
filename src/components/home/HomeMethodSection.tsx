import Section from "@/components/ui/Section";

const steps = [
  {
    name: "Investigate",
    body: "Understand the customer and the problem.",
  },
  {
    name: "Diagnose",
    body: "Find the friction and decide what matters.",
  },
  {
    name: "Build",
    body: "Create the website, system, or workflow that solves it.",
  },
  {
    name: "Improve",
    body: "Measure, maintain, and keep improving.",
  },
];

export default function HomeMethodSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-14">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">Understand. Build. Improve.</h2>
      <p className="mt-3 max-w-2xl text-sm text-cd-shade">
        Understand the problem. Decide what needs fixing. Build the right solution.
        Keep improving it.
      </p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.name} className="rounded-lg border border-cd-border bg-white p-4">
            <p className="font-mono text-[10px] text-cd-shade">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-semibold text-cd-txt">{step.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-cd-shade">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
