import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";
import {
  getHomeCaseTeaser,
  HOME_CASE_STUDY_ORDER,
} from "@/lib/content/homeCaseStudyTeasers";

type Props = {
  caseStudies: CaseStudy[];
};

function orderForHome(studies: CaseStudy[]): CaseStudy[] {
  const bySlug = new Map(studies.map((s) => [s.slug, s]));
  const ordered: CaseStudy[] = [];
  for (const slug of HOME_CASE_STUDY_ORDER) {
    const study = bySlug.get(slug);
    if (study) ordered.push(study);
  }
  for (const study of studies) {
    if (!ordered.some((s) => s.slug === study.slug)) ordered.push(study);
  }
  return ordered.slice(0, 3);
}

export default function InvestigatedBusinessesSection({ caseStudies }: Props) {
  const items = orderForHome(caseStudies);
  if (items.length === 0) return null;

  return (
    <Section variant="default" className="section-rule">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="studio-eyebrow">Proof, not promises</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Businesses I&apos;ve investigated
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="font-mono text-xs uppercase tracking-wide text-cd-shade underline-offset-4 hover:text-cd-txt hover:underline"
        >
          View all case studies
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((study) => {
          const teaser = getHomeCaseTeaser(study.slug);
          const headline =
            teaser?.headline ?? study.oneLineThesis ?? study.excerpt ?? study.title;
          return (
            <Link
              key={study._id}
              href={`/case-studies/${study.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-cd-border bg-white transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-cd-bck2">
                {study.heroImage ? (
                  <Image
                    src={study.heroImage}
                    alt={study.heroImageAlt?.trim() || study.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-end p-6">
                    <span className="font-display text-4xl font-bold text-cd-border">
                      {study.title.slice(0, 1)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                  {teaser?.badge ?? "CASE STUDY"}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-cd-txt">
                  {study.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cd-shade">
                  {headline}
                </p>
                {teaser?.question && (
                  <p className="mt-3 text-xs text-cd-shade">
                    <span className="font-semibold text-cd-txt">The question: </span>
                    {teaser.question}
                  </p>
                )}
                {teaser?.tags && (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                    {teaser.tags}
                  </p>
                )}
                <span className="mt-5 text-sm font-semibold text-cd-txt">
                  Read case study →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
