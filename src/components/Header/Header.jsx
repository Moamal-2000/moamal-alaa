"use client";

import { DEBOUNCE_DELAY, SCROLL_THRESHOLD } from "@/constants/constants";
import useScrollDirection from "@/hooks/useScrollDirection";
import { getHeaderClasses } from "@/lib/classNames";
import { scrollToTop } from "@/lib/utils";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MobileNavBtn from "../Shared/MobileNavBtn/MobileNavBtn";
import s from "./Header.module.scss";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

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
      <nav className={s.navLinks}>
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
      </nav>
    </header>
  );
};

export default Header;
