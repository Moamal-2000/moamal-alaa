import SvgIcon from "@/components/Shared/SvgIcon";
import Image from "next/image";
import s from "./FeaturedProject.module.scss";

const FeaturedProject = ({ data }) => {
  const { name, description, technologies, repoUrl, liveUrl, previewImg } =
    data;

  return (
    <div className={s.featuredProject}>
      <div className={s.content}>
        <div className={s.projectHeader}>
          <span className={s.featuredText}>Featured Project</span>
          <h3 className={s.name}>{name}</h3>
        </div>

        <p className={s.description}>{description}</p>

        <ul className={s.techList}>
          {technologies.map((tech, index) => (
            <li key={`${index}-${tech}`}>{tech}</li>
          ))}
        </ul>

        <div className={s.projectLinks}>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <SvgIcon name="github" />
            Source
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <SvgIcon name="" />
            Live
          </a>
        </div>
      </div>

      <div className={s.previewImg}>
        <Image src={previewImg} alt={name} width={500} height={500} />
      </div>
    </div>
  );
};

export default FeaturedProject;
