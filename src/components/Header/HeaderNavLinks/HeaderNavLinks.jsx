"use client";

import { NAV_LINKS } from "@/constants/staticData";
import { useHeaderContext } from "@/context/HeaderContext";
import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = () => {
  const { triggerNavClick } = useHeaderContext();

  return (
    <ol className={s.navLinks}>
      {NAV_LINKS.map(({ title, id }) => (
        <li key={id}>
          <a
            onClick={() => {
              triggerNavClick();
            }}
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
