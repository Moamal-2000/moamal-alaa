import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars = 0, forks = 0, commitCount = 0 }) => {
  return (
    <div
      className={s.projectStats}
      data-type="project-stats"
      aria-label="GitHub repository statistics"
    >
      <div className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#star" />
        </svg>{" "}
        {stars.toLocaleString()}
        <span className="visuallyHidden">
          {stars.toLocaleString()} GitHub stars
        </span>
      </div>

      <span aria-hidden="true">.</span>

      <div className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#fork" />
        </svg>
        {forks.toLocaleString()}
        <span className="visuallyHidden">
          {forks.toLocaleString()} GitHub forks
        </span>
      </div>

      <span aria-hidden="true">.</span>

      <div className={`${s.stat} ${s.commits}`}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#commit" />
        </svg>
        {commitCount.toLocaleString()}
        <span className="visuallyHidden">
          {commitCount.toLocaleString()} GitHub commits
        </span>
      </div>
    </div>
  );
};

export default ProjectStats;
