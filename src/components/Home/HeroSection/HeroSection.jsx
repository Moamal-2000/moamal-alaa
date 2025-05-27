"use client";

import { NAV_LINKS } from "@/data/staticData";
import { motion } from "motion/react";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.heroSection} id="hero">
      <div className={s.content}>
        <motion.p
          className={s.preHeading}
          initial={initial}
          animate={animate}
          transition={transition()}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className={s.myName}
          initial={initial}
          animate={animate}
          transition={transition()}
        >
          Moamal Alaa.
        </motion.h1>
        <motion.h2
          className={s.whatIDo}
          initial={initial}
          animate={animate}
          transition={transition()}
        >
          I make the internet less boring.
        </motion.h2>

        <motion.p
          className={s.description}
          initial={initial}
          animate={animate}
          transition={transition()}
        >
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

const initial = { opacity: 0, y: 20 };
const animate = { opacity: 1, y: 0 };

function getStaggeredTransition(addBy = 0.1) {
  let addedDelay = 0;

  return () => {
    const baseDelay = NAV_LINKS.length * 0.1;
    const currentDelay = baseDelay + addedDelay;
    addedDelay += addBy;

    return {
      duration: 0.5,
      delay: currentDelay + addBy,
    };
  };
}

const transition = getStaggeredTransition(0.1);
