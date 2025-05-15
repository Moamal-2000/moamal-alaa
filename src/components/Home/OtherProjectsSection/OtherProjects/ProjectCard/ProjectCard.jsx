import s from "./ProjectCard.module.scss";

const ProjectCard = ({ data }) => {
  const { title, description, technologies, liveUrl } = data;

  return <div className={s.projectCard}></div>;
};

export default ProjectCard;
