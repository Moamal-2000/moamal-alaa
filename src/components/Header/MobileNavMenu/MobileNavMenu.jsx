"use client";

import { NAV_LINKS } from "@/data/staticData";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const activeClass = isMobileNavOpen ? s.active : "";

  function handleClick(title) {
    if (pathname !== "/") router.push(`/#${title}`);
    updateGlobalState("isMobileNavOpen", !isMobileNavOpen);
  }

  return (
    <aside className={`${s.mobileMenu} ${activeClass}`}>
      <nav>
        <ol>
          {NAV_LINKS.map(({ title, id }) => (
            <li key={id}>
              <a
                href={`#${title.toLowerCase()}`}
                onClick={() => handleClick(title.toLowerCase())}
              >
                {title}
              </a>
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
