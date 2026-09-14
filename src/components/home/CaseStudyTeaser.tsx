import Link from "next/link";
import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";

type Props = {
  caseStudy: CaseStudy | null;
};

export default function CaseStudyTeaser({ caseStudy }: Props) {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt md:text-3xl">
        Proof on real work
      </h2>

      {caseStudy ? (
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-cd-cta">
            Case study
          </p>
          <h3 className="mt-2 text-xl font-semibold text-cd-txt">
            {caseStudy.title}
          </h3>
          {caseStudy.contextSummary && (
            <p className="mt-1 text-sm text-cd-shade">
              {caseStudy.contextSummary}
            </p>
          )}
          <p className="mt-4 leading-relaxed text-cd-shade">
            {caseStudy.excerpt}
          </p>
          <div className="mt-6 grid gap-3 text-sm text-cd-txt sm:grid-cols-5">
            {(
              [
                ["Observation", caseStudy.observation],
                ["Evidence", caseStudy.evidence],
                ["Decision", caseStudy.decision],
                ["Implementation", caseStudy.implementation],
                ["Outcome", caseStudy.outcome],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="rounded border border-cd-shade/30 p-3">
                <p className="font-semibold text-cd-cta">{label}</p>
                <p className="mt-1 line-clamp-4 text-cd-shade">{value}</p>
              </div>
            ))}
          </div>
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="mt-6 inline-block text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
          >
            Read the full case study →
          </Link>
        </div>
      ) : (
        <div className="mt-6 rounded border border-dashed border-cd-shade/40 p-6">
          <p className="font-medium text-cd-txt">Case studies</p>
          <p className="mt-2 leading-relaxed text-cd-shade">
            Published project write-ups live on the work page — observation,
            evidence, decision, implementation, and outcome.
          </p>
          <Link
            href="/case-studies"
            className="mt-4 inline-block text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
          >
            Case studies →
          </Link>
        </div>
      )}
    </Section>
  );
}
