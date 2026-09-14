import "../globals.css";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MobileBookBar from "@/components/layout/MobileBookBar";
import { getSiteSettings } from "@/lib/content/queries/site";
import { getDefaultSiteShell } from "@/lib/content/defaults";
import { buildSiteMetadata } from "@/lib/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  const shell = siteSettings ?? getDefaultSiteShell();
  return buildSiteMetadata(shell.seoDefaults);
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSettings = await getSiteSettings();
  const shell = siteSettings ?? getDefaultSiteShell();

  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${jetbrains.variable} flex min-h-screen flex-col font-sans`}
      >
        <SiteHeader
          siteTitle={shell.siteTitle}
          navigation={shell.navigation}
          primaryCta={shell.primaryCta}
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
        <MobileBookBar primaryCta={shell.primaryCta} />
      </body>
    </html>
  );
}
