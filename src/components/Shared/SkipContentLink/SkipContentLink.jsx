"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import s from "./SkipContentLink.module.scss";

const SkipContentLink = () => {
  const pathname = usePathname();
  const [scrollTo, setScrollTo] = useState("hero");

  const updateSkipContentLink = useCallback(() => {
    const pageName = pathname.slice(1).trim().toLowerCase() || "hero";
    setScrollTo(pageName);
  }, [pathname]);

  useEffect(() => {
    updateSkipContentLink();
  }, [pathname]);

  return (
    <a href={`#${scrollTo}`} className={s.skipLink}>
      Skip to content
    </a>
  );
};

export default SkipContentLink;
