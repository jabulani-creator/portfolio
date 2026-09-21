import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
  turnaround?: string;
};

export default function FinalDiagnosticCta({
  primaryCta,
  turnaround = "~1 week",
}: Props) {
  return (
    <Section variant="default" className="pb-24 md:pb-32">
      <div className="rounded-2xl bg-cd-txt px-8 py-14 text-center text-white md:px-16 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Ready to find where your customers get stuck?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">
          Start with a conversation. I&apos;ll recommend the right scope and
          provide a clear quotation before any work begins.
          {turnaround ? ` Typical diagnostic delivery: ${turnaround} once scope is agreed.` : ""}
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCta cta={primaryCta} variant="inverse" />
        </div>
      </div>
    </Section>
  );
}
