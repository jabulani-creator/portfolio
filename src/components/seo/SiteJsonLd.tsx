import SiteSettings from "../../../types/SiteSettings";
import { getDefaultFounderProfile, getDefaultSiteShell } from "@/lib/content/defaults";
import { buildWebSiteJsonLd } from "@/lib/seo/jsonLd";
import { getSiteUrl, SITE_NAME } from "@/lib/seo";
import JsonLdScript from "./JsonLdScript";

type Props = {
  shell: SiteSettings;
};

export default function SiteJsonLd({ shell }: Props) {
  const founder = getDefaultFounderProfile();
  const base = getSiteUrl();
  const contact = shell.contact ?? getDefaultSiteShell().contact;
  const siteName = shell.siteTitle ?? SITE_NAME;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebSiteJsonLd(siteName),
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: founder.founderName ?? "Jabulani Charinga",
        url: base,
        ...(contact.linkedin ? { sameAs: [contact.linkedin] } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${base}/#business`,
        name: siteName,
        url: base,
        description:
          shell.seoDefaults?.description ??
          shell.categoryHeadline ??
          "Websites, digital systems, and automation for organisations in Zambia.",
        areaServed: {
          "@type": "Country",
          name: "Zambia",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lusaka",
          addressCountry: "ZM",
        },
        ...(contact.phone ? { telephone: contact.phone } : {}),
        ...(contact.email ? { email: contact.email } : {}),
        provider: { "@id": `${base}/#person` },
      },
    ],
  };

  return <JsonLdScript data={graph} />;
}
