"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./ProjectCard.module.scss";

const ProjectCardWrapper = ({ children, index }) => {
  return (
    <m.article
      className={s.projectCard}
      {...fadeInOnViewMotionProps({
        delay: index * 0.1,
        duration: 0.4,
      })}
    >
      {children}
    </m.article>
  );
};
export default ProjectCardWrapper;
