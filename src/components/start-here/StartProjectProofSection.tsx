import Link from "next/link";
import Section from "@/components/ui/Section";
import { START_PROJECT_PROOF } from "@/lib/content/startProjectProof";

export default function StartProjectProofSection() {
  return (
    <Section variant="default" className="section-rule">
      <p className="studio-eyebrow">Proof</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
        I&apos;ve built systems like these
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {START_PROJECT_PROOF.map((item) => (
          <Link
            key={item.slug}
            href={`/case-studies/${item.slug}`}
            className="studio-card block transition hover:shadow-md"
          >
            <h3 className="font-display text-lg font-bold text-cd-txt">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cd-shade">{item.summary}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-cd-txt">
              Read case study →
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/case-studies"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-wide text-cd-shade underline-offset-4 hover:text-cd-txt hover:underline"
      >
        See all case studies →
      </Link>
    </Section>
  );
}
