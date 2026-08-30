"use client";

import HeroButtons from "./HeroButtons/HeroButtons";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.heroSection} id="hero">
      <div className={s.content}>
        <p className={s.preHeading}>Hi, my name is</p>
        <h1 className={s.myName}>Moamal Alaa.</h1>
        <h2 className={s.whatIDo}>I make the internet less boring.</h2>

        <p className={s.description}>
          I’m a Front-End Engineer who builds immersive, high-performance, and
          accessible web experiences. I combine thoughtful UI design with solid
          technical execution, using Next.js, semantic HTML, and optimized CSS
          to create interfaces that are engaging, fast, and reliable.
        </p>

        <HeroButtons />
      </div>
    </section>
  );
};

export default HeroSection;
