"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import FeaturedProjects from "./FeaturedProjects/FeaturedProjects";

const animationProps = fadeInOnViewMotionProps({ visibilityThreshold: 0 });

const ProjectsSection = ({ featuredProjects }) => {
  return (
    <section id="projects">
      <NumberedHeading
        title="Some Things I've Built"
        number="03"
        animationProps={animationProps}
      />
      <FeaturedProjects featuredProjects={featuredProjects} />
    </section>
  );
};

export default ProjectsSection;
