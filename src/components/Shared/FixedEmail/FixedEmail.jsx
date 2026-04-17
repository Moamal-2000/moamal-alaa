import { fixedItemsMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import s from "./FixedEmail.module.scss";

const motionProps = fixedItemsMotionProps();

const FixedEmail = () => {
  return (
    <motion.div className={s.fixedEmail} {...motionProps}>
      <a href="mailto:moamalalaapro1@gmail.com" title="Send me an email">
        moamalalaapro1@gmail.com
      </a>
    </motion.div>
  );
};

export default FixedEmail;
