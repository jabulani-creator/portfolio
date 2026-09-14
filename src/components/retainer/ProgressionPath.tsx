import Link from "next/link";
import Section from "@/components/ui/Section";

const steps = [
  {
    label: "Diagnostic",
    href: "/digital-experience-diagnostic",
    description: "Understand where customers get stuck — scoped, priced, ~1 week.",
  },
  {
    label: "Build",
    href: "/how-i-work",
    description: "Implement the fix if the evidence shows you need one.",
  },
  {
    label: "Ongoing Care",
    href: "/ongoing-care",
    description: "Monthly upkeep so improvements do not drift after the project ends.",
  },
];

type Props = {
  progressionCopy?: string;
  className?: string;
};

export default function ProgressionPath({
  progressionCopy,
  className = "",
}: Props) {
  return (
    <Section className={className}>
      <h2 className="text-2xl font-semibold text-cd-txt">
        How engagements progress
      </h2>
      {progressionCopy && (
        <p className="mt-3 text-sm font-medium text-cd-cta">
          {progressionCopy}
        </p>
      )}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className="relative rounded border border-cd-shade/30 p-5"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-cd-cta">
              Step {index + 1}
            </span>
            <h3 className="mt-2 font-semibold text-cd-txt">
              <Link
                href={step.href}
                className="hover:text-cd-cta"
              >
                {step.label}
              </Link>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cd-shade">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
