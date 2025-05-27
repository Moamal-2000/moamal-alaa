"use client";

import { NAV_LINKS } from "@/data/staticData";
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
        <motion.li
          key={id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
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
