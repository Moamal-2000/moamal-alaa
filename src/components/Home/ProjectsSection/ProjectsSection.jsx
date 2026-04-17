"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

const animationProps = fadeInOnViewMotionProps({ visibilityThreshold: 0 });

const ProjectsSection = ({ projectsData }) => {
  return (
    <section id="projects">
      <NumberedHeading
        title="Some Things I've Built"
        number="03"
        animationProps={animationProps}
      />
      <FeaturedProjects projectsData={projectsData} />
    </section>
  );
};

export default ProjectsSection;
