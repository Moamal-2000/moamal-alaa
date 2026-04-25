import { FEATURED_PROJECTS } from "@/data/featuredProjects";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import s from "./FeaturedProjects.module.scss";

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <div className={s.featuredProjects}>
      {FEATURED_PROJECTS.map((projectData, index) => {
        return (
          <FeaturedProject
            data={projectData}
            fetchedData={featuredProjects[index]}
            key={projectData.id}
            shouldReverse={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
