import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  marketing: CaseStudyPageModel;
};

export default function CaseStudyWhatChangedSection({ marketing }: Props) {
  return (
    <CaseStudyMarketingSection id="cs-changed" eyebrow="Outcomes" title="What changed">
      <ul className="divide-y divide-cd-border rounded-xl border border-cd-border bg-white">
        {marketing.whatChanged.map((row) => (
          <li key={row.before} className="grid gap-4 p-6 md:grid-cols-2 md:gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                Before
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cd-shade">{row.before}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                After
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cd-txt">{row.after}</p>
            </div>
          </li>
        ))}
      </ul>
    </CaseStudyMarketingSection>
  );
}
