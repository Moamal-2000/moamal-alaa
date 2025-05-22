"use client";

import { isMobile } from "@/functions/helper";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useState } from "react";
import s from "./MobileNavBtn.module.scss";

const MobileNavBtn = () => {
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const activeClass = isMobileNavOpen ? s.active : "";
  const moveClass = !isMobileDevice ? s.move : "";
  const buttonClasses = `${s.mobileNavBtn} ${activeClass} ${moveClass}`;

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  function handleClick() {
    updateGlobalState("isMobileNavOpen", !isMobileNavOpen);
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      aria-label="Menu Button"
      onClick={handleClick}
    >
      <div className={s.icon} />
    </button>
  );
};

export default MobileNavBtn;
