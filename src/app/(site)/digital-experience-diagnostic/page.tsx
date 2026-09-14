import type { Metadata } from "next";
import { getOffer, getOfferDeliverables } from "@/lib/content/queries/offer";
import { getSiteSettings } from "@/lib/content/queries/site";
import {
  getDefaultOffer,
  getDefaultSiteShell,
  getProductName,
} from "@/lib/content/defaults";
import OfferHeader from "@/components/diagnostic-offer/OfferHeader";
import OfferDeliverablesSection from "@/components/diagnostic-offer/OfferDeliverablesSection";
import WalkthroughSection from "@/components/diagnostic-offer/WalkthroughSection";
import OfferPositioningSection from "@/components/diagnostic-offer/OfferPositioningSection";
import OfferFinalCta from "@/components/diagnostic-offer/OfferFinalCta";
import OfferMethodologySection from "@/components/diagnostic-offer/OfferMethodologySection";
import OfferFaqSection from "@/components/diagnostic-offer/OfferFaqSection";
import ProgressionPath from "@/components/retainer/ProgressionPath";
import { getRetainerOffer } from "@/lib/content/queries/retainer";
import { getDefaultRetainerOffer } from "@/lib/content/defaults";

import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const offer = (await getOffer()) ?? getDefaultOffer();
  return buildPageMetadata({
    title: offer.seoTitle ?? offer.title,
    description: offer.seoDescription ?? offer.summary,
  });
}

export default async function DigitalExperienceDiagnosticPage() {
  const [siteSettings, offer, deliverables, retainer] = await Promise.all([
    getSiteSettings(),
    getOffer(),
    getOfferDeliverables(),
    getRetainerOffer(),
  ]);

  const shell = siteSettings ?? getDefaultSiteShell();
  const offerData = offer ?? getDefaultOffer();
  const faqItems =
    offerData.faq && offerData.faq.length > 0
      ? offerData.faq
      : getDefaultOffer().faq ?? [];
  const retainerData = retainer ?? getDefaultRetainerOffer();
  const productName = getProductName(shell.homepageVariant);
  const primaryCta = shell.primaryCta ?? {
    label: offerData.ctaLabel,
    href: "/start-here",
  };

  return (
    <>
      <OfferHeader
        offer={offerData}
        productName={productName}
        primaryCta={primaryCta}
      />
      <OfferMethodologySection />
      <OfferDeliverablesSection
        productName={productName}
        deliverables={deliverables.length ? deliverables : offerData.deliverables}
      />
      <WalkthroughSection offer={offerData} />
      {offerData.processSummary && (
        <section className="py-16 md:py-20">
          <div className="mx-auto w-11/12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-cd-txt">How it runs</h2>
            <p className="mt-4 leading-relaxed text-cd-shade">
              {offerData.processSummary}
            </p>
          </div>
        </section>
      )}
      <OfferPositioningSection />
      {(offerData.faq?.length ?? 0) > 0 || faqItems.length > 0 ? (
        <OfferFaqSection faq={faqItems} />
      ) : null}
      <ProgressionPath
        progressionCopy={retainerData.progressionCopy}
        className="bg-white"
      />
      <OfferFinalCta
        productName={productName}
        primaryCta={primaryCta}
        turnaround={offerData.turnaround}
        priceLabel={offerData.priceLabel}
      />
    </>
  );
}
