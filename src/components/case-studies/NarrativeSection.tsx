import Section from "@/components/ui/Section";

type Props = {
  label: string;
  body: string;
  step: number;
  sectionId?: string;
  variant?: "default" | "light" | "dark" | "wide";
};

export default function NarrativeSection({
  label,
  body,
  step,
  sectionId,
  variant,
}: Props) {
  const band = variant ?? (step % 2 === 0 ? "light" : "default");

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
        <div>
          <h2 className="text-xl font-bold tracking-tight md:text-2xl">
            {label}
          </h2>
          <p className="mt-6 whitespace-pre-line leading-relaxed text-cd-shade">
            {body}
          </p>
        </div>
      </div>
    </Section>
  );
}
