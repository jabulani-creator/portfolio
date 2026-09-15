import Section from "@/components/ui/Section";

const stages = ["Discover", "Evaluate", "Contact", "Convert"];

export default function CustomerJourneyIdeaSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">The idea</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Don&apos;t start with the website.
      </h2>
      <p className="mt-3 text-lg font-medium text-cd-txt">Start with the customer.</p>
      <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-cd-shade md:gap-4 md:text-sm">
        {stages.map((stage, i) => (
          <span key={stage} className="flex items-center gap-3 md:gap-4">
            <span className="rounded-full border border-cd-border bg-white px-4 py-2 text-cd-txt">
              {stage}
            </span>
            {i < stages.length - 1 && (
              <span className="text-cd-border" aria-hidden>
                →
              </span>
            )}
          </span>
        ))}
      </div>
      <p className="mt-8 max-w-lg text-sm leading-relaxed text-cd-shade md:text-base">
        I find where that journey breaks.
      </p>
    </Section>
  );
}
