import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
};

export default function OutcomeShiftTable({ story }: Props) {
  const rows = story.outcomeRows;
  if (!rows?.length) return null;

  return (
    <Section variant="light" id="cs-outcome" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">What changes?</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Before → after
      </h2>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-cd-border font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              <th className="py-3 pr-4 font-normal">Before</th>
              <th className="py-3 font-normal">After</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.before} className="border-b border-cd-border/60">
                <td className="py-4 pr-4 text-cd-shade">{row.before}</td>
                <td className="py-4 font-medium text-cd-txt">{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {story.impactTarget && (
        <div className="studio-card mt-10 border-l-2 border-l-cd-txt">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            {story.impactTarget.isProjection ? "Target · projection" : "Measured"}
          </p>
          <p className="mt-2 text-sm font-semibold text-cd-txt">
            {story.impactTarget.label}
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-cd-txt">
            {story.impactTarget.value}
          </p>
        </div>
      )}
    </Section>
  );
}
