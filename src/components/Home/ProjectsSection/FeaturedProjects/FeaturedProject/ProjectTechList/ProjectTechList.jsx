import s from "./ProjectTechList.module.scss";

const ProjectTechList = ({ technologies }) => {
  return (
    <ul className={s.techList} data-type="tech-list">
      {technologies.map((tech, index) => (
        <li key={`${index}-${tech}`}>{tech}</li>
      ))}
    </ul>
  );
};

export default ProjectTechList;
