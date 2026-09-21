import Section from "@/components/ui/Section";
import { ContactIntake } from "../../../types/SiteSettings";

type Props = {
  contact: ContactIntake;
};

function whatsappHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export default function StartProjectContactSection({ contact }: Props) {
  const mailSubject = encodeURIComponent("Start a project — enquiry");

  return (
    <Section variant="light" className="section-rule border-t border-cd-border pb-20 pt-12" id="contact">
      <p className="text-sm text-cd-shade">
        <strong className="font-medium text-cd-txt">What are you trying to achieve?</strong>{" "}
        That&apos;s enough to start.
      </p>
      <ul className="mt-6 flex flex-wrap gap-3">
        {contact.phone && (
          <li>
            <a
              href={whatsappHref(contact.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn-outline inline-flex text-sm"
            >
              WhatsApp
            </a>
          </li>
        )}
        {contact.email && (
          <li>
            <a
              href={`mailto:${contact.email}?subject=${mailSubject}`}
              className="pill-btn-outline inline-flex text-sm"
            >
              Email
            </a>
          </li>
        )}
        {contact.linkedin && (
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn-outline inline-flex text-sm"
            >
              LinkedIn
            </a>
          </li>
        )}
      </ul>
    </Section>
  );
}
