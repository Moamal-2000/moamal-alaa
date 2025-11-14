import s from "./ProjectLinks.module.scss";
import ProjectStats from "./ProjectStats/ProjectStats";

const ProjectLinks = ({ fetchedData: { repoUrl, liveUrl, stars, forks } }) => {
  return (
    <div className={s.projectLinks} data-type="project-links">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={s.githubLink}
      >
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#github" />
        </svg>
        Source
        <ProjectStats stars={stars} forks={forks} />
      </a>

      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#live" />
        </svg>
        Live
      </a>
    </div>
  );
};

export default ProjectLinks;
