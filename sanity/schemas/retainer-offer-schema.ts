const retainerOffer = {
  name: "retainerOffer",
  title: "Ongoing Care / Retainer",
  type: "document",
  fields: [
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    },
    {
      name: "priceLabel",
      title: "Price Label",
      type: "string",
      description: "e.g. K1,000–K3,000/mo — placeholder until confirmed",
    },
    {
      name: "scopeItems",
      title: "Scope Items",
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
      name: "idealClientFit",
      title: "Ideal Client Fit",
      type: "text",
      rows: 4,
    },
    {
      name: "followOnExplanation",
      title: "Follow-On Explanation",
      type: "text",
      rows: 4,
      description: "How retainer follows diagnostic and build engagements",
    },
    {
      name: "progressionCopy",
      title: "Progression Copy",
      type: "text",
      rows: 3,
      description: "Short diagnostic → build → retainer progression line",
    },
  ],
};

export default retainerOffer;
