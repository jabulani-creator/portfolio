import Section from "@/components/ui/Section";

const stages = ["Discover", "Understand", "Act", "Return"];

export default function CustomerJourneyIdeaSection() {
  return (
    <Section variant="default" className="section-rule">
      <p className="studio-eyebrow">Philosophy</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Don&apos;t start with the website.
      </h2>
      <p className="mt-3 text-lg font-medium text-cd-txt">Start with the customer.</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        Before building anything, I look at how people discover you, what they
        see, what they understand, where they hesitate, and what happens when
        they want to take action.
      </p>
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
    </Section>
  );
}
