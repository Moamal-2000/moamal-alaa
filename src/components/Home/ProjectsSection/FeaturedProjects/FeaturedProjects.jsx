import { FEATURED_PROJECTS } from "@/data/staticData";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import s from "./FeaturedProjects.module.scss";

const FeaturedProjects = () => {
  return (
    <div className={s.featuredProjects}>
      {FEATURED_PROJECTS.map((projectData, index) => (
        <FeaturedProject
          data={projectData}
          key={projectData.id}
          shouldReverse={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;
