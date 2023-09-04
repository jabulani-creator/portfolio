const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "hero",
      title: "Hero",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "context",
      title: "Context",
      type: "string",
    },
    {
      name: "period",
      title: "Period",
      type: "string",
    },
    {
      name: "about",
      title: "About",
      type: "string",
    },
    {
      name: "task",
      title: "Task",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "fonts",
      title: "Fonts",
      type: "array",
      of: [{ type: "text" }],
    },
  ],
};

export default project;
