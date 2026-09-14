export type NavigationItem = {
  label: string;
  href: string;
  order: number;
};

export type PrimaryCta = {
  label: string;
  href: string;
};

export type ContactIntake = {
  email?: string;
  phone?: string;
  whatsapp?: string;
  linkedin?: string;
};

export type SeoDefaults = {
  title?: string;
  description?: string;
};

type SiteSettings = {
  _id: string;
  siteTitle: string;
  categoryHeadline?: string;
  homepageVariant?: "diagnostic" | "audit";
  navigation: NavigationItem[];
  primaryCta: PrimaryCta;
  contact: ContactIntake;
  footerCopy?: string;
  localTrustLine?: string;
  operatingSince?: string;
  seoDefaults?: SeoDefaults;
};

export default SiteSettings;
