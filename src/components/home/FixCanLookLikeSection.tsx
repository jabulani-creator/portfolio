import Link from "next/link";
import Section from "@/components/ui/Section";

const fixes = [
  "Website",
  "Landing page",
  "Booking system",
  "Digital workflow",
  "Content architecture",
  "Conversion optimization",
  "Full digital platform",
];

const notAlways = [
  "A landing page",
  "Better pricing information",
  "A booking workflow",
  "Google Business optimization",
  "WhatsApp conversion",
  "A complete digital platform",
];

export default function FixCanLookLikeSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">After the diagnosis</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        What can the fix look like?
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-cd-shade md:text-base">
        Not everything requires a new website.
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {fixes.map((item) => (
          <li
            key={item}
            className="rounded-full border border-cd-border bg-white px-4 py-2 text-sm font-medium text-cd-txt"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="studio-card mt-12">
        <h3 className="text-lg font-bold">
          Sometimes the answer isn&apos;t a new website.
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {notAlways.map((item) => (
            <li
              key={item}
              className="border-l-2 border-cd-border pl-4 text-sm font-semibold uppercase tracking-wide text-cd-shade"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base font-semibold text-cd-txt">
          The diagnosis tells us what to build.
        </p>
        <Link
          href="/digital-experience-diagnostic"
          className="mt-6 inline-block font-mono text-xs uppercase tracking-wide text-cd-shade underline-offset-4 hover:text-cd-txt hover:underline"
        >
          About the diagnostic →
        </Link>
      </div>
    </Section>
  );
}
