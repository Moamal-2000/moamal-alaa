"use client";

import { NAV_LINKS } from "@/data/staticData";
import { navLinkMotionProps } from "@/functions/motionConfig";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = ({ navClicked }) => {
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(title) {
    if (pathname !== "/") router.push(`/#${title}`);
    navClicked.current = true;
  }

  return (
    <ol className={s.navLinks}>
      {NAV_LINKS.map(({ title, id }, index) => (
        <motion.li key={id} {...navLinkMotionProps(index)}>
          <a
            onClick={() => handleClick(title.toLowerCase())}
            href={`#${title.toLowerCase()}`}
          >
            {title}
          </a>
        </motion.li>
      ))}
    </ol>
  );
};

export default HeaderNavLinks;
