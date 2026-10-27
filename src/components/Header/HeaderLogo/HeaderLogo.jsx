"use client";

import Svg from "@/components/Shared/Svg";
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
      <Svg name="logo" />
    </Link>
  );
};

export default HeaderLogo;
