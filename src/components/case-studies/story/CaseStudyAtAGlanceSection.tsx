import Link from "next/link";
import Section from "@/components/ui/Section";
import { getCaseStudyAtAGlance } from "@/lib/content/caseStudyAtAGlance";

type Props = {
  slug: string;
};

export default function CaseStudyAtAGlanceSection({ slug }: Props) {
  const glance = getCaseStudyAtAGlance(slug);
  if (!glance) return null;

  return (
    <Section variant="default" className="section-rule border-b border-cd-border py-12 md:py-16">
      <p className="max-w-2xl text-lg font-semibold leading-snug text-cd-txt md:text-xl">
        {glance.headline}
      </p>

      {glance.columns && glance.columns.length > 0 && (
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {glance.columns.map((col, i) => (
            <div key={col.label} className="relative">
              <article className="studio-card h-full text-center">
                <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                  {col.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cd-txt">{col.items}</p>
              </article>
              {i < glance.columns!.length - 1 && (
                <span
                  className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-cd-border md:inline"
                  aria-hidden
                >
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            Problem
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cd-shade">{glance.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
            What I built
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cd-shade">{glance.built}</p>
        </div>
      </div>

      {glance.roleLine && (
        <p className="mt-8 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
          {glance.roleLine}
        </p>
      )}

      <Link
        href="#cs-full-diagnostic"
        className="mt-8 inline-block text-sm font-semibold text-cd-txt underline-offset-4 hover:underline"
      >
        View full case study →
      </Link>
    </Section>
  );
}
