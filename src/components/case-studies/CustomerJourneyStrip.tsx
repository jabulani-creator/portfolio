import Section from "@/components/ui/Section";

type Props = {
  journey: string;
};

export default function CustomerJourneyStrip({ journey }: Props) {
  const steps = journey.split("→").map((s) => s.trim());

  return (
    <Section variant="light" className="py-12">
      <p className="studio-eyebrow">Customer journey</p>
      <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-4">
        {steps.map((step, i) => (
          <span key={`${step}-${i}`} className="flex items-center gap-2 md:gap-4">
            <span className="rounded-sm bg-cd-cta/10 px-3 py-2 text-sm font-semibold text-cd-cta">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="text-cd-shade" aria-hidden>
                →
              </span>
            )}
          </span>
        ))}
      </div>
    </Section>
  );
}
