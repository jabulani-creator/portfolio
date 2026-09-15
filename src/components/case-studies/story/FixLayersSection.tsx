import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
};

export default function FixLayersSection({ story }: Props) {
  if (!story.fixLayers?.length) return null;

  return (
    <Section variant="default" id="cs-fix-layers">
      <p className="studio-eyebrow">So what needs fixing?</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Not just a website
      </h2>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
        {story.fixLayers.map((layer, i) => (
          <span key={layer} className="flex items-center gap-2 md:gap-3">
            <span className="studio-card py-2 text-center text-xs font-semibold uppercase tracking-wide text-cd-txt md:text-sm">
              {layer}
            </span>
            {i < story.fixLayers!.length - 1 && (
              <span className="font-mono text-cd-shade" aria-hidden>
                +
              </span>
            )}
          </span>
        ))}
      </div>
      {story.fixFootnote && (
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-cd-shade">
          {story.fixFootnote}
        </p>
      )}
    </Section>
  );
}
