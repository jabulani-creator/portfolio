import Link from "next/link";
import Section from "@/components/ui/Section";

const pains = [
  "People keep asking questions that are already on our website.",
  "We get enquiries, but too few become customers.",
  "Customers can't easily find our location, prices, or services.",
  "Our staff keep doing manually what a system could handle.",
  "We're considering a new website, but we're not sure what it should actually do.",
];

export default function MirrorPainSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-16">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">
        Does any of this sound familiar?
      </h2>
      <ul className="mt-8 space-y-4">
        {pains.map((line) => (
          <li
            key={line}
            className="border-l-2 border-cd-cta/40 pl-5 text-sm leading-relaxed text-cd-shade md:text-base"
          >
            &ldquo;{line}&rdquo;
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm font-semibold text-cd-txt">
        If you recognize the problem,{" "}
        <Link href="/start-a-project" className="underline-offset-4 hover:underline">
          let&apos;s talk
        </Link>
        .
      </p>
    </Section>
  );
}
