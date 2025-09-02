"use client";

import OtherProjects from "./OtherProjects/OtherProjects";
import OtherProjectsHeader from "./OtherProjectsHeader/OtherProjectsHeader";
import s from "./OtherProjectsSection.module.scss";

const OtherProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <OtherProjectsHeader />
      <OtherProjects />
    </section>
  );
};

export default OtherProjectsSection;
