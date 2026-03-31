"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import s from "./ArchiveIntroduction.module.scss";

const ArchiveIntroduction = () => {
  return (
    <motion.header
      className={s.introduction}
      {...fadeInOnViewMotionProps({
        duration: 0.4,
      })}
    >
      <h1>Archive</h1>
      <p>A list of things I’ve worked on</p>
    </motion.header>
  );
};

export default ArchiveIntroduction;
