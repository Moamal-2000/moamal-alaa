"use client";

import { DEBOUNCE_DELAY, SCROLL_THRESHOLD } from "@/data/constants";
import { getHeaderClasses } from "@/functions/classNames";
import { fadeInOnViewMotionProps } from "@/functions/motionConfig";
import useScrollDirection from "@/hooks/useScrollDirection";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MobileNavBtn from "../Shared/MobileNavBtn/MobileNavBtn";
import s from "./Header.module.scss";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = () => {
  const scrollDirection = useScrollDirection({ initialDir: "down" });
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();

  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const navClicked = useRef(false);
  const hasMounted = useRef(false);
  const timerRef = useRef();

  const headerClasses = getHeaderClasses({ cssModule: s, isActive, isHidden });

  function handleHeaderClick() {
    if (isMobileNavOpen) updateGlobalState({ isMobileNavOpen: false });
  }

  const handleScroll = useCallback(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const hide =
        scrollDirection === "down" &&
        hasMounted.current &&
        !navClicked.current &&
        !isMobileNavOpen;
      const show = scrollDirection === "up" || navClicked.current;
      const isAtTop = window?.scrollY >= SCROLL_THRESHOLD;

      if (hide) setIsHidden(true);

      if (show) {
        setIsHidden(false);
        setIsActive(isAtTop);
      }

      navClicked.current = false;
      hasMounted.current = true;
    }, DEBOUNCE_DELAY);
  }, [scrollDirection]);

  useEffect(() => {
    // Invoke scroll handler on initial load
    if (!hasMounted.current) handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timerRef.current);
    };
  }, [handleScroll]);

  return (
    <header className={headerClasses} onClick={handleHeaderClick}>
      <motion.nav
        className={s.navLinks}
        {...fadeInOnViewMotionProps({ initialY: 0 })}
      >
        <Link className={s.logo} href="/" aria-label="Go to homepage">
          <svg aria-hidden="true">
            <use href="/icons-sprite.svg#logo" />
          </svg>
        </Link>

        <MobileNavBtn />
        <MobileNavMenu />
        <HeaderButtons navClicked={navClicked} />
      </motion.nav>
    </header>
  );
};

export default Header;
