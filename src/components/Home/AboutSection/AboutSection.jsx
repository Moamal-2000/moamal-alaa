"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import AboutContent from "./AboutContent/AboutContent";
import s from "./AboutSection.module.scss";

const motionProps = fadeInOnViewMotionProps({
  visibilityThreshold: 0.4,
  delay: 0.2,
});

const AboutSection = () => {
  return (
    <motion.section className={s.aboutSection} id="about" {...motionProps}>
      <NumberedHeading title="About Me" number="01" />
      <AboutContent />
    </motion.section>
  );
};

export default AboutSection;
