"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import s from "./RootLayer.module.scss";

const RootLayer = ({ children }) => {
  const { isMobileNavOpen } = useGlobalStore();
  const blurClass = isMobileNavOpen ? s.blur : "";

  return <div className={`${s.layer} ${blurClass}`}>{children}</div>;
};

export default RootLayer;
