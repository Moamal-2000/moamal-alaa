import Svg from "@/components/Shared/Svg";
import s from "./ProjectLinks.module.scss";

const ProjectLinks = ({ fetchedData = {}, title, caseStudyPath }) => {
  return (
    <div className={s.projectLinks} data-type="project-links">
      {fetchedData?.isPrivate ? (
        <span
          className={s.githubLink}
          data-tooltip="Private repository"
          aria-label="Source code unavailable: private repository"
        >
          <Svg name="github" />
          Source
        </span>
      ) : (
        <a
          href={fetchedData.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={s.githubLink}
          aria-label={`View ${title} source code on GitHub`}
        >
          <Svg name="github" />
          Source
        </a>
      )}

      <a
        href={fetchedData.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live site (opens in a new tab)`}
      >
        <Svg name="live" />
        Live
      </a>

      {caseStudyPath && (
        <a href={caseStudyPath} aria-label={`Visit ${title} case study`}>
          <Svg name="case-study" />
          Case Study
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
