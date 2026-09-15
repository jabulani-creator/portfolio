import Section from "@/components/ui/Section";
import CaseStudy, { getCategoryLabel } from "../../../types/CaseStudy";
import {
  frictionMeterLabel,
  frictionScore,
  getLeaksForDisplay,
  getPrimaryOpportunity,
} from "@/lib/caseStudyVisualHelpers";

type Props = {
  caseStudy: CaseStudy;
};

export default function DiagnosticSnapshotSection({ caseStudy }: Props) {
  const leaks = getLeaksForDisplay(caseStudy, 4);
  const opportunity = getPrimaryOpportunity(caseStudy);
  const engines =
    caseStudy.businessContext?.audiences?.slice(0, 4) ??
    caseStudy.projectType?.slice(0, 4) ??
    [];

  if (!leaks.length && !opportunity && !engines.length) {
    return null;
  }

  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-10 md:py-14">
      <div className="studio-card overflow-hidden p-0">
        <div className="border-b border-cd-border px-6 py-5 md:px-8">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            {getCategoryLabel(caseStudy.category)}
          </p>
          <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-cd-txt md:text-2xl">
            {caseStudy.title}
          </h2>
        </div>
        <div className="grid gap-8 px-6 py-8 md:grid-cols-2 md:px-8">
          {engines.length > 0 && (
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                Context
              </p>
              <ul className="mt-4 space-y-2">
                {engines.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-cd-txt"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cd-txt" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {leaks.length > 0 && (
            <div className={engines.length ? "" : "md:col-span-2"}>
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                Primary friction
              </p>
              <ul className="mt-4 space-y-4">
                {leaks.slice(0, 4).map((problem, index) => {
                  const score = frictionScore(problem, index);
                  return (
                    <li key={problem.title ?? index}>
                      <div className="flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                        <span>{frictionMeterLabel(problem)}</span>
                        <span className="text-cd-txt">{score}/10</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full bg-cd-bck2">
                        <div
                          className="h-full bg-cd-txt transition-all"
                          style={{ width: `${score * 10}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        {opportunity && (
          <div className="border-t border-cd-border bg-cd-bck2 px-6 py-5 md:px-8">
            <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              Primary opportunity
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-cd-txt md:text-base">
              → {opportunity}
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}
