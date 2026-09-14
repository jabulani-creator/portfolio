import Link from "next/link";
import Section from "@/components/ui/Section";

const steps = [
  "You reach out by email, phone, or WhatsApp.",
  "We confirm scope, timing, and the diagnostic investment.",
  "You share access to your website, listings, and any relevant customer touchpoints.",
  "The diagnostic runs — typically about one week.",
  "You receive all eight deliverables plus a 90-minute live walkthrough call.",
  "If a build is the right next step, we scope it based on evidence — not assumptions.",
  "If you want month-to-month upkeep after that, Ongoing Care covers content, SEO basics, and review monitoring.",
];

export default function NextSteps() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-cd-txt">
        What happens after you reach out
      </h2>
      <ol className="mt-8 space-y-4">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cd-cta text-xs font-bold text-white">
              {index + 1}
            </span>
            <p className="leading-relaxed text-cd-shade">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm leading-relaxed text-cd-shade">
        No payment portal on this site yet — booking is a direct conversation.
        That keeps the first step simple and scoped.{" "}
        <Link
          href="/ongoing-care"
          className="text-cd-cta underline-offset-2 hover:underline"
        >
          Ongoing Care
        </Link>{" "}
        is available after diagnostic and build work — not as a first step.
      </p>
    </Section>
  );
}
