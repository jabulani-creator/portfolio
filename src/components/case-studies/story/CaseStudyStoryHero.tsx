import Image from "next/image";
import CaseStudy, { getCategoryLabel } from "../../../../types/CaseStudy";
import type { CaseStudyStoryLayer } from "@/lib/content/caseStudyStoryContent";

type Props = {
  caseStudy: CaseStudy;
  story: CaseStudyStoryLayer;
};

function MetaCell({ label, value }: { label: string; value?: string | null }) {
  if (!value?.trim()) return null;
  return (
    <div className="px-4 py-6 text-center md:px-6 md:py-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
        {label}
      </p>
      <p className="mt-3 text-xs font-bold uppercase leading-snug tracking-wide text-white md:text-sm">
        {value}
      </p>
    </div>
  );
}

export default function CaseStudyStoryHero({ caseStudy, story }: Props) {
  const hook =
    story.heroHook?.trim() ||
    caseStudy.oneLineThesis?.trim() ||
    caseStudy.excerpt;
  const contextLine =
    caseStudy.context?.trim() ||
    getCategoryLabel(caseStudy.category) ||
    caseStudy.projectType?.slice(0, 2).join(" · ");
  const periodLine =
    caseStudy.period?.trim() || caseStudy.engagementDuration?.trim();
  const roleLine = caseStudy.role?.trim() || story.roleTitles?.trim();
  const hasMeta = Boolean(roleLine || contextLine || periodLine);

  return (
    <header className="relative min-h-[min(88vh,920px)] w-full overflow-hidden bg-cd-txt">
      {caseStudy.heroImage ? (
        <>
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.heroImageAlt?.trim() || caseStudy.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-cd-txt/55"
            aria-hidden
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-cd-txt" aria-hidden />
      )}

      <div className="relative z-10 flex min-h-[min(88vh,920px)] flex-col text-white pt-4">
        <div className="mx-auto flex w-11/12 max-w-4xl flex-1 flex-col items-center justify-center px-2 py-10 text-center md:py-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
            {getCategoryLabel(caseStudy.category)}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            {caseStudy.title}
          </h1>
          {hook && (
            <p className="mt-6 max-w-2xl text-lg font-medium italic leading-relaxed text-white/90 md:text-xl">
              {hook}
            </p>
          )}
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-mono text-[11px] uppercase tracking-wide text-white/60 underline-offset-4 hover:text-white hover:underline"
            >
              View live site ↗
            </a>
          )}
        </div>

        {hasMeta && (
          <div className="mt-auto border-t border-white/15 bg-cd-txt/30 backdrop-blur-sm">
            <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <MetaCell label="Role" value={roleLine} />
              <MetaCell label="Context" value={contextLine} />
              <MetaCell label="Period" value={periodLine} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
