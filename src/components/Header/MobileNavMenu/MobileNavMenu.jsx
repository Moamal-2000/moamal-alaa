"use client";

import { NAV_LINKS } from "@/data/staticData";
import { isSmallScreen } from "@/lib/utils";
import useGlobalStore from "@/stores/global/useGlobalStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import InstallPWAButton from "../../PWA/InstallPWAButton";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  const { isMobileNavOpen, updateGlobalState } = useGlobalStore();
  const pathname = usePathname();
  const router = useRouter();

  const activeClass = isMobileNavOpen ? s.active : "";

  function handleClick(title) {
    if (pathname !== "/") router.push(`/#${title}`);
    updateGlobalState({ isMobileNavOpen: !isMobileNavOpen });
  }

  return (
    <aside
      className={`${s.mobileMenu} ${activeClass}`}
      inert={isSmallScreen() && isMobileNavOpen ? false : true}
    >
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

        <div className={s.buttons}>
          <Link className={s.resume} href="/resume.pdf" title="Show my resume">
            Resume
          </Link>

          <InstallPWAButton />
        </div>
      </nav>
    </aside>
  );
};

export default MobileNavMenu;
