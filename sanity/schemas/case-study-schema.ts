const problemCategoryList = [
  { title: "Revenue", value: "revenue" },
  { title: "Operations", value: "operations" },
  { title: "Communication", value: "communication" },
  { title: "Customer experience", value: "customerExperience" },
  { title: "Marketing", value: "marketing" },
  { title: "Trust", value: "trust" },
  { title: "Administration", value: "administration" },
  { title: "Data", value: "data" },
  { title: "Technology", value: "technology" },
  { title: "Process", value: "process" },
  { title: "Growth", value: "growth" },
];

const importanceList = [
  { title: "Primary (hero story)", value: "primary" },
  { title: "Secondary", value: "secondary" },
  { title: "Supporting", value: "supporting" },
];

const visibilityList = [
  { title: "Public", value: "public" },
  { title: "Private (CMS only)", value: "private" },
  { title: "Internal notes", value: "internal" },
];

const projectTypeList = [
  { title: "Website", value: "Website" },
  { title: "Web Application", value: "Web Application" },
  { title: "Business System", value: "Business System" },
  { title: "Internal Tool", value: "Internal Tool" },
  { title: "Marketplace", value: "Marketplace" },
  { title: "E-commerce", value: "E-commerce" },
  { title: "Digital Platform", value: "Digital Platform" },
  { title: "Automation", value: "Automation" },
  { title: "Consulting / Strategy", value: "Consulting / Strategy" },
  { title: "UI/UX", value: "UI/UX" },
  { title: "SEO / Growth", value: "SEO / Growth" },
  { title: "Other", value: "Other" },
];

const evidenceRecordTypeList = [
  { title: "Metric", value: "metric" },
  { title: "Client quote", value: "quote" },
  { title: "Observation", value: "observation" },
  { title: "Screenshot", value: "screenshot" },
  { title: "Analytics", value: "analytics" },
  { title: "Demonstration", value: "demo" },
];

