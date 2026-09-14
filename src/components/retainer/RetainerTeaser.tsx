import Link from "next/link";
import Section from "@/components/ui/Section";
import RetainerOffer from "../../../types/RetainerOffer";

type Props = {
  retainer: RetainerOffer;
};

export default function RetainerTeaser({ retainer }: Props) {
  return (
    <Section className="bg-white">
      <p className="text-sm font-semibold uppercase tracking-wide text-cd-cta">
        After the diagnostic
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-cd-txt">
        {retainer.title}
      </h2>
      <p className="mt-4 leading-relaxed text-cd-shade">{retainer.summary}</p>
      {retainer.priceLabel && (
        <p className="mt-3 text-sm font-medium text-cd-txt">
          From {retainer.priceLabel}
        </p>
      )}
      <Link
        href="/ongoing-care"
        className="mt-6 inline-block text-sm font-medium text-cd-cta underline-offset-2 hover:underline"
      >
        Learn about Ongoing Care →
      </Link>
      <p className="mt-3 text-xs text-cd-shade">
        No subscription signup on this site — reach out the same way you book the
        diagnostic.
      </p>
    </Section>
  );
}
