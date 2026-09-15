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

export type CaseStudyStoryLayer = {
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

const crossParkStory: CaseStudyStoryLayer = {
  heroHook:
    "A destination people can discover — but struggle to buy from.",
  businessInsight:
    "Cross Park isn't selling one thing. Its digital experience has to move three completely different customers toward three different decisions.",
  revenueEngines: [
    { label: "Day visits", detail: "High volume" },
    { label: "Accommodation", detail: "Higher ticket" },
    { label: "Events", detail: "High value" },
  ],
  audiencePersonas: [
    {
      label: "Family",
      question: "How much is it to spend the day?",
      needs: ["Pricing", "Activities", "Directions", "Rules"],
    },
    {
      label: "Overnight guest",
      question: "Is this worth staying at?",
      needs: ["Chalets", "Amenities", "Rates", "Availability"],
    },
    {
      label: "Corporate planner",
      question: "Can this venue handle our event?",
      needs: ["Capacity", "Packages", "Dates", "Quote"],
    },
  ],
  audienceFootnote: "One website. Three buying journeys.",
  journeySteps: [
    { label: "Discover", status: "ok", note: "Social visibility" },
    { label: "Understand", status: "warn", note: "Information fragmented" },
    { label: "Compare", status: "critical", note: "Pricing difficult to find" },
    { label: "Enquire", status: "critical", note: "No structured event enquiry" },
    { label: "Book", status: "warn", note: "Manual WhatsApp process" },
  ],
  journeyFootnote:
    "Two critical breakpoints block high-intent visitors before they ever book.",
  fixLayers: [
    "Content",
    "Information architecture",
    "Pricing transparency",
    "Booking workflow",
    "Corporate lead capture",
    "WhatsApp conversion",
  ],
  fixFootnote: "Not just a website — a system of clarity and conversion.",
  recommendationHeadline: "A dedicated digital front door for Cross Park.",
  blueprintMonospace: `                 CROSS PARK
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
   DAY VISITS   ACCOMMODATION    EVENTS
       │             │             │
   Activities      Chalets       Venues
   Pricing         Rates         Packages
   Rules           Gallery       Enquiries
       │             │             │
       └─────────────┼─────────────┘
                     ↓
               BOOK / ENQUIRE`,
  outcomeRows: [
    { before: "Hidden pricing", after: "Transparent packages" },
    { before: "Generic corporate site", after: "Dedicated Cross Park experience" },
    { before: "One audience", after: "Segmented journeys" },
    {
      before: "WhatsApp for basic questions",
      after: "Site handles basic information",
    },
    {
      before: "Unstructured event enquiries",
      after: "Qualified event leads",
    },
  ],
  impactTarget: {
    label: "90-day conversion objective",
    value: "20–30 → 60+ qualified enquiries / week",
    isProjection: true,
  },
  roleTitles: "Digital Experience Consultant · Product Strategist · Developer",
  roleSteps: "Investigated → Diagnosed → Architected → Designed → Built",
};

const emmasdaleStory: CaseStudyStoryLayer = {
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
  "cross-park": crossParkStory,
  "emmasdale-sda-church": emmasdaleStory,
  nikwisa: nikwisaStory,
};

export function getCaseStudyStoryLayer(slug: string): CaseStudyStoryLayer {
  return STORY_BY_SLUG[slug] ?? {};
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
