import { createClient } from "next-sanity";
import clientConfig from "../../../sanity/config/client-config";

export const sanityClient = createClient({
  ...clientConfig,
  useCdn: process.env.NODE_ENV === "production",
});
