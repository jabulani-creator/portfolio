import { PortableTextBlock } from "sanity";

type Service = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  desc: PortableTextBlock[];
};

export default Service;
