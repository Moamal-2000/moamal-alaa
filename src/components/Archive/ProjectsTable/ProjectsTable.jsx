"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import s from "./ProjectsTable.module.scss";
import ProjectsTBody from "./ProjectsTBody/ProjectsTBody";
import ProjectsTHead from "./ProjectsTHead/ProjectsTHead";

const ProjectsTable = () => {
  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <motion.thead
          {...fadeInOnViewMotionProps({
            duration: 0.4,
          })}
        >
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th className={s.hideOnMobile}>Built with</th>
            <th>Link</th>
          </tr>
        </motion.thead>

        <ProjectsTHead />
        <ProjectsTBody />
      </table>
    </div>
  );
};

export default ProjectsTable;
