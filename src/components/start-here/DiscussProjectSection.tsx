import Section from "@/components/ui/Section";

export default function DiscussProjectSection() {
  return (
    <Section
      variant="light"
      id="discuss-project"
      className="scroll-mt-32 border-b border-cd-border py-14 md:py-16"
    >
      <p className="studio-eyebrow">Build &amp; implement</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        Discuss a project
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        You do not need a full diagnostic first if you already know you need a
        website, platform, booking flow, or internal system. Share what you are
        trying to achieve — we will scope whether a diagnostic, a direct build,
        or a phased approach makes sense.
      </p>
      <ul className="mt-6 max-w-2xl space-y-2 text-sm text-cd-shade">
        <li>· Websites and landing pages</li>
        <li>· Custom platforms (church, school, destination, SME)</li>
        <li>· Enquiry, booking, and registration workflows</li>
        <li>· Dashboards, forms, and role-based admin</li>
      </ul>
      <p className="mt-6 text-sm text-cd-shade">
        Use WhatsApp, email, or phone below — mention &ldquo;project
        discussion&rdquo; and what you are building toward.
      </p>
    </Section>
  );
}
