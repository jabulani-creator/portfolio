"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  NavigationItem,
  PrimaryCta as PrimaryCtaType,
} from "../../../types/SiteSettings";

type Props = {
  siteTitle: string;
  navigation: NavigationItem[];
  primaryCta: PrimaryCtaType;
  variant?: "default" | "hero-overlay" | "hero-overlay-solid";
};

const defaultNav = [
  { label: "Work", href: "/case-studies", order: 1 },
  { label: "Diagnostics", href: "/digital-experience-diagnostic", order: 2 },
  { label: "How I Work", href: "/how-i-work", order: 3 },
  { label: "About", href: "/about", order: 4 },
  { label: "Contact", href: "/start-here", order: 5 },
];

export default function SiteHeader({
  navigation,
  primaryCta,
  variant = "default",
}: Props) {
  const [open, setOpen] = useState(false);
  const overlay = variant === "hero-overlay" || variant === "hero-overlay-solid";
  const overlaySolid = variant === "hero-overlay-solid";
  const items =
    navigation.length > 0
      ? [...navigation].sort((a, b) => a.order - b.order).slice(0, 5)
      : defaultNav;

  const shellClass = overlay
    ? overlaySolid
      ? "fixed inset-x-0 top-0 z-50 border-b border-cd-border bg-cd-bck2/95 backdrop-blur-md"
      : "fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-transparent"
    : "sticky top-0 z-50 border-b border-cd-border bg-cd-bck2/90 backdrop-blur-md";

  const logoClass =
    overlay && !overlaySolid
      ? "font-mono text-sm text-white/90 hover:text-white"
      : "font-mono text-sm text-cd-txt hover:opacity-70";

  const navLinkClass =
    overlay && !overlaySolid
      ? "text-sm text-white/75 transition hover:text-white"
      : "nav-link";

  const ctaClass =
    overlay && !overlaySolid
      ? "inline-flex items-center justify-center rounded-full border border-white/80 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-cd-txt"
      : "pill-btn-outline";

  const menuBtnClass =
    overlay && !overlaySolid ? "text-white md:hidden" : "text-cd-txt md:hidden";

  const mobileNavClass =
    overlay && !overlaySolid
      ? "border-t border-white/15 bg-cd-txt/95 px-6 py-4 backdrop-blur-md md:hidden"
      : "border-t border-cd-border px-6 py-4 md:hidden";

  return (
    <header className={shellClass}>
      <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between py-5">
        <Link
          href="/"
          className={logoClass}
          onClick={() => setOpen(false)}
        >
          {overlay && !overlaySolid ? "← Home" : "~/the-website-guy"}
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
          <Link href={primaryCta.href} className={ctaClass}>
            Book a Diagnostic
          </Link>
        </nav>

        <button
          type="button"
          className={menuBtnClass}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {open && (
        <nav className={mobileNavClass}>
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block ${navLinkClass}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={primaryCta.href}
                className={`inline-flex ${ctaClass}`}
                onClick={() => setOpen(false)}
              >
                Book a Diagnostic
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
