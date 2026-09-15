import {
  getProblemCategoryLabel,
  Problem,
} from "../../../types/CaseStudy";

type Props = {
  index: number;
  problem: Problem;
  showRecommendedFix?: boolean;
};

export default function ProblemCard({
  index,
  problem,
  showRecommendedFix = false,
}: Props) {
  return (
    <article className="studio-card">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="font-display text-4xl font-bold text-cd-cta/30">
          #{String(index + 1).padStart(2, "0")}
        </p>
        {problem.category && (
          <span className="rounded-full border border-cd-border bg-cd-bck px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            {getProblemCategoryLabel(problem.category)}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-cd-txt">
        {problem.title}
      </h3>
      {problem.description && (
        <p className="mt-3 text-sm leading-relaxed text-cd-shade">
          {problem.description}
        </p>
      )}
      {problem.frictionQuote && (
        <blockquote className="mt-4 border-l-2 border-cd-accent pl-4 text-sm italic text-cd-txt">
          &ldquo;{problem.frictionQuote}&rdquo;
        </blockquote>
      )}
      {problem.businessImpact && (
        <p className="mt-4 text-sm">
          <span className="font-semibold text-cd-txt">Impact: </span>
          <span className="text-cd-shade">{problem.businessImpact}</span>
        </p>
      )}
      {showRecommendedFix && problem.recommendedFix && (
        <p className="mt-2 text-sm">
          <span className="font-semibold text-cd-cta">Direction: </span>
          <span className="text-cd-shade">{problem.recommendedFix}</span>
        </p>
      )}
    </article>
  );
}
