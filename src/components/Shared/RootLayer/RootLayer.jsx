"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./RootLayer.module.scss";

const RootLayer = ({ children }) => {
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const activeClass = isMobileNavOpen ? s.active : "";

  function handleClick() {
    if (!isMobileNavOpen) {
      return;
    }

    updateGlobalState({ isMobileNavOpen: false });
  }

  return (
    <div className={`${s.layer} ${activeClass}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default RootLayer;
