import { FEATURED_PROJECTS } from "@/data/staticData";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import s from "./FeaturedProjects.module.scss";

const FeaturedProjects = () => {
  return (
    <div className={s.featuredProjects}>
      {FEATURED_PROJECTS.map((projectData) => (
        <FeaturedProject data={projectData} />
      ))}
    </div>
  );
};

export default FeaturedProjects;
