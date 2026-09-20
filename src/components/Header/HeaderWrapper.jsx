"use client";

import { DEBOUNCE_DELAY, SCROLL_THRESHOLD } from "@/constants/constants";
import { HeaderContext } from "@/context/HeaderContext";
import useScrollDirection from "@/hooks/useScrollDirection";
import { getHeaderClasses } from "@/lib/classNames";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";

const HeaderWrapper = ({ children }) => {
  const scrollDirection = useScrollDirection({ initialDir: "down" });
  const isMobileNavOpen = useGlobalStore((s) => s.isMobileNavOpen);

  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const navClicked = useRef(false);
  const hasMounted = useRef(false);
  const timerRef = useRef();

  const headerClasses = getHeaderClasses({ cssModule: s, isActive, isHidden });

  function triggerNavClick() {
    navClicked.current = true;
  }

  function handleScroll() {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const hide =
        scrollDirection === "down" &&
        hasMounted.current &&
        !navClicked.current &&
        !isMobileNavOpen;
      const show = scrollDirection === "up" || navClicked.current;
      const isAtTop = window?.scrollY >= SCROLL_THRESHOLD;

      if (hide) {
        setIsHidden(true);
      }

      if (show) {
        setIsHidden(false);
        setIsActive(isAtTop);
      }

      navClicked.current = false;
      hasMounted.current = true;
    }, DEBOUNCE_DELAY);
  }

  useEffect(() => {
    // Invoke scroll handler on initial load
    if (!hasMounted.current) {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timerRef.current);
    };
  }, [handleScroll]);

  return (
    <HeaderContext.Provider value={{ triggerNavClick }}>
      <header className={headerClasses}>{children}</header>;
    </HeaderContext.Provider>
  );
};
export default HeaderWrapper;
