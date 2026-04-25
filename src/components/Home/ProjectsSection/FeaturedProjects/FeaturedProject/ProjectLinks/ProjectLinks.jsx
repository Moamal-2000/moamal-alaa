import s from "./ProjectLinks.module.scss";

const ProjectLinks = ({ fetchedData, title }) => {
  return (
    <div className={s.projectLinks} data-type="project-links">
      <a
        href={fetchedData.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={s.githubLink}
        aria-label={`View ${title} source code on GitHub`}
      >
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#github" />
        </svg>
        Source
      </a>

      <a
        href={fetchedData.liveUrl}
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
