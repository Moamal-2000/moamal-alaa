"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import AboutContent from "./AboutContent/AboutContent";
import s from "./AboutSection.module.scss";
import TechList from "./TechList/TechList";

const AboutSection = () => {
  return (
    <motion.section
      className={s.aboutSection}
      id="about"
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.4,
        delay: 0.2,
      })}
    >
      <NumberedHeading title="About Me" number="01" />
      <AboutContent />
      <TechList />
    </motion.section>
  );
};

export default AboutSection;
