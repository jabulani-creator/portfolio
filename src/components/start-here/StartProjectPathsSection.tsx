import Link from "next/link";
import Section from "@/components/ui/Section";

const projectTags = [
  "Websites",
  "Digital platforms",
  "Booking systems",
  "Dashboards",
  "Forms & workflows",
  "Automation",
];

export default function StartProjectPathsSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-14">
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        <article id="start-project" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-cd-txt">Already know what you want built?</h2>
          <p className="mt-2 text-sm text-cd-shade">
            Tell me what you&apos;re trying to achieve.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {projectTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-cd-border bg-white px-3 py-1.5 text-xs font-medium text-cd-txt"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Link href="#contact" className="pill-btn mt-6 inline-flex">
            Start a project →
          </Link>
        </article>
        <article id="explore-diagnostic" className="scroll-mt-28">
          <h2 className="text-lg font-bold text-cd-txt">Not sure what you need?</h2>
          <p className="mt-2 text-sm text-cd-shade">
            That&apos;s where the Digital Experience Diagnostic comes in.
          </p>
          <Link
            href="/digital-experience-diagnostic"
            className="pill-btn-outline mt-6 inline-flex"
          >
            Explore the diagnostic →
          </Link>
        </article>
      </div>
    </Section>
  );
}
