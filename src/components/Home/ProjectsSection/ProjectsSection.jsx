"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <NumberedHeading
        title="Some Things I've Built"
        number="02"
        animationProps={fadeInOnViewMotionProps({ visibilityThreshold: 0 })}
      />
      <FeaturedProjects />
    </section>
  );
};

export default ProjectsSection;
