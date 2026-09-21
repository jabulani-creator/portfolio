import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  marketing: CaseStudyPageModel;
};

export default function CaseStudyProblemBand({ marketing }: Props) {
  return (
    <CaseStudyMarketingSection
      id="cs-problem"
      eyebrow="Context"
      title="The problem"
      intro={marketing.problemTitle}
    >
      <div className="studio-card">
        <p className="studio-eyebrow">Channels in play</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {marketing.problemChannels.map((channel) => (
            <li
              key={channel}
              className="rounded-full bg-cd-bck2 px-4 py-2 text-sm font-medium text-cd-txt"
            >
              {channel}
            </li>
          ))}
        </ul>
        <p className="mt-8 border-l-2 border-cd-txt pl-5 text-base leading-relaxed text-cd-txt">
          {marketing.opportunity}
        </p>
      </div>
    </CaseStudyMarketingSection>
  );
}
