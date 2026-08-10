import {
  COD_JUMPING_STATS_REPO_URL,
  codJumpingStatsProject,
  FEATURED_PROJECTS,
} from "@/data/featuredProjects";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import s from "./FeaturedProjects.module.scss";

const FeaturedProjects = ({ featuredProjects }) => {
  return (
    <div className={s.featuredProjects}>
      {FEATURED_PROJECTS.map((projectData, index) => {
        const isPrivateRepo =
          projectData.repoUrl === COD_JUMPING_STATS_REPO_URL;

        const fetchedData = isPrivateRepo
          ? codJumpingStatsProject
          : featuredProjects[index];

        return (
          <FeaturedProject
            data={projectData}
            fetchedData={fetchedData}
            key={projectData.id}
            shouldReverse={index % 2 === 0}
          />
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
