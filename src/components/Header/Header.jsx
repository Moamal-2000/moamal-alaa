"use client";

import { DEBOUNCE_DELAY, SCROLL_THRESHOLD } from "@/data/constants";
import useScrollDirection from "@/hooks/helper/useScrollDirection";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MobileNavBtn from "../Shared/MobileNavBtn/MobileNavBtn";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Header.module.scss";
import HeaderNavLinks from "./HeaderNavLinks/HeaderNavLinks";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = () => {
  const scrollDirection = useScrollDirection({ initialDir: "down" });
  const isMobileNavOpen = useGlobalStore((state) => state.isMobileNavOpen);
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const activeClass = isActive ? s.active : "";
  const hiddenClass = isHidden ? s.hidden : "";
  const headerClasses = `${s.header} ${activeClass} ${hiddenClass}`;
  const navClicked = useRef(false);
  const hasMounted = useRef(false);
  const timerRef = useRef();

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
    <header className={headerClasses}>
      <nav className={s.navLinks}>
        <Link className={s.logo} href="/" aria-label="Go to homepage">
          <SvgIcon name="logo" />
        </Link>

        <MobileNavBtn />
        <MobileNavMenu />

        <div className={s.wrapper}>
          <HeaderNavLinks navClicked={navClicked} />

          <Link className={s.resume} href="/resume.pdf">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
