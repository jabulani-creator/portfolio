import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { ContactIntake } from "../../../types/SiteSettings";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
  contact: ContactIntake;
};

function whatsappHref(phone: string): string {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export default function HomeFinalCtaSection({ primaryCta, contact }: Props) {
  return (
    <Section variant="dark" className="pb-20 pt-14 md:pt-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Have something you&apos;re trying to build?
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Tell me what you&apos;re trying to achieve.
          </p>
          <div className="mt-6">
            <PrimaryCta cta={primaryCta} variant="inverse" />
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            Or something isn&apos;t working?
          </h2>
          <p className="mt-3 text-sm text-white/70">Let&apos;s investigate it.</p>
          <Link
            href="/digital-experience-diagnostic"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-cd-txt"
          >
            Explore the diagnostic
          </Link>
        </div>
      </div>
      <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wide text-white/50">
        {contact.phone && (
          <li>
            <a href={whatsappHref(contact.phone)} className="hover:text-white">
              WhatsApp
            </a>
          </li>
        )}
        {contact.phone && (
          <li>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
              Phone
            </a>
          </li>
        )}
        {contact.email && (
          <li>
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              Email
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
