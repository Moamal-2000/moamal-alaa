"use client";

import { NAV_LINKS } from "@/data/staticData";
import { navLinkMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = ({ navClicked }) => {
  return (
    <ol className={s.navLinks}>
      {NAV_LINKS.map(({ title, id }, index) => (
        <motion.li key={id} {...navLinkMotionProps(index)}>
          <a
            onClick={() => (navClicked.current = true)}
            href={`/#${title.toLowerCase()}`}
          >
            {title}
          </a>
        </motion.li>
      ))}
    </ol>
  );
};

export default HeaderNavLinks;
