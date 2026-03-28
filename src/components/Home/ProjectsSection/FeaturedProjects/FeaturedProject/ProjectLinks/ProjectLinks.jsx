import s from "./ProjectLinks.module.scss";
import ProjectStats from "./ProjectStats/ProjectStats";

const ProjectLinks = ({
  fetchedData: { repoUrl, liveUrl, stars, forks },
  title,
}) => {
  return (
    <div className={s.projectLinks} data-type="project-links">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={s.githubLink}
        aria-label={`View ${title} source code on GitHub`}
      >
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#github" />
        </svg>
        Source
        <ProjectStats stars={stars} forks={forks} />
      </a>

      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live site (opens in a new tab)`}
      >
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#live" />
        </svg>
        Live
      </a>
    </div>
  );
};

export default ProjectLinks;
