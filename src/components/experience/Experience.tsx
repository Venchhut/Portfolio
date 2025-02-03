import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences, education } from "../../data/experience";
import { IconCode, IconSchool, IconStar } from "@tabler/icons-react";
import "./experience.css";
const Experience = () => {
  return (
    <div className="experience-container">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <h2 className="section-title">Experiences</h2>
      </motion.div>

      <VerticalTimeline>
        {experiences.map((exp) => (
          <VerticalTimelineElement
            key={exp.id}
            className="vertical-timeline-element"
            contentStyle={{
              background: "var(--background-alt)",
              color: "var(--text-color)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid var(--background-alt)`,
            }}
            date={exp.date}
            iconStyle={{
              background: "var(--background-alt)",
              color: "var(--text-color)",
            }}
            icon={<IconCode />}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.company}
            </h4>
            <h5 className="vertical-timeline-element-subtitle">
              {exp.location}
            </h5>
            <ul>
              {exp.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}

        {education.map((edu) => (
          <VerticalTimelineElement
            key={edu.id}
            className="vertical-timeline-element"
            contentStyle={{
              background: "var(--primary-color)",
              color: "var(--text-color)",
            }}
            contentArrowStyle={{
              borderRight: `7px solid var(--primary-color)`,
            }}
            date={edu.date}
            iconStyle={{
              background: "var(--primary-color)",
              color: "var(--text-color)",
            }}
            icon={<IconSchool />}
          >
            <h3 className="vertical-timeline-element-title">{edu.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {edu.institution}
            </h4>
            <ul>
              {edu.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: "var(--grey-color)",
            color: "var(--text-color)",
          }}
          icon={<IconStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
