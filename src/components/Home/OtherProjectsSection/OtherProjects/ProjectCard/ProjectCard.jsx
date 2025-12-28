import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./ProjectCard.module.scss";
import ProjectFooter from "./ProjectFooter/ProjectFooter";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const ProjectCard = ({ data, index }) => {
  return (
    <motion.article
      className={s.projectCard}
      {...fadeInOnViewMotionProps({
        delay: index * 0.1,
        duration: 0.4,
      })}
    >
      <ProjectHeader data={data} />
      <ProjectFooter technologies={data.technologies} />
    </motion.article>
  );
};

export default ProjectCard;
