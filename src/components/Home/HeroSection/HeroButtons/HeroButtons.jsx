import s from "./HeroButtons.module.scss";

const HeroButtons = () => {
  return (
    <div className={s.buttons}>
      <a href="#projects" className={s.viewWorkBtn}>
        View my work
      </a>

      <a href="mailto:moamalalaapro1@gmail.com" className={s.getInTouchBtn}>
        Get in touch
      </a>
    </div>
  );
};

export default HeroButtons;
