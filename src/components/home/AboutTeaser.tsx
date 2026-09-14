import Link from "next/link";
import Section from "@/components/ui/Section";

type Props = {
  categoryHeadline?: string;
};

export default function AboutTeaser({ categoryHeadline }: Props) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-cd-txt md:text-3xl">
        Why this approach exists
      </h2>
      <div className="mt-6 space-y-4 leading-relaxed text-cd-shade">
        <p>
          Most developers start with a build. This work starts with the
          customer&apos;s journey — where they look you up, what they see, where
          they hesitate, and what they do instead.
        </p>
        {categoryHeadline && (
          <p className="font-medium text-cd-txt">{categoryHeadline}</p>
        )}
        <p>
          Diagnosis tells us what to build. Development makes it real. Both
          matter — but the order matters more.
        </p>
      </div>
      <Link
        href="/about"
        className="mt-6 inline-block text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
      >
        About this work →
      </Link>
    </Section>
  );
}
