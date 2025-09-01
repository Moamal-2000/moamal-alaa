import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars, forks, repoUrl }) => {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={s.projectStats}
      data-type="stats"
      title="GitHub repo"
    >
      <span className={s.stat}>
        <SvgIcon name="star" /> {stars || 0}
      </span>

      <span className={s.stat}>
        <SvgIcon name="fork" /> {forks || 0}
      </span>
    </a>
  );
};

export default ProjectStats;
