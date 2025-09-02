import { motion } from "motion/react";
import s from "./HeroButtons.module.scss";

const HeroButtons = ({ motionProps }) => {
  return (
    <motion.div className={s.buttons} {...motionProps()}>
      <a href="#projects" className={s.viewWorkBtn}>
        View my work
      </a>

      <a href="mailto:moamalalaapro1@gmail.com" className={s.getInTouchBtn}>
        Get in touch
      </a>
    </motion.div>
  );
};

export default HeroButtons;
