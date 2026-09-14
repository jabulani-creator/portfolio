import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { getCaseStudies } from "@/lib/content/queries/caseStudies";
import WorkCard from "@/components/case-studies/WorkCard";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "Case studies and digital work — business diagnostics, builds, and strategy documented as evidence.",
});

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <>
      <Section variant="default" className="pt-20 md:pt-28">
        <p className="studio-eyebrow">Work</p>
        <h1 className="studio-headline mt-4">Selected projects</h1>
        <p className="studio-body mt-6 max-w-2xl">
          Each project is a story: the business, the investigation, the decision,
          what was built, and what changed — not a portfolio thumbnail grid.
        </p>
      </Section>

      {caseStudies.length > 0 ? (
        <Section variant="light" bleed className="pb-20">
          <div className="mx-auto w-11/12 max-w-6xl space-y-12 md:space-y-16">
            {caseStudies.map((study) => (
              <WorkCard key={study._id} caseStudy={study} size="large" />
            ))}
          </div>
        </Section>
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
              href="/start-here"
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
