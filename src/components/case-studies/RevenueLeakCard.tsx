import { RevenueLeak } from "../../../types/CaseStudy";

type Props = {
  index: number;
  leak: RevenueLeak;
};

export default function RevenueLeakCard({ index, leak }: Props) {
  return (
    <article className="rounded-sm border border-cd-shade/20 bg-white p-8 shadow-sm">
      <p className="font-display text-4xl font-bold text-cd-cta/30">
        #{String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-4 font-display text-xl font-bold text-cd-txt">
        {leak.title}
      </h3>
      {leak.description && (
        <p className="mt-3 text-sm leading-relaxed text-cd-shade">
          {leak.description}
        </p>
      )}
      {leak.frictionQuote && (
        <blockquote className="mt-4 border-l-2 border-cd-accent pl-4 text-sm italic text-cd-txt">
          &ldquo;{leak.frictionQuote}&rdquo;
        </blockquote>
      )}
      {leak.businessImpact && (
        <p className="mt-4 text-sm">
          <span className="font-semibold text-cd-txt">Business impact: </span>
          <span className="text-cd-shade">{leak.businessImpact}</span>
        </p>
      )}
      {leak.recommendedFix && (
        <p className="mt-2 text-sm">
          <span className="font-semibold text-cd-cta">Recommended fix: </span>
          <span className="text-cd-shade">{leak.recommendedFix}</span>
        </p>
      )}
    </article>
  );
}
