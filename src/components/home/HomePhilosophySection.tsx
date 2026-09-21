import Link from "next/link";
import Section from "@/components/ui/Section";
import PrimaryCta from "@/components/layout/PrimaryCta";
import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";

type Props = {
  primaryCta: PrimaryCtaType;
};

export default function HomePhilosophySection({ primaryCta }: Props) {
  return (
    <Section variant="default" className="py-12 md:py-16">
      <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-cd-txt md:text-3xl">
        Don&apos;t start with the website. Start with the customer.
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-cd-shade md:text-base">
        Some organisations already know what they need. Others know something
        isn&apos;t working but aren&apos;t sure why. I work both ways.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="studio-card flex flex-col">
          <h3 className="font-semibold text-cd-txt">I know what I need</h3>
          <p className="mt-2 flex-1 text-sm text-cd-shade">
            Website → platform → booking system → automation
          </p>
          <PrimaryCta cta={primaryCta} variant="solid" className="mt-6 w-full sm:w-auto" />
        </article>
        <article className="studio-card flex flex-col">
          <h3 className="font-semibold text-cd-txt">Something isn&apos;t working</h3>
          <p className="mt-2 flex-1 text-sm text-cd-shade">
            Customer journey → investigation → diagnosis → solution
          </p>
          <Link
            href="/digital-experience-diagnostic"
            className="pill-btn-outline mt-6 inline-flex w-full justify-center sm:w-auto"
          >
            Explore the diagnostic
          </Link>
        </article>
      </div>
    </Section>
  );
}
