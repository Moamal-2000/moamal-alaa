import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import Link from "next/link";
import s from "./OtherProjectsHeader.module.scss";

const motionProps = fadeInOnViewMotionProps({});

const OtherProjectsHeader = () => {
  return (
    <motion.header className={s.otherProjectsHeader} {...motionProps}>
      <h2 className={s.title}>Other Noteworthy Projects</h2>
      <Link href="/archive" className={s.viewArchiveBtn}>
        view the archive
      </Link>
    </motion.header>
  );
};

export default OtherProjectsHeader;
