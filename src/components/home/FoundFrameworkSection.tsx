import Section from "@/components/ui/Section";

const pillars = [
  {
    title: "Found",
    question: "Can customers find you?",
    hints: "Google · social · maps · search · referrals",
  },
  {
    title: "Understood",
    question: "When they arrive, do they get it?",
    hints: "What you do · who it’s for · trust · location · pricing",
  },
  {
    title: "Served",
    question: "Can they take the next step?",
    hints: "Ask · book · buy · register · get help",
  },
  {
    title: "Operated",
    question: "Can your team keep up?",
    hints: "Workflows · admin · follow-up · automation",
  },
];

export default function FoundFrameworkSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">How I think about your business</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Found → understood → served → operated
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        Most digital problems show up in one of these layers. I look at the full
        picture — not just the homepage.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="studio-card flex flex-col">
            <h3 className="font-display text-lg font-bold uppercase tracking-tight text-cd-txt">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm font-medium text-cd-txt">{pillar.question}</p>
            <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-cd-shade">
              {pillar.hints}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
