import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

export default function HomeActionStrip({ primaryCta }: Props) {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border pb-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-cd-txt">
            Know what you need — or still figuring it out?
          </p>
          <p className="mt-2 max-w-md text-sm text-cd-shade">
            Start a project for a direct build, or explore the diagnostic when
            investigation should come first.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryCta cta={primaryCta} variant="solid" className="w-full sm:w-auto" />
          <Link
            href="/digital-experience-diagnostic"
            className="pill-btn-outline w-full text-center sm:w-auto"
          >
            Explore the diagnostic
          </Link>
        </div>
      </div>
    </Section>
  );
}
