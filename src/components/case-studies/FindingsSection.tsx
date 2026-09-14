import Section from "@/components/ui/Section";
import { RevenueLeak } from "../../../types/CaseStudy";
import RevenueLeakCard from "./RevenueLeakCard";

type Props = {
  leaks: RevenueLeak[];
};

export default function FindingsSection({ leaks }: Props) {
  if (!leaks.length) {
    return null;
  }

  return (
    <Section variant="default">
      <p className="studio-eyebrow">Key findings</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-cd-txt">
        Revenue leaks
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {leaks.map((leak, index) => (
          <RevenueLeakCard key={leak.title ?? index} index={index} leak={leak} />
        ))}
      </div>
    </Section>
  );
}
