"use client";

import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import s from "./ProjectsTHead.module.scss";

const motionProps = fadeInOnViewMotionProps({ duration: 0.4 });

const ProjectsTHead = () => {
  return (
    <motion.thead className={s.thead} {...motionProps}>
      <tr>
        <th>Year</th>
        <th>Title</th>
        <th className={s.hideOnMobile}>Built with</th>
        <th>Link</th>
      </tr>
    </motion.thead>
  );
};

export default ProjectsTHead;
