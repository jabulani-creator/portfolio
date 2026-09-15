import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
};

export default function RecommendationSection({ story }: Props) {
  if (!story.recommendationHeadline?.trim()) return null;

  return (
    <Section variant="light" id="cs-recommendation" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">The recommendation</p>
      <h2 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight text-cd-txt md:text-3xl">
        {story.recommendationHeadline}
      </h2>
    </Section>
  );
}
