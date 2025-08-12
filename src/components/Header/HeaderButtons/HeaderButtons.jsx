import InstallPWAButton from "@/components/PWA/InstallPWAButton";
import { NAV_LINKS } from "@/data/staticData";
import { navLinkMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import Link from "next/link";
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks";
import s from "./HeaderButtons.module.scss";

const HeaderButtons = ({ navClicked }) => {
  return (
    <div className={s.buttons}>
      <HeaderNavLinks navClicked={navClicked} />

      <motion.div {...navLinkMotionProps(NAV_LINKS.length)}>
        <Link className={s.resume} href="/resume.pdf" title="Show my resume">
          Resume
        </Link>
      </motion.div>

      <motion.div
        className={s.installPWA}
        {...navLinkMotionProps(NAV_LINKS.length + 1)}
      >
        <InstallPWAButton />
      </motion.div>
    </div>
  );
};

export default HeaderButtons;
