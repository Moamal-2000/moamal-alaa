import s from "./ProjectFooter.module.scss";

const ProjectFooter = ({ technologies }) => {
  return (
    <footer className={s.projectFooter}>
      <ul className={s.techList}>
        {technologies.map((tech, index) => (
          <li key={`${index}-${tech}`} className={s.tech}>
            {tech}
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default ProjectFooter;
