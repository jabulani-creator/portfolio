import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  marketing: CaseStudyPageModel;
};

export default function CaseStudyApproachSection({ marketing }: Props) {
  return (
    <CaseStudyMarketingSection
      id="cs-approach"
      eyebrow="Method"
      title="How this was approached"
      intro={marketing.approachTitle}
      variant="light"
    >
      <ol className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,10rem),1fr))]">
        {marketing.approachSteps.map((step, i) => (
          <li key={step.name} className="studio-card">
            <p className="mono-index">[ {String(i + 1).padStart(2, "0")} ]</p>
            <p className="mt-3 font-semibold text-cd-txt">{step.name}</p>
            <p className="mt-2 text-xs leading-relaxed text-cd-shade">{step.detail}</p>
          </li>
        ))}
      </ol>
    </CaseStudyMarketingSection>
  );
}
