import Section from "@/components/ui/Section";

const steps = [
  { label: "Discover", friction: true },
  { label: "Evaluate", friction: true },
  { label: "Contact", friction: true },
  { label: "Convert", friction: false },
  { label: "Return", friction: false },
];

export default function OfferJourneyVisual() {
  return (
    <Section variant="default" className="py-12 md:py-14">
      <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
        Where friction shows up
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">
        {steps.map((step, i) => (
          <span key={step.label} className="flex items-center gap-2 md:gap-3">
            <span
              className={`rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-wide md:text-sm ${
                step.friction
                  ? "border-cd-cta/40 bg-cd-cta/5 text-cd-txt"
                  : "border-cd-border bg-cd-bck2 text-cd-shade"
              }`}
            >
              {step.label}
            </span>
            {i < steps.length - 1 && (
              <span className="text-cd-border" aria-hidden>
                ↓
              </span>
            )}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-cd-shade">
        Highlighted stages are where investigations most often find breakdowns.
      </p>
    </Section>
  );
}
