import { STATS_FALLBACK } from "@/constants/constants";
import { Fragment } from "react";
import s from "./ProjectStats.module.scss";

const ProjectStats = ({
  stars = STATS_FALLBACK,
  forks = STATS_FALLBACK,
  commitCount = STATS_FALLBACK,
  pullRequests = STATS_FALLBACK,
}) => {
  const stats = getStats({ stars, forks, commitCount, pullRequests });

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

          <dd className={s.value}>{value.toLocaleString() ?? "??"}</dd>

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

function getStats({ stars, forks, commitCount, pullRequests } = {}) {
  const stats = [
    { value: stars, icon: "star", label: "GitHub stars" },
    { value: forks, icon: "fork", label: "GitHub forks" },
    { value: commitCount, icon: "commit", label: "GitHub commits" },
  ];

  if (pullRequests !== STATS_FALLBACK && stats.length === 3) {
    stats.push({
      value: pullRequests,
      icon: "code-pull-request",
      label: "GitHub pull requests",
    });
  }

  return stats;
}
