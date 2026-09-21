import type CaseStudy from "../../../../types/CaseStudy";
import { getCaseStudyProblemStories } from "@/lib/content/problemStories";
import ProblemStoryCatalogCard from "@/components/problem-stories/ProblemStoryCatalogCard";
import { CaseStudyMarketingSection } from "./caseStudyMarketingSection";

type Props = {
  caseStudy: CaseStudy;
};

export default function CaseStudyProblemStoriesBand({ caseStudy }: Props) {
  const stories = getCaseStudyProblemStories(caseStudy);
  if (!stories.length) return null;

  return (
    <CaseStudyMarketingSection
      id="cs-problems-solved"
      eyebrow="On the ground"
      title="Problems I solved"
      intro="Real workflows from this project — what was broken, what we changed, and what was hard to get right."
      variant="light"
    >
      <div className="max-w-3xl space-y-0">
        {stories.map((story, index) => (
          <ProblemStoryCatalogCard
            key={story.globalKey}
            story={story}
            index={index}
            variant="band"
          />
        ))}
      </div>
    </CaseStudyMarketingSection>
  );
}
