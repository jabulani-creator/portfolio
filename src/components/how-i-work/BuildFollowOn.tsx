import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  summary: string;
  primaryCta: PrimaryCtaType;
};

export default function BuildFollowOn({ summary, primaryCta }: Props) {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt">
        Build and implementation
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">{summary}</p>
      <p className="mt-4 text-sm text-cd-shade">
        The diagnostic is the entry point.{" "}
        <Link
          href="/digital-experience-diagnostic"
          className="text-cd-cta underline-offset-2 hover:underline"
        >
          See the full offer →
        </Link>
        {" · "}
        <Link
          href="/ongoing-care"
          className="text-cd-cta underline-offset-2 hover:underline"
        >
          Ongoing Care (after build) →
        </Link>
      </p>
      <div className="mt-8">
        <PrimaryCta cta={primaryCta} />
      </div>
    </Section>
  );
}
