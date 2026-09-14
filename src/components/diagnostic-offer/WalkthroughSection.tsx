import Section from "@/components/ui/Section";
import Offer from "../../../types/Offer";

type Props = {
  offer: Offer;
};

export default function WalkthroughSection({ offer }: Props) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-cd-txt">
        90-minute walkthrough call
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">
        {offer.walkthroughCallDescription}
      </p>
      <p className="mt-4 leading-relaxed text-cd-shade">
        You will walk through the findings live, ask questions, and leave with a
        clear sense of what to fix first — not a vague recommendation to
        &quot;redesign the site.&quot;
      </p>
    </Section>
  );
}
