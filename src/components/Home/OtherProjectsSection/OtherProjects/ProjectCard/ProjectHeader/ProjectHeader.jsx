import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectHeader.module.scss";
import ProjectLinks from "./ProjectLinks/ProjectLinks";
import ProjectTitle from "./ProjectTitle/ProjectTitle";

const ProjectHeader = ({
  data: { title, description, repoUrl, liveUrl, isFeatured },
}) => {
  return (
    <header className={s.projectHeader}>
      <div className={s.projectTop}>
        <SvgIcon name="folder" />
        <ProjectLinks repoUrl={repoUrl} liveUrl={liveUrl} />
      </div>

      <ProjectTitle liveUrl={liveUrl} isFeatured={isFeatured}>
        {title}
      </ProjectTitle>

      <p className={s.description}>{description}</p>
    </header>
  );
};

export default ProjectHeader;
