import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars, forks, commitCount }) => {
  return (
    <div className={s.projectStats} data-type="project-stats">
      <div className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#star" />
        </svg>{" "}
        {stars || 0}
      </div>

      <span>.</span>

      <div className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#fork" />
        </svg>
        {forks || 0}
      </div>

      <span>.</span>

      <div className={`${s.stat} ${s.commits}`}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#commit" />
        </svg>
        {commitCount}
      </div>
    </div>
  );
};

export default ProjectStats;
