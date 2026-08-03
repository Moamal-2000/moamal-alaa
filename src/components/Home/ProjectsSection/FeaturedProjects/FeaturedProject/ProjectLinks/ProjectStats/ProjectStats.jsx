import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars = 0, forks = 0, commitCount = 0 }) => {
  return (
    <div className={s.projectStats} data-type="project-stats">
      <div className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#star" />
        </svg>{" "}
        {stars.toLocaleString()}
      </div>

      <span>.</span>

      <div className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#fork" />
        </svg>
        {forks.toLocaleString()}
      </div>

      <span>.</span>

      <div className={`${s.stat} ${s.commits}`}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#commit" />
        </svg>
        {commitCount.toLocaleString()}
      </div>
    </div>
  );
};

export default ProjectStats;
