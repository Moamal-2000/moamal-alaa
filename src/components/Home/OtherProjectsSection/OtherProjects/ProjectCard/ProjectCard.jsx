import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./ProjectCard.module.scss";
import ProjectFooter from "./ProjectFooter/ProjectFooter";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const ProjectCard = ({ data, index }) => {
  return (
    <m.article
      className={s.projectCard}
      {...fadeInOnViewMotionProps({
        delay: index * 0.1,
        duration: 0.4,
      })}
    >
      <ProjectHeader data={data} />
      <ProjectFooter technologies={data.technologies} />
    </m.article>
  );
};

export default ProjectCard;
