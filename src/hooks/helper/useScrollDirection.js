"use client";

import { useEffect, useRef, useState } from "react";

const useScrollDirection = ({
  initialDir = "down",
  thresholdPixels = 0,
  off = false,
} = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDir);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || off) {
      setScrollDir(initialDir);
      return;
    }

    lastScrollY.current = window.pageYOffset;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY.current) >= thresholdPixels) {
        setScrollDir(scrollY > lastScrollY.current ? "down" : "up");
        lastScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDir);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [initialDir, thresholdPixels, off]);

  return scrollDir;
};

export default useScrollDirection;
