import { OTHER_PROJECTS_DATA } from "@/data/otherProjects";
import DemoUnavailableOverlay from "../../../Shared/Alerts/DemoUnavailableOverlay/DemoUnavailableOverlay";
import s from "./OtherProjects.module.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const OtherProjects = () => {
  return (
    <div className={s.otherProjects}>
      <DemoUnavailableOverlay message="Access to the website demos is currently unavailable." />

      {OTHER_PROJECTS_DATA.map((projectData, index) => (
        <ProjectCard key={projectData.id} data={projectData} index={index} />
      ))}
    </div>
  );
};

export default OtherProjects;
