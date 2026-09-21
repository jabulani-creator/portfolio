/** Public “story layer” — scannable case study (Level 1). CMS can override later. */

export type JourneyStepStatus = "ok" | "warn" | "critical";

export type StoryJourneyStep = {
  label: string;
  status?: JourneyStepStatus;
  note?: string;
};

export type AudiencePersona = {
  label: string;
  question: string;
  needs: string[];
};

export type RevenueEngine = {
  label: string;
  detail?: string;
};

export type OutcomeShiftRow = {
  before: string;
  after: string;
};

/** Level 1 — 60–90 second business case before the deep story. */
export type CaseStudyExecutiveSummary = {
  title: string;
  situation: string;
  problem: string;
  investigated: string[];
  built: { heading: string; bullets: string[] }[];
  result: string;
  roleLine: string;
};

export type CaseStudyStoryLayer = {
  executiveSummary?: CaseStudyExecutiveSummary;
  heroHook?: string;
  businessInsight?: string;
  revenueEngines?: RevenueEngine[];
  audiencePersonas?: AudiencePersona[];
  audienceFootnote?: string;
  journeySteps?: StoryJourneyStep[];
  journeyFootnote?: string;
  fixLayers?: string[];
  fixFootnote?: string;
  recommendationHeadline?: string;
  blueprintMonospace?: string;
  outcomeRows?: OutcomeShiftRow[];
  impactTarget?: {
    label: string;
    value: string;
    isProjection?: boolean;
  };
  roleTitles?: string;
  roleSteps?: string;
};

const emmasdaleStory: CaseStudyStoryLayer = {
  executiveSummary: {
    title: "From scattered communication to a church digital platform",
    situation:
      "Emmasdale SDA had an active congregation, strong communication channels, and many digital touchpoints — but information, member care, and administration were spread across Facebook, WhatsApp groups, paper forms, personal phones, and the church office.",
    problem:
      "The church did not only need a better website. It needed one digital centre connecting the public, members, and church leadership.",
    investigated: [
      "How visitors find and understand the church",
      "How members access weekly information and spiritual resources",
      "How prayer and care requests reach leaders",
      "How departments submit reports and information",
      "Where WhatsApp, paper, and office-based processes created friction",
    ],
    built: [
      {
        heading: "Public website",
        bullets: [
          "Services, ministries, events, sermons, articles, bulletin, Sabbath School, Daily with God, prayer, care, and visitor information",
        ],
      },
      {
        heading: "Member experiences",
        bullets: [
          "Digital bulletin, prayer wall, devotional content, resources, and church information",
        ],
      },
      {
        heading: "Leadership platform",
        bullets: [
          "Role-based dashboard, digital forms, quarterly reports, care inbox, scheduling, document requests, and ministry administration",
        ],
      },
    ],
    result:
      "Visitors, members, and leaders connect through one system — public information, member participation, and operational workflows on a mobile-friendly platform.",
    roleLine:
      "Strategy · UX · Architecture · Full-stack development — investigated, designed, built, and shipped.",
  },
  heroHook:
    "A church with information everywhere — but no digital centre.",
  businessInsight:
    "Ministry was active online and in the building — but leaders and members lived in different channels that never met in one place.",
  revenueEngines: [
    { label: "Public witness", detail: "Visitors & seekers" },
    { label: "Member life", detail: "Bulletin · care · prayer" },
    { label: "Leadership ops", detail: "Reports · forms · records" },
  ],
  audiencePersonas: [
    {
      label: "Visitor",
      question: "When and where is church?",
      needs: ["Service times", "Plan your visit", "Ministries"],
    },
    {
      label: "Member",
      question: "How do I stay connected all week?",
      needs: ["Bulletin", "Prayer wall", "Devotions", "Events"],
    },
    {
      label: "Leader",
      question: "Can I run my department from my phone?",
      needs: ["Reports", "Forms", "Care inbox", "Scheduling"],
    },
  ],
  audienceFootnote: "One platform. Public face and staff dashboard.",
  journeySteps: [
    { label: "Discover", status: "ok", note: "Strong Facebook reach" },
    { label: "Orient", status: "warn", note: "No single official source" },
    { label: "Participate", status: "critical", note: "Prayer & care fragmented" },
    { label: "Serve", status: "critical", note: "Paper + office-bound admin" },
    { label: "Return", status: "warn", note: "Church felt tied to the building" },
  ],
  fixLayers: [
    "Public website",
    "Member journeys",
    "Prayer & care workflows",
    "Digital forms & reports",
    "Role-based dashboard",
    "Mobile-first rhythm",
  ],
  recommendationHeadline:
    "A digital hub for worship, community, and church operations — on one platform.",
  blueprintMonospace: `            EMMASDALE DIGITAL HUB
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
    PUBLIC        MEMBERS      LEADERS
       │             │             │
   Visit · Care   Bulletin ·    Reports ·
   Ministries    Prayer wall    Forms · Care
   Sermons       Devotions      Scheduler
       │             │             │
       └─────────────┼─────────────┘
                     ↓
            ONE MOBILE-FRIENDLY HOME`,
  outcomeRows: [
    { before: "Paper quarterly reports", after: "Phone-friendly submissions" },
    { before: "Private prayer messages", after: "Shared prayer wall" },
    { before: "Scattered WhatsApp lists", after: "Structured digital forms" },
    { before: "Sabbath-only information", after: "Extended church between Sabbaths" },
  ],
  roleTitles: "Strategy · UX · Full-stack development",
  roleSteps: "Investigated → Diagnosed → Architected → Built → Shipped",
};

