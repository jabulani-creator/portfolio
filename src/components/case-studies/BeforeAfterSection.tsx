import Section from "@/components/ui/Section";
import { BeforeAfter } from "../../../types/CaseStudy";
import { parseFlowLines } from "@/lib/caseStudyVisualHelpers";
import JourneyFlowCompare from "./JourneyFlowCompare";

type Props = {
  beforeAfter: BeforeAfter;
  sectionId?: string;
};

export default function BeforeAfterSection({
  beforeAfter,
  sectionId = "cs-impact",
}: Props) {
  const items =
    beforeAfter.items?.filter(
      (item) => item.before?.trim() || item.after?.trim()
    ) ?? [];

  if (!items.length) {
    return null;
  }

  return (
    <Section variant="light" id={sectionId} className="py-14 md:py-20">
      <p className="studio-eyebrow">Before → after</p>
      <h2 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
        {beforeAfter.headline?.trim() || "How the journey changed"}
      </h2>
      <ul className="mt-8 space-y-6">
        {items.map((item, index) => {
          const flowReady =
            parseFlowLines(item.before).length > 1 ||
            parseFlowLines(item.after).length > 1;

          if (flowReady) {
            return (
              <JourneyFlowCompare
                key={`${item.label ?? "row"}-${index}`}
                rowLabel={item.label}
                before={item.before}
                after={item.after}
              />
            );
          }

          return (
            <li
              key={`${item.label ?? "row"}-${index}`}
              className="studio-card grid gap-4 md:grid-cols-2 md:gap-0 md:divide-x md:divide-cd-border"
            >
              {item.label && (
                <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade md:col-span-2 md:px-6 md:pt-6">
                  {item.label}
                </p>
              )}
              <div className="md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                  Before
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-cd-shade">
                  {item.before}
                </p>
              </div>
              <div className="border-t border-cd-border md:border-t-0 md:p-6">
                <p className="font-mono text-[10px] uppercase tracking-wide text-cd-txt">
                  After
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-cd-txt">
                  {item.after}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
