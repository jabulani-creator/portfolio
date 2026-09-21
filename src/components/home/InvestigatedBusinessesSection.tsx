import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";
import { orderHomeCaseStudies } from "@/lib/content/homeCaseStudyOrder";
import { getHomeCaseTeaser } from "@/lib/content/homeCaseStudyTeasers";

type Props = {
  caseStudies: CaseStudy[];
};

export default function InvestigatedBusinessesSection({ caseStudies }: Props) {
  const items = orderHomeCaseStudies(caseStudies);
  if (items.length === 0) return null;

  return (
    <Section variant="default" className="section-rule py-12 md:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
          Selected work
        </h2>
        <Link
          href="/case-studies"
          className="font-mono text-xs uppercase tracking-wide text-cd-shade underline-offset-4 hover:text-cd-txt hover:underline"
        >
          View all case studies →
        </Link>
      </div>
      <div className="space-y-12 md:space-y-16">
        {items.map((study) => {
          const teaser = getHomeCaseTeaser(study.slug);
          const headline =
            teaser?.selectedHeadline ??
            study.oneLineThesis ??
            study.excerpt ??
            study.title;
          const body = teaser?.selectedBody ?? teaser?.cardLine ?? "";
          return (
            <Link
              key={study._id}
              href={`/case-studies/${study.slug}`}
              className="group grid gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-cd-border bg-cd-bck2 lg:order-2">
                {study.heroImage ? (
                  <Image
                    src={study.heroImage}
                    alt={study.heroImageAlt?.trim() || study.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.01]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-display text-5xl font-bold text-cd-border">
                      {study.title.slice(0, 1)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center lg:order-1">
                <h3 className="font-display text-2xl font-bold text-cd-txt md:text-3xl">
                  {study.title}
                </h3>
                <p className="mt-3 text-lg font-medium leading-snug text-cd-txt">
                  {headline}
                </p>
                {body ? (
                  <p className="mt-3 text-sm leading-relaxed text-cd-shade md:text-base">
                    {body}
                  </p>
                ) : null}
                {teaser?.roleLine && (
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                    {teaser.roleLine}
                  </p>
                )}
                <span className="mt-6 text-sm font-semibold text-cd-txt">
                  View case study →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
