import Link from "next/link";
import Section from "@/components/ui/Section";
import TerminalPanel from "@/components/ui/TerminalPanel";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  productName: string;
  primaryCta: PrimaryCtaType;
  featuredSlug?: string;
};

export default function DiagnosticHeroSection({
  productName,
  primaryCta,
  featuredSlug = "emmasdale-sda-church",
}: Props) {
  const target = featuredSlug;

  return (
    <>
      {/* Mobile: copy + CTAs fit first screen; terminal is in the next block */}
      <Section
        variant="default"
        className="flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center pt-10 pb-8 lg:min-h-0 lg:block lg:pt-16 lg:pb-0"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="studio-eyebrow">{productName}</p>
            <h1 className="studio-headline mt-6">
              Don&apos;t start with the website.
            </h1>
            <p className="studio-body mt-6 max-w-lg">
              Start with the customer journey. Find where revenue leaks — then
              build only what the evidence supports.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryCta cta={primaryCta} variant="solid" className="w-full sm:w-auto" />
              <Link
                href={`/case-studies/${featuredSlug}`}
                className="pill-btn-outline w-full text-center sm:w-auto"
              >
                View Case Study
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <TerminalPanel target={target} />
          </div>
        </div>
      </Section>

      {/* Mobile: full terminal visible — scroll one beat, not clipped at viewport */}
      <section
        className="section-rule border-t border-cd-border bg-cd-bck2 pb-10 pt-8 lg:hidden"
        aria-label="Sample diagnostic run"
      >
        <div className="mx-auto w-11/12 max-w-6xl">
          <p className="mono-index mb-4">diagnostic.sh</p>
          <TerminalPanel target={target} />
        </div>
      </section>
    </>
  );
}