const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  groups: [
    { name: "identity", title: "Identity", default: true },
    { name: "business", title: "Business context" },
    { name: "investigation", title: "Investigation" },
    { name: "spine", title: "Narrative spine (editor)" },
    { name: "problems", title: "Problems" },
    { name: "maps", title: "Problem → solution maps" },
    { name: "strategy", title: "Strategy" },
    { name: "outcomes", title: "Outcomes & evidence" },
    { name: "media", title: "Media & deliverables" },
    { name: "meta", title: "Publishing & SEO" },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "identity",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "identity",
      options: { source: "title" },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "showOnWebsite",
      title: "Show on public website",
      type: "boolean",
      group: "meta",
      description:
        "When on, the portfolio loads this case study from Sanity (including hero image). This is separate from Studio’s top “Publish” button — edit the draft, turn this on, then Publish.",
      initialValue: false,
    },
    {
      name: "isPublished",
      title: "Show on website (legacy)",
      type: "boolean",
      group: "meta",
      hidden: true,
      initialValue: false,
    },
    {
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      group: "meta",
      initialValue: false,
    },
    {
      name: "category",
      title: "Category (filters)",
      type: "string",
      group: "identity",
      options: {
        list: [
          { title: "Business Diagnostic", value: "diagnostic" },
          { title: "Digital Build", value: "build" },
          { title: "Digital Strategy", value: "strategy" },
          { title: "Software / Platform", value: "software" },
        ],
      },
      initialValue: "build",
    },
    {
      name: "projectType",
      title: "Project type (hero tags)",
      type: "array",
      group: "identity",
      of: [{ type: "string" }],
      options: {
        list: projectTypeList,
        layout: "tags",
      },
      description:
        "Shown under the title on the public page — e.g. Digital Platform, Business System",
    },
    {
      name: "oneLineThesis",
      title: "One-line thesis",
      type: "string",
      group: "identity",
      description: "Subtitle under the project title on the case study page",
    },
    {
      name: "strategicThesis",
      title: "Strategic thesis",
      type: "text",
      rows: 2,
      group: "strategy",
      description:
        'Public strategy headline — e.g. "Make worship easy. Make administration easy." Falls back to Decision spine if empty.',
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      group: "identity",
      description: "e.g. Digital Strategy · UX · Development",
    },
    {
      name: "context",
      title: "Context",
      type: "string",
      group: "identity",
      description: "e.g. Business Diagnostic + Digital Platform",
    },
    {
      name: "period",
      title: "Period",
      type: "string",
      group: "identity",
      description: "e.g. 2026",
    },
    {
      name: "projectTags",
      title: "Project tags (display)",
      type: "string",
      group: "identity",
      description: "Comma-separated tags shown on cards",
    },
    {
      name: "clientLabel",
      title: "Client Label",
      type: "string",
      group: "identity",
      description: "Public-safe client name or anonymised label",
    },
    {
      name: "liveUrl",
      title: "Live site / product URL",
      type: "url",
      group: "identity",
      description: "Optional link shown on the case study (verify real engagement)",
    },
    {
      name: "engagementDuration",
      title: "Engagement duration",
      type: "string",
      group: "identity",
      description: "e.g. Diagnostic: 6 working days · Build: 10 weeks",
    },
    {
      name: "engagementType",
      title: "Engagement type",
      type: "string",
      group: "identity",
      options: {
        list: [
          { title: "Named client engagement", value: "client" },
          { title: "Anonymized client", value: "anonymized" },
          { title: "Composite illustration", value: "composite" },
        ],
      },
      initialValue: "client",
    },
    {
      name: "contextSummary",
      title: "Context Summary",
      type: "string",
      group: "business",
    },
    {
      name: "businessContext",
      title: "Business context (structured)",
      type: "object",
      group: "business",
      description:
        "Optional — public page uses businessDescription with fallback to Observation spine",
      fields: [
        {
          name: "businessDescription",
          title: "Business description",
          type: "text",
          rows: 4,
        },
        { name: "businessModel", title: "Business model", type: "text", rows: 2 },
        {
          name: "audiences",
          title: "Audiences",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "operatingContext",
          title: "Operating context",
          type: "text",
          rows: 3,
        },
        {
          name: "existingChannels",
          title: "Existing channels",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        },
        {
          name: "businessGoals",
          title: "Business goals",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "identity",
    },
    {
      name: "observation",
      title: "Observation (The business / problem context)",
      type: "text",
      rows: 5,
      group: "spine",
    },
    {
      name: "contextStats",
      title: "Context stats",
      type: "array",
      group: "business",
      description: "2–4 grounding numbers shown after The business (optional)",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
          ],
        },
      ],
    },
    {
      name: "investigation",
      title: "Investigation (structured)",
      type: "object",
      group: "investigation",
      fields: [
        { name: "approach", title: "Approach", type: "text", rows: 3 },
        {
          name: "sources",
          title: "Sources",
          type: "array",
          of: [{ type: "string" }],
          options: { layout: "tags" },
        },
        {
          name: "findings",
          title: "Findings (bullet list)",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },
    {
      name: "evidence",
      title: "Evidence (Investigation spine)",
      type: "text",
      rows: 5,
      group: "spine",
    },
    {
      name: "problems",
      title: "Problems identified",
      type: "array",
      group: "problems",
      description:
        "Public page shows top 3 by priority. Legacy revenueLeaks migrate at read time if this is empty.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            {
              name: "category",
              title: "Category",
              type: "string",
              options: { list: problemCategoryList },
            },
            { name: "evidence", title: "Evidence", type: "text", rows: 2 },
            { name: "businessImpact", title: "Business impact", type: "string" },
            {
              name: "priority",
              title: "Priority (1 = highest)",
              type: "number",
              validation: (Rule: { min: (n: number) => { max: (m: number) => unknown } }) =>
                Rule.min(1).max(3),
            },
            { name: "frictionQuote", title: "Friction quote", type: "string" },
            { name: "recommendedFix", title: "Recommended fix", type: "string" },
            {
              name: "importance",
              title: "Display importance",
              type: "string",
              options: { list: importanceList },
              initialValue: "primary",
            },
            {
              name: "visibility",
              title: "Visibility",
              type: "string",
              options: { list: visibilityList },
              initialValue: "public",
            },
          ],
        },
      ],
    },
    {
      name: "problemSolutionMaps",
      title: "Problem → solution maps",
      type: "array",
      group: "maps",
      description:
        "Primary maps drive the public hero section. Write problem → why → decision → solution → implementation → outcome.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Map title", type: "string" },
            {
              name: "problemSummary",
              title: "Problem (summary)",
              type: "text",
              rows: 2,
            },
            {
              name: "problemIndex",
              title: "Link to problem # (0-based, optional)",
              type: "number",
            },
            { name: "whyItMattered", title: "Why it mattered", type: "text", rows: 2 },
            { name: "decision", title: "Decision", type: "text", rows: 2 },
            { name: "solution", title: "Solution (business language)", type: "text", rows: 3 },
            { name: "implementation", title: "Implementation (what was built)", type: "text", rows: 3 },
            { name: "outcome", title: "Outcome", type: "text", rows: 2 },
            {
              name: "features",
              title: "Features (supporting only)",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "importance",
              title: "Display importance",
              type: "string",
              options: { list: importanceList },
              initialValue: "primary",
            },
            {
              name: "visibility",
              title: "Visibility",
              type: "string",
              options: { list: visibilityList },
              initialValue: "public",
            },
          ],
        },
      ],
    },
    {
      name: "decision",
      title: "Decision (Strategy spine)",
      type: "text",
      rows: 5,
      group: "spine",
    },
    {
      name: "workflows",
      title: "Workflows",
      type: "array",
      group: "strategy",
      description: "Optional — simple step lists for the system section",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "steps",
              title: "Steps",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
    {
      name: "implementation",
      title: "Implementation (Design / build)",
      type: "text",
      rows: 5,
      group: "spine",
      description: "What was built",
    },
    {
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 5,
      group: "spine",
      description: "What changed — label targets clearly if not measured yet",
    },
    {
      name: "scopeNote",
      title: "Scope note",
      type: "text",
      rows: 3,
      group: "outcomes",
      description:
        "Optional — what this engagement did not cover (builds trust via candor)",
    },
    {
      name: "evidenceRecords",
      title: "Evidence records",
      type: "array",
      group: "outcomes",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
              options: { list: evidenceRecordTypeList },
            },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
            { name: "value", title: "Value", type: "string" },
            { name: "source", title: "Source", type: "string" },
            { name: "date", title: "Date", type: "string" },
            {
              name: "importance",
              title: "Display importance",
              type: "string",
              options: { list: importanceList },
              initialValue: "primary",
            },
            {
              name: "visibility",
              title: "Visibility",
              type: "string",
              options: { list: visibilityList },
              initialValue: "public",
            },
          ],
        },
      ],
    },
    {
      name: "testimonial",
      title: "Testimonial (structured)",
      type: "object",
      group: "outcomes",
      fields: [
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        { name: "person", title: "Person", type: "string" },
        { name: "role", title: "Role", type: "string" },
        { name: "organization", title: "Organization", type: "string" },
        {
          name: "permissionToPublish",
          title: "Permission to publish",
          type: "boolean",
          initialValue: true,
        },
      ],
    },
    {
      name: "evidenceMedia",
      title: "Evidence media",
      type: "array",
      group: "media",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt text", type: "string" }],
            },
            { name: "caption", title: "Caption", type: "string" },
            {
              name: "sectionAnchor",
              title: "Show after section",
              type: "string",
              options: {
                list: [
                  { title: "The business", value: "observation" },
                  { title: "Investigation", value: "evidence" },
                  { title: "Strategy", value: "decision" },
                  { title: "Design / build", value: "implementation" },
                  { title: "Outcome", value: "outcome" },
                ],
              },
              initialValue: "evidence",
            },
            {
              name: "kind",
              title: "Kind",
              type: "string",
              options: {
                list: [
                  { title: "Screenshot", value: "screenshot" },
                  { title: "Diagram", value: "diagram" },
                  { title: "Photo", value: "photo" },
                  { title: "Redacted report", value: "redacted_report" },
                ],
              },
              initialValue: "screenshot",
            },
          ],
        },
      ],
    },
    {
      name: "deliverableTeaser",
      title: "Deliverable excerpt",
      type: "object",
      group: "media",
      description: "Optional download — sample page from diagnostic report or SRS",
      fields: [
        { name: "label", title: "Link label", type: "string" },
        { name: "description", title: "One-line description", type: "string" },
        {
          name: "externalUrl",
          title: "External URL",
          type: "url",
          description: "Use URL or upload a file below",
        },
        {
          name: "file",
          title: "File upload",
          type: "file",
        },
      ],
    },
    {
      name: "techStack",
      title: "Tech stack / tools",
      type: "array",
      group: "media",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Shown at bottom of public case study",
    },
    {
      name: "beforeAfter",
      title: "Before & after",
      type: "object",
      group: "outcomes",
      fields: [
        {
          name: "headline",
          title: "Headline",
          type: "string",
          initialValue: "Before & after",
        },
        {
          name: "items",
          title: "Comparisons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Label (optional)", type: "string" },
                { name: "before", title: "Before", type: "text", rows: 2 },
                { name: "after", title: "After", type: "text", rows: 2 },
                { name: "explanation", title: "Explanation", type: "text", rows: 2 },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "closingBridge",
      title: "Closing bridge",
      type: "text",
      rows: 2,
      group: "outcomes",
      description:
        'Optional — tie this story to the reader (e.g. "If your site hides pricing…")',
    },
    {
      name: "contentBlocks",
      title: "Content blocks (optional)",
      type: "array",
      group: "media",
      description:
        "Extra callouts or pull quotes — use when plain narrative fields are not enough",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "blockType",
              title: "Block type",
              type: "string",
              options: {
                list: [
                  { title: "Callout", value: "callout" },
                  { title: "Pull quote", value: "pullQuote" },
                ],
              },
              validation: (Rule: { required: () => unknown }) =>
                Rule.required(),
            },
            {
              name: "placement",
              title: "Show before section",
              type: "string",
              options: {
                list: [
                  { title: "Scope & limits", value: "scope" },
                  { title: "After client quote", value: "quote" },
                  { title: "End (before closing bridge)", value: "end" },
                ],
              },
              initialValue: "end",
            },
            {
              name: "text",
              title: "Callout text",
              type: "text",
              rows: 3,
            },
            {
              name: "quote",
              title: "Pull quote text",
              type: "text",
              rows: 3,
            },
            {
              name: "attribution",
              title: "Pull quote attribution",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "outcomeHighlight",
      title: "Outcome Highlight (card)",
      type: "string",
      group: "outcomes",
      description:
        "One line on work cards, e.g. 3 revenue leaks identified → booking path redesigned",
    },
    {
      name: "outcomeMetrics",
      title: "Outcome metrics",
      type: "array",
      group: "outcomes",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "value", title: "Value", type: "string" },
            {
              name: "isTarget",
              title: "Projected / target (not measured yet)",
              type: "boolean",
              initialValue: true,
            },
          ],
        },
      ],
    },
    {
      name: "outcomeMetric",
      title: "Outcome metric (legacy)",
      type: "object",
      group: "outcomes",
      description: "Deprecated — use Outcome metrics list above",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "value", title: "Value", type: "string" },
        {
          name: "isTarget",
          title: "Is Target (not measured result)",
          type: "boolean",
          initialValue: false,
        },
      ],
    },
    {
      name: "clientQuote",
      title: "Client Quote (legacy)",
      type: "text",
      rows: 3,
      group: "outcomes",
    },
    {
      name: "clientQuoteAttribution",
      title: "Client Quote Attribution",
      type: "string",
      group: "outcomes",
    },
    {
      name: "customerJourney",
      title: "Customer journey (display)",
      type: "string",
      group: "business",
      description: "e.g. Discovery → Evaluation → Pricing → Booking",
    },
    {
      name: "revenueLeaks",
      title: "Legacy findings / revenue leaks",
      type: "array",
      group: "problems",
      description: "Deprecated — use Problems identified. Still migrated on the site if problems[] is empty.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 3 },
            { name: "frictionQuote", title: "Friction quote", type: "string" },
            { name: "businessImpact", title: "Business impact", type: "string" },
            { name: "recommendedFix", title: "Recommended fix", type: "string" },
          ],
        },
      ],
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "meta",
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "meta",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      group: "meta",
    },
  ],
};

export default caseStudy;
