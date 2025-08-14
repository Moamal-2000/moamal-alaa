import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectHeader.module.scss";

const ProjectHeader = ({
  data: { title, description, repoUrl, liveUrl, isFeatured },
}) => {
  return (
    <header className={s.projectHeader}>
      <div className={s.projectTop}>
        <SvgIcon name="folder" />

        <div className={s.projectLinks}>
          {repoUrl && (
            <a
              href={repoUrl}
              title="GitHub Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon name="github" />
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              title="External Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgIcon name="live" />
            </a>
          )}
        </div>
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
