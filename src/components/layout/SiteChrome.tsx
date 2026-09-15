"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileBookBar from "@/components/layout/MobileBookBar";
import type SiteSettings from "../../../types/SiteSettings";

type Shell = Pick<
  SiteSettings,
  | "siteTitle"
  | "navigation"
  | "primaryCta"
  | "footerCopy"
  | "contact"
  | "localTrustLine"
  | "operatingSince"
>;

type Props = {
  shell: Shell;
  children: React.ReactNode;
};

function isCaseStudyHeroRoute(pathname: string): boolean {
  return /^\/case-studies\/[^/]+$/.test(pathname);
}

export default function SiteChrome({ shell, children }: Props) {
  const pathname = usePathname();
  const heroOverlay = isCaseStudyHeroRoute(pathname ?? "");
  const [solidHeader, setSolidHeader] = useState(false);

  useEffect(() => {
    if (!heroOverlay) {
      setSolidHeader(false);
      return;
    }

    const onScroll = () => {
      setSolidHeader(window.scrollY > window.innerHeight * 0.65);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroOverlay]);

  const headerVariant = !heroOverlay
    ? "default"
    : solidHeader
      ? "hero-overlay-solid"
      : "hero-overlay";

  return (
    <>
      <SiteHeader
        siteTitle={shell.siteTitle}
        navigation={shell.navigation}
        primaryCta={shell.primaryCta}
        variant={headerVariant}
      />
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      <SiteFooter
        siteTitle={shell.siteTitle}
        footerCopy={shell.footerCopy}
        contact={shell.contact}
        primaryCta={shell.primaryCta}
        localTrustLine={shell.localTrustLine}
        operatingSince={shell.operatingSince}
      />
      {!heroOverlay && <MobileBookBar primaryCta={shell.primaryCta} />}
    </>
  );
}
