import Link from "next/link";
import Section from "@/components/ui/Section";

export default function HomeAboutTeaser() {
  return (
    <Section variant="default" className="py-12 md:py-14">
      <h2 className="font-display text-2xl font-bold text-cd-txt">I&apos;m Jabulani.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        Software developer, digital systems consultant, and founder based in Lusaka.
        I work at the intersection of business, technology, and customer experience —
        investigating problems, designing solutions, and building the systems that make
        them work.
      </p>
      <Link
        href="/about"
        className="mt-6 inline-block text-sm font-semibold text-cd-txt underline-offset-4 hover:underline"
      >
        About me →
      </Link>
    </Section>
  );
}
