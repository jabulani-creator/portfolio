import type { Metadata } from "next";
import { getOffer, getOfferDeliverables } from "@/lib/content/queries/offer";
import { getSiteSettings } from "@/lib/content/queries/site";
import {
  getDefaultOffer,
  getDefaultSiteShell,
  getProductName,
} from "@/lib/content/defaults";
import OfferHeader from "@/components/diagnostic-offer/OfferHeader";
import OfferWhenToUseSection from "@/components/diagnostic-offer/OfferWhenToUseSection";
import OfferJourneyVisual from "@/components/diagnostic-offer/OfferJourneyVisual";
import OfferDeliverableCards from "@/components/diagnostic-offer/OfferDeliverableCards";
import OfferExampleFindingSection from "@/components/diagnostic-offer/OfferExampleFindingSection";
import OfferWhatHappensNextSection from "@/components/diagnostic-offer/OfferWhatHappensNextSection";
import OfferPricingSection from "@/components/diagnostic-offer/OfferPricingSection";
import OfferFaqSection from "@/components/diagnostic-offer/OfferFaqSection";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const offer = (await getOffer()) ?? getDefaultOffer();
  return buildPageMetadata({
    title: offer.seoTitle ?? offer.title,
    description:
      offer.seoDescription ??
      offer.summary ??
      "Structured investigation into how customers discover, evaluate, and interact with your organisation.",
  });
}

export default async function DigitalExperienceDiagnosticPage() {
  const [siteSettings, offer, deliverables] = await Promise.all([
    getSiteSettings(),
    getOffer(),
    getOfferDeliverables(),
  ]);

  const shell = siteSettings ?? getDefaultSiteShell();
  const offerData = offer ?? getDefaultOffer();
  const faqItems =
    offerData.faq && offerData.faq.length > 0
      ? offerData.faq
      : getDefaultOffer().faq ?? [];
  const productName = getProductName(shell.homepageVariant);
  const primaryCta = shell.primaryCta ?? {
    label: "Start a conversation",
    href: "/start-a-project",
  };

  const deliverableList =
    deliverables.length > 0 ? deliverables : offerData.deliverables ?? [];

  return (
    <>
      <OfferHeader
        offer={offerData}
        productName={productName}
        primaryCta={primaryCta}
      />
      <OfferWhenToUseSection />
      <OfferJourneyVisual />
      <OfferDeliverableCards deliverables={deliverableList} />
      <OfferExampleFindingSection />
      <OfferWhatHappensNextSection />
      <OfferPricingSection
        primaryCta={primaryCta}
        ctaLabel={offerData.ctaLabel}
      />
      {(offerData.faq?.length ?? 0) > 0 || faqItems.length > 0 ? (
        <OfferFaqSection faq={faqItems} />
      ) : null}
    </>
  );
}
