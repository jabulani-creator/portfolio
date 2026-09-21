export const CASE_STUDY_MARKETING_FALLBACK: Record<
  string,
  import("../../../types/CaseStudyMarketingPage").CaseStudyMarketing
> = {
  "emmasdale-sda-church": {
    heroSubtitle: "From scattered communication to one digital centre.",
    roleLine: "Church digital platform · Strategy · UX · Full-stack development",
    heroContext:
      "Emmasdale SDA needed more than a new website. Information, member communication, and administration were spread across WhatsApp, Facebook, paper, and the church office.",
    builtPills: ["Public website", "Member experiences", "Leadership platform"],
    problemTitle: "Information was everywhere — but there was no digital centre.",
    problemChannels: [
      "Facebook",
      "WhatsApp",
      "Paper",
      "Personal phones",
      "Church office",
    ],
    opportunity:
      "Create one mobile-friendly platform connecting visitors, members, and leaders.",
    experiencesTitle: "One platform. Three experiences.",
    experiences: [
      {
        label: "Public",
        items: ["Services", "Ministries", "Sermons", "Events", "Prayer & care"],
      },
      {
        label: "Members",
        items: ["Bulletin", "Prayer wall", "Devotions", "Resources", "Forms"],
      },
      {
        label: "Leaders",
        items: ["Reports", "Care inbox", "Scheduling", "Administration"],
      },
    ],
    beforeColumn: [
      "Paper reports",
      "WhatsApp requests",
      "Scattered bulletins",
      "Private prayer messages",
      "Office-dependent administration",
    ],
    afterColumn: [
      "Digital reports",
      "Structured requests",
      "One bulletin",
      "Shared prayer wall",
      "Mobile leadership dashboard",
    ],
    whatChanged: [
      {
        before: "Quarterly reports depended on paper and office visits.",
        after: "Department leaders can submit reports from their phones.",
      },
      {
        before: "Prayer requests lived in private messages.",
        after:
          "Appropriate requests can be shared through a prayer wall while sensitive care remains confidential.",
      },
      {
        before: "Weekly information was scattered across PDFs, WhatsApp, and announcements.",
        after: "One digital bulletin gives members a consistent place to return to.",
      },
    ],
    approachTitle: "The interesting part wasn't building the website — it was figuring out what needed to be built.",
    approachSteps: [
      { name: "Investigate", detail: "Stakeholders · channels · workflows · journeys" },
      { name: "Diagnose", detail: "Where information, participation, and admin broke down" },
      { name: "Architect", detail: "Public + members + leaders on one platform" },
      { name: "Build", detail: "Website · workflows · dashboard" },
      { name: "Ship", detail: "Live platform at emmasdalesda.org" },
    ],
  },
  nikwisa: {
    heroSubtitle: "From directory to decide-and-act platform.",
    roleLine: "Discovery platform · Product strategy · UX · Development",
    heroContext:
      "Nikwisa needed more than listings. Users had to compare real options, trust the data, and reach businesses — not scroll another vague directory.",
    builtPills: ["Explore hubs", "Structured place pages", "WhatsApp enquiry"],
    problemTitle: "Discovery was shallow — compare and enquire paths were weak.",
    problemChannels: [
      "Thin place data",
      "Directory mental model",
      "Missing price & conditions",
      "SEO crawl issues",
      "Unclear conversion path",
    ],
    opportunity:
      "Own discover → compare → decide → WhatsApp enquire with hub-first architecture.",
    experiencesTitle: "One platform. Three motions.",
    experiences: [
      { label: "Explore", items: ["Places", "Activities", "Ideas hubs", "PAC metadata"] },
      { label: "Compare", items: ["Price", "Conditions", "Good-for", "Trust signals"] },
      { label: "Enquire", items: ["Place view", "WhatsApp handoff", "Vendor shortlist"] },
    ],
    beforeColumn: [
      "Vague directory positioning",
      "Thin inventory",
      "Broken SEO signals",
      "Feed-like browsing",
    ],
    afterColumn: [
      "Decide-and-act story",
      "Richer hub pages",
      "Hub-first crawl",
      "Clear enquire CTA",
    ],
    whatChanged: [
      {
        before: "Users couldn't compare options with confidence.",
        after: "Key decision data surfaced on structured place hubs.",
      },
      {
        before: "Search and crawl sent mixed signals.",
        after: "Real 404s and hub-first architecture rebuilt trust with Google.",
      },
    ],
    approachTitle: "Product direction had to be decided before more features shipped.",
    approachSteps: [
      { name: "Investigate", detail: "User jobs · inventory · SEO · conversion" },
      { name: "Diagnose", detail: "Where discover → compare → enquire broke" },
      { name: "Architect", detail: "Explore / Plan · hub-first model" },
      { name: "Build", detail: "Crawl fixes · hub UX · enquire flows" },
      { name: "Ship", detail: "Iterative releases on nikwisa.com" },
    ],
  },
};

export type { CaseStudyMarketing } from "../../../types/CaseStudyMarketingPage";
