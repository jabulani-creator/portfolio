import Link from "next/link";
import Section from "@/components/ui/Section";

export default function HomeAboutTeaser() {
  return (
    <Section variant="light" className="section-rule border-y border-cd-border">
      <p className="studio-eyebrow">About</p>
      <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-cd-shade md:text-base">
        <p>
          I&apos;m Jabulani — a software developer and digital experience consultant based
          in Zambia.
        </p>
        <p>
          I work at the intersection of business, technology, and customer experience. I
          investigate why customers aren&apos;t taking the next step, then build digital
          systems that make that step easier.
        </p>
      </div>
      <ul className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-wide text-cd-shade">
        <li className="rounded-full border border-cd-border px-3 py-1">Software developer</li>
        <li className="rounded-full border border-cd-border px-3 py-1">
          Digital experience consultant
        </li>
        <li className="rounded-full border border-cd-border px-3 py-1">Founder</li>
      </ul>
      <Link
        href="/about"
        className="mt-8 inline-block text-sm font-semibold text-cd-txt hover:underline"
      >
        More about how I work →
      </Link>
    </Section>
  );
}
