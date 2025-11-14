"use client";

import { OTHER_PROJECTS_DATA } from "@/data/otherProjects";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./ProjectsTBody.module.scss";

const ProjectsTBody = () => {
  return (
    <tbody className={s.tbody}>
      {OTHER_PROJECTS_DATA.map(
        ({ id, year, title, technologies, liveUrl, repoUrl }) => (
          <motion.tr
            key={id}
            {...fadeInOnViewMotionProps({
              duration: 0.4,
            })}
          >
            <td className={s.year}>{year}</td>
            <td className={s.title}>{title}</td>
            <td className={`${s.tech} ${s.hideOnMobile}`}>
              {technologies?.map((tech, index) => (
                <span key={index}>
                  {tech}
                  {index < technologies.length - 1 && (
                    <span className={s.separator}>·</span>
                  )}
                </span>
              ))}
            </td>
            <td className={s.links}>
              <div className={s.wrapper}>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    title="External Link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg aria-hidden="true">
                      <use href="/icons-sprite.svg#live" />
                    </svg>
                  </a>
                )}

                {repoUrl && (
                  <a
                    href={liveUrl}
                    title="GitHub Link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg aria-hidden="true">
                      <use href="/icons-sprite.svg#github" />
                    </svg>
                  </a>
                )}
              </div>
            </td>
          </motion.tr>
        )
      )}
    </tbody>
  );
};

export default ProjectsTBody;
