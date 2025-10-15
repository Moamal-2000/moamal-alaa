import s from "./ProjectTitle.module.scss";

const ProjectTitle = ({ children, liveUrl, isFeatured, isInProgress }) => {
  return (
    <h3 className={s.title}>
      <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
        {children}
        {(isFeatured || isInProgress) && (
          <span className={s.featured}>
            {isFeatured ? "Featured" : "In Progress"}
          </span>
        )}
      </a>
    </h3>
  );
};

export default ProjectTitle;
