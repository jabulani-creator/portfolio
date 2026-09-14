const offer = {
  name: "offer",
  title: "Offer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    },
    {
      name: "turnaround",
      title: "Turnaround",
      type: "string",
      description: "e.g. ~1 week",
    },
    {
      name: "priceLabel",
      title: "Price Label",
      type: "string",
      description: "Show a fixed price or range (e.g. K12,000 – K18,000)",
    },
    {
      name: "priceNote",
      title: "Price Note",
      type: "string",
      description: "Short line under price (e.g. 8 deliverables + walkthrough)",
    },
    {
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 4 },
            { name: "order", title: "Order", type: "number" },
          ],
        },
      ],
    },
    {
      name: "walkthroughCallDescription",
      title: "Walkthrough Call Description",
      type: "text",
      rows: 3,
    },
    {
      name: "processSummary",
      title: "Process Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    },
    {
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "order", title: "Order", type: "number" },
          ],
        },
      ],
    },
    {
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    },
  ],
};

export default offer;
