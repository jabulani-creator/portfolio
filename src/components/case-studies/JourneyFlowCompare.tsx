import { parseFlowLines } from "@/lib/caseStudyVisualHelpers";

type Props = {
  label: string;
  lines: string[];
  tone?: "before" | "after";
};

function FlowColumn({ label, lines, tone = "before" }: Props) {
  if (!lines.length) return null;
  const isAfter = tone === "after";

  return (
    <div className="md:p-6">
      <p
        className={`font-mono text-[10px] uppercase tracking-wide ${
          isAfter ? "text-cd-txt" : "text-cd-shade"
        }`}
      >
        {label}
      </p>
      <div className="mt-4 flex flex-col items-start gap-1 font-mono text-[11px] uppercase tracking-wide md:text-xs">
        {lines.map((line, index) => (
          <span key={`${line}-${index}`} className="flex flex-col items-start">
            <span
              className={`rounded-sm border px-3 py-1.5 normal-case ${
                isAfter
                  ? "border-cd-txt bg-cd-bck2 text-cd-txt"
                  : "border-cd-border bg-white text-cd-shade"
              }`}
            >
              {line}
            </span>
            {index < lines.length - 1 && (
              <span className="my-0.5 text-cd-shade" aria-hidden>
                ↓
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function JourneyFlowCompare({
  before,
  after,
  rowLabel,
}: {
  before?: string;
  after?: string;
  rowLabel?: string;
}) {
  const beforeLines = parseFlowLines(before);
  const afterLines = parseFlowLines(after);
  const useFlow = beforeLines.length > 1 || afterLines.length > 1;

  if (!useFlow) return null;

  return (
    <li className="studio-card grid gap-4 md:grid-cols-2 md:gap-0 md:divide-x md:divide-cd-border">
      {rowLabel && (
        <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade md:col-span-2 md:px-6 md:pt-6">
          {rowLabel}
        </p>
      )}
      <FlowColumn label="Before" lines={beforeLines} tone="before" />
      <FlowColumn label="After" lines={afterLines} tone="after" />
    </li>
  );
}
