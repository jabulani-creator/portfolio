import Section from "@/components/ui/Section";

const methodology = [
  { step: "Diagnose", body: "Understand the business and customer journey." },
  { step: "Design", body: "Translate findings into a better experience." },
  { step: "Build", body: "Develop the actual digital system." },
  { step: "Improve", body: "Measure, iterate, and maintain — Ongoing Care." },
];

const ladder = [
  "The customer.",
  "The journey.",
  "The problem.",
  "The business impact.",
  "The solution.",
  "The technology.",
];

export default function HowIThinkSection() {
  return (
    <Section variant="default">
      <p className="studio-eyebrow">How I think</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt md:text-4xl">
        Don&apos;t start with the website.
      </h2>
      <p className="studio-body mt-6 max-w-2xl">
        Start with the customer, follow the journey, find where revenue leaks,
        then choose technology last.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cd-shade">
            The ladder
          </p>
          <ul className="mt-6 space-y-4">
            {ladder.map((item, i) => (
              <li key={item} className="flex items-baseline gap-4">
                <span className="font-display text-2xl font-bold text-cd-cta/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium text-cd-txt">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-cd-shade/20 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-cd-shade">
            Method
          </p>
          <ul className="mt-6 space-y-6">
            {methodology.map((m, i) => (
              <li key={m.step}>
                <p className="font-display text-lg font-bold text-cd-txt">
                  {String(i + 1).padStart(2, "0")} — {m.step}
                </p>
                <p className="mt-1 text-sm text-cd-shade">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
