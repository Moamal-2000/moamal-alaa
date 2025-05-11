import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={s.heroSection} id="hero">
      <div className={s.content}>
        <p className={s.preHeading}>Hi, my name is</p>
        <h1 className={s.myName}>Moamal Alaa</h1>
        <h2 className={s.whatIDo}>I craft beautiful web experiences.</h2>

        <p className={s.description}>
          I'm a front-end developer passionate about creating engaging and
          intuitive user interfaces. I focus on building responsive, performant,
          and accessible websites that leave a lasting impression.
        </p>

        <div className={s.buttons}>
          <a href="#projects" className={s.viewWorkBtn}>
            View my work
          </a>
          <a href="#contact" className={s.getInTouchBtn}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
