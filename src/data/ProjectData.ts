export type ProjectType = {
  id: number;
  name: string;
  title: string;
  technology: string[];
  description: string;
  github: string;
  live: string;
  website: string;
  image: string;
  link: string;
};
const allProjects: ProjectType[] = [
  {
    id: 1,
    name: "Ecommerce Website",
    title: "Ecommerce Website",
    description: "Online Ecommerce Website",
    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    github: "example.com",
    live: "example.com",
    website: "example.com",
    image: "path/image",
    link: "example.com",
  },
  {
    id: 2,
    name: "Ecommerce Website",
    title: "Ecommerce Website",
    description: "Online Ecommerce Website",
    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Firebase",
      "Node.js",
      "MongoDB",
    ],
    github: "example.com",
    live: "example.com",
    website: "example.com",
    image: "path/image",
    link: "example.com",
  },
];

export default allProjects;
