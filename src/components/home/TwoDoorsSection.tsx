import Link from "next/link";

import Section from "@/components/ui/Section";

import PrimaryCta from "@/components/layout/PrimaryCta";

import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";



type Props = {

  primaryCta: PrimaryCtaType;

};



export default function TwoDoorsSection({ primaryCta }: Props) {

  return (

    <Section variant="light" className="section-rule border-y border-cd-border pb-20">

      <p className="studio-eyebrow">How to start</p>

      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">

        Tell me what you&apos;re trying to achieve

      </h2>

      <p className="mt-4 max-w-2xl text-sm text-cd-shade md:text-base">

        You might need a build, clarity on a messy customer journey, or both. We

        figure that out in conversation — not from a menu of fixed products.

      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <article className="studio-card flex flex-col">

          <h3 className="text-lg font-bold text-cd-txt">

            I need help figuring out the problem

          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-cd-shade">

            Let&apos;s discuss what you&apos;re trying to achieve. I&apos;ll study

            the situation and come back with a practical recommendation — which may

            include a scoped diagnostic, discovery work, or a direct path to build.

          </p>

          <div className="mt-8">

            <Link

              href="/start-a-project#contact"

              className="pill-btn-outline inline-flex w-full justify-center sm:w-auto"

            >

              Start a conversation

            </Link>

          </div>

        </article>

        <article className="studio-card flex flex-col">

          <h3 className="text-lg font-bold text-cd-txt">

            I need something built

          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-cd-shade">

            Website, platform, booking flow, or internal system — share the outcome

            you want and we&apos;ll scope the right approach.

          </p>

          <div className="mt-8">

            <PrimaryCta cta={primaryCta} variant="solid" className="w-full sm:w-auto" />

          </div>

        </article>

      </div>

      <p className="mt-8 text-center text-sm text-cd-shade">

        Want proof first?{" "}

        <Link

          href="/case-studies"

          className="font-semibold text-cd-txt underline-offset-4 hover:underline"

        >

          Read the case studies

        </Link>

        .

      </p>

    </Section>

  );

}


