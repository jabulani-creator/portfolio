const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "categoryHeadline",
      title: "Category Headline",
      type: "text",
      rows: 2,
      description:
        "Honest positioning headline shown on the homepage (e.g. investigate first, then build the fix).",
    },
    {
      name: "homepageVariant",
      title: "Homepage Product Name Variant",
      type: "string",
      options: {
        list: [
          { title: "Digital Experience Diagnostic", value: "diagnostic" },
          { title: "Digital Experience Audit", value: "audit" },
        ],
      },
      initialValue: "diagnostic",
    },
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
      description: "Only published site settings appear on the public site.",
    },
    {
      name: "navigation",
      title: "Primary Navigation",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "Href", type: "string" },
            { name: "order", title: "Order", type: "number" },
          ],
        },
      ],
    },
    {
      name: "primaryCta",
      title: "Primary CTA",
      type: "object",
      fields: [
        { name: "label", title: "Label", type: "string" },
        { name: "href", title: "Href", type: "string" },
      ],
    },
    {
      name: "contact",
      title: "Contact / Intake",
      type: "object",
      fields: [
        { name: "email", title: "Email", type: "string" },
        { name: "phone", title: "Phone", type: "string" },
        { name: "whatsapp", title: "WhatsApp", type: "string" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
      ],
    },
    {
      name: "footerCopy",
      title: "Footer Copy",
      type: "text",
      rows: 3,
    },
    {
      name: "localTrustLine",
      title: "Local Trust Line",
      type: "string",
      description:
        "e.g. Based in Lusaka — working with Zambian SMEs and institutions.",
    },
    {
      name: "operatingSince",
      title: "Operating Since (year)",
      type: "string",
      description: "Optional year for trust copy, e.g. 2019",
    },
    {
      name: "seoDefaults",
      title: "SEO Defaults",
      type: "object",
      fields: [
        { name: "title", title: "Default Title", type: "string" },
        { name: "description", title: "Default Description", type: "text" },
      ],
    },
  ],
};

export default siteSettings;
