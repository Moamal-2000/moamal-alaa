"use client";

import NumberedHeading from "@/components/Shared/NumberedHeading/NumberedHeading";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./AboutSection.module.scss";
import TechList from "./TechList/TechList";

const AboutSection = () => {
  return (
    <motion.section
      className={s.aboutSection}
      id="about"
      {...fadeInOnViewMotionProps()}
    >
      <NumberedHeading title="About" number="01" />

      <div className={s.content}>
        <p className={s.firstParagraph}>
          Hello! I'm Moamal, a front-end developer with a passion for creating
          beautiful, functional, and accessible web experiences. I specialize in
          building responsive, performant, and accessible user interfaces that
          leave a lasting impression.
        </p>

        <p>
          My approach combines technical expertise with a keen eye for design,
          ensuring that every project I work on is visually appealing,
          user-friendly, and technically sound. I believe in writing clean,
          maintainable code, staying up-to-date with the latest web technologies
          and best practices, and optimizing for technical SEO. Additionally,
          I'm committed to creating accessible web experiences that are
          inclusive for all users.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>
      </div>

      <TechList />
    </motion.section>
  );
};

export default AboutSection;
