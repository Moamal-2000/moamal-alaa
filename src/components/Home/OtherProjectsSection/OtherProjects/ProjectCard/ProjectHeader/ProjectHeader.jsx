import s from "./ProjectHeader.module.scss";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectTitle from "./ProjectTitle/ProjectTitle";

const ProjectHeader = ({
  data: { title, description, repoUrl, liveUrl, isFeatured, isInProgress },
}) => {
  return (
    <header className={s.projectHeader}>
      <div className={s.projectTop}>
        <svg aria-hidden="true">
          <use href="/icons-sprite.svg#folder" />
        </svg>
        <ProjectLinks repoUrl={repoUrl} liveUrl={liveUrl} />
      </div>

      <ProjectTitle
        liveUrl={liveUrl}
        isFeatured={isFeatured}
        isInProgress={isInProgress}
      >
        {title}
      </ProjectTitle>

      <p className={s.description}>{description}</p>
    </header>
  );
};

export default ProjectHeader;
