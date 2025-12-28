"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./FeaturedProject.module.scss";
import PreviewImage from "./PreviewImage/PreviewImage";
import ProjectHeader from "./ProjectHeader/ProjectHeader";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectTechList from "./ProjectTechList/ProjectTechList";

const FeaturedProject = ({ data, fetchedData, shouldReverse }) => {
  const { title, description, technologies, previewImg } = data;

  return (
    <motion.div
      className={s.featuredProject}
      dir={shouldReverse ? "rtl" : "ltr"}
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.1,
        duration: 0.5,
        delay: 0.1,
        initialY: 40,
      })}
    >
      <div className={s.content}>
        <ProjectHeader title={title} liveUrl={fetchedData.liveUrl} />

        <p className={s.description}>{description}</p>

        <ProjectTechList technologies={technologies} />
        <ProjectLinks fetchedData={fetchedData} />
      </div>

      <PreviewImage
        src={previewImg}
        liveUrl={fetchedData.liveUrl}
        title={title}
        loading="lazy"
      />
    </motion.div>
  );
};

export default FeaturedProject;
