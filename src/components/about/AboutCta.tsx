import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

export default function AboutCta({ primaryCta }: Props) {
  return (
    <Section className="bg-cd-txt text-white">
      <h2 className="text-2xl font-semibold">Start with the diagnostic</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-cd-shade">
        See the method on real work in{" "}
        <Link href="/case-studies" className="underline hover:text-white">
          case studies
        </Link>
        , then book the scoped first engagement when you are ready.
      </p>
      <div className="mt-8">
        <PrimaryCta
          cta={primaryCta}
          className="bg-white text-cd-txt hover:bg-cd-bck"
        />
      </div>
    </Section>
  );
}
