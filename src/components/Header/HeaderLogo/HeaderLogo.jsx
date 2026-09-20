"use client";

import { scrollToTop } from "@/lib/utils";
import Link from "next/link";
import s from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
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
  );
};

export default HeaderLogo;
