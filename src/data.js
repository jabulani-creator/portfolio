import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "#about",
    text: "About",
  },
  {
    id: 2,
    url: "#works",
    text: "My Works",
  },
  {
    id: 3,
    url: "#skills",
    text: "Skills",
  },
  {
    id: 4,
    url: "#services",
    text: "Services",
  },
  {
    id: 5,
    url: "#contact",
    text: "Contact",
  },
];

export const minlinks = [
  {
    id: 1,
    url: "/",
    text: "Turn Back Home",
  },
  {
    id: 3,
    url: "/contact",
    text: "Contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];

export const skills_data = [
  {
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
    _id: "0d9ad40f-e25b-43fd-a9d2-db3f1fc2235f",
    _createdAt: "2023-09-05T11:25:30Z",
    name: "css",
    slug: "css",
  },
  {
    _id: "31ef226d-aee9-456f-8b2e-b59bbdc102dc",
    _createdAt: "2023-09-05T11:28:13Z",
    name: "Sass",
    slug: "sass",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/2825d163301127c72b6121baebb5e570689596e5-480x480.png",
  },
  {
    _id: "51dba624-ba75-4405-82c1-595d7418fe6d",
    _createdAt: "2023-09-05T11:23:23Z",
    name: "React",
    slug: "react",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png",
  },
  {
    _id: "57b21d99-43dc-4fef-b52d-5611e6aa460a",
    _createdAt: "2023-09-05T11:24:00Z",
    name: "Node js",
    slug: "node-js",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png",
  },
  {
    _id: "6c1b89bb-4f06-41b7-9880-f4b4099f177b",
    _createdAt: "2023-09-05T11:24:43Z",
    name: "Javascript",
    slug: "javascript",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
  },
  {
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png",
    _id: "9c55d9ef-0000-4a2f-8b64-42a37907bc91",
    _createdAt: "2023-09-05T11:26:13Z",
    name: "HTML",
    slug: "html",
  },
  {
    _id: "b0454e93-64cf-4995-90d3-0a18653787ce",
    _createdAt: "2023-09-05T11:26:43Z",
    name: "Git",
    slug: "git",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
  },
  {
    _createdAt: "2023-09-05T11:27:20Z",
    name: "Redux",
    slug: "redux",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png",
    _id: "e3857ad6-c309-4ce2-b69a-b55d946971e6",
  },
  {
    slug: "figma",
    image:
      "https://cdn.sanity.io/images/878b6nm8/production/6551e520e801ab656029527c09265981c06dce33-480x480.png",
    _id: "ea72d492-6666-4ef7-9afe-c0ab6b18843e",
    _createdAt: "2023-09-05T11:22:47Z",
    name: "Figma",
  },
];
export const education = [
  {
    _id: "0d9ad40f-e25b-43fd-a9d2-db3f1fc2235f",
    _createdAt: "2023-09-05T11:25:30Z",
    institution: "Alx Africa",
    certification: "Software Development",
    duration: "2023 - Present",
  },
  {
    _id: "31ef226d-aee9-456f-8b2e-b59bbdc102dc",
    _createdAt: "2023-09-05T11:28:13Z",
    institution: "Beibu Gulf University",
    certification: "Bachelor's Degree Computer Science & Technology",
    duration: "2019 - 2023",
  },
  {
    _id: "51dba624-ba75-4405-82c1-595d7418fe6d",
    _createdAt: "2023-09-05T11:23:23Z",
    institution: "Matero Boys Secondary",
    certification: "High School Certifcate(Pure Mathamatics & Sciences)",
    duration: "2014 - 2016",
  },
  {
    _id: "57b21d99-43dc-4fef-b52d-5611e6aa460a",
    _createdAt: "2023-09-05T11:24:00Z",
    institution: "Kafue Boys Secondary",
    certification: "Junior Secondary School Certificate",
    duration: "2012 - 2013",
  },
  {
    _id: "51dba624-ba75-4405-82c1-595d7418fe6f",
    _createdAt: "2023-09-05T11:23:23Z",
    institution: "Kasenje Primary School",
    certification: "Primary School Certifcate",
    duration: "2010 - 2011",
  },
  {
    _id: "57b21d99-43dc-4fef-b52d-5611e6aa460g",
    _createdAt: "2023-09-05T11:24:00Z",
    institution: "Chunga Primary School",
    certification: "Primary School Certificate",
    duration: "2005 - 2010",
  },
];
