/**
 * Single source of truth for Sanity project + dataset.
 * Set in .env.local (see .env.example).
 *
 * Use literal process.env.NEXT_PUBLIC_* names so Next.js inlines them for /admin (client bundle).
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to .env.local (sanity.io/manage → Settings → Project ID), then restart npm run dev."
  );
}

const config = {
  projectId,
  dataset,
  apiVersion: "2023-08-29",
};

export default config;
