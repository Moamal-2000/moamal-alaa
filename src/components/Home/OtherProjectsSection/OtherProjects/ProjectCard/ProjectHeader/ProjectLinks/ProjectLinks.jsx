import s from "./ProjectLinks.module.scss";

const ProjectLinks = ({ repoUrl, liveUrl }) => {
  return (
    <div className={s.projectLinks}>
      {repoUrl && (
        <a
          href={repoUrl}
          title="GitHub Link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden="true">
            <use href="/icons-sprite.svg#github" />
          </svg>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          title="External Link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden="true">
            <use href="/icons-sprite.svg#live" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
