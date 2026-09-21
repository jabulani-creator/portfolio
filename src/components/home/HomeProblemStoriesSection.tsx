import type CaseStudy from "../../../types/CaseStudy";
import { getHomeProblemStories } from "@/lib/content/problemStories";
import ProblemStoryCatalogCard from "@/components/problem-stories/ProblemStoryCatalogCard";
import Section from "@/components/ui/Section";

type Props = {
  caseStudies: CaseStudy[];
};

export default function HomeProblemStoriesSection({ caseStudies }: Props) {
  const stories = getHomeProblemStories(caseStudies);
  if (!stories.length) return null;

  return (
    <Section variant="default" className="section-rule border-y border-cd-border bg-white py-14 md:py-20">
      <p className="studio-eyebrow">On the ground</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-cd-txt md:text-4xl">
        Problems I&apos;ve solved
      </h2>
      <p className="studio-body mt-4 max-w-2xl">
        Short stories from client work — old process, what we built, and what changed.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stories.map((story, index) => (
          <ProblemStoryCatalogCard
            key={story.globalKey}
            story={story}
            index={index}
            variant="catalog"
          />
        ))}
      </div>
    </Section>
  );
}
