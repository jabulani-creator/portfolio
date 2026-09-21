import Section from "@/components/ui/Section";

const steps = [
  { title: "Talk", body: "15–20 minute conversation." },
  { title: "Scope", body: "We determine the right approach." },
  { title: "Quote", body: "Clear scope and price before work begins." },
  { title: "Build", body: "The solution gets implemented." },
];

export default function StartProjectProcessSection() {
  return (
    <Section variant="default" className="py-12 md:py-14">
      <h2 className="text-lg font-bold text-cd-txt">What happens next</h2>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="studio-card">
            <p className="font-mono text-xs text-cd-shade">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="mt-2 font-semibold text-cd-txt">{step.title}</p>
            <p className="mt-1 text-sm text-cd-shade">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
