const importanceList = [
  { title: "Primary", value: "primary" },
  { title: "Secondary", value: "secondary" },
  { title: "Supporting", value: "supporting" },
];

const visibilityList = [
  { title: "Public", value: "public" },
  { title: "Private (CMS only)", value: "private" },
  { title: "Internal notes", value: "internal" },
];

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

const editorialMetaFields = [
  {
    name: "visibility",
    title: "Visibility",
    type: "string",
    options: { list: visibilityList },
    initialValue: "public",
  },
  {
    name: "importance",
    title: "Importance",
    type: "string",
    options: { list: importanceList },
    initialValue: "primary",
  },
];

export const caseStudyV2Fields = [
  {
    name: "layout",
    title: "Page layout",
    type: "string",
    group: "overview",
    options: {
      list: [
        { title: "Marketing (default)", value: "marketing" },
        { title: "Legacy long-form", value: "legacy" },
      ],
    },
    initialValue: "marketing",
  },
  {
    name: "heroSubtitle",
    title: "Hero subtitle",
    type: "string",
    group: "story",
    description: "Shows under the title on the live case study page.",
  },
  {
    name: "deliverables",
    title: "Delivered (pills)",
    type: "array",
    group: "story",
    of: [{ type: "string" }],
  },
  {
    name: "challenge",
    title: "The challenge",
    type: "object",
    group: "story",
    fields: [
      { name: "headline", title: "Headline", type: "text", rows: 2 },
      { name: "body", title: "Body (optional)", type: "text", rows: 3 },
      {
        name: "signals",
        title: "Signals (tags)",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  },
  {
    name: "featuresSectionTitle",
    title: "Platform section title",
    type: "string",
    group: "story",
  },
  {
    name: "platformColumns",
    title: "Platform columns",
    type: "array",
    group: "story",
    of: [
      {
        type: "object",
        fields: [
          { name: "label", title: "Column title", type: "string" },
          {
            name: "items",
            title: "Items",
            type: "array",
            of: [{ type: "string" }],
          },
        ],
      },
    ],
  },
  {
    name: "whatBuilt",
    title: "What I built",
    type: "array",
    group: "story",
    of: [
      {
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "body", title: "Body", type: "text", rows: 4 },
          {
            name: "caption",
            title: "Screenshot caption (optional)",
            type: "string",
            description: "Short label under the image, e.g. Member prayer wall on mobile.",
          },
          {
            name: "image",
            title: "Screenshot",
            type: "image",
            options: { hotspot: true },
            fields: [{ name: "alt", title: "Alt", type: "string" }],
          },
        ],
      },
    ],
  },
  {
    name: "storyBeforeAfter",
    title: "Before and after",
    type: "object",
    group: "story",
    fields: [
      { name: "headline", title: "Headline", type: "string" },
      {
        name: "items",
        title: "Rows",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", title: "Label", type: "string" },
              { name: "before", title: "Before", type: "text", rows: 2 },
              { name: "after", title: "After", type: "text", rows: 2 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "approach",
    title: "Approach (optional)",
    type: "object",
    group: "story",
    fields: [
      { name: "intro", title: "Intro", type: "text", rows: 2 },
      {
        name: "steps",
        title: "Steps",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "name", title: "Name", type: "string" },
              { name: "detail", title: "Detail", type: "string" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "storyThreads",
    title: "Problem stories",
    description:
      "One entry powers the case study band, home strip (when placement allows), and the archive. Use description as the card hook; narrative for the full story. Private visibility hides a thread everywhere.",
    type: "array",
    group: "story",
    of: [
      {
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          {
            name: "threadKey",
            title: "Thread key",
            type: "string",
            description:
              "Globally unique slug for anchors (e.g. emmasdale-quarterly-reports). Used in case study URLs as #problem-{threadKey}.",
          },
          {
            name: "description",
            title: "Card hook",
            type: "text",
            rows: 3,
            description: "Short summary — old workflow or friction (not the full story).",
          },
          {
            name: "narrative",
            title: "Full story",
            type: "text",
            rows: 8,
            description:
              "Conversational portfolio voice — roles, paper/process detail, what changed. Shown on the case study band.",
          },
          {
            name: "buildChallenge",
            title: "While building",
            type: "text",
            rows: 3,
            description: "Optional — what was hard to get right (forms, roles, adoption).",
          },
          {
            name: "placement",
            title: "Where this appears",
            type: "string",
            options: {
              list: [
                { title: "Archive only", value: "archiveOnly" },
                { title: "Case study — main band", value: "caseStudyMain" },
                {
                  title: "Case study + home (featured)",
                  value: "caseStudyAndHome",
                },
              ],
            },
            initialValue: "archiveOnly",
          },
          {
            name: "cardEyebrow",
            title: "Card eyebrow",
            type: "string",
            description: "Optional label above title (e.g. Church admin, Process).",
          },
          {
            name: "cardImage",
            title: "Card image",
            type: "image",
            options: { hotspot: true },
            fields: [{ name: "alt", title: "Alt", type: "string" }],
          },
          {
            name: "category",
            title: "Category",
            type: "string",
            options: { list: problemCategoryList },
          },
          { name: "priority", title: "Sort order (1 = first)", type: "number" },
          {
            name: "editorialMeta",
            title: "Visibility",
            type: "object",
            fields: editorialMetaFields,
            description:
              "Private or internal hides this thread on the site, regardless of placement.",
          },
          {
            name: "solution",
            title: "Structured summary (archive)",
            type: "object",
            fields: [
              { name: "decision", title: "Decision", type: "text", rows: 2 },
              {
                name: "implementation",
                title: "Implementation",
                type: "text",
                rows: 3,
              },
              {
                name: "features",
                title: "Features",
                type: "array",
                of: [{ type: "string" }],
              },
              { name: "outcome", title: "Outcome (how it works now)", type: "text", rows: 2 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "proofMedia",
    title: "Proof media (archive gallery)",
    type: "array",
    group: "proof",
    of: [
      {
        type: "object",
        fields: [
          {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [{ name: "alt", title: "Alt", type: "string" }],
          },
          { name: "caption", title: "Caption", type: "string" },
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
          },
        ],
      },
    ],
  },
  {
    name: "outcomes",
    title: "Outcomes",
    type: "array",
    group: "proof",
    of: [
      {
        type: "object",
        fields: [
          {
            name: "type",
            title: "Type",
            type: "string",
            options: {
              list: [
                { title: "Metric", value: "metric" },
                { title: "Before → after shift", value: "shift" },
                { title: "Homepage highlight", value: "highlight" },
                { title: "Client quote", value: "quote" },
              ],
            },
          },
          { name: "label", title: "Label", type: "string" },
          { name: "value", title: "Value", type: "string" },
          { name: "before", title: "Before (shift)", type: "string" },
          { name: "after", title: "After (shift)", type: "string" },
          { name: "quote", title: "Quote text", type: "text", rows: 3 },
          { name: "attribution", title: "Quote attribution", type: "string" },
          { name: "isTarget", title: "Projected / not measured yet", type: "boolean" },
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
    name: "deepDive",
    title: "Deep dive (optional archive)",
    type: "object",
    group: "proof",
    fields: [
      {
        name: "executiveSummary",
        title: "Executive summary",
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "situation", title: "Situation", type: "text", rows: 2 },
          { name: "problem", title: "Problem", type: "text", rows: 2 },
          {
            name: "investigated",
            title: "Investigated",
            type: "array",
            of: [{ type: "string" }],
          },
          {
            name: "built",
            title: "Built",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  { name: "heading", title: "Heading", type: "string" },
                  {
                    name: "bullets",
                    title: "Bullets",
                    type: "array",
                    of: [{ type: "string" }],
                  },
                ],
              },
            ],
          },
          { name: "result", title: "Result", type: "text", rows: 2 },
          { name: "roleLine", title: "Role line", type: "string" },
        ],
      },
      {
        name: "audiencePersonas",
        title: "Audience personas",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", title: "Label", type: "string" },
              { name: "question", title: "Question", type: "string" },
              {
                name: "needs",
                title: "Needs",
                type: "array",
                of: [{ type: "string" }],
              },
            ],
          },
        ],
      },
      {
        name: "journeySteps",
        title: "Journey steps",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", title: "Label", type: "string" },
              {
                name: "status",
                title: "Status",
                type: "string",
                options: {
                  list: [
                    { title: "OK", value: "ok" },
                    { title: "Warning", value: "warn" },
                    { title: "Critical", value: "critical" },
                  ],
                },
              },
              { name: "note", title: "Note", type: "string" },
            ],
          },
        ],
      },
      {
        name: "revenueEngines",
        title: "Audiences / engines",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "label", title: "Label", type: "string" },
              { name: "detail", title: "Detail", type: "string" },
            ],
          },
        ],
      },
      {
        name: "fixLayers",
        title: "Fix layers",
        type: "array",
        of: [{ type: "string" }],
      },
      { name: "recommendationHeadline", title: "Recommendation headline", type: "string" },
      { name: "blueprintMonospace", title: "System blueprint", type: "text", rows: 8 },
      {
        name: "outcomeRows",
        title: "Outcome rows",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "before", title: "Before", type: "string" },
              { name: "after", title: "After", type: "string" },
            ],
          },
        ],
      },
      {
        name: "investigation",
        title: "Investigation",
        type: "object",
        fields: [
          { name: "approach", title: "Approach", type: "text", rows: 3 },
          {
            name: "sources",
            title: "Sources",
            type: "array",
            of: [{ type: "string" }],
          },
          {
            name: "findings",
            title: "Findings",
            type: "array",
            of: [{ type: "string" }],
          },
        ],
      },
      {
        name: "narrativeSpine",
        title: "Narrative spine",
        type: "object",
        fields: [
          { name: "observation", title: "Observation", type: "text", rows: 4 },
          { name: "evidence", title: "Evidence", type: "text", rows: 4 },
          { name: "decision", title: "Decision", type: "text", rows: 4 },
          { name: "implementation", title: "Implementation", type: "text", rows: 4 },
          { name: "outcome", title: "Outcome", type: "text", rows: 4 },
        ],
      },
    ],
  },
];
