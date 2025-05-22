"use client";

import { NAV_LINKS } from "@/data/staticData";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const { isMobileNavOpen } = useGlobalStore();
  const activeClass = isMobileNavOpen ? s.active : "";

  return (
    <aside className={`${s.mobileMenu} ${activeClass}`}>
      <nav>
        <ol>
          {NAV_LINKS.map(({ title, id }) => (
            <li key={id}>
              <a href={`#${title.toLowerCase()}`}>{title}</a>
            </li>
          ))}
        </ol>

        <Link className={s.resume} href="/resume.pdf">
          Resume
        </Link>
      </nav>
    </aside>
  );
};

export default MobileNavMenu;
