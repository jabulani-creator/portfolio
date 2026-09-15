import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";
import CaseStudy from "../../../../types/CaseStudy";

type Props = {
  story: CaseStudyStoryLayer;
  caseStudy: Pick<CaseStudy, "role">;
};

export default function CaseStudyRoleStrip({ story, caseStudy }: Props) {
  const titles = story.roleTitles?.trim() || caseStudy.role?.trim();
  const steps = story.roleSteps?.trim();
  if (!titles && !steps) return null;

  return (
    <Section variant="default" id="cs-role">
      <p className="studio-eyebrow">My role</p>
      {titles && (
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-cd-txt">
          {titles}
        </p>
      )}
      {steps && (
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-cd-shade">
          {steps}
        </p>
      )}
    </Section>
  );
}
