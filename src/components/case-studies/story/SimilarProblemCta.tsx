import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import Link from "next/link";
import { PrimaryCta as PrimaryCtaType } from "../../../../types/SiteSettings";
import CaseStudy from "../../../../types/CaseStudy";

type Props = {
  primaryCta: PrimaryCtaType;
  next?: CaseStudy | null;
};

export default function SimilarProblemCta({ primaryCta, next }: Props) {
  return (
    <Section variant="default" className="section-rule pb-20">
      <div className="rounded-2xl bg-cd-txt px-8 py-14 text-center text-white md:px-16">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Have a similar problem?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">
          Your website might not be the problem. The customer journey might be.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCta cta={primaryCta} variant="inverse" />
        </div>
        {next && (
          <Link
            href={`/case-studies/${next.slug}`}
            className="mt-8 inline-block font-mono text-xs uppercase tracking-wide text-white/60 hover:text-white"
          >
            Next case study → {next.title}
          </Link>
        )}
      </div>
    </Section>
  );
}
