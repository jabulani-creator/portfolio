import Section from "@/components/ui/Section";
import { getLeaksForDisplay, parseJourneySteps } from "@/lib/caseStudyVisualHelpers";
import CaseStudy from "../../../types/CaseStudy";

type Props = {
  caseStudy: Pick<CaseStudy, "customerJourney" | "problems" | "revenueLeaks">;
  sectionId?: string;
};

export default function JourneyFrictionScreen({
  caseStudy,
  sectionId = "cs-journey",
}: Props) {
  const journey = caseStudy.customerJourney?.trim();
  if (!journey) return null;

  const steps = parseJourneySteps(journey);
  const problems = getLeaksForDisplay(caseStudy, 3);
  const frictionByStep = steps.map((_, index) => {
    if (index === 0) return undefined;
    const problem = problems[Math.min(index - 1, problems.length - 1)];
    return problem?.title;
  });

  const frictionCount = frictionByStep.filter(Boolean).length;

  return (
    <Section variant="light" id={sectionId} className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">Customer journey</p>
      <div className="mt-8 flex flex-col items-start gap-0 font-mono text-xs uppercase tracking-wide md:text-sm">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="flex w-full max-w-md flex-col">
            <div className="flex items-stretch gap-4">
              <div className="flex flex-col items-center">
                <span className="rounded-full border border-cd-border bg-white px-4 py-2 text-cd-txt">
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <span className="my-1 text-cd-shade" aria-hidden>
                    ↓
                  </span>
                )}
              </div>
              {frictionByStep[index] && (
                <div className="mb-4 flex flex-1 items-center border-l-2 border-cd-txt pl-4">
                  <p className="normal-case text-[11px] leading-snug text-cd-shade md:text-xs">
                    <span className="font-semibold text-cd-txt">⚠ </span>
                    {frictionByStep[index]}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {frictionCount > 0 && (
        <p className="mt-8 max-w-xl text-sm text-cd-shade">
          {frictionCount === 1
            ? "One major friction point was preventing high-intent visitors from progressing."
            : `${frictionCount} friction points were preventing high-intent visitors from progressing.`}
        </p>
      )}
    </Section>
  );
}
