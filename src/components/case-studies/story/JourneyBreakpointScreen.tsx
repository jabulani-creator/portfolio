import Section from "@/components/ui/Section";
import type {
  CaseStudyStoryLayer,
  JourneyStepStatus,
} from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
};

function statusGlyph(status?: JourneyStepStatus): string {
  switch (status) {
    case "ok":
      return "✓";
    case "warn":
      return "⚠";
    case "critical":
      return "●";
    default:
      return "·";
  }
}

function statusClass(status?: JourneyStepStatus): string {
  switch (status) {
    case "ok":
      return "text-cd-txt";
    case "warn":
      return "text-cd-shade";
    case "critical":
      return "text-cd-txt font-bold";
    default:
      return "text-cd-shade";
  }
}

export default function JourneyBreakpointScreen({ story }: Props) {
  if (!story.journeySteps?.length) return null;

  return (
    <Section variant="default" id="cs-journey-breaks">
      <p className="studio-eyebrow">The diagnostic</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Where the journey breaks
      </h2>
      <div className="mt-10 max-w-md font-mono text-xs uppercase tracking-wide md:text-sm">
        {story.journeySteps.map((step, index) => (
          <div key={step.label}>
            <div className="flex items-start gap-4">
              <span
                className={`mt-1 w-4 shrink-0 text-center ${statusClass(step.status)}`}
                aria-hidden
              >
                {statusGlyph(step.status)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-cd-txt">{step.label}</p>
                {step.note && (
                  <p className="mt-1 normal-case text-[11px] leading-snug text-cd-shade">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
            {index < story.journeySteps!.length - 1 && (
              <p className="my-2 pl-4 text-cd-border" aria-hidden>
                ↓
              </p>
            )}
          </div>
        ))}
      </div>
      {story.journeyFootnote && (
        <p className="mt-8 max-w-xl text-sm text-cd-shade">{story.journeyFootnote}</p>
      )}
    </Section>
  );
}
