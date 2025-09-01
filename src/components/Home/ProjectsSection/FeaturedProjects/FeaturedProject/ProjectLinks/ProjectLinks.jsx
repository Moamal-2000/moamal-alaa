import SvgIcon from "@/components/Shared/SvgIcon";
import ProjectStats from "../ProjectStats/ProjectStats";
import s from "./ProjectLinks.module.scss";

const ProjectLinks = ({ fetchedData: { repoUrl, liveUrl, stars, forks } }) => {
  return (
    <div className={s.projectLinks} data-type="project-links">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={s.githubLink}
      >
        <SvgIcon name="github" />
        Source
        <ProjectStats stars={stars} forks={forks} />
      </a>

      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        <SvgIcon name="live" />
        Live
      </a>
    </div>
  );
};

export default ProjectLinks;
