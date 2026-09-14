import type { Metadata } from "next";
import { getStartHereContent } from "@/lib/content/queries/startHere";
import {
  getDefaultOffer,
  getDefaultSiteShell,
  getProductName,
} from "@/lib/content/defaults";
import OfferRecap from "@/components/start-here/OfferRecap";
import IntakeMethods from "@/components/start-here/IntakeMethods";
import ScopingReassuranceSection from "@/components/start-here/ScopingReassuranceSection";
import NextSteps from "@/components/start-here/NextSteps";
import ProgressionPath from "@/components/retainer/ProgressionPath";
import RetainerTeaser from "@/components/retainer/RetainerTeaser";
import { getRetainerOffer } from "@/lib/content/queries/retainer";
import { getDefaultRetainerOffer } from "@/lib/content/defaults";

import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Start Here",
  description:
    "Book the productized Digital Experience Diagnostic. Scope, deliverables, timeline, price, and how to reach out.",
});

export default async function StartHerePage() {
  const [{ siteSettings, offer, deliverables }, retainer] = await Promise.all([
    getStartHereContent(),
    getRetainerOffer(),
  ]);
  const shell = siteSettings ?? getDefaultSiteShell();
  const offerData = offer ?? getDefaultOffer();
  const retainerData = retainer ?? getDefaultRetainerOffer();
  const productName = getProductName(shell.homepageVariant);

  return (
    <>
      <OfferRecap
        offer={offerData}
        deliverables={deliverables.length ? deliverables : offerData.deliverables}
        productName={productName}
      />
      <ScopingReassuranceSection />
      <IntakeMethods contact={shell.contact} />
      <NextSteps />
      <ProgressionPath progressionCopy={retainerData.progressionCopy} />
      <RetainerTeaser retainer={retainerData} />
    </>
  );
}
