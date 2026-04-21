"use client";

import { DEBOUNCE_DELAY, SCROLL_THRESHOLD } from "@/data/constants";
import useScrollDirection from "@/hooks/useScrollDirection";
import { getHeaderClasses } from "@/lib/classNames";
import { fadeInOnViewMotionProps } from "@/lib/motionConfig";
import { scrollToTop } from "@/lib/utils";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MobileNavBtn from "../Shared/MobileNavBtn/MobileNavBtn";
import s from "./Header.module.scss";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const motionProps = fadeInOnViewMotionProps({ initialY: 0 });

const Header = () => {
  const scrollDirection = useScrollDirection({ initialDir: "down" });
  const isMobileNavOpen = useGlobalStore((s) => s.isMobileNavOpen);

  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const navClicked = useRef(false);
  const hasMounted = useRef(false);
  const timerRef = useRef();
  const headerRef = useRef(null);

  const headerClasses = getHeaderClasses({ cssModule: s, isActive, isHidden });

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
  }, [scrollDirection]);

  function handleHeaderKeyUp() {
    showHeaderOnFocusInside();
  }

  function showHeaderOnFocusInside() {
    const isFocusStillInside = headerRef.current.contains(
      document.activeElement,
    );
    setIsHidden(!isFocusStillInside);
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
    <header
      className={headerClasses}
      ref={headerRef}
      onKeyUp={handleHeaderKeyUp}
    >
      <motion.nav className={s.navLinks} {...motionProps}>
        <Link
          className={s.logo}
          href="/"
          title="Go to homepage"
          aria-label="Go to homepage"
          onClick={scrollToTop}
        >
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
