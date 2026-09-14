import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thewebsiteguy.zm";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/digital-experience-diagnostic",
    "/case-studies",
    "/how-i-work",
    "/about",
    "/start-here",
    "/ongoing-care",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/start-here" ? 0.9 : 0.8,
  }));
}
