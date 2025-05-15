import SvgIcon from "@/components/Shared/SvgIcon";
import s from "./ProjectCard.module.scss";

const ProjectCard = ({ data }) => {
  const { title, description, technologies, liveUrl } = data;

  return (
    <article className={s.projectCard}>
      <header>
        <div className={s.projectTop}>
          <SvgIcon name="folder" />

          <a
            href={liveUrl}
            aria-label="External Link"
            className={s.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon name="live" />
          </a>
        </div>

        <h3 className={s.title}>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        <p className={s.description}>{description}</p>
      </header>

      <footer>
        <ul className={s.techList}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </footer>
    </article>
  );
};

export default ProjectCard;
