import react from "../assets/react.svg";
import node from "../assets/node.svg";
import html from "../assets/html.svg";
import github from "../assets/github.svg";
import css from "../assets/css.svg";
export type SkillType = {
  id: number;
  name: string;
  icon: string;
  type?: string;
};
const mySkills: SkillType[] = [
  {
    id: 1,
    name: "React",
    icon: react,
  },
  {
    id: 2,
    name: "Node js",
    icon: node,
  },
  {
    id: 3,
    name: "HTML",
    icon: html,
  },
  {
    id: 4,
    name: "github",
    icon: github,
  },
  {
    id: 5,
    name: "css",
    icon: css,
  },
];

export default mySkills;
