import Link from "next/link";
import Section from "@/components/ui/Section";
import type { CaseStudyExecutiveSummary } from "@/lib/content/caseStudyStoryContent";

type Props = {
  summary: CaseStudyExecutiveSummary;
};

export default function CaseStudyExecutiveSummarySection({ summary }: Props) {
  return (
    <Section variant="default" id="cs-summary" className="section-rule">
      <p className="studio-eyebrow">The business case</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        {summary.title}
      </h2>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-cd-shade md:text-base">
        {summary.situation}
      </p>
      <p className="mt-4 max-w-3xl font-medium text-cd-txt">{summary.problem}</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            What I investigated
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cd-shade">
            {summary.investigated.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-cd-txt">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            What I built
          </h3>
          <div className="mt-4 space-y-5">
            {summary.built.map((block) => (
              <div key={block.heading}>
                <p className="text-sm font-bold text-cd-txt">{block.heading}</p>
                <ul className="mt-2 space-y-1 text-sm text-cd-shade">
                  {block.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="studio-card mt-10 border-l-2 border-l-cd-txt">
        <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          The result
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cd-txt md:text-base">
          {summary.result}
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-cd-shade">
          {summary.roleLine}
        </p>
      </div>

      <Link
        href="#cs-full-diagnostic"
        className="mt-8 inline-block text-sm font-semibold text-cd-txt underline-offset-4 hover:underline"
      >
        View the full investigation →
      </Link>
    </Section>
  );
}
