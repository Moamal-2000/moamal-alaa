"use client";

import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect } from "react";

const ScrollLock = () => {
  const isMobileNavOpen = useGlobalStore((s) => s.isMobileNavOpen);

  useEffect(() => {
    document.body.classList.toggle("noScroll", isMobileNavOpen);
  }, [isMobileNavOpen]);
};
export default ScrollLock;
