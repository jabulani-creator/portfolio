import type {
  BusinessContext,
  EvidenceRecord,
  Investigation,
  Problem,
  ProblemSolutionMap,
  Testimonial,
  Workflow,
} from "../../../types/CaseStudy";

export const emmasdaleEvidence = {
  projectType: ["Digital Platform", "Business System", "Website"],
  strategicThesis:
    "Make worship easy. Make administration easy.",
  businessContext: {
    businessDescription:
      "Emmasdale SDA Church operates as an active Lusaka congregation with visible ministries and a large online audience (~5,800 Facebook followers). Value is created through worship, discipleship, care, and stewardship — not product sales. Before the platform, that work ran through disconnected Facebook posts, multiple WhatsApp groups, pulpit announcements, paper forms, and officers' personal phones.",
    businessModel:
      "Ministry operating model: public witness, member engagement, pastoral care intake, ministry coordination, giving clarity, and administrative accountability — all needing durable records, not one-off posts.",
    audiences: [
      "First-time visitors and seekers",
      "Existing members",
      "Online and diaspora worshippers",
      "Pastors, clerks, elders, treasurers",
      "Ministry and department leaders",
    ],
    existingChannels: [
      "Facebook",
      "WhatsApp groups",
      "Paper forms",
      "Pulpit announcements",
      "Personal officer phones",
    ],
    businessGoals: [
      "Leaders complete reports and collections from their phone — not only at the office",
      "Members stay connected to church life between Sabbaths and away from Lusaka",
      "Shared prayer and official information on one mobile-friendly platform",
      "Structured requests and records that outlive officer changes",
    ],
  } as BusinessContext,
  investigation: {
    approach:
      "Business diagnostic aligned with the implemented product, original SRS, and operating model — stakeholder interviews, channel audit, care-path mapping, benchmark against mature SDA and church platforms, and validation against live modules on emmasdalesda.org.",
    sources: [
      "Stakeholder interviews",
      "Social and WhatsApp workflow review",
      "Live public site and staff dashboard audit",
      "SDA / church platform benchmarks",
      "Product domains (roles, ministries, care, scheduling)",
    ],
    findings: [
      "Department and church work still meant paper forms, office visits, and WhatsApp lists — leaders could not reliably submit quarterly reports or collect data from their phone",
      "Members who missed Sabbath, travelled, or worshipped online had no single place for bulletin, devotions, sermons, and announcements — the church felt tied to the building and the right chat group",
      "Prayer often went to one leader's inbox; the congregation could not see appropriate public requests and pray together, while sensitive needs still lacked a confidential path",
      "Visitors and members could not trust one official, current source for service times, programmes, and how to request help",
    ],
  } as Investigation,
  problems: [
    {
      title: "Church admin tied to paper and the church office",
      description:
        "Quarterly departmental reports, sign-offs, and routine data still meant physical forms, clerk handoffs, or long WhatsApp threads — work that had to wait until someone was at the church or at a desk.",
      category: "administration" as const,
      businessImpact:
        "Ministry leaders with jobs and families delayed or skipped reports; pastors and clerks chased people instead of reviewing one submission; admin piled up on a few officers.",
      priority: 1,
      recommendedFix:
        "Online quarterly reports and digital forms leaders can complete from their phone, with leadership review in the dashboard.",
    },
    {
      title: "The church stopped when you left the building",
      description:
        "Bulletin, programme, devotions, and updates lived in Sabbath-only moments, lost PDFs, or groups you might not be in — especially for travellers, the sick, diaspora, and shift workers.",
      category: "communication" as const,
      businessImpact:
        "Members drifted between Sabbaths; remote worshippers consumed fragments on Facebook but had no durable rhythm; leaders re-sent the same links every week.",
      priority: 1,
      recommendedFix:
        "Mobile-first bulletin archive, Daily with God, Sabbath School, sermons, and announcements — one official link on the phone.",
    },
    {
      title: "Prayer was a private message, not shared intercession",
      description:
        "People texted a leader when they needed prayer; other members rarely saw appropriate public requests or could pray alongside them in a shared space.",
      category: "customerExperience" as const,
      businessImpact:
        "The body of the church could not intercede together; public encouragement was weak; sensitive requests still risked landing in the wrong chat.",
      priority: 2,
      recommendedFix:
        "Prayer wall where members submit and others can pray with them — plus anonymous and confidential modes for pastoral care.",
    },
    {
      title: "Information collection rebuilt every time",
      description:
        "Registrations, feedback, attendance, pledges, and camp forms were copied into notebooks, Google Forms, and new WhatsApp lists for each event or department.",
      category: "operations" as const,
      businessImpact:
        "Leaders duplicated effort; data was hard to reconcile; members did not know the official place to respond.",
      priority: 2,
      recommendedFix:
        "Digital forms and submission collection in the platform — one place to request, register, and respond.",
    },
    {
      title: "No official front door for visitors",
      description:
        "Facebook showed activity but not a predictable answer to where, when, what to expect, and how to ask for help before arriving.",
      category: "trust" as const,
      businessImpact:
        "Seekers hesitated; members forwarded screenshots instead of one trusted link.",
      priority: 3,
      recommendedFix:
        "Plan Your Visit, service times, map, ministries, and structured contact and care intake on emmasdalesda.org.",
    },
  ] as Problem[],
  problemSolutionMaps: [
    {
      title: "Administration leaders can do from their phone",
      problemSummary:
        "Quarterly reports, departmental figures, and routine church data depended on paper, office visits, and chasing people on WhatsApp.",
      whyItMattered:
        "Ministry leaders serve voluntarily — admin that requires travel or a desktop silently does not get done; clerks and pastors become the bottleneck.",
      decision:
        "Move repeatable church operations into the staff dashboard with mobile-friendly flows — starting with quarterly departmental reports and digital form collection.",
      solution:
        "Leaders submit structured reports and form responses from anywhere; authorised reviewers see status in one place instead of reconciling threads.",
      implementation:
        "Quarterly report modules with online completion and leadership review; digital form builder and submission inbox; role-scoped dashboard access on phone or computer.",
      outcome:
        "Department heads can file reports without coming to the church office; collected information lands in organised records instead of scattered lists.",
      importance: "primary" as const,
    },
    {
      title: "Extended church — connected on the phone",
      problemSummary:
        "Church life felt limited to Sabbath in the building — bulletin, programme, and spiritual content were easy to miss if you were away, unwell, or online-only.",
      whyItMattered:
        "Members and diaspora worshippers needed the same weekly rhythm and resources whether or not they sat in the sanctuary that week.",
      decision:
        "Design mobile-first public experiences: one bulletin link, daily reading, Sabbath School, sermons, and announcements that stay available all week.",
      solution:
        "An extended church on the phone — official content members can open, share to WhatsApp, and return to between Sabbaths.",
      implementation:
        "Digital bulletin with archive and share images; Daily with God; Sabbath School read/watch/listen; sermon and article library; events and announcements on the public site.",
      outcome:
        "Members stay connected to Emmasdale through their phones — not only through whichever group chat they happened to be added to.",
      importance: "primary" as const,
    },
    {
      title: "Pray together on the wall, care in the right inbox",
      problemSummary:
        "Prayer requests disappeared into private messages; members could not see public requests and pray with others, while sensitive needs still needed confidentiality.",
      whyItMattered:
        "Intercession is communal; pastoral care requires privacy and assignment — one informal channel cannot do both.",
      decision:
        "Public prayer wall for shared intercession; separate anonymous and confidential paths into the staff care inbox with assignment and status.",
      solution:
        "Members post prayer needs others can pray for; leaders handle sensitive care through restricted workflows — not public comments.",
      implementation:
        "Prayer wall with privacy modes; care and contact forms; church-family notices; staff care inbox with review, assignment, and follow-up.",
      outcome:
        "The congregation can see appropriate requests and pray together; confidential needs still reach the right leaders with accountability.",
      features: [
        "Public requests visible for congregational prayer",
        "Anonymous and confidential modes",
        "Care inbox with assignment and status",
      ],
      importance: "primary" as const,
    },
    {
      title: "Collect requests and information in one system",
      problemSummary:
        "Every camp, event, department, or document need restarted collection in a new form, chat, or paper stack.",
      whyItMattered:
        "Leaders spent time copying data instead of serving; members did not know where the official request lived.",
      decision:
        "Use platform forms and structured intakes for repeatable church operations — documents, camp, feedback, and custom collections.",
      solution:
        "Digital forms and request journeys with reference numbers and dashboard visibility for leadership.",
      implementation:
        "Form builder and submissions; document-request workflow with tracking and PDF issuance; Camp Meeting and pledge flows where enabled; facility and care request types.",
      outcome:
        "Information and requests arrive in defined queues — not lost in a leader's personal messages.",
      importance: "primary" as const,
    },
    {
      title: "Visitor confidence before they arrive",
      problemSummary:
        "Social media showed life at the church but not a reliable answer to service times, location, expectations, and how to get help.",
      whyItMattered:
        "Visitors decide in seconds whether they can trust enough to attend.",
      decision:
        "Official public routes: Plan Your Visit, service times in under ten seconds, ministries, contact, and care intake.",
      solution:
        "One owned front door on emmasdalesda.org — not a brochure, but the place to discover and take the first step.",
      implementation:
        "Homepage, visitor guidance, maps, leadership and ministry pages, giving guidance, livestream entry, structured contact paths.",
      outcome:
        "Seekers move from uncertainty to confidence before Sabbath; members share one link instead of screenshots.",
      importance: "secondary" as const,
    },
    {
      title: "Scheduling before promotion",
      problemSummary:
        "Activities and facility use were agreed in separate conversations, then announced publicly — sometimes before a room was actually available.",
      whyItMattered:
        "Collisions waste leadership time and erode trust in the calendar members see online.",
      decision:
        "Treat the scheduler as the official path for facility requests once facilities and approvers are configured — adoption is governance, not more software discovery.",
      solution:
        "Shared facility and resource scheduling with approval, booking, readiness, and conflict handling before church-wide promotion.",
      implementation:
        "Scheduler module in the staff dashboard; configuration of facilities, resources, and approvers (ongoing church setup).",
      outcome:
        "Fewer double-booked spaces; clearer rules for weddings, ministries, and meetings — when leaders use the workflow consistently.",
      importance: "secondary" as const,
    },
  ] as ProblemSolutionMap[],
  workflows: [
    {
      title: "Quarterly report from a leader's phone",
      steps: [
        "Department head opens dashboard on phone",
        "Completes quarterly report fields",
        "Submits for leadership review",
        "Reviewer approves or requests changes",
      ],
    },
    {
      title: "Prayer on the wall",
      steps: [
        "Member submits a public prayer request",
        "Request appears on the prayer wall",
        "Others read and pray",
        "Pastoral team follows up where needed",
      ],
    },
    {
      title: "Extended church during the week",
      steps: [
        "Member opens bulletin or Daily with God on phone",
        "Reads or shares official link",
        "Joins Sabbath School or sermon archive",
        "Stays connected between physical visits",
      ],
    },
  ] as Workflow[],
  evidenceRecords: [
    {
      type: "observation" as const,
      title: "Admin on the phone",
      description:
        "Department leaders can submit quarterly reports and respond to digital forms without travelling to the church office.",
      importance: "primary" as const,
    },
    {
      type: "observation" as const,
      title: "Shared prayer",
      description:
        "Public prayer requests visible for congregational intercession — with confidential paths for sensitive pastoral care.",
      importance: "primary" as const,
    },
    {
      type: "metric" as const,
      title: "Public front-door test",
      value: "Service times and location discoverable in under 10 seconds",
      importance: "secondary" as const,
    },
  ] as EvidenceRecord[],
  testimonial: {
    quote:
      "For the first time we can point members and visitors to one place — this Sabbath, prayer, ministries, and how to get help — instead of five different WhatsApp groups.",
    organization: "Church leadership",
    permissionToPublish: true,
  } as Testimonial,
};

