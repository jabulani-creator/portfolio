import Section from "@/components/ui/Section";
import Offer from "../../../types/Offer";

type Props = {
  offer: Offer;
};

export default function WalkthroughSection({ offer }: Props) {
  const description =
    offer.walkthroughCallDescription?.trim() ||
    "A 90-minute live walkthrough — not just a PDF dropped in your inbox.";

  return (
    <Section variant="default">
      <p className="studio-eyebrow">The walkthrough</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        90 minutes together
      </h2>
      <p className="mt-4 max-w-2xl text-base font-medium text-cd-txt">
        You don&apos;t just receive a report. We go through it together.
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        {description}
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">
        The report tells you what we found. The walkthrough helps you understand
        what to do about it — with space to ask questions and agree what should
        happen next.
      </p>
    </Section>
  );
}
