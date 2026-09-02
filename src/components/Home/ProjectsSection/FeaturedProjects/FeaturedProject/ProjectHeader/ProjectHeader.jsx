import s from "./ProjectHeader.module.scss";

const ProjectHeader = ({ title, liveUrl, underDev }) => {
  return (
    <header className={s.projectHeader}>
      <span className={s.featuredText}>Featured Project</span>

      {underDev && (
        <>
          <span className={s.separator} aria-hidden="true">
            |
          </span>
          <span className={s.developmentText}>Under Development</span>
        </>
      )}

      <h3 className={s.title}>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
    </header>
  );
};

export default ProjectHeader;
