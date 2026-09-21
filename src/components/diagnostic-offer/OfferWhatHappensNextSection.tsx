import Section from "@/components/ui/Section";

const outcomes = [
  "Fix the existing site",
  "Improve Google visibility",
  "Clarify the offer",
  "Change the enquiry flow",
  "Automate repetitive work",
  "Build a new platform",
];

export default function OfferWhatHappensNextSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-16">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">
        Sometimes the answer isn&apos;t a new website.
      </h2>
      <p className="mt-3 max-w-xl text-sm text-cd-shade">
        The investigation may lead to:
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {outcomes.map((item) => (
          <li
            key={item}
            className="rounded-full border border-cd-border bg-white px-4 py-2 text-sm font-medium text-cd-txt"
          >
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
