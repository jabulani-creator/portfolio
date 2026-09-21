import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
  /** Override default "revenue engines" heading (e.g. church case studies) */
  enginesTitle?: string;
};

export default function BusinessEnginesSection({ story, enginesTitle }: Props) {
  if (!story.revenueEngines?.length) return null;

  const count = story.revenueEngines.length;
  const heading =
    enginesTitle ??
    `${count} revenue engine${count === 1 ? "" : "s"}`;

  return (
    <Section variant="default" id="cs-business">
      <p className="studio-eyebrow">The business</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{heading}</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {story.revenueEngines.map((engine) => (
          <article key={engine.label} className="studio-card text-center">
            <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              {engine.detail}
            </p>
            <p className="mt-3 text-lg font-bold uppercase tracking-tight text-cd-txt">
              {engine.label}
            </p>
          </article>
        ))}
      </div>
      {story.businessInsight && (
        <p className="mt-10 max-w-2xl border-l-2 border-cd-txt pl-5 text-base leading-relaxed text-cd-shade">
          {story.businessInsight}
        </p>
      )}
    </Section>
  );
}
