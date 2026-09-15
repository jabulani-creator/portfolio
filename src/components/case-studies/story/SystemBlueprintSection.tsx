import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
};

export default function SystemBlueprintSection({ story }: Props) {
  if (!story.blueprintMonospace?.trim()) return null;

  return (
    <Section variant="default" id="cs-blueprint">
      <p className="studio-eyebrow">The blueprint</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        System architecture
      </h2>
      <pre className="studio-card mt-8 overflow-x-auto p-6 font-mono text-[11px] leading-relaxed text-cd-txt md:text-xs">
        {story.blueprintMonospace}
      </pre>
    </Section>
  );
}
