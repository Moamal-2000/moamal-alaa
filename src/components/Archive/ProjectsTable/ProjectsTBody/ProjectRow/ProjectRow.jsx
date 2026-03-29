import IconLink from "@/components/Shared/Buttons/IconLink/IconLink";
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
        <IconLink
          href={liveUrl}
          title="External Link"
          iconName="live"
          ariaLabel={`Visit ${title} live site (opens in a new tab)`}
        />
        <IconLink
          href={repoUrl}
          title="GitHub Link"
          iconName="github"
          ariaLabel={`View ${title} source code on GitHub`}
        />
      </td>
    </motion.tr>
  );
};
export default ProjectRow;
