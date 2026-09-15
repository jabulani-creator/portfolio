import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";
import { getFixBullets, getLeaksForDisplay } from "@/lib/caseStudyVisualHelpers";
import ProblemCard from "./ProblemCard";

type Props = {
  caseStudy: Pick<
    CaseStudy,
    "problems" | "revenueLeaks" | "problemSolutionMaps"
  >;
  sectionId?: string;
};

export default function RevenueLeaksBandSection({
  caseStudy,
  sectionId = "cs-problems",
}: Props) {
  const leaks = getLeaksForDisplay(caseStudy, 5);
  const fixes = getFixBullets(caseStudy);

  if (!leaks.length) return null;

  return (
    <>
      <Section variant="default" id={sectionId}>
        <p className="studio-eyebrow">The leaks</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt">
          Where the journey was losing people
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leaks.map((problem, index) => (
            <ProblemCard key={problem.title ?? index} index={index} problem={problem} />
          ))}
        </div>
      </Section>
      {fixes.length > 0 && (
        <Section variant="light" id="cs-fix-summary" className="section-rule border-y border-cd-border">
          <p className="studio-eyebrow">The fix</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            What needed to change
          </h2>
          <ul className="mt-8 space-y-4">
            {fixes.map((fix) => (
              <li
                key={fix}
                className="studio-card border-l-2 border-l-cd-txt text-sm leading-relaxed text-cd-txt"
              >
                {fix}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
