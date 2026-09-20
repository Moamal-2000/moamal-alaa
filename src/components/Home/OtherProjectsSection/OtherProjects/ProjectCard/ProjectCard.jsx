import ProjectCardWrapper from "./ProjectCardWrapper";
import ProjectFooter from "./ProjectFooter/ProjectFooter";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const ProjectCard = ({ data, index }) => {
  return (
    <ProjectCardWrapper index={index}>
      <ProjectHeader data={data} />
      <ProjectFooter technologies={data.technologies} />
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
