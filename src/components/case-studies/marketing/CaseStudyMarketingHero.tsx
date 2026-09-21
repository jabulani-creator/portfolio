import Image from "next/image";
import Link from "next/link";
import type CaseStudy from "../../../../types/CaseStudy";
import type { CaseStudyPageModel } from "../../../../types/CaseStudyV2";

type Props = {
  caseStudy: CaseStudy;
  marketing: CaseStudyPageModel;
};

export default function CaseStudyMarketingHero({ caseStudy, marketing }: Props) {
  return (
    <>
      <header className="relative min-h-[min(72vh,760px)] w-full overflow-hidden bg-cd-txt">
        {caseStudy.heroImage ? (
          <>
            <Image
              src={caseStudy.heroImage}
              alt={caseStudy.heroImageAlt?.trim() || caseStudy.title}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cd-txt via-cd-txt/70 to-cd-txt/35" />
          </>
        ) : (
          <div className="absolute inset-0 bg-cd-txt" aria-hidden />
        )}

        <div className="relative z-10 mx-auto flex min-h-[min(72vh,760px)] w-11/12 max-w-6xl flex-col justify-end pb-12 pt-28 md:pb-16 md:pt-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
            Case study
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            {caseStudy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-white/90 md:text-xl">
            {marketing.heroSubtitle}
          </p>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-wide text-white/55 md:text-xs">
            {marketing.roleLine}
          </p>
          {caseStudy.liveUrl && (
            <Link
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit rounded-full border border-white/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-cd-txt"
            >
              Visit live site ↗
            </Link>
          )}
        </div>
      </header>

      <div className="border-b border-cd-border bg-cd-bck2">
        <div className="mx-auto w-11/12 max-w-6xl py-12 md:py-14">
          <p className="studio-body max-w-2xl">{marketing.heroContext}</p>
          <p className="studio-eyebrow mt-8">Delivered</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {marketing.builtPills.map((pill) => (
              <li
                key={pill}
                className="rounded-full border border-cd-border bg-white px-4 py-2 text-xs font-medium text-cd-txt"
              >
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
