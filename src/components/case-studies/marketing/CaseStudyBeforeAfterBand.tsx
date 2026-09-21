import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  marketing: CaseStudyPageModel;
};

export default function CaseStudyBeforeAfterBand({ marketing }: Props) {
  return (
    <CaseStudyMarketingSection eyebrow="Shift" title="Before and after">
      <div className="studio-card grid gap-10 md:grid-cols-2">
        <div>
          <p className="studio-eyebrow">Before</p>
          <ul className="mt-4 space-y-3">
            {marketing.beforeColumn.map((item) => (
              <li
                key={item}
                className="border-l border-cd-border pl-4 text-sm leading-relaxed text-cd-shade"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="studio-eyebrow">After</p>
          <ul className="mt-4 space-y-3">
            {marketing.afterColumn.map((item) => (
              <li
                key={item}
                className="border-l-2 border-cd-txt pl-4 text-sm font-medium leading-relaxed text-cd-txt"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CaseStudyMarketingSection>
  );
}
