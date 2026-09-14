import Section from "@/components/ui/Section";
import { BeforeAfter } from "../../../types/CaseStudy";

type Props = {
  beforeAfter: BeforeAfter;
};

export default function BeforeAfterSection({ beforeAfter }: Props) {
  const items =
    beforeAfter.items?.filter(
      (item) => item.before?.trim() || item.after?.trim()
    ) ?? [];

  if (!items.length) {
    return null;
  }

  return (
    <Section variant="light" className="py-14 md:py-20">
      <h2 className="text-xl font-bold tracking-tight md:text-2xl">
        {beforeAfter.headline?.trim() || "Before & after"}
      </h2>
      <ul className="mt-8 space-y-6">
        {items.map((item, index) => (
          <li
            key={`${item.label ?? "row"}-${index}`}
            className="studio-card grid gap-4 md:grid-cols-2 md:gap-0 md:divide-x md:divide-cd-border"
          >
            {item.label && (
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade md:col-span-2 md:px-6 md:pt-6">
                {item.label}
              </p>
            )}
            <div className="md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">
                Before
              </p>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-cd-shade">
                {item.before}
              </p>
            </div>
            <div className="border-t border-cd-border md:border-t-0 md:p-6">
              <p className="font-mono text-[10px] uppercase tracking-wide text-cd-cta">
                After
              </p>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-cd-txt">
                {item.after}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
