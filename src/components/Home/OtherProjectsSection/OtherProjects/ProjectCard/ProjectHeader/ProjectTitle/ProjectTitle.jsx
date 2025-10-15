import s from "./ProjectTitle.module.scss";

const ProjectTitle = ({ children, liveUrl, isFeatured, isInProgress }) => {
  return (
    <h3 className={s.title}>
      <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
        {children}
        {(isFeatured || isInProgress) && (
          <ProjectStatus isFeatured={isFeatured} />
        )}
      </a>
    </h3>
  );
};

export default ProjectTitle;

function ProjectStatus({ isFeatured }) {
  return (
    <span className={s.status}>{isFeatured ? "Featured" : "In Progress"}</span>
  );
}
