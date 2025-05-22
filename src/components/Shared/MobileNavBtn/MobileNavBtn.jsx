"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const activeClass = isMobileNavOpen ? s.active : "";

  function handleClick() {
    updateGlobalState({ key: "isMobileNavOpen", value: !isMobileNavOpen });
  }

  return (
    <button
      type="button"
      className={`${s.mobileNavBtn} ${activeClass}`}
      aria-label="Menu Button"
      onClick={handleClick}
    >
      <div className={s.icon} />
    </button>
  );
};

export default MobileNavBtn;
