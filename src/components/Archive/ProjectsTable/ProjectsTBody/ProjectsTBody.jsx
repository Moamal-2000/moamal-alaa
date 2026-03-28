"use client";

import { OTHER_PROJECTS_DATA } from "@/data/otherProjects";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import ProjectRow from "./ProjectRow/ProjectRow";

const motionProps = fadeInOnViewMotionProps({ duration: 0.4 });

const ProjectsTBody = () => {
  return (
    <tbody>
      {OTHER_PROJECTS_DATA.map((projectData) => (
        <ProjectRow
          key={projectData.id}
          projectData={projectData}
          motionProps={motionProps}
        />
      ))}
    </tbody>
  );
};

export default ProjectsTBody;
