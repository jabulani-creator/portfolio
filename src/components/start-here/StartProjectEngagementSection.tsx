import Link from "next/link";
import Section from "@/components/ui/Section";

const paths = [
  {
    title: "Direct build",
    body: "You already know what you need → scope → build.",
  },
  {
    title: "Diagnostic → build",
    body: "You're experiencing a problem → investigate → recommend → build what the evidence supports.",
  },
  {
    title: "Phased build",
    body: "The full solution is larger → define the first useful version → build → expand.",
  },
  {
    title: "Ongoing care",
    body: "After launch → maintain → improve → monitor.",
    href: "/ongoing-care",
  },
];

export default function StartProjectEngagementSection() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <h2 className="text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        The engagement can take different paths
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {paths.map((path) => (
          <li key={path.title} className="studio-card">
            <h3 className="text-sm font-bold uppercase tracking-wide text-cd-txt">
              {path.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">{path.body}</p>
            {path.href ? (
              <Link
                href={path.href}
                className="mt-4 inline-block text-sm font-semibold text-cd-txt hover:underline"
              >
                About ongoing care →
              </Link>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
