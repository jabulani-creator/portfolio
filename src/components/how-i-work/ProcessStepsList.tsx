import Section from "@/components/ui/Section";
import { ProcessStep } from "../../../types/HowIWork";

type Props = {
  steps: ProcessStep[];
};

export default function ProcessStepsList({ steps }: Props) {
  const sorted = [...steps].sort((a, b) => a.order - b.order);

  return (
    <Section className="bg-white">
      <h2 className="text-2xl font-semibold text-cd-txt">The process</h2>
      <div className="mt-8 space-y-8">
        {sorted.map((step, index) => (
          <div key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cd-cta text-sm font-bold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="font-semibold text-cd-txt">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-cd-shade">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
