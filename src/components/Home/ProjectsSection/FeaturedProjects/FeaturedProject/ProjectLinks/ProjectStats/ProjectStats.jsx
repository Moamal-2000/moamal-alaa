import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars, forks }) => {
  return (
    <div className={s.projectStats}>
      <span className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#star" />
        </svg>{" "}
        {stars || 0}
      </span>

      <span className={s.stat}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#fork" />
        </svg>
        {forks || 0}
      </span>
    </div>
  );
};

export default ProjectStats;
