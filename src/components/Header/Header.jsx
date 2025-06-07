"use client";

import { DEBOUNCE_DELAY, SCROLL_THRESHOLD } from "@/data/constants";
import { NAV_LINKS } from "@/data/staticData";
import {
  fadeInOnViewMotionProps,
  navLinkMotionProps,
} from "@/functions/motionConfig";
import useScrollDirection from "@/hooks/helper/useScrollDirection";
import useGlobalStore from "@/stores/global/useGlobalStore";
import { motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import MobileNavBtn from "../Shared/MobileNavBtn/MobileNavBtn";
import SvgIcon from "../Shared/SvgIcon";
import s from "./Header.module.scss";
import HeaderNavLinks from "./HeaderNavLinks/HeaderNavLinks";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = () => {
  const scrollDirection = useScrollDirection({ initialDir: "down" });
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const activeClass = isActive ? s.active : "";
  const hiddenClass = isHidden ? s.hidden : "";
  const headerClasses = `${s.header} ${activeClass} ${hiddenClass}`;
  const navClicked = useRef(false);
  const hasMounted = useRef(false);
  const timerRef = useRef();

  function handleHeaderClick() {
    if (!isMobileNavOpen) return;
    updateGlobalState("isMobileNavOpen", false);
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
          <SvgIcon name="logo" />
        </Link>

        <MobileNavBtn />
        <MobileNavMenu />

        <div className={s.wrapper}>
          <HeaderNavLinks navClicked={navClicked} />

          <motion.div {...navLinkMotionProps(NAV_LINKS.length)}>
            <Link className={s.resume} href="/resume.pdf">
              Resume
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
