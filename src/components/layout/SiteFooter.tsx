import Link from "next/link";
import {
  ContactIntake,
  PrimaryCta as PrimaryCtaType,
} from "../../../types/SiteSettings";

type Props = {
  siteTitle: string;
  footerCopy?: string;
  contact: ContactIntake;
  primaryCta: PrimaryCtaType;
  localTrustLine?: string;
  operatingSince?: string;
};

export default function SiteFooter({
  contact,
  localTrustLine,
  operatingSince,
}: Props) {
  const whatsapp = contact.phone
    ? `https://wa.me/${contact.phone.replace(/\D/g, "")}`
    : null;

  return (
    <footer className="section-rule mt-auto border-t border-cd-border bg-cd-bck2 py-16">
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-mono text-xs text-cd-shade">
            // Built for organisations that need clarity before they build.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-cd-shade">
            {contact.phone && <span>{contact.phone}</span>}
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="hover:text-cd-txt">
                {contact.email}
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cd-txt"
              >
                WhatsApp
              </a>
            )}
            <Link href="/case-studies" className="hover:text-cd-txt">
              Work
            </Link>
            <Link href="/about" className="hover:text-cd-txt">
              About
            </Link>
          </div>
        </div>
        {(localTrustLine || operatingSince) && (
          <p className="mt-8 text-center font-mono text-[10px] text-cd-shade/80 md:text-left">
            {localTrustLine}
            {operatingSince ? ` · est. ${operatingSince}` : ""}
          </p>
        )}
      </div>
    </footer>
  );
}
