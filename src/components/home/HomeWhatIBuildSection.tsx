import Section from "@/components/ui/Section";

const services = [
  {
    title: "Websites",
    body: "Websites and landing pages that make organisations easy to find, understand, and contact.",
  },
  {
    title: "Digital systems",
    body: "Booking, registration, enquiry, dashboards, forms, and internal workflows.",
  },
  {
    title: "Automation & AI",
    body: "Reduce repetitive work and improve how customers are served.",
  },
  {
    title: "Diagnostics",
    body: "Find where the customer journey breaks before spending money on the wrong solution.",
  },
];

export default function HomeWhatIBuildSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border py-12 md:py-16">
      <h2 className="text-xl font-bold text-cd-txt md:text-2xl">
        Digital experiences, from front door to back office
      </h2>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
        What I build
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <article key={item.title} className="studio-card">
            <h3 className="text-sm font-bold text-cd-txt">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cd-shade">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
