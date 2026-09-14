import Offer from "../../../types/Offer";
import SiteSettings from "../../../types/SiteSettings";
import HowIWorkContent from "../../../types/HowIWork";
import FounderProfile from "../../../types/FounderProfile";
import RetainerOffer from "../../../types/RetainerOffer";
import CaseStudy from "../../../types/CaseStudy";
import {
  emmasdaleEvidence,
  nikwisaEvidence,
} from "./caseStudyEvidenceContent";

/**
 * Fallback shell used only when no published siteSettings exist in Sanity.
 * Long-term truth lives in CMS — update via /admin, not here.
 */
export function getDefaultSiteShell(): SiteSettings {
  return {
    _id: "default",
    siteTitle: "The Website Guy",
    categoryHeadline:
      "I investigate why your digital presence isn't working, then build the fix.",
    homepageVariant: "diagnostic",
    navigation: [
      { label: "Methodology", href: "/#methodology", order: 1 },
      { label: "Case Studies", href: "/case-studies", order: 2 },
      { label: "Diagnostic", href: "/digital-experience-diagnostic", order: 3 },
    ],
    primaryCta: {
      label: "Book a Digital Experience Diagnostic",
      href: "/start-here",
    },
    contact: {
      email: "charinga@gmail.com",
      phone: "+260977862033",
      linkedin: "https://www.linkedin.com/in/jabulani-charinga-33b030222",
    },
    footerCopy:
      "Digital experience consulting for SME owners and small institutions in Zambia.",
    localTrustLine:
      "Based in Lusaka — working with Zambian lodges, churches, schools, and SMEs.",
    operatingSince: "2019",
    seoDefaults: {
      title: "The Website Guy — Digital Experience Consultant",
      description:
        "Digital experience consulting, business diagnostics, and builds for SMEs in Zambia — web development Zambia, digital strategy, software development.",
    },
  };
}

/**
 * Fallback offer used only when no published offer exists in Sanity.
 * Long-term truth lives in CMS — update via /admin, not here.
 */
export function getDefaultOffer(): Offer {
  return {
    _id: "default",
    title: "Digital Experience Diagnostic",
    slug: "digital-experience-diagnostic",
    summary:
      "A fixed-scope investigation into why your digital presence is not converting — delivered in about one week with a live walkthrough call.",
    turnaround: "~1 week",
    priceLabel: "K12,000 – K18,000",
    priceNote: "Fixed scope · 8 deliverables + 90-minute walkthrough call",
    walkthroughCallDescription:
      "A 90-minute live walkthrough — not just a PDF dropped in your inbox.",
    processSummary:
      "Investigate the customer journey, gather evidence, rank what to fix first, then decide whether a build is even necessary.",
    ctaLabel: "Book a Digital Experience Diagnostic",
    faq: [
      {
        order: 1,
        question: "Isn't this just a free website audit?",
        answer:
          "No. A generic audit lists technical issues. This diagnostic maps your customer journey, reviews, competitors, and revenue leaks — then ranks what to fix first. You get eight named deliverables and a live walkthrough, not a checklist PDF.",
      },
      {
        order: 2,
        question: "What if I actually just need a new website?",
        answer:
          "Sometimes a build is the right answer — but only after we see where customers drop off. The diagnostic tells you whether you need a new site, better pricing clarity, listings work, or something else entirely.",
      },
      {
        order: 3,
        question: "What do you need from me during the week?",
        answer:
          "Access to your website, Google Business Profile, social profiles, and any booking or enquiry channels you use. A short call to confirm goals. Then I investigate — you are not managing the project day to day.",
      },
      {
        order: 4,
        question: "What happens after the diagnostic?",
        answer:
          "You keep the full report and walkthrough. If a build is warranted, we scope it from the evidence — not from guesswork. If not, you still have a prioritized plan. Ongoing Care is optional after build work.",
      },
    ],
    deliverables: [
      {
        order: 1,
        title: "Customer Journey Audit",
        description:
          "How a prospect discovers, evaluates, and contacts your business today.",
      },
      {
        order: 2,
        title: "Website Audit",
        description:
          "Mobile speed, message clarity, CTA visibility, and whether pricing or key info is easy to find.",
      },
      {
        order: 3,
        title: "Google Business Profile Audit",
        description:
          "Accuracy, completeness, and consistency across your listings.",
      },
      {
        order: 4,
        title: "Review Analysis",
        description:
          "Patterns across Google, Facebook, and TripAdvisor — what customers say and what goes unaddressed.",
      },
      {
        order: 5,
        title: "Competitor Comparison",
        description: "Who your customer picks instead, and why.",
      },
      {
        order: 6,
        title: "Top Revenue Leaks",
        description:
          "Specific, evidenced friction points costing you money — ranked.",
      },
      {
        order: 7,
        title: "Prioritized Action Plan",
        description: "Ranked by leverage — not a wishlist.",
      },
      {
        order: 8,
        title: "90-Minute Walkthrough Call",
        description: "Delivered live so you can ask questions — not just emailed.",
      },
    ],
  };
}

