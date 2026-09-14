import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import CaseStudy, { getCategoryLabel } from "../../../types/CaseStudy";

type Props = {
  caseStudy: CaseStudy;
};

function VisualFallback({ title }: { title: string }) {
  return (
    <div className="flex h-full min-h-[220px] w-full items-end bg-cd-txt p-8 lg:min-h-full">
      <span className="font-display text-5xl font-bold text-white/20 md:text-7xl">
        {title.slice(0, 1)}
      </span>
    </div>
  );
}

export default function FeaturedCaseSection({ caseStudy }: Props) {
  const headline = caseStudy.oneLineThesis ?? caseStudy.excerpt;
  const meta = [
    getCategoryLabel(caseStudy.category),
    caseStudy.clientLabel !== caseStudy.title ? caseStudy.clientLabel : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <Section variant="default" className="section-rule">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="studio-eyebrow">Featured work</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
            Proof, not promises
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="font-mono text-xs uppercase tracking-wide text-cd-shade underline-offset-4 hover:text-cd-txt hover:underline"
        >
          All case studies
        </Link>
      </div>

      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="group block overflow-hidden rounded-xl border border-cd-border bg-white shadow-sm transition hover:shadow-md"
      >
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[220px] lg:min-h-[320px]">
            {caseStudy.heroImage ? (
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.heroImageAlt?.trim() || caseStudy.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <VisualFallback title={caseStudy.title} />
            )}
          </div>

          <div className="flex flex-col justify-center border-t border-cd-border p-8 md:p-10 lg:border-l lg:border-t-0">
            {meta && (
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                {meta}
              </p>
            )}
            {caseStudy.projectType && caseStudy.projectType.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {caseStudy.projectType.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cd-border bg-cd-bck2 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cd-shade"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
              {caseStudy.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cd-shade md:text-base">
              {headline}
            </p>
            {caseStudy.outcomeHighlight && (
              <p className="mt-5 border-l-2 border-cd-cta pl-4 text-sm text-cd-txt">
                {caseStudy.outcomeHighlight}
              </p>
            )}
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cd-txt">
              Read the case study
              <span
                className="transition group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </Section>
  );
}
