import Link from "next/link";
import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";

type Props = {
  previous: CaseStudy | null;
  next: CaseStudy | null;
};

export default function CaseStudyProjectNav({ previous, next }: Props) {
  if (!previous && !next) {
    return null;
  }

  return (
    <Section variant="dark" className="border-t border-white/10">
      <div className="grid gap-8 md:grid-cols-2">
        {previous ? (
          <Link
            href={`/case-studies/${previous.slug}`}
            className="group block rounded-sm border border-white/10 p-6 transition hover:border-white/30"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              ← Previous project
            </p>
            <p className="mt-2 font-display text-xl font-bold group-hover:underline">
              {previous.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="group block rounded-sm border border-white/10 p-6 text-right transition hover:border-white/30 md:col-start-2"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Next project →
            </p>
            <p className="mt-2 font-display text-xl font-bold group-hover:underline">
              {next.title}
            </p>
          </Link>
        ) : null}
      </div>
    </Section>
  );
}
