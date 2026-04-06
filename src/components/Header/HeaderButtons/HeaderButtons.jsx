import InstallPWAButton from "@/components/PWA/InstallPWAButton";
import { NAV_LINKS } from "@/data/staticData";
import { navLinkMotionProps } from "@/lib/motionConfig";
import { motion } from "motion/react";
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks";
import s from "./HeaderButtons.module.scss";

const HeaderButtons = ({ navClicked }) => {
  return (
    <div className={s.buttons}>
      <HeaderNavLinks navClicked={navClicked} />

      <a
        className={s.resume}
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Show my resume"
        {...navLinkMotionProps(NAV_LINKS.length)}
      >
        Resume
      </a>

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
