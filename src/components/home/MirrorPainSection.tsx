import Section from "@/components/ui/Section";

const pains = [
  "We get enquiries, but few become customers.",
  "People keep asking questions that are already on our website.",
  "Facebook gets engagement but almost no bookings.",
  "Our website looks good but doesn't generate business.",
  "Our staff spend half the day answering the same WhatsApp questions.",
  "We don't actually know where customers drop off.",
];

export default function MirrorPainSection() {
  return (
    <Section variant="default" className="section-rule">
      <p className="studio-eyebrow">Sound familiar?</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Can you see your business in these?
      </h2>
      <ul className="mt-10 space-y-4">
        {pains.map((line) => (
          <li
            key={line}
            className="border-l-2 border-cd-txt pl-5 text-sm leading-relaxed text-cd-shade md:text-base"
          >
            &ldquo;{line}&rdquo;
          </li>
        ))}
      </ul>
      <p className="mt-10 text-xl font-bold text-cd-txt">That&apos;s what I investigate.</p>
    </Section>
  );
}
