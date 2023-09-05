import { PortableTextBlock } from "sanity";

type Color = {
  name: string;
  hex: string;
};

type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  hero: string;
  image: string;
  url: string;
  role: string;
  context: string;
  about: string;
  task: PortableTextBlock[];
  colors: string[];
  fonts: string[];
};

export default Project;
