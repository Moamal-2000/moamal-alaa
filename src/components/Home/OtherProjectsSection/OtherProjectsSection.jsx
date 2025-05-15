import Link from "next/link";
import OtherProjects from "./OtherProjects/OtherProjects";
import s from "./OtherProjectsSection.module.scss";

const OtherProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <h2>Other Noteworthy Projects</h2>
      <Link href="/archive">view the archive</Link>

      <OtherProjects />
    </section>
  );
};

export default OtherProjectsSection;
