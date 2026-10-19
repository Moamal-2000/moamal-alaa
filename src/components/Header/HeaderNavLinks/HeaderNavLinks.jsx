"use client";

import { NAV_LINKS } from "@/constants/staticData";
import { useHeaderContext } from "@/context/HeaderContext";
import { scrollToTop } from "@/lib/utils";
import Link from "next/link";
import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = () => {
  const { triggerNavClick } = useHeaderContext();

  return (
    <ol className={s.navLinks}>
      {NAV_LINKS.map(({ title, href, id }) => {
        if (href && href !== undefined && href !== null) {
          return (
            <li key={id}>
              <Link
                href={href}
                onClick={() => {
                  triggerNavClick();
                  scrollToTop();
                }}
              >
                {title}
              </Link>
            </li>
          );
        }

        return (
          <li key={id}>
            <a href={`/#${title.toLowerCase()}`} onClick={triggerNavClick}>
              {title}
            </a>
          </li>
        );
      })}
    </ol>
  );
};

export default HeaderNavLinks;
