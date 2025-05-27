"use client";

import { motion } from "motion/react";
import s from "./NumberedHeading.module.scss";

const NumberedHeading = ({ title, number, animationProps = {} }) => {
  return (
    <motion.h2 className={s.numberedHeading} {...animationProps}>
      <span>{number}.</span>
      {title}
    </motion.h2>
  );
};

export default NumberedHeading;
