import Section from "@/components/ui/Section";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  story: CaseStudyStoryLayer;
};

export default function AudiencePersonasSection({ story }: Props) {
  if (!story.audiencePersonas?.length) return null;

  return (
    <Section variant="light" id="cs-audiences" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">The customer</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        {story.audiencePersonas.length} customers. {story.audiencePersonas.length} journeys.
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {story.audiencePersonas.map((persona) => (
          <article key={persona.label} className="studio-card">
            <h3 className="text-sm font-bold uppercase tracking-wide text-cd-txt">
              {persona.label}
            </h3>
            <p className="mt-4 text-sm italic text-cd-shade">
              &ldquo;{persona.question}&rdquo;
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
              Needs
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {persona.needs.map((need) => (
                <li
                  key={need}
                  className="rounded-full border border-cd-border bg-cd-bck2 px-2.5 py-0.5 text-xs text-cd-txt"
                >
                  {need}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {story.audienceFootnote && (
        <p className="mt-10 text-lg font-semibold text-cd-txt">{story.audienceFootnote}</p>
      )}
    </Section>
  );
}
