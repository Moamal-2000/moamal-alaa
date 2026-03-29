import IconLink from "@/components/Shared/Buttons/IconLink/IconLink";
import s from "./ProjectLinks.module.scss";

const ProjectLinks = ({ repoUrl, liveUrl, title }) => {
  return (
    <div className={s.projectLinks}>
      <IconLink
        href={repoUrl}
        title="GitHub Link"
        iconName="github"
        ariaLabel={`View ${title} source code on GitHub`}
      />
      <IconLink
        href={liveUrl}
        title="External Link"
        iconName="live"
        ariaLabel={`Visit ${title} live site (opens in a new tab)`}
      />
    </div>
  );
};

export default ProjectLinks;
