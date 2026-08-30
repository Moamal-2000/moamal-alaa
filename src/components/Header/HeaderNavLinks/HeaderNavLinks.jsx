"use client";

import { NAV_LINKS } from "@/constants/staticData";
import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = ({ navClicked }) => {
  return (
    <ol className={s.navLinks}>
      {NAV_LINKS.map(({ title, id }) => (
        <li key={id}>
          <a
            onClick={() => (navClicked.current = true)}
            href={`/#${title.toLowerCase()}`}
          >
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default HeaderNavLinks;
