import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars, forks }) => {
  return (
    <div className={s.projectStats} data-type="stats">
      <span className={s.stat}>
        <SvgIcon name="star" />
        {stars || 0}
      </span>

      <span className={s.stat}>
        <SvgIcon name="fork" />
        {forks || 0}
      </span>
    </div>
  );
};

export default ProjectStats;