export function getProductName(
  variant: "diagnostic" | "audit" | undefined
): string {
  return variant === "audit"
    ? "Digital Experience Audit"
    : "Digital Experience Diagnostic";
}

/**
 * Fallback How I Work content when nothing is published in Sanity.
 */
export function getDefaultHowIWorkContent(): HowIWorkContent {
  return {
    _id: "default",
    intro:
      "Every engagement starts with evidence — not assumptions. The diagnostic maps how customers discover, evaluate, and contact your business, then ranks what to fix first.",
    processSteps: [
      {
        order: 1,
        title: "Discovery call",
        description:
          "Confirm scope, access, and what success looks like for your business.",
      },
      {
        order: 2,
        title: "Investigation",
        description:
          "Audit the customer journey, website, listings, reviews, and competitors.",
      },
      {
        order: 3,
        title: "Synthesis",
        description:
          "Rank revenue leaks and produce a prioritized action plan.",
      },
      {
        order: 4,
        title: "Walkthrough",
        description:
          "90-minute live call to review findings and answer questions.",
      },
    ],
    scopeBoundaryLine:
      "Broader business issues sometimes surface during a diagnostic — operations, staffing, pricing. Those are noted honestly, but they are not the product being sold today. The product is a digital experience diagnostic with defined deliverables.",
    buildFollowOnSummary:
      "If the diagnostic shows a build is the right fix — website, booking flow, review workflow — that work is scoped separately, based on evidence from the investigation.",
  };
}

/**
 * Fallback About content when nothing is published in Sanity.
 */
export function getDefaultFounderProfile(): FounderProfile {
  return {
    _id: "default",
    founderName: "Jabulani Charinga",
    headline:
      "I don't just build websites. I investigate why your digital presence isn't working, then build the solution based on evidence.",
    investigationAdvantage:
      "Before recommending a single line of code, I map how real customers move through your digital touchpoints — where they hesitate, what they cannot find, and who they choose instead.",
    implementationAdvantage:
      "When a build is the right fix, I implement it myself. Diagnosis and development stay connected — you are not handed off between a consultant and a developer who never saw the evidence.",
    credibilityCopy:
      "Based in Lusaka, Zambia. Working with SME owners and small institutions who need clarity before they spend money on another website that changes nothing.",
  };
}

/**
 * Fallback retainer content when nothing is published in Sanity.
 */
export function getDefaultRetainerOffer(): RetainerOffer {
  return {
    _id: "default",
    title: "Ongoing Care",
    summary:
      "Monthly upkeep for businesses that want their digital presence maintained after the diagnostic and any build work — without hiring a full-time person.",
    priceLabel: "K1,000–K3,000/mo",
    scopeItems: [
      {
        order: 1,
        title: "Content updates",
        description: "Keep site and listing copy current as your business changes.",
      },
      {
        order: 2,
        title: "SEO basics",
        description: "Monitor findability and fix small issues before they compound.",
      },
      {
        order: 3,
        title: "Review monitoring",
        description: "Track new reviews and flag patterns that need a response.",
      },
    ],
    idealClientFit:
      "Best for businesses that completed a diagnostic (and any build follow-on) and want consistent upkeep — lodges, institutions, and SMEs with an active customer base.",
    followOnExplanation:
      "Ongoing Care is the third step: first the diagnostic clarifies what is broken, then a build fixes it if needed, then retainer keeps it working month to month.",
    progressionCopy:
      "Diagnostic → Build (if needed) → Ongoing Care",
  };
}

/**
 * Fallback case studies when none are published in Sanity (studio preview + launch scaffolding).
 */
