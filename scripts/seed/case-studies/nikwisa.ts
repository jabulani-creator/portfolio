import {
  nikwisaEvidence,
} from "../../../src/lib/content/caseStudyEvidenceContent";

/**
 * Nikwisa — Sanity caseStudy document (text only).
 * Source: Business diagnostic (September 2026) + Explore/Plan product direction.
 * Images: add hero + evidenceMedia in Studio after seed.
 * liveUrl: confirm production domain in Studio if different.
 */

export const NIKWISA_CASE_STUDY_ID = "caseStudy-nikwisa";

export function buildNikwisaCaseStudyDocument(options?: {
  isPublished?: boolean;
  liveUrl?: string;
}) {
  const isPublished = options?.isPublished ?? false;
  const liveUrl = options?.liveUrl ?? "https://nikwisa.com/";

  return {
    _id: NIKWISA_CASE_STUDY_ID,
    _type: "caseStudy" as const,
    title: "Nikwisa",
    slug: { _type: "slug" as const, current: "nikwisa" },
    isPublished,
    showOnWebsite: isPublished,
    featured: false,
    category: "software",
    ...nikwisaEvidence,
    oneLineThesis:
      "A Lusaka decide-and-act platform — structured places, activities, and event vendors so people compare real prices and enquire on WhatsApp, not another vague directory.",
    role: "Product strategy · Explore/Plan direction · SEO & discovery architecture",
    context: "Local discovery platform · Explore + Plan · Lusaka-first",
    period: "2025–2026",
    projectTags: "Explore · Event planning · Structured inventory · WhatsApp enquire",
    clientLabel: "Nikwisa",
    contextSummary: "Local discovery & connection · Lusaka, Zambia",
    excerpt:
      "Nikwisa (Bemba for “Where?”) helps Lusaka users finish what feeds and quote forms only start: discover options, compare prices, decide, and message the right place or vendor.",
    liveUrl,
    engagementDuration: "Live product · Explore-weighted GTM (September 2026)",
    engagementType: "client",
    contextStats: [
      { label: "Product lanes", value: "Explore + Plan (dual entry)" },
      { label: "Primary action", value: "WhatsApp enquire" },
      { label: "Market", value: "Lusaka-first structured inventory" },
    ],
    customerJourney:
      "Discover → Compare options & prices → Decide → WhatsApp enquire",
    observation: `Nikwisa already had substantial product surface: places and activities, Ideas collections, Event Planning category hubs, vendor stores and packages, and WhatsApp enquire flows. The business problem was not missing features — it was position and completion.

The market met Nikwisa as a vague “directory” while competitors owned clearer slots: event feeds for awareness, thin wedding quote sites, and tourism giants for head keywords. Users still hunted on Instagram and WhatsApp without prices or a fair comparison path.`,
    evidence: `This diagnostic worked backward from the live product and codebase: Explore (places, PAC hubs, Ideas, What's On) and Plan (stores, offerings, event-planning categories), plus recent SEO hub enrichment, real 404s, noindex on empty shells, and an explicit opportunity map for one intent → one URL.

Competitive review showed quote-form wedding sites winning on structure with thin data — Nikwisa's edge is utility on the landing URL (listings, starting prices, enquire). Soft 404 history and uneven discovery fields (conditions, PAC tags, price semantics) were documented as trust and crawl risks.`,
    decision: `Own the decide-and-act job, not awareness alone:

Explore — “What are we doing?” — inspiration through Ideas and PAC hubs, comparison on place and activity pages with fees, good-for, and conditions, then WhatsApp enquire.

Plan — “Who do we hire?” — remain a first-class lane (parked in go-to-market focus, not retired): packages, category hubs, shortlist, enquire.

Locked rules: intent-first entry, Places as Explore data asset, What's On stays thin, enquire-first (not payments in MVP), editorial Hidden Gems separate from filters, fill structured data before scaling social content formats.`,
    implementation: `Shipped and iterated on dual entry (Explore + Plan), structured place and activity models with discovery metadata, dynamic Ideas plus editorial collections, PAC category hubs, event-planning vendor hubs, store offerings, verification patterns, and consistent WhatsApp CTAs across place, activity, store, and package surfaces.

SEO layer: hub intros and FAQ schema, sitemap discipline, empty-hub noindex, store-level 404 honesty, and hub-first territory planning rather than chasing every long-tail activity URL. Ops playbooks tie activity naming, PAC, conditions, and place intake checklists to content that queries the database truthfully.`,
    outcome: `Nikwisa is positioned as structured Lusaka inventory that helps someone choose and act — especially in Explore season — while Plan hubs stay indexable for when wedding and event GTM returns. North-star direction: actions generated (content → hub → place view → WhatsApp), not follower counts.

Inventory completeness, Places filter UX (What · Budget · Near me · Good for), and full enquire analytics remain active product and ops work — not hidden as “done.”`,
    scopeNote: `Explore is the active go-to-market priority; Event Planning is paused in marketing focus but not removed from the product. In-app payments and booking are out of scope for MVP. Head SEO battles (e.g. generic “things to do Lusaka”) are deliberately deferred in favour of specific PAC and Ideas territories. Featured monetisation waits until repeatable content traffic exists.`,
    outcomeHighlight:
      "Directory confusion → decide-and-act platform with structured Lusaka inventory",
    outcomeMetrics: [
      {
        label: "North-star direction",
        value: "Content → hub → view → WhatsApp enquire",
        isTarget: true,
      },
      {
        label: "SEO posture",
        value: "Hub-first · crawl honesty shipped",
        isTarget: false,
      },
    ],
    clientQuote:
      "We didn't need another feed — we needed people to see prices, pick an activity, and message the business. That's the job Nikwisa is built for.",
    clientQuoteAttribution: "Nikwisa product team",
    revenueLeaks: [
      {
        title: "Directory mental model",
        description:
          "Public language and empty shells made the product look like a weaker listing site.",
        businessImpact:
          "Users judged Nikwisa on the wrong axis versus feeds and quote forms.",
        recommendedFix:
          "Explore decide/act positioning; Ideas + PAC hubs with real data before scale.",
      },
      {
        title: "Data before content",
        description:
          "Price, good-for, PAC, and activity conditions missing on flagship places.",
        frictionQuote: "How much is pottery, really?",
        businessImpact:
          "“Under K300” and budget content fails if the database can't answer.",
        recommendedFix:
          "Place intake checklist; fix inventory before social format volume.",
      },
      {
        title: "Crawl trust debt",
        description:
          "Historical soft 404s and empty hubs trained search engines to discount URLs.",
        businessImpact: "Useful pages struggle to earn impressions.",
        recommendedFix:
          "Real 404s, noindex empty hubs, sitemap discipline; validate after re-crawl.",
      },
      {
        title: "Awareness without action",
        description:
          "Competitors own “what's happening”; Nikwisa must own the next step.",
        businessImpact: "Traffic that never reaches WhatsApp enquire.",
        recommendedFix:
          "One primary URL per intent; clear enquire CTAs with context.",
      },
    ],
    techStack: [
      "Next.js",
      "Structured inventory (Places · Activities · Stores)",
      "Collections & SEO hubs",
      "WhatsApp enquire",
    ],
    beforeAfter: {
      headline: "How users finish the job",
      items: [
        {
          label: "Weekend planning",
          before:
            "Scroll Instagram and ask friends on WhatsApp — prices unclear, no shortlist.",
          after:
            "Ideas or PAC hub → compare places with fees and conditions → enquire one tap.",
        },
        {
          label: "Event hiring (Plan)",
          before:
            "Quote-form sites with no packages; endless Facebook asks.",
          after:
            "Category hub → vendor packages with starting prices → WhatsApp enquire.",
        },
        {
          label: "Supply side",
          before:
            "Businesses repeat the same FAQ in DMs.",
          after:
            "Structured listing with hours, fees, and activities; leads arrive with context.",
        },
      ],
    },
    closingBridge:
      "If your market still discovers you through feeds but loses people at “how much?” and “which one?” — the fix is structured compare-and-enquire data, not another content calendar.",
    contentBlocks: [
      {
        blockType: "callout",
        placement: "scope",
        text: "Plan (wedding/event vendors) stays in the product and SEO footprint while Explore leads go-to-market — dual entry is intentional, not a roadmap rollback.",
      },
    ],
    publishedAt: new Date().toISOString(),
  };
}