const nikwisaStory: CaseStudyStoryLayer = {
  heroHook:
    "A Lusaka discovery product — caught between feeds and vague directories.",
  businessInsight:
    "Users didn't need another listing site. They needed to compare real options and message the right business.",
  revenueEngines: [
    { label: "Explore", detail: "Places · activities · PAC" },
    { label: "Plan", detail: "Event vendors (paused GTM)" },
    { label: "Enquire", detail: "WhatsApp as primary conversion" },
  ],
  audiencePersonas: [
    {
      label: "Weekend planner",
      question: "What can we do — and for how much?",
      needs: ["Ideas", "Prices", "Conditions", "Compare"],
    },
    {
      label: "Activity seeker",
      question: "Which place fits us?",
      needs: ["PAC metadata", "Fees", "Good-for", "Enquire"],
    },
    {
      label: "Event organiser",
      question: "Who can supply my event?",
      needs: ["Vendor categories", "Shortlist", "WhatsApp"],
    },
  ],
  audienceFootnote: "Discover → compare → decide → enquire.",
  journeySteps: [
    { label: "Discover", status: "warn", note: "Directory mental model" },
    { label: "Compare", status: "critical", note: "Missing price & conditions" },
    { label: "Decide", status: "critical", note: "No decide-and-act story" },
    { label: "Enquire", status: "ok", note: "WhatsApp CTA shipped" },
  ],
  fixLayers: [
    "Structured inventory",
    "Hub-first SEO",
    "Compare-and-enquire UX",
    "Data completeness rules",
    "Crawl hygiene",
    "Explore-first GTM",
  ],
  recommendationHeadline:
    "Own discover → compare → decide → WhatsApp enquire — not another feed.",
  blueprintMonospace: `                  NIKWISA
                     │
              ┌──────┴──────┐
              ↓             ↓
           EXPLORE         PLAN
              │             │
        Places · PAC    Event vendors
        Activities      (return GTM)
        Ideas hubs
              │
              └──────→ WHATSAPP ENQUIRE`,
  outcomeRows: [
    { before: "Vague directory positioning", after: "Decide-and-act platform" },
    { before: "Thin place data", after: "PAC · price · conditions on hubs" },
    { before: "SEO distrust", after: "Real 404s · hub-first crawl" },
  ],
  impactTarget: {
    label: "North-star direction",
    value: "Content → hub → view → WhatsApp enquire",
    isProjection: true,
  },
  roleTitles: "Product strategy · Explore/Plan direction · SEO architecture",
  roleSteps: "Diagnosed → Positioned → Shipped crawl & hub fixes",
};

const STORY_BY_SLUG: Record<string, CaseStudyStoryLayer> = {
  "emmasdale-sda-church": emmasdaleStory,
  nikwisa: nikwisaStory,
};

export function getCaseStudyStoryLayer(slug: string): CaseStudyStoryLayer {
  return STORY_BY_SLUG[slug] ?? {};
}

import type { CaseStudyDeepDive } from "../../../types/CaseStudyV2";

export function deepDiveToStoryLayer(
  deepDive: CaseStudyDeepDive
): CaseStudyStoryLayer {
  return {
    executiveSummary: deepDive.executiveSummary
      ? {
          title: deepDive.executiveSummary.title ?? "",
          situation: deepDive.executiveSummary.situation ?? "",
          problem: deepDive.executiveSummary.problem ?? "",
          investigated: deepDive.executiveSummary.investigated ?? [],
          built: (deepDive.executiveSummary.built ?? []).map((b) => ({
            heading: b.heading ?? "",
            bullets: b.bullets ?? [],
          })),
          result: deepDive.executiveSummary.result ?? "",
          roleLine: deepDive.executiveSummary.roleLine ?? "",
        }
      : undefined,
    audiencePersonas: deepDive.audiencePersonas
      ?.filter((p) => p.label)
      .map((p) => ({
        label: p.label!,
        question: p.question ?? "",
        needs: p.needs ?? [],
      })),
    journeySteps: deepDive.journeySteps
      ?.filter((s) => s.label)
      .map((s) => ({
        label: s.label!,
        status: s.status,
        note: s.note,
      })),
    revenueEngines: deepDive.revenueEngines
      ?.filter((e) => e.label)
      .map((e) => ({ label: e.label!, detail: e.detail })),
    fixLayers: deepDive.fixLayers,
    recommendationHeadline: deepDive.recommendationHeadline,
    blueprintMonospace: deepDive.blueprintMonospace,
    outcomeRows: deepDive.outcomeRows
      ?.filter((r) => r.before && r.after)
      .map((r) => ({ before: r.before!, after: r.after! })),
  };
}

export function buildStoryLayerFromCaseStudy(
  slug: string,
  caseStudy: {
    oneLineThesis?: string;
    contextStats?: { label?: string; value?: string }[];
    role?: string;
  }
): CaseStudyStoryLayer {
  const fromSlug = getCaseStudyStoryLayer(slug);
  if (Object.keys(fromSlug).length > 0) return fromSlug;

  return {
    heroHook: caseStudy.oneLineThesis,
    revenueEngines: caseStudy.contextStats?.map((s) => ({
      label: s.label ?? "",
      detail: s.value,
    })),
    roleTitles: caseStudy.role,
  };
}
