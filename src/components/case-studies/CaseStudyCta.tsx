import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

export default function CaseStudyCta({ primaryCta }: Props) {
  return (
    <Section variant="default" className="section-rule">
      <div className="studio-card max-w-2xl bg-cd-txt text-white">
        <h2 className="text-xl font-bold md:text-2xl">
          Want this level of clarity for your business?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Book the diagnostic — scoped, priced, delivered in about a week.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <PrimaryCta cta={primaryCta} variant="inverse" />
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <Link
              href="/case-studies"
              className="text-xs text-white/60 hover:text-white"
            >
              ← All work
            </Link>
            <Link
              href="/digital-experience-diagnostic"
              className="text-xs text-white/60 hover:text-white"
            >
              Diagnostic scope →
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
