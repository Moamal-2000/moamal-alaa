import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectCard.module.scss";

const ProjectCard = ({ data }) => {
  const { title, description, technologies, liveUrl, repoUrl } = data;

  return (
    <article className={s.projectCard}>
      <header>
        <div className={s.projectTop}>
          <SvgIcon name="folder" />

          <div className={s.projectLinks}>
            {repoUrl && (
              <a
                href={repoUrl}
                aria-label="GitHub Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon name="github" />
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                aria-label="External Link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgIcon name="live" />
              </a>
            )}
          </div>
        </div>

        <h3 className={s.title}>
          <a href={liveUrl || "#"} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        <p className={s.description}>{description}</p>
      </header>

      <footer>
        <ul className={s.techList}>
          {technologies.map((tech, index) => (
            <li key={`${index}-${tech}`} className={s.tech}>
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default ProjectCard;
