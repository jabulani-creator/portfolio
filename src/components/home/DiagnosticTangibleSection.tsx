import Link from "next/link";

import Section from "@/components/ui/Section";

import PrimaryCta from "@/components/layout/PrimaryCta";

import DeliverablesList from "@/components/diagnostic-offer/DeliverablesList";

import Offer, { OfferDeliverable } from "../../../types/Offer";

import { PrimaryCta as PrimaryCtaType } from "../../../types/SiteSettings";



type Props = {

  offer: Offer;

  deliverables: OfferDeliverable[];

  conversationCta: PrimaryCtaType;

};



export default function DiagnosticTangibleSection({

  offer,

  deliverables,

  conversationCta,

}: Props) {

  const items = deliverables.length ? deliverables : offer.deliverables;



  return (

    <Section variant="default" id="diagnostic-offer" className="section-rule">

      <p className="studio-eyebrow">When a diagnostic fits</p>

      <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">

        A structured investigation — not a generic website audit

      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">

        {offer.summary ??

          "How customers discover your organisation, evaluate your offer, and take the next step — with prioritised recommendations and a practical roadmap."}

      </p>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cd-shade md:text-base">

        I use diagnostics when we need to understand the problem before committing

        to a build — not as a mandatory first purchase.

      </p>



      <h3 className="mt-10 text-lg font-bold">What you can receive</h3>

      <div className="mt-4">

        <DeliverablesList deliverables={items} />

      </div>



      <div className="mt-10 grid gap-4 sm:grid-cols-2">

        <div className="studio-card">

          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">

            Typical timing

          </p>

          <p className="mt-2 text-sm text-cd-txt">

            {offer.turnaround ?? "About a week"}, depending on access, complexity,

            and how deep we need to go.

          </p>

        </div>

        <div className="studio-card">

          <p className="font-mono text-[10px] uppercase tracking-wide text-cd-shade">

            What does a diagnostic cost?

          </p>

          <p className="mt-2 text-sm leading-relaxed text-cd-txt">

            Every organisation is different. Engagements are scoped based on your

            channels, operational complexity, and the depth of investigation required.

          </p>

          <p className="mt-3 text-sm leading-relaxed text-cd-shade">

            After an initial conversation, I recommend the appropriate scope and

            provide a clear quotation before any work begins.

          </p>

        </div>

      </div>



      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

        <PrimaryCta

          cta={{

            ...conversationCta,

            label: "Start a conversation",

            href: conversationCta.href || "/start-a-project",

          }}

          variant="solid"

          className="w-full sm:w-auto"

        />

        <Link

          href="/digital-experience-diagnostic"

          className="pill-btn-outline w-full text-center sm:w-auto"

        >

          Full diagnostic scope

        </Link>

      </div>

    </Section>

  );

}


