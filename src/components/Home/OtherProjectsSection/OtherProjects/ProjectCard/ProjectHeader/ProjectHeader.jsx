import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectHeader.module.scss";
import ProjectLinks from "./ProjectLinks/ProjectLinks";

const ProjectHeader = ({
  data: { title, description, repoUrl, liveUrl, isFeatured },
}) => {
  return (
    <header className={s.projectHeader}>
      <div className={s.projectTop}>
        <SvgIcon name="folder" />
        <ProjectLinks repoUrl={repoUrl} liveUrl={liveUrl} />
      </div>

      <h3 className={s.title}>
        <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
          {title}
          {isFeatured && <span className={s.featured}>Featured</span>}
        </a>
      </h3>

      <p className={s.description}>{description}</p>
    </header>
  );
};

export default ProjectHeader;
