import InstallPWAButton from "@/components/PWA/InstallPWAButton";
import { NAV_LINKS } from "@/data/staticData";
import { navLinkMotionProps } from "@/lib/motionConfig";
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

      <InstallPWAButton
        className={s.installPWA}
        motionProps={navLinkMotionProps(NAV_LINKS.length + 1)}
      />
    </div>
  );
};

export default HeaderButtons;
