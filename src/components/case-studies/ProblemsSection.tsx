import Section from "@/components/ui/Section";
import { getProblemsForPublic, Problem } from "../../../types/CaseStudy";
import CaseStudy from "../../../types/CaseStudy";
import ProblemCard from "./ProblemCard";

type Props = {
  caseStudy: Pick<CaseStudy, "problems" | "revenueLeaks">;
  sectionId?: string;
};

export default function ProblemsSection({
  caseStudy,
  sectionId = "cs-problems",
}: Props) {
  const problems = getProblemsForPublic(caseStudy);
  if (!problems.length) {
    return null;
  }

  return (
    <Section variant="default" id={sectionId}>
      <p className="studio-eyebrow">Diagnosis</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt">
        Problems identified
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-cd-shade">
        What was actually wrong — not a feature wish list.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {problems.map((problem: Problem, index) => (
          <ProblemCard key={problem.title ?? index} index={index} problem={problem} />
        ))}
      </div>
    </Section>
  );
}
