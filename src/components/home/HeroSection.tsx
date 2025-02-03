import { motion } from "framer-motion";
import "./HeroSection.css";
import {
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandLinkedin,
  IconFileDownload,
  IconMail,
} from "@tabler/icons-react";
import profile from "../../assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="left-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="title"
          >
            Hi there!
          </motion.h1>
          <motion.p>
            I am a Junior React Developer with a strong focus on frontend
            development. I specialize in building dynamic and responsive user
            interfaces using modern technologies like React.js, TypeScript, and
            various UI frameworks. My expertise includes working with state
            management tools such as Redux and Context API, as well as
            integrating RESTful APIs to create seamless web applications. I'm
            passionate about writing clean, maintainable code and delivering
            high-quality user experiences. I continuously strive to expand my
            skill set and keep up with the latest industry trends and best
            practices in frontend development.
          </motion.p>
          <div className="icons-link">
            <motion.a
              href="mailto:venchhut@gamil.com"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <IconMail />
            </motion.a>
            <motion.a
              href="https://github.com/venchhut"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <IconBrandGithub />
            </motion.a>
            <motion.a
              href="https://gitlab.com/venchhut129"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <IconBrandGitlab />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/venchhut/"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <IconBrandLinkedin />
            </motion.a>
          </div>
          <button className="download-resume">
            <IconFileDownload size={20} />
            <motion.a>Download Resume</motion.a>
          </button>
        </div>
        <div className="right-content">
          <img src={profile} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
