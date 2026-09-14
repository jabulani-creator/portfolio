import Section from "@/components/ui/Section";
import { ContactIntake } from "../../../types/SiteSettings";

type Props = {
  contact: ContactIntake;
};

function whatsappHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export default function IntakeMethods({ contact }: Props) {
  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt">
        How to get started
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">
        Reach out to book the diagnostic. First step is a short scoping
        conversation — not a website quote form.
      </p>
      <ul className="mt-8 space-y-4">
        {contact.email && (
          <li>
            <a
              href={`mailto:${contact.email}?subject=Book%20a%20Digital%20Experience%20Diagnostic`}
              className="block rounded border border-cd-shade/30 p-4 transition hover:border-cd-cta"
            >
              <p className="text-sm text-cd-shade">Email</p>
              <p className="mt-1 font-medium text-cd-cta">{contact.email}</p>
            </a>
          </li>
        )}
        {contact.phone && (
          <li>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="block rounded border border-cd-shade/30 p-4 transition hover:border-cd-cta"
            >
              <p className="text-sm text-cd-shade">Phone</p>
              <p className="mt-1 font-medium text-cd-cta">{contact.phone}</p>
            </a>
          </li>
        )}
        {contact.phone && (
          <li>
            <a
              href={whatsappHref(contact.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border border-cd-shade/30 p-4 transition hover:border-cd-cta"
            >
              <p className="text-sm text-cd-shade">WhatsApp</p>
              <p className="mt-1 font-medium text-cd-cta">
                Message on WhatsApp
              </p>
            </a>
          </li>
        )}
        {contact.linkedin && (
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded border border-cd-shade/30 p-4 transition hover:border-cd-cta"
            >
              <p className="text-sm text-cd-shade">LinkedIn</p>
              <p className="mt-1 font-medium text-cd-cta">Connect on LinkedIn</p>
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
