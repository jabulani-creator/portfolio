const howIWorkContent = {
  name: "howIWorkContent",
  title: "How I Work",
  type: "document",
  fields: [
    {
      name: "isPublished",
      title: "Published",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 4,
    },
    {
      name: "processSteps",
      title: "Process Steps",
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
      name: "scopeBoundaryLine",
      title: "Scope Boundary Line",
      type: "text",
      rows: 3,
      description:
        "Honest line that broader business issues may surface but are not the product being sold today.",
    },
    {
      name: "buildFollowOnSummary",
      title: "Build Follow-On Summary",
      type: "text",
      rows: 3,
    },
  ],
};

export default howIWorkContent;
