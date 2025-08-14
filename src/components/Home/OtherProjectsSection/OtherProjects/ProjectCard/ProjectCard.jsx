"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import s from "./ProjectCard.module.scss";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const ProjectCard = ({ data, index }) => {
  const { technologies } = data;

  return (
    <motion.article
      className={s.projectCard}
      {...fadeInOnViewMotionProps({
        delay: index * 0.1,
        duration: 0.4,
      })}
    >
      <ProjectHeader data={data} />

      <footer>
        <ul className={s.techList}>
          {technologies.map((tech, index) => (
            <li key={`${index}-${tech}`} className={s.tech}>
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </motion.article>
  );
};

export default ProjectCard;
