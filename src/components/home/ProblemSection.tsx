import Section from "@/components/ui/Section";

const channels = [
  "Website",
  "Facebook",
  "Google",
  "WhatsApp",
];

export default function ProblemSection() {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt md:text-3xl">
        The problem
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">
        Most businesses already have the basics in place:
      </p>
      <ul className="mt-6 space-y-2">
        {channels.map((channel) => (
          <li key={channel} className="flex items-center gap-3 text-cd-txt">
            <span className="text-cd-cta">✓</span>
            {channel}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-lg font-medium text-cd-txt">
        Yet enquiries are still inconsistent. Why?
      </p>
      <p className="mt-4 leading-relaxed text-cd-shade">
        Customers are already trying to do business with you. The question is
        where they get stuck — on your website, your listings, your reviews, or
        somewhere you have not looked yet.
      </p>
    </Section>
  );
}
