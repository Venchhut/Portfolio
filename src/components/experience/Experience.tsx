import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences, education } from "../../data/experience";
import { IconCode, IconSchool, IconStar } from "@tabler/icons-react";
import "./experience.css";

const TimelineItem = ({
  date,
  icon,
  iconStyle,
  contentStyle,
  contentArrowStyle,
  title,
  subtitle,
  subtitle2,
  description,
}: {
  date: string;
  icon: React.ReactNode;
  iconStyle: React.CSSProperties;
  contentStyle: React.CSSProperties;
  contentArrowStyle: React.CSSProperties;
  title: string;
  subtitle: string;
  subtitle2?: string;
  description: string[];
}) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={contentStyle}
    contentArrowStyle={contentArrowStyle}
    date={date}
    iconStyle={iconStyle}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    {subtitle2 && (
      <h5 className="vertical-timeline-element-subtitle">{subtitle2}</h5>
    )}
    <ul>
      {description.map((desc, idx) => (
        <li key={idx}>{desc}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <div className="experience-container" id="experiences">
    <motion.div
      className="experience-header"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h2 className="section-title">Experiences</h2>
    </motion.div>

    <VerticalTimeline className="vertical-timeline-container">
      {experiences.map((exp) => (
        <TimelineItem
          key={exp.id}
          date={exp.date}
          icon={<IconCode />}
          iconStyle={{
            background: "var(--grey-color)",
            color: "var(--text-color)",
          }}
          contentStyle={{
            background: "var(--background-alt)",
            color: "var(--text-color)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--background-alt)",
          }}
          title={exp.title}
          subtitle={exp.company}
          subtitle2={exp.location}
          description={exp.description}
        />
      ))}

      {education.map((edu) => (
        <TimelineItem
          key={edu.id}
          date={edu.date}
          icon={<IconSchool />}
          iconStyle={{
            background: "var(--primary-color)",
            color: "var(--text-color)",
          }}
          contentStyle={{
            background: "var(--background-alt)",
            color: "var(--text-color)",
          }}
          contentArrowStyle={{
            borderRight: "7px solid var(--primary-color)",
          }}
          title={edu.title}
          subtitle={edu.institution}
          description={edu.description}
        />
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

export default Experience;
