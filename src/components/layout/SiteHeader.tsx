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
};

const defaultNav = [
  { label: "Methodology", href: "/#methodology", order: 1 },
  { label: "Case Studies", href: "/case-studies", order: 2 },
  { label: "Diagnostic", href: "/digital-experience-diagnostic", order: 3 },
];

export default function SiteHeader({ navigation, primaryCta }: Props) {
  const [open, setOpen] = useState(false);
  const items =
    navigation.length > 0
      ? [...navigation].sort((a, b) => a.order - b.order).slice(0, 3)
      : defaultNav;

  return (
    <header className="sticky top-0 z-50 border-b border-cd-border bg-cd-bck2/90 backdrop-blur-md">
      <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between py-5">
        <Link
          href="/"
          className="font-mono text-sm text-cd-txt hover:opacity-70"
          onClick={() => setOpen(false)}
        >
          ~/the-website-guy
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label === "Work" ? "Case Studies" : item.label}
            </Link>
          ))}
          <Link href={primaryCta.href} className="pill-btn-outline">
            Book Call
          </Link>
        </nav>

        <button
          type="button"
          className="text-cd-txt md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-cd-border px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav-link block"
                  onClick={() => setOpen(false)}
                >
                  {item.label === "Work" ? "Case Studies" : item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={primaryCta.href}
                className="pill-btn-outline inline-flex"
                onClick={() => setOpen(false)}
              >
                Book Call
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
