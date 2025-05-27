"use client";

import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import { motion } from "framer-motion";
import Link from "next/link";
import OtherProjects from "./OtherProjects/OtherProjects";
import s from "./OtherProjectsSection.module.scss";

const OtherProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <motion.div className={s.wrapper} {...fadeInOnViewMotionProps({})}>
        <h2 className={s.title}>Other Noteworthy Projects</h2>
        <Link href="/archive" className={s.viewArchiveBtn}>
          view the archive
        </Link>
      </motion.div>

      <OtherProjects />
    </section>
  );
};

export default OtherProjectsSection;
