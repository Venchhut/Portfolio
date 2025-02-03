import { motion } from "framer-motion";
import allProjects from "../../data/ProjectData";
import Project from "./Project";
import "./index.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__content">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="projects__title"
        >
          <h1 className="section__title">All Projects</h1>
        </motion.div>
        <motion.div
          className="projects__description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>
        <div className="projects__items">
          {allProjects.map((item) => (
            <Project key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
