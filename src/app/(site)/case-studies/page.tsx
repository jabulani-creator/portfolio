import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { getCaseStudies } from "@/lib/content/queries/caseStudies";
import WorkCard from "@/components/case-studies/WorkCard";
import { buildPageMetadata } from "@/lib/seo";
import CaseStudy from "../../../../types/CaseStudy";
import { getHomeCaseTeaser } from "@/lib/content/homeCaseStudyTeasers";
import splitWork from "@/lib/content/splitCaseStudiesByWorkType";

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "Case studies, builds, and experiments — business problems investigated and digital systems shipped.",
});

function WorkGroup({
  title,
  eyebrow,
  description,
  studies,
}: {
  title: string;
  eyebrow: string;
  description: string;
  studies: CaseStudy[];
}) {
  if (!studies.length) return null;
  return (
    <Section variant="light" bleed className="pb-16 last:pb-20">
      <div className="mx-auto w-11/12 max-w-6xl">
        <p className="studio-eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl font-bold text-cd-txt md:text-3xl">
          {title}
        </h2>
        <p className="studio-body mt-4 max-w-2xl">{description}</p>
        <div className="mt-10 space-y-12 md:space-y-16">
          {studies.map((study) => {
            const teaser = getHomeCaseTeaser(study.slug);
            const enriched =
              teaser && !study.oneLineThesis
                ? { ...study, oneLineThesis: teaser.headline }
                : study;
            return (
              <WorkCard key={study._id} caseStudy={enriched} size="large" />
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();
  const { investigations, builds } = splitWork(caseStudies);

  return (
    <>
      <Section variant="default" className="pt-20 md:pt-28">
        <p className="studio-eyebrow">Work</p>
        <h1 className="studio-headline mt-4">Investigations & builds</h1>
        <p className="studio-body mt-6 max-w-2xl">
          Case studies show how I think. Builds show what shipped. Each entry
          starts with a business problem — not a service list.
        </p>
      </Section>

      {caseStudies.length > 0 ? (
        <>
          <WorkGroup
            eyebrow="Case studies"
            title="Businesses investigated"
            description="Diagnostics and strategy work — friction mapped before anything was built."
            studies={investigations}
          />
          <WorkGroup
            eyebrow="Builds"
            title="Digital products & platforms"
            description="Websites, platforms, and systems where the diagnosis led to implementation."
            studies={builds}
          />
        </>
      ) : (
        <Section variant="light">
          <div className="rounded-sm border border-dashed border-cd-shade/40 p-8">
            <h2 className="font-display text-xl font-bold text-cd-txt">
              Case studies coming soon
            </h2>
            <p className="studio-body mt-4">
              New project write-ups are on the way. In the meantime, book a
              diagnostic or read how the methodology works on the home page.
            </p>
            <Link
              href="/start-a-project"
              className="mt-6 inline-block text-sm font-semibold text-cd-cta hover:underline"
            >
              Start here →
            </Link>
          </div>
        </Section>
      )}
    </>
  );
}