export const nikwisaEvidence = {
  projectType: ["Marketplace", "Digital Platform", "Web Application"],
  strategicThesis:
    "Own discover → compare → decide → WhatsApp enquire — not another vague directory.",
  businessContext: {
    businessDescription:
      "A Lusaka discovery product with Explore and Plan lanes — places, activities, Ideas, and event vendors — where users still compared Nikwisa to feeds and thin quote forms.",
    audiences: ["Weekend planners", "Event hosts", "Local businesses"],
    existingChannels: ["Product site", "Social content", "WhatsApp enquire"],
    businessGoals: [
      "Structured compare-and-enquire on every intent URL",
      "Hub-first SEO with honest crawl signals",
      "Explore-led GTM with Plan ready for return",
    ],
  } as BusinessContext,
  investigation: {
    approach:
      "Worked backward from live product, SEO posture, competitive patterns, and inventory quality audit.",
    sources: [
      "Live product review",
      "SEO opportunity map",
      "Competitive research",
      "Inventory audit (PAC, conditions, pricing)",
    ],
    findings: [
      "Directory mental model hid the decide-and-act job",
      "Missing structured fields broke budget and Ideas content",
      "Crawl trust debt from historical soft 404s and empty hubs",
    ],
  } as Investigation,
  problems: [
    {
      title: "Directory mental model",
      description:
        "Product read as a weak listing site versus feeds and quote forms.",
      category: "marketing" as const,
      businessImpact: "Wrong comparison axis in market.",
      priority: 1,
      recommendedFix: "Decide/act positioning with real hub data.",
    },
    {
      title: "Data before content",
      description:
        "Missing price, good-for, PAC, and conditions on flagship places.",
      category: "data" as const,
      frictionQuote: "How much is pottery, really?",
      businessImpact: "Budget and Ideas content cannot tell the truth.",
      priority: 2,
      recommendedFix: "Intake checklist before social scale.",
    },
    {
      title: "Crawl trust debt",
      description: "Historical soft 404s and empty hubs.",
      category: "technology" as const,
      businessImpact: "Search distrust of useful URLs.",
      priority: 2,
      recommendedFix: "Real 404s, noindex empty hubs, hub-first SEO.",
    },
    {
      title: "Awareness without action",
      description:
        "Competitors own “what's happening”; users still stall at price and choice.",
      category: "customerExperience" as const,
      businessImpact: "Traffic that never reaches WhatsApp enquire.",
      priority: 3,
      recommendedFix: "One URL per intent with clear enquire CTAs.",
    },
  ] as Problem[],
  problemSolutionMaps: [
    {
      title: "Directory mental model",
      problemSummary:
        "Users and market compared Nikwisa to listing sites instead of a decide-and-act tool.",
      whyItMattered:
        "Strong inventory was invisible because the story started at “directory.”",
      decision: "Lead with Explore decide/act and structured compare paths.",
      solution:
        "Position as structured Lusaka inventory that finishes the job feeds start.",
      implementation:
        "Dual entry, Ideas and PAC hubs, place pages with fees and conditions, WhatsApp enquire CTAs.",
      outcome:
        "Clearer job-to-be-done story for Explore season go-to-market.",
      importance: "primary" as const,
    },
    {
      title: "Data before content",
      problemSummary:
        "Social and editorial formats scaled before flagship places had complete fields.",
      whyItMattered:
        "Budget lanes and Ideas collections could not answer “how much?” honestly.",
      decision: "Inventory checklist gates content scale.",
      solution: "Structured place and activity metadata before volume campaigns.",
      implementation:
        "PAC tags, conditions, price semantics, and place intake playbooks tied to CMS truth.",
      outcome: "Content queries the database instead of contradicting it.",
      importance: "primary" as const,
    },
    {
      title: "Crawl trust",
      problemSummary: "Soft 404 history and empty shells trained search engines away.",
      whyItMattered: "Useful hubs struggled to earn impressions.",
      decision: "Crawl honesty over vanity URL count.",
      solution: "Real 404s, noindex on empty hubs, hub-first territory plan.",
      implementation:
        "Sitemap discipline, FAQ schema on hubs, validation after re-crawl.",
      outcome: "SEO posture aligned with pages that actually help users decide.",
      importance: "primary" as const,
    },
    {
      title: "WhatsApp as the action layer",
      problemSummary: "Users already transact and book through WhatsApp in this market.",
      whyItMattered: "Forcing in-app checkout would add friction without changing behavior.",
      decision: "Enquire-first MVP; payments deferred.",
      solution: "Consistent WhatsApp handoff with context from the listing URL.",
      implementation:
        "Enquire CTAs on place, activity, store, and package surfaces with pre-filled context.",
      outcome: "Actions generated metric direction: hub → view → enquire.",
      importance: "secondary" as const,
    },
  ] as ProblemSolutionMap[],
  workflows: [
    {
      title: "Weekend planning (Explore)",
      steps: [
        "Ideas or PAC hub",
        "Compare fees and conditions",
        "Shortlist",
        "WhatsApp enquire",
      ],
    },
  ] as Workflow[],
  evidenceRecords: [
    {
      type: "metric" as const,
      title: "North-star direction",
      value: "Content → hub → view → WhatsApp enquire",
      importance: "primary" as const,
    },
  ] as EvidenceRecord[],
  testimonial: {
    quote:
      "We didn't need another feed — we needed people to see prices, pick an activity, and message the business.",
    organization: "Nikwisa product team",
    permissionToPublish: true,
  } as Testimonial,
};
