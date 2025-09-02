import s from "./ProjectTitle.module.scss";

const ProjectTitle = ({ children, liveUrl, isFeatured }) => {
  return (
    <h3 className={s.title}>
      <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
        {children}
        {isFeatured && <span className={s.featured}>Featured</span>}
      </a>
    </h3>
  );
};

export default ProjectTitle;
