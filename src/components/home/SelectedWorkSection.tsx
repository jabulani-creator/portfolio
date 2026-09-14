import Link from "next/link";
import Section from "@/components/ui/Section";
import CaseStudy from "../../../types/CaseStudy";
import WorkCard from "@/components/case-studies/WorkCard";

type Props = {
  caseStudies: CaseStudy[];
};

export default function SelectedWorkSection({ caseStudies }: Props) {
  if (caseStudies.length === 0) {
    return null;
  }

  return (
    <Section variant="light" className="border-y border-cd-shade/10">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="studio-eyebrow">Selected work</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt md:text-4xl">
            Real businesses. Real investigations.
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="text-sm font-semibold uppercase tracking-wide text-cd-cta hover:underline"
        >
          View all work →
        </Link>
      </div>
      <div className="space-y-10 md:space-y-16">
        {caseStudies.map((study) => (
          <WorkCard key={study._id} caseStudy={study} size="large" />
        ))}
      </div>
    </Section>
  );
}
