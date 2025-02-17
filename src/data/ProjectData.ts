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
    image:
      "https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image:
      "https://plus.unsplash.com/premium_photo-1720551256796-624029b9dc84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "example.com",
  },
  {
    id: 3,
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
    image:
      "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "example.com",
  },
  {
    id: 4,
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
    image:
      "https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "example.com",
  },
];

export default allProjects;
