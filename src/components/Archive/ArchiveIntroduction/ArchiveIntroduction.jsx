"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { m } from "motion/react";
import s from "./ArchiveIntroduction.module.scss";

const motionProps = fadeInOnViewMotionProps({ duration: 0.4 });

const ArchiveIntroduction = () => {
  return (
    <m.header className={s.introduction} {...motionProps}>
      <h1>Archive</h1>
      <p>A list of things I’ve worked on</p>
    </m.header>
  );
};

export default ArchiveIntroduction;
