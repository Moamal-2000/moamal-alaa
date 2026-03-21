"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();

  const activeClass = isMobileNavOpen ? s.active : "";
  const title = isMobileNavOpen ? "Close Menu" : "Open Menu";

  function handleClick() {
    updateGlobalState({ isMobileNavOpen: !isMobileNavOpen });
  }

  return (
    <button
      type="button"
      className={`${s.mobileNavBtn} ${activeClass}`}
      title={title}
      aria-label={title}
      onClick={handleClick}
    >
      <div className={s.icon} />
    </button>
  );
};

export default MobileNavBtn;
