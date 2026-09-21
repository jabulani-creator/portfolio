import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
  localTrustLine?: string;
};

export default function EditorialHeroSection({ primaryCta, localTrustLine }: Props) {
  return (
    <Section variant="default" className="pt-14 pb-8 md:pt-20 md:pb-10">
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cd-txt md:text-5xl lg:text-6xl">
        Get found. Get understood. Serve customers better.
      </h1>
      <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-cd-shade md:text-sm">
        Websites · Digital Systems · Automation
      </p>
      <p className="studio-body mt-5 max-w-2xl text-base md:text-lg">
        I help businesses and organisations improve how customers discover them,
        understand what they offer, and take the next step — through websites,
        digital systems, and automation.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryCta cta={primaryCta} variant="solid" className="w-full sm:w-auto" />
        <Link
          href="/case-studies"
          className="pill-btn-outline w-full text-center sm:w-auto"
        >
          See the work
        </Link>
      </div>
      {localTrustLine ? (
        <p className="mt-6 text-xs text-cd-shade">{localTrustLine}</p>
      ) : (
        <p className="mt-6 text-xs text-cd-shade">
          Based in Lusaka · Working with Zambian businesses and organisations
        </p>
      )}
    </Section>
  );
}
