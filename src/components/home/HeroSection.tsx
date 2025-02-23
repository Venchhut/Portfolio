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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="home" id="home">
      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="left-content">
          <motion.div className="text-content" variants={itemVariants}>
            <h1 className="title">
              Hi there!{" "}
              <motion.span
                className="wave"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                👋
              </motion.span>
            </h1>
            <h2 className="subtitle">I'm Venchhut</h2>
            <div className="text">
              <div className="typing-text">Junior React Developer</div>
            </div>
            <p className="description">
              I am a passionate frontend developer specializing in building
              dynamic and responsive user interfaces using modern technologies
              like React.js, TypeScript, and various UI frameworks. My expertise
              includes:
            </p>
          </motion.div>

          <motion.div className="social-links" variants={itemVariants}>
            <motion.a
              href="mailto:venchhut@gmail.com"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconMail />
            </motion.a>
            <motion.a
              href="https://github.com/venchhut"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconBrandGithub />
            </motion.a>
            <motion.a
              href="https://gitlab.com/venchhut129"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconBrandGitlab />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/venchhut/"
              className="social-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconBrandLinkedin />
            </motion.a>
          </motion.div>

          <motion.button
            className="download-resume"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconFileDownload size={20} />
            <span>Download Resume</span>
          </motion.button>
        </div>

        <motion.div className="right-content" variants={itemVariants}>
          <div className="image-wrapper">
            <motion.img
              src={profile}
              alt="profile"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
