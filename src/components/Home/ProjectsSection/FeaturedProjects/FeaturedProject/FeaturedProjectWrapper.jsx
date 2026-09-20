"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./FeaturedProject.module.scss";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.1,
  duration: 0.5,
  delay: 0.1,
  initialY: 40,
});

const FeaturedProjectWrapper = ({ children, shouldReverse }) => {
  return (
    <m.div
      className={s.featuredProject}
      dir={shouldReverse ? "rtl" : "ltr"}
      {...motionProps}
    >
      {children}
    </m.div>
  );
};
export default FeaturedProjectWrapper;
