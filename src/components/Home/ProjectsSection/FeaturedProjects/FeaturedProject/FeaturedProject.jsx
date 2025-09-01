"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import s from "./FeaturedProject.module.scss";
import PreviewImage from "./PreviewImage/PreviewImage";

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

        <ul className={s.techList}>
          {technologies.map((tech, index) => (
            <li key={`${index}-${tech}`}>{tech}</li>
          ))}
        </ul>

        <div className={s.wrapper}>
          <div className={s.projectLinks}>
            <a
              href={fetchedData.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={s.githubLink}
            >
              <SvgIcon name="github" />
              <span className={s.linkText}>Source</span>
            </a>
            <a
              href={fetchedData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon name="live" />
              Live
            </a>
          </div>

          <div className={s.projectStats}>
            <span className={s.stat}>
              <SvgIcon name="star" />
              {fetchedData.stars || 0}
            </span>

            <span className={s.stat}>
              <SvgIcon name="fork" />
              {fetchedData.forks || 0}
            </span>
          </div>
        </div>
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
