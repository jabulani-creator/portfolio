import Section from "@/components/ui/Section";
import { Investigation } from "../../../types/CaseStudy";

type Props = {
  investigation?: Investigation;
};

export default function InvestigationDetailSection({
  investigation,
}: Props) {
  if (!investigation?.sources?.length && !investigation?.findings?.length) {
    return null;
  }

  return (
    <div className="mx-auto w-11/12 max-w-6xl pb-8">
      {investigation.sources && investigation.sources.length > 0 && (
        <div className="mt-6">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Sources
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {investigation.sources.map((source) => (
              <li
                key={source}
                className="rounded-full border border-cd-border bg-white px-3 py-1 text-xs text-cd-shade"
              >
                {source}
              </li>
            ))}
          </ul>
        </div>
      )}
      {investigation.findings && investigation.findings.length > 0 && (
        <Section variant="default" className="!px-0 !py-8">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Key findings
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-cd-shade">
            {investigation.findings.map((finding) => (
              <li key={finding}>{finding}</li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
