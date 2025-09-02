"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import s from "./FeaturedProject.module.scss";
import PreviewImage from "./PreviewImage/PreviewImage";
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
        <div className={s.projectHeader}>
          <span className={s.featuredText}>Featured Project</span>
          <h3 className={s.title}>
            <a
              href={fetchedData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </h3>
        </div>

        <p className={s.description}>{description}</p>

        <ProjectTechList technologies={technologies} />
        <ProjectLinks fetchedData={fetchedData} />
      </div>

      <PreviewImage
        src={previewImg}
        liveUrl={fetchedData.liveUrl}
        title={title}
      />
    </motion.div>
  );
};

export default FeaturedProject;
