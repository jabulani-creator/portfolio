import Section from "@/components/ui/Section";

type Props = {
  label: string;
  body: string;
  step: number;
  sectionId?: string;
  variant?: "default" | "light" | "dark" | "wide";
  collapseAfter?: number;
};

export default function CollapsibleNarrativeSection({
  label,
  body,
  step,
  sectionId,
  variant,
  collapseAfter = 360,
}: Props) {
  const trimmed = body.trim();
  if (!trimmed) return null;

  const band = variant ?? (step % 2 === 0 ? "light" : "default");
  const shouldCollapse = trimmed.length > collapseAfter;
  const preview = shouldCollapse
    ? `${trimmed.slice(0, collapseAfter).trim()}…`
    : trimmed;

  return (
    <Section
      variant={band}
      id={sectionId}
      className="scroll-mt-32 py-14 md:py-20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-12">
        <span className="mono-index shrink-0 md:w-16">
          {String(step).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">{label}</h2>
          <p className="mt-6 whitespace-pre-line leading-relaxed text-cd-shade">
            {preview}
          </p>
          {shouldCollapse && (
            <details className="mt-6 rounded-sm border border-cd-border bg-white px-5 py-4">
              <summary className="cursor-pointer font-mono text-xs uppercase tracking-wide text-cd-txt">
                Read full {label.toLowerCase()}
              </summary>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-cd-shade">
                {trimmed}
              </p>
            </details>
          )}
        </div>
      </div>
    </Section>
  );
}
