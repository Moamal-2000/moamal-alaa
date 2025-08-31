import { FEATURED_PROJECTS } from "@/data/staticData";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import s from "./FeaturedProjects.module.scss";

const FeaturedProjects = ({ projectsData }) => {
  return (
    <div className={s.featuredProjects}>
      {FEATURED_PROJECTS.map((projectData, index) => {
        return (
          <FeaturedProject
            data={projectData}
            fetchedData={projectsData[index]}
            key={projectData.id}
            shouldReverse={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
