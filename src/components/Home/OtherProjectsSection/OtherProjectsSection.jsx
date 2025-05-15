import Link from "next/link";
import s from "./OtherProjectsSection.module.scss";

const OtherProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <h2>Other Noteworthy Projects</h2>
      <Link href="/archive">view the archive</Link>
    </section>
  );
};

export default OtherProjectsSection;
