import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

export default function EditorialHeroSection({ primaryCta }: Props) {
  return (
    <Section
      variant="default"
      className="flex min-h-[calc(100dvh-4.5rem)] flex-col justify-center pt-10 pb-16 lg:pt-20 lg:pb-24"
    >
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-cd-txt md:text-5xl lg:text-6xl">
        Find where your customers get stuck.
      </h1>
      <p className="studio-body mt-6 max-w-xl text-base md:text-lg">
        I investigate how customers discover, evaluate, and contact businesses —
        then identify the friction costing them enquiries, bookings, and sales.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <PrimaryCta cta={primaryCta} variant="solid" className="w-full sm:w-auto" />
        <Link
          href="/case-studies"
          className="pill-btn-outline w-full text-center sm:w-auto"
        >
          See the case studies
        </Link>
      </div>
    </Section>
  );
}
