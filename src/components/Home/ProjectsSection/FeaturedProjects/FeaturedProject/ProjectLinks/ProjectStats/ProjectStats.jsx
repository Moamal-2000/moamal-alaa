import { Fragment } from "react";
import s from "./ProjectStats.module.scss";

const ProjectStats = ({ stars = 0, forks = 0, commitCount = 0 }) => {
  const stats = getStats({ stars, forks, commitCount });

  return (
    <dl className={s.projectStats} data-type="project-stats">
      {stats.map(({ value, icon, label }, index) => (
        <Fragment key={icon}>
          <dt className={s.term}>
            <svg aria-hidden="true">
              <use href={`/icons-sprite.svg#${icon}`} />
            </svg>
            <span className="visuallyHidden">{label}</span>
          </dt>

          <dd className={s.value}>{value.toLocaleString()}</dd>

          {index < stats.length - 1 && (
            <span className={s.dot} aria-hidden="true">
              .
            </span>
          )}
        </Fragment>
      ))}
    </dl>
  );
};

export default ProjectStats;

function getStats({ stars, forks, commitCount } = {}) {
  return [
    { value: stars, icon: "star", label: "GitHub stars" },
    { value: forks, icon: "fork", label: "GitHub forks" },
    { value: commitCount, icon: "commit", label: "GitHub commits" },
  ];
}
