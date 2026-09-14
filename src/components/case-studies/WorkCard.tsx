import Link from "next/link";
import Image from "next/image";
import CaseStudy, {
  getCategoryLabel,
  getFirstPrimaryMapOutcome,
} from "../../../types/CaseStudy";

type Props = {
  caseStudy: CaseStudy;
  size?: "default" | "large";
};

function PlaceholderVisual({ title }: { title: string }) {
  return (
    <div className="flex h-full min-h-[280px] w-full items-end border border-cd-border bg-cd-bck p-8 md:min-h-[360px]">
      <span className="font-mono text-4xl font-bold text-cd-border md:text-6xl">
        {title.slice(0, 1)}
      </span>
    </div>
  );
}

export default function WorkCard({ caseStudy, size = "default" }: Props) {
  const tags =
    caseStudy.projectTags ??
    [getCategoryLabel(caseStudy.category), caseStudy.role]
      .filter(Boolean)
      .join(" · ");

  const mapOutcome = getFirstPrimaryMapOutcome(caseStudy);
  const highlight =
    caseStudy.outcomeHighlight ??
    (mapOutcome ? mapOutcome.slice(0, 120) : undefined);
  const isLarge = size === "large";

  return (
    <article className="group overflow-hidden rounded-xl border border-cd-border bg-white transition hover:shadow-md">
      <Link href={`/case-studies/${caseStudy.slug}`} className="block">
        <div className={`relative ${isLarge ? "min-h-[280px]" : "min-h-[200px]"}`}>
          {caseStudy.heroImage ? (
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.heroImageAlt?.trim() || caseStudy.title}
              fill
              className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : (
            <PlaceholderVisual title={caseStudy.title} />
          )}
        </div>
        <div className="border-t border-cd-border p-6 md:p-8">
          <p className="mono-index">
            {getCategoryLabel(caseStudy.category)}
            {caseStudy.period ? ` · ${caseStudy.period}` : ""}
            {caseStudy.engagementDuration
              ? ` · ${caseStudy.engagementDuration}`
              : ""}
          </p>
          <h2
            className={`mt-3 font-bold tracking-tight ${
              isLarge ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {caseStudy.title}
          </h2>
          {(caseStudy.oneLineThesis || caseStudy.excerpt) && (
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">
              {caseStudy.oneLineThesis ?? caseStudy.excerpt}
            </p>
          )}
          {highlight && (
            <p className="mt-4 font-mono text-xs text-cd-shade">{highlight}</p>
          )}
          {tags && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-wide text-cd-shade/80">
              {tags}
            </p>
          )}
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wide">
            View case study →
          </span>
        </div>
      </Link>
    </article>
  );
}
