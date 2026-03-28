import { motion } from "motion/react";
import s from "./ProjectRow.module.scss";

const ProjectRow = ({
  projectData: { id, year, title, technologies, liveUrl, repoUrl },
  motionProps,
}) => {
  return (
    <motion.tr key={id} {...motionProps} className={s.projectRow}>
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
              aria-label={`Visit ${title} live site (opens in a new tab)`}
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
              aria-label={`View ${title} source code on GitHub`}
            >
              <svg aria-hidden="true">
                <use href="/icons-sprite.svg#github" />
              </svg>
            </a>
          )}
        </div>
      </td>
    </motion.tr>
  );
};
export default ProjectRow;
