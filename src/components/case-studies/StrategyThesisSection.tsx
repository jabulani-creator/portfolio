import Section from "@/components/ui/Section";

type Props = {
  thesis: string;
  body?: string;
  sectionId?: string;
  step?: number;
};

export default function StrategyThesisSection({
  thesis,
  body,
  sectionId = "cs-decision",
  step,
}: Props) {
  return (
    <Section variant="default" id={sectionId}>
      {step != null && (
        <p className="mono-index">{String(step).padStart(2, "0")}</p>
      )}
      <p className="studio-eyebrow mt-2">Strategy</p>
      <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-cd-txt md:text-3xl">
        {thesis}
      </blockquote>
      {body?.trim() && (
        <p className="studio-body mt-8 max-w-3xl whitespace-pre-line">{body}</p>
      )}
    </Section>
  );
}
