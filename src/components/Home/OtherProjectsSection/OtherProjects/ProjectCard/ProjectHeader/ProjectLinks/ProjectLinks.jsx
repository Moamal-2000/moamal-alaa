import SvgIcon from "@/components/Shared/SvgIcon";
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
  );
};

export default ProjectLinks;
