"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./ContributionsSection.module.scss";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.4,
  delay: 0.2,
});

const ContributionWrapper = ({ children }) => {
  return (
    <m.section id="contributions" className={s.section} {...motionProps}>
      {children}
    </m.section>
  );
};
export default ContributionWrapper;
