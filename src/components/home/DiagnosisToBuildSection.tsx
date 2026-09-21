import Section from "@/components/ui/Section";

const capabilities = [
  {
    title: "Websites",
    body: "Make your organisation easier to find, understand, and contact.",
  },
  {
    title: "Digital systems",
    body: "Turn enquiries, bookings, registration, and admin into structured workflows your team can run.",
  },
  {
    title: "Automation & AI",
    body: "Reduce repetitive work and help your team respond faster — without losing the human touch.",
  },
  {
    title: "Digital diagnostics",
    body: "Find the gaps before spending money on the wrong solution. Scoped to your organisation, not a one-size price tag.",
  },
];

export default function DiagnosisToBuildSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">What I build</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        I don&apos;t just talk about digital problems. I build the solutions.
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-cd-shade md:text-base">
        Once we understand where customers get stuck, the fix might be a website,
        a platform, a workflow, or something smaller. The technology follows the
        problem — not the other way around.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {capabilities.map((item) => (
          <article key={item.title} className="studio-card">
            <h3 className="text-sm font-bold uppercase tracking-wide text-cd-txt">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">
              {item.body}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-lg font-semibold text-cd-txt">
        The diagnosis tells us what to build.
      </p>
    </Section>
  );
}
