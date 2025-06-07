"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./RootLayer.module.scss";

const RootLayer = ({ children }) => {
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const blurClass = isMobileNavOpen ? s.blur : "";

  function handleClick() {
    if (!isMobileNavOpen) return;

    updateGlobalState("isMobileNavOpen", false);
  }

  return (
    <div className={`${s.layer} ${blurClass}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default RootLayer;
