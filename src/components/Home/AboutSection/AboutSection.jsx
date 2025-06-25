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
      {...fadeInOnViewMotionProps({
        visibilityThreshold: 0.4,
        delay: 0.2,
      })}
    >
      <NumberedHeading title="About Me" number="01" />

      <div className={s.content}>
        <p className={s.firstParagraph}>
          Hi, I’m Moamal, I enjoy building things for the web. I believe
          websites should feel smooth, look great, and work for everyone. That’s
          why I focus on creating interfaces that are not only functional but
          also enjoyable to interact with.
        </p>

        <p>
          I’ve been exploring front-end development for over four years now. It
          all started with writing HTML and CSS, which felt like drawing with
          code, I loved bringing designs to life on the screen. That curiosity
          led me to JavaScript and, eventually, to the world of modern front-end
          technologies I work with today.
        </p>

        <p>Here are a few technologies I’ve been working with recently:</p>
      </div>

      <TechList />
    </motion.section>
  );
};

export default AboutSection;
