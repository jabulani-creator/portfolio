import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";
import { getLeaksForDisplay, getProblemTriad } from "@/lib/caseStudyVisualHelpers";

type Props = {
  caseStudy: Pick<
    CaseStudy,
    "problems" | "revenueLeaks" | "oneLineThesis" | "strategicThesis"
  >;
  sectionId?: string;
};

const triadMeta = [
  { index: "01", label: "Find it", fallback: "Customers struggle to discover you." },
  { index: "02", label: "Understand it", fallback: "The offer stays unclear on arrival." },
  { index: "03", label: "Act on it", fallback: "The next step is hidden or manual." },
] as const;

export default function ProblemTriadSection({
  caseStudy,
  sectionId = "cs-problem",
}: Props) {
  const problems = getLeaksForDisplay(caseStudy, 3);
  const triad = getProblemTriad(problems);
  const cards = [
    { meta: triadMeta[0], problem: triad.find },
    { meta: triadMeta[1], problem: triad.understand },
    { meta: triadMeta[2], problem: triad.act },
  ];

  const pullQuote =
    caseStudy.strategicThesis?.trim() ||
    caseStudy.oneLineThesis?.trim() ||
    "People were interested — but the digital journey wasn't helping them decide.";

  return (
    <Section variant="default" id={sectionId}>
      <p className="studio-eyebrow">The problem</p>
      <blockquote className="mt-4 max-w-3xl border-l-2 border-cd-txt pl-5 text-lg font-medium leading-relaxed text-cd-txt md:text-xl">
        {pullQuote}
      </blockquote>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map(({ meta, problem }) => (
          <article key={meta.index} className="studio-card flex flex-col">
            <p className="mono-index">[ {meta.index} ]</p>
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-cd-txt">
              {meta.label}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cd-shade">
              {problem?.title ?? meta.fallback}
            </p>
            {problem?.description && (
              <p className="mt-3 text-xs leading-relaxed text-cd-shade/90">
                {problem.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
