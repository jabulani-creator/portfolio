import SiteSettings from "../../../../types/SiteSettings";
import Offer, { OfferDeliverable } from "../../../../types/Offer";
import { getSiteSettings } from "./site";
import { getOffer, getOfferDeliverables } from "./offer";

export type StartHereContent = {
  siteSettings: SiteSettings | null;
  offer: Offer | null;
  deliverables: OfferDeliverable[];
};

export async function getStartHereContent(): Promise<StartHereContent> {
  const [siteSettings, offer, deliverables] = await Promise.all([
    getSiteSettings(),
    getOffer(),
    getOfferDeliverables(),
  ]);

  return {
    siteSettings,
    offer,
    deliverables,
  };
}