export function getDefaultCaseStudies(): CaseStudy[] {
  return [
    {
      _id: "default-nikwisa",
      slug: "nikwisa",
      title: "Nikwisa",
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
      engagementDuration: "Live product · Explore-weighted GTM",
      engagementType: "client",
      liveUrl: "https://nikwisa.com/",
      contextSummary: "Local discovery & connection · Lusaka, Zambia",
      contextStats: [
        { label: "Product lanes", value: "Explore + Plan (dual entry)" },
        { label: "Primary action", value: "WhatsApp enquire" },
        { label: "Market", value: "Lusaka-first structured inventory" },
      ],
      excerpt:
        "Nikwisa (Bemba for “Where?”) helps Lusaka users finish what feeds and quote forms only start: discover options, compare prices, decide, and message the right place or vendor.",
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
        "We didn't need another feed — we needed people to see prices, pick an activity, and message the business.",
      clientQuoteAttribution: "Nikwisa product team",
      customerJourney:
        "Discover → Compare options & prices → Decide → WhatsApp enquire",
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
              "Instagram and friend WhatsApp — prices unclear, no shortlist.",
            after:
              "Ideas or PAC hub → compare fees and conditions → enquire.",
          },
        ],
      },
      scopeNote:
        "Explore leads go-to-market; Plan stays in product but marketing is paused. Payments in-app are not MVP. Confirm live URL in CMS if production domain differs.",
      closingBridge:
        "If your market loses people at “how much?” and “which one?” — structured compare-and-enquire beats another feed.",
      contentBlocks: [
        {
          blockType: "callout",
          placement: "scope",
          text: "Plan (event vendors) stays in the product while Explore leads GTM — dual entry is intentional.",
        },
      ],
      revenueLeaks: [
        {
          title: "Directory mental model",
          description: "Product read as a weak listing site versus feeds and quote forms.",
          businessImpact: "Wrong comparison axis in market.",
          recommendedFix: "Decide/act positioning with real hub data.",
        },
        {
          title: "Data before content",
          description: "Missing price, good-for, PAC, and conditions on flagship places.",
          businessImpact: "Budget and Ideas content cannot tell the truth.",
          recommendedFix: "Intake checklist before social scale.",
        },
        {
          title: "Crawl trust debt",
          description: "Historical soft 404s and empty hubs.",
          businessImpact: "Search distrust of useful URLs.",
          recommendedFix: "Real 404s, noindex empty hubs, hub-first SEO.",
        },
      ],
      observation:
        "Nikwisa had strong product surface — places, activities, Ideas, Plan hubs, WhatsApp enquire — but the market still met it as a vague directory while competitors owned awareness feeds, thin wedding quotes, and head tourism keywords.",
      evidence:
        "Diagnostic from live product, Explore/Plan rules, SEO opportunity map, competitive patterns, and inventory quality audit (PAC, conditions, price semantics, soft 404 history).",
      decision:
        "Own discover → compare → decide → WhatsApp enquire; Explore-first GTM with Plan parked in marketing, not retired; data completeness before content volume.",
      implementation:
        "Dual entry, structured discovery metadata, Ideas and PAC hubs, event-planning categories, enquire CTAs, SEO hub enrichment, crawl hygiene, and ops rules for naming and place intake.",
      outcome:
        "Clearer decide-and-act story for Explore season; Plan hubs remain for return GTM; actions-generated metrics direction over vanity traffic.",
    },
    {
      _id: "default-emmasdale",
      slug: "emmasdale-sda-church",
      title: "Emmasdale SDA Church",
      featured: true,
      category: "software",
      ...emmasdaleEvidence,
      oneLineThesis:
        "Church on the phone — bulletin and discipleship for members, shared prayer on the wall, and leadership work (reports, forms, care) without paper runs to the office.",
      role: "Strategy · UX · Full-stack development",
      context: "Church digital platform (public site + staff dashboard)",
      period: "2025–2026",
      projectTags: "Digital platform · Ministry operations · Role-based admin",
      clientLabel: "Emmasdale Seventh-day Adventist Church",
      engagementDuration: "Platform build · ongoing content & ops adoption",
      engagementType: "client",
      liveUrl: "https://emmasdalesda.org/",
      contextSummary: "Faith community · Lusaka",
      contextStats: [
        { label: "Public site", value: "emmasdalesda.org" },
        { label: "Social reach (Facebook)", value: "~5,815 followers" },
        { label: "Platform shape", value: "Public site + staff dashboard" },
      ],
      excerpt:
        "Emmasdale needed more than a website: leaders submitting quarterly reports from their phones, digital forms instead of WhatsApp lists, a prayer wall where members pray with one another, and an extended church so people stay connected between Sabbaths — not only inside the building.",
      outcomeHighlight:
        "Paper and office-bound admin → phone-friendly reports, forms, prayer wall, and weekly rhythm on one platform",
      outcomeMetrics: [
        {
          label: "Leadership admin",
          value: "Quarterly reports & forms from a phone",
          isTarget: false,
        },
        {
          label: "Member connection",
          value: "Bulletin, devotionals, prayer wall — extended church",
          isTarget: false,
        },
      ],
      clientQuote:
        "For the first time we can point members and visitors to one place — this Sabbath, prayer, ministries, and how to get help — instead of five different WhatsApp groups.",
      clientQuoteAttribution: "Church leadership (name on request)",
      customerJourney:
        "Discover → Plan a visit → Worship & learn → Pray & request care → Join a ministry",
      techStack: ["Next.js", "Node.js", "MongoDB", "Role-based admin", "Figma"],
      beforeAfter: {
        headline: "Church operations before & after",
        items: [
          {
            label: "Weekly information",
            before:
              "PDF bulletins, WhatsApp posters, and pulpit repeats — easy to contradict or lose.",
            after:
              "One bulletin link with Sabbath School, divine service, announcements, prayer, and archive.",
          },
          {
            label: "Prayer & pastoral care",
            before: "Requests scattered across leaders' personal messages.",
            after:
              "Public, anonymous, or confidential modes with leadership queues and follow-up.",
          },
          {
            label: "Institutional memory",
            before:
              "Records in clerks' files, private chats, and officers' phones — lost when roles change.",
            after:
              "Published bulletins, submissions, approvals, reports, and care queues retained in the platform.",
          },
        ],
      },
      scopeNote:
        "Implemented: public site, digital bulletin, Daily with God, Sabbath School surfaces, prayer and care intake, digital forms, quarterly reports, facility scheduler, Camp Meeting and pledges, church-document requests (not financial requisitions), role-based dashboard. Future scope: full treasury ledger, payment processing, financial requisition chains, membership register, automated WhatsApp broadcasting, and broad attendance analytics. Adoption and content ownership remain ongoing church work.",
      closingBridge:
        "If your church still runs on WhatsApp posters and clerk PDFs, the friction is structural — a platform can unify worship information and leadership workflow without replacing pastoral judgment.",
      contentBlocks: [
        {
          blockType: "callout",
          placement: "scope",
          text: "Dashboard “Requisitions” manages official church-document requests — not financial expense approval. Giving pages stay informational until treasury workflows are confirmed; finance ledger and payment processing remain future scope.",
        },
      ],
      observation:
        "Emmasdale SDA Church has an active congregation, visible ministries, and meaningful online reach. The gap was not lack of ministry energy — it was the absence of one digital environment connecting public information, spiritual participation, member requests, and leadership administration.",
      evidence:
        "June 2026 diagnostic aligned with the live product: stakeholder and channel review, care-path mapping, SDA/church benchmarks, and audit of public routes plus staff dashboard domains (content, events, ministries, care, bulletins, forms, quarterly reports, scheduler, Camp Meeting, document requests, roles).",
      decision:
        "Two connected sides: (1) public witness, weekly rhythm, and participation — visitor clarity, bulletin archive, Daily with God, Sabbath School, prayer and care intake; (2) leadership administration — role-based dashboard for publishing, care assignment, forms, reports, scheduling, and institutional records. Controlled publishing; confidential care stays staff-only.",
      implementation:
        "Shipped emmasdalesda.org and protected staff dashboard: Plan Your Visit and service discovery; ministries, events, sermons, articles, health content; digital bulletin with share assets; prayer wall and care forms; church-family and document-request journeys; giving guidance; dashboard for bulletin workflow, content/event approval, care inbox, digital forms, quarterly departmental reports, facility scheduler, Camp Meeting and pledges, church-document issuance, and role administration.",
      outcome:
        "The platform already addresses scattered communication, unclear Sabbath information, disappearing spiritual content, lost requests, paper-dependent reporting, scheduling collisions, and manual document handling — when leaders use it as the normal way of working. Next risk is governance, content rhythm, and adoption — not proving the category of solution.",
    },
  ];
}
