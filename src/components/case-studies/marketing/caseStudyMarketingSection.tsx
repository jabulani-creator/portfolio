import { ReactNode } from "react";
import Section from "@/components/ui/Section";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  children: ReactNode;
  variant?: "default" | "light";
};

export function CaseStudyMarketingSection({
  eyebrow,
  title,
  intro,
  id,
  children,
  variant = "default",
}: Props) {
  return (
    <Section
      id={id}
      variant={variant}
      className={`section-rule !py-14 md:!py-20 ${variant === "light" ? "border-y border-cd-border bg-white" : ""}`}
    >
      {eyebrow && <p className="studio-eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        {title}
      </h2>
      {intro && <p className="studio-body mt-4 max-w-2xl">{intro}</p>}
      <div className="mt-10">{children}</div>
    </Section>
  );
}
