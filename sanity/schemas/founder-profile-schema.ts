const founderProfile = {
  name: "founderProfile",
  title: "Founder Profile",
  type: "document",
  fields: [
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "founderName",
      title: "Founder Name",
      type: "string",
    },
    {
      name: "portrait",
      title: "Portrait Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "investigationAdvantage",
      title: "Investigation Advantage",
      type: "text",
      rows: 4,
    },
    {
      name: "implementationAdvantage",
      title: "Implementation Advantage",
      type: "text",
      rows: 4,
    },
    {
      name: "credibilityCopy",
      title: "Credibility Copy",
      type: "text",
      rows: 4,
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default founderProfile;
