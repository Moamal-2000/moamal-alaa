"use client";

import { heroMotionConfig } from "@/functions/motionConfig";
import { motion } from "motion/react";
import s from "./HeroSection.module.scss";

const { initial, animate, transition } = heroMotionConfig();

const motionProps = () => ({
  initial,
  animate,
  transition: transition(),
});

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
          I'm a front-end developer passionate about creating engaging and
          intuitive user interfaces. I focus on building responsive, performant,
          and accessible websites that leave a lasting impression.
        </motion.p>

        <motion.div
          className={s.buttons}
          initial={initial}
          animate={animate}
          transition={transition()}
        >
          <a href="#projects" className={s.viewWorkBtn}>
            View my work
          </a>
          <a href="mailto:moamalalaapro1@gmail.com" className={s.getInTouchBtn}>
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
