"use client";

import { m } from "motion/react";
import s from "./NumberedHeading.module.scss";

const NumberedHeading = ({ title, number, animationProps = {} }) => {
  return (
    <m.h2 className={s.numberedHeading} {...animationProps}>
      <span>{number}.</span>
      {title}
    </m.h2>
  );
};

export default NumberedHeading;
