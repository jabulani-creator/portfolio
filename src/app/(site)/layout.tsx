import "../globals.css";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${dmSans.variable} ${jetbrains.variable} flex min-h-screen flex-col font-sans`}
      >
        <SiteJsonLd shell={shell} />
        <SiteChrome shell={shell}>{children}</SiteChrome>
      </body>
    </html>
  );
}
