import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import s from "./ProjectsSection.module.scss";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

const ProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <NumberedHeading title="Some Things I've Built" number="02" />
      <FeaturedProjects />
    </section>
  );
};

export default ProjectsSection;
