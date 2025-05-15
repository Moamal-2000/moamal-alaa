import { OTHER_PROJECTS_DATA } from "@/data/otherProjects";
import s from "./OtherProjects.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const OtherProjects = () => {
  return (
    <div className={s.otherProjects}>
      {OTHER_PROJECTS_DATA.map((projectData) => (
        <ProjectCard key={projectData.id} data={projectData} />
      ))}
    </div>
  );
};

export default OtherProjects;
