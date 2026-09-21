import Section from "@/components/ui/Section";

type Props = {
  diagnosticTurnaround?: string;
};

export default function StartProjectTimingSection({
  diagnosticTurnaround = "~1 week",
}: Props) {
  return (
    <Section variant="default">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="studio-card">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Typical timing
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cd-txt">
            Typically {diagnosticTurnaround} for a diagnostic once scope is agreed.
          </p>
          <p className="mt-2 text-sm text-cd-shade">
            Build timelines depend on scope and complexity.
          </p>
        </div>
        <div className="studio-card">
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Investment
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cd-txt">
            Scoped after we understand the work.
          </p>
          <p className="mt-2 text-sm text-cd-shade">
            You&apos;ll receive a clear quotation before anything begins.
          </p>
        </div>
      </div>
    </Section>
  );
}
