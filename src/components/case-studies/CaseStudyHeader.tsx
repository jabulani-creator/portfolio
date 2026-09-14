import Image from "next/image";
import CaseStudy, {
  getCategoryLabel,
  getEngagementTypeLabel,
} from "../../../types/CaseStudy";

type Props = {
  caseStudy: CaseStudy;
};

export default function CaseStudyHeader({ caseStudy }: Props) {
  const meta = [
    caseStudy.clientLabel &&
    caseStudy.clientLabel !== caseStudy.title
      ? caseStudy.clientLabel
      : null,
    caseStudy.role,
    caseStudy.context,
    caseStudy.period,
    caseStudy.engagementDuration,
  ]
    .filter(Boolean)
    .join(" · ");

  const engagementNote = getEngagementTypeLabel(caseStudy.engagementType);

  return (
    <header className="section-rule border-b border-cd-border bg-white">
      <div className="mx-auto w-11/12 max-w-6xl py-16 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="mono-index">{getCategoryLabel(caseStudy.category)}</p>
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold uppercase tracking-wide text-cd-txt underline-offset-4 hover:underline"
            >
              View live site ↗
            </a>
          )}
        </div>
        <h1 className="studio-headline mt-6 max-w-4xl">{caseStudy.title}</h1>
        {(caseStudy.oneLineThesis || caseStudy.excerpt) && (
          <p className="studio-body mt-6 max-w-2xl">
            {caseStudy.oneLineThesis ?? caseStudy.excerpt}
          </p>
        )}
        {meta && (
          <p className="mt-8 font-mono text-xs text-cd-shade">{meta}</p>
        )}
        {engagementNote && (
          <p className="mt-3 font-mono text-[10px] text-cd-shade/90">
            {engagementNote}
          </p>
        )}
        {caseStudy.projectType && caseStudy.projectType.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.projectType.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-cd-border bg-cd-bck2 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-cd-shade"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {caseStudy.heroImage && (
          <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-xl border border-cd-border">
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.heroImageAlt?.trim() || caseStudy.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}
      </div>
    </header>
  );
}
