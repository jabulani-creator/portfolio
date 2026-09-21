import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  marketing: CaseStudyPageModel;
};

export default function CaseStudyExperiencesTable({ marketing }: Props) {
  return (
    <CaseStudyMarketingSection title={marketing.experiencesTitle} eyebrow="Platform">
      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr))]">
        {marketing.experiences.map((col, index) => (
          <article key={col.label} className="studio-card flex flex-col">
            <p className="mono-index">[ {String(index + 1).padStart(2, "0")} ]</p>
            <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-cd-txt">
              {col.label}
            </h3>
            <ul className="mt-4 flex-1 space-y-2 border-t border-cd-border pt-4">
              {col.items.map((item) => (
                <li key={item} className="text-sm text-cd-shade">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </CaseStudyMarketingSection>
  );
}
