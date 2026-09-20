"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./AboutSection.module.scss";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.4,
  delay: 0.2,
});

const AboutWrapper = ({ children }) => {
  return (
    <m.section className={s.aboutSection} id="about" {...motionProps}>
      {children}
    </m.section>
  );
};
export default AboutWrapper;
