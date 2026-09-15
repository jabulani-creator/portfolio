import Section from "@/components/ui/Section";

const leaks = [
  {
    title: "Visibility",
    body: "Customers can't find you.",
  },
  {
    title: "Clarity",
    body: "Customers don't understand the offer.",
  },
  {
    title: "Trust",
    body: "Customers aren't convinced.",
  },
  {
    title: "Conversion",
    body: "Customers don't know what to do next.",
  },
  {
    title: "Operations",
    body: "Your team repeats what technology could handle.",
  },
];

export default function DiagnosticLeaksPreviewSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">The diagnostic</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Every business has leaks.
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {leaks.map((leak) => (
          <article
            key={leak.title}
            className="studio-card flex flex-col border-l-2 border-l-cd-txt"
          >
            <h3 className="font-mono text-xs uppercase tracking-wide text-cd-txt">
              {leak.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">{leak.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-lg font-semibold text-cd-txt">My job is to find them.</p>
    </Section>
  );
}
