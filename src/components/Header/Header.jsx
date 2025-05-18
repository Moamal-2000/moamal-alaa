"use client";

import useScrollDirection from "@/hooks/helper/useScrollDirection";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";

const Header = () => {
  const debounceRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const scrollDirection = useScrollDirection({ initialDir: "down" });
  const isMount = useRef(false);
  const activeClass = isActive ? s.active : "";
  const hiddenClass = isHidden ? s.hidden : "";
  const headerClasses = `${s.header} ${activeClass} ${hiddenClass}`;

  function handleScroll() {
    if (scrollDirection === "down" && isMount.current) {
      setIsHidden(true);
      return;
    }

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setIsHidden(false);
      setIsActive(window?.scrollY >= 50);
    }, 50);
  }

  useEffect(() => {
    // Invoke scroll handler on initial load
    if (!isMount.current) {
      handleScroll();
      isMount.current = true;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceRef.current);
    };
  }, [scrollDirection]);

  return (
    <header className={headerClasses}>
      <nav className={s.navLinks}>
        <Link className={s.logo} href="/">
          MA
        </Link>

        <div className={s.wrapper}>
          <ol>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>

          <a className={s.resume} href="#">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
