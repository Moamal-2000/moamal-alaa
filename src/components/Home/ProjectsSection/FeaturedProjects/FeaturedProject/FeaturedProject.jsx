"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import s from "./FeaturedProject.module.scss";
import PreviewImage from "./PreviewImage/PreviewImage";
import ProjectHeader from "./ProjectHeader/ProjectHeader";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectStats from "./ProjectLinks/ProjectStats/ProjectStats";
import ProjectTechList from "./ProjectTechList/ProjectTechList";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.1,
  duration: 0.5,
  delay: 0.1,
  initialY: 40,
});

const FeaturedProject = ({ data, fetchedData, shouldReverse }) => {
  const { title, description, technologies, previewImg } = data;
  const { stars, forks, commitCount } = fetchedData;

  return (
    <motion.div
      className={s.featuredProject}
      dir={shouldReverse ? "rtl" : "ltr"}
      {...motionProps}
    >
      <div className={s.content}>
        <ProjectHeader title={title} liveUrl={fetchedData.liveUrl} />

        <div className={s.description}>{description}</div>

        <ProjectTechList technologies={technologies} />

        <div className={s.projectMeta}>
          <ProjectLinks fetchedData={fetchedData} title={title} />
          <ProjectStats stars={stars} forks={forks} commitCount={commitCount} />
        </div>
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
