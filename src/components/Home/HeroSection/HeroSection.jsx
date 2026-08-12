"use client";

import { heroMotionConfig } from "@/lib/motionConfig";
import { motion } from "motion/react";
import HeroButtons from "./HeroButtons/HeroButtons";
import s from "./HeroSection.module.scss";

const { initial, animate, transition } = heroMotionConfig();
const motionProps = () => ({ initial, animate, transition: transition() });

const HeroSection = () => {
  return (
    <section className={s.heroSection} id="hero">
      <div className={s.content}>
        <motion.p className={s.preHeading} {...motionProps()}>
          Hi, my name is
        </motion.p>

        <motion.h1 className={s.myName} {...motionProps()}>
          Moamal Alaa.
        </motion.h1>

        <motion.h2 className={s.whatIDo} {...motionProps()}>
          I make the internet less boring.
        </motion.h2>

        <motion.p className={s.description} {...motionProps()}>
          I’m a Front-End Engineer who builds immersive, high-performance, and
          accessible web experiences. I combine thoughtful UI design with solid
          technical execution, using Next.js, semantic HTML, and optimized CSS
          to create interfaces that are engaging, fast, and reliable.
        </motion.p>

        <HeroButtons motionProps={motionProps} />
      </div>
    </section>
  );
};

export default HeroSection;
