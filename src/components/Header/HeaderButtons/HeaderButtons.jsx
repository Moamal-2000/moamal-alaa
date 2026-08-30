import InstallPWAButton from "@/components/PWA/InstallPWAButton";
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
      >
        Resume
      </a>

      <InstallPWAButton className={s.installPWA} />
    </div>
  );
};

export default HeaderButtons;
