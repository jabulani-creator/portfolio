import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

const intents = [
  { label: "I want a digital diagnostic", href: "/start-here" },
  { label: "I have a business problem", href: "/start-here" },
  { label: "I need custom software", href: "/start-here" },
  { label: "I have an idea", href: "/start-here" },
];

export default function ContactStartSection({ primaryCta }: Props) {
  return (
    <Section variant="default" id="contact">
      <p className="studio-eyebrow">Contact</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt md:text-4xl">
        Have a problem worth investigating?
      </h2>
      <p className="studio-body mt-6 max-w-2xl">
        Start with a conversation — not a generic contact form. Tell me which
        situation is closest; we&apos;ll scope the right first step on the call.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        {intents.map((intent) => (
          <Link
            key={intent.label}
            href={intent.href}
            className="rounded-sm border border-cd-shade/30 px-4 py-2 text-sm font-medium text-cd-txt transition hover:border-cd-cta hover:text-cd-cta"
          >
            {intent.label}
          </Link>
        ))}
      </div>
      <div className="mt-12">
        <PrimaryCta cta={primaryCta} />
      </div>
    </Section>
  );
}
