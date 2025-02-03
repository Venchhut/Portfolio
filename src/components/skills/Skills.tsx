import { motion } from "framer-motion";
import Skill from "./Skill";
import "./index.css";
import mySkills from "../../data/skill";

const Skills: React.FC = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <motion.div
          className="skills-content-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="section-title">My Skills</h2>
        </motion.div>
        <motion.div
          className="skills-content-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="section-desc">
            I utilize the latest tech stacks to craft innovative and efficient
            solutions.
          </p>
        </motion.div>
        <motion.div
          className="skills-content-items"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {mySkills.map((item) => {
            return <Skill item={item} key={item.id} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
