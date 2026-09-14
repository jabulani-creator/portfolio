import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import clientConfig from "./sanity/config/client-config";

const config = defineConfig({
  projectId: clientConfig.projectId,
  dataset: clientConfig.dataset,
  title: process.env.NEXT_PUBLIC_SANITY_STUDIO_TITLE?.trim() || "Portfolio CMS",
  apiVersion: clientConfig.apiVersion,
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
