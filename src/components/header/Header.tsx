import {
  IconAddressBook,
  IconBriefcase,
  IconCode,
  IconHome,
  IconPresentation,
} from "@tabler/icons-react";
import "./header.css";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useRef } from "react";
const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll({});
  const lastRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastRef.current = y;
    }
  });

  return (
    <div className="header" id="header">
      <motion.div
        className="header-container shimmer"
        initial={{ y: -150 }}
        animate={isHidden ? "hidden" : "visible"}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "125%",
          },
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <ul className="header-list">
          <li className="header-item">
            <a href="#home">
              <IconHome className="header-icon" />
              <p>Home</p>
            </a>
          </li>
          <li className="header-item">
            <a href="#skills">
              <IconCode className="header-icon" />
              <p>Skills</p>
            </a>
          </li>
          <li className="header-item">
            <a href="#projects">
              <IconPresentation className="header-icon" />
              <p>Projects</p>
            </a>
          </li>
          <li className="header-item">
            <a href="#experiences">
              <IconBriefcase className="header-icon" />
              <p>Experiences</p>
            </a>
          </li>
          <li className="header-item">
            <a href="#contact">
              <IconAddressBook className="header-icon" />
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
