import Section from "@/components/ui/Section";

const steps = [
  {
    index: "01",
    title: "Discover",
    prompt: "How do customers find you?",
    hints: "Google · Social · WhatsApp · Referrals · Search",
  },
  {
    index: "02",
    title: "Trace",
    prompt: "What happens when they arrive?",
    hints: "What they see · understand · click · hesitate",
  },
  {
    index: "03",
    title: "Diagnose",
    prompt: "Where does the journey break?",
    hints: "Pricing · trust · booking paths · unclear offers",
  },
  {
    index: "04",
    title: "Fix",
    prompt: "Build only what solves the problem.",
    hints: "Site · landing page · booking · workflow · platform",
  },
];

export default function VisualMethodPipelineSection() {
  return (
    <Section variant="default" id="methodology" className="section-rule">
      <p className="studio-eyebrow">The method</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Discover → Trace → Diagnose → Fix
      </h2>
      <ol className="mt-12 space-y-0">
        {steps.map((step, i) => (
          <li key={step.index}>
            <article className="grid gap-4 border border-cd-border bg-white p-6 md:grid-cols-[auto_1fr] md:gap-8">
              <p className="mono-index whitespace-nowrap">[ {step.index} ]</p>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 font-medium text-cd-txt">{step.prompt}</p>
                <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-wide text-cd-shade">
                  {step.hints}
                </p>
              </div>
            </article>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-2 text-cd-shade" aria-hidden>
                ↓
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
