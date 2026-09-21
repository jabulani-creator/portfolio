import Section from "@/components/ui/Section";
import CaseStudy from "../../../../types/CaseStudy";
import { frictionScore, getLeaksForDisplay } from "@/lib/caseStudyVisualHelpers";

type Props = {
  caseStudy: Pick<CaseStudy, "problems" | "revenueLeaks">;
  heading?: string;
};

export default function RankedLeaksSection({
  caseStudy,
  heading = "revenue leaks",
}: Props) {
  const leaks = getLeaksForDisplay(caseStudy, 3);
  if (!leaks.length) return null;

  const title =
    heading !== "revenue leaks" ? heading : `The ${leaks.length} revenue leaks`;

  return (
    <Section variant="light" id="cs-leaks" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">Friction</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <ul className="mt-10 space-y-8">
        {leaks.map((problem, index) => {
          const score = frictionScore(problem, index);
          const bar = "█".repeat(Math.round(score)) + "░".repeat(10 - Math.round(score));
          return (
            <li key={problem.title ?? index} className="studio-card">
              <p className="mono-index">[ {String(index + 1).padStart(2, "0")} ]</p>
              <h3 className="mt-3 font-display text-xl font-bold text-cd-txt">
                {problem.title}
              </h3>
              {problem.description && (
                <p className="mt-3 text-sm leading-relaxed text-cd-shade">
                  {problem.description}
                </p>
              )}
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                  Impact priority
                </p>
                <p
                  className="mt-2 font-mono text-sm tracking-wider text-cd-txt"
                  aria-label={`Priority ${score} out of 10`}
                >
                  {bar}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
