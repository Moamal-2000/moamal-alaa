import InstallPWAButton from "@/components/PWA/InstallPWAButton";
import { NAV_LINKS } from "@/data/staticData";
import { navLinkMotionProps } from "@/lib/motionConfig";
import HeaderNavLinks from "../HeaderNavLinks/HeaderNavLinks";
import s from "./HeaderButtons.module.scss";

const resumeMotionProps = navLinkMotionProps(NAV_LINKS.length);
const installPwaMotionProps = navLinkMotionProps(NAV_LINKS.length + 1);

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
        {...resumeMotionProps}
      >
        Resume
      </a>

      <InstallPWAButton
        className={s.installPWA}
        motionProps={installPwaMotionProps}
      />
    </div>
  );
};

export default HeaderButtons;
