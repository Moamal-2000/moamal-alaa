import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import s from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <NumberedHeading title="Some Things I've Built" number="02" />
    </section>
  );
};

export default ProjectsSection;
