import { motion } from "framer-motion";
import "./index.css";
import { IconCode, IconView360 } from "@tabler/icons-react";
import { ProjectType } from "../../data/ProjectData";

const Project = ({ item }: { item: ProjectType }) => {
  return (
    <motion.div
      className="project__item"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="project__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="project__details">
        <div className="project__title">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="project__stacks">
          <div className="stacks">
            {item.technology.map((tech) => (
              <p key={tech} className="tech__stack">
                {tech}
              </p>
            ))}
          </div>
          <div className="project__buttons">
            <a href={item.github} target="_blank" className="code__btn">
              <IconCode className="icon" />
            </a>
            <a href={item.website} target="_blank" className="view__btn">
              <IconView360 className="icon" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
