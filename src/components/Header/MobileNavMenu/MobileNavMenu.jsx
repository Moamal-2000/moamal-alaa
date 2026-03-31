"use client";

import { NAV_LINKS } from "@/data/staticData";
import { isSmallScreen } from "@/lib/utils";
import useGlobalStore from "@/stores/global/useGlobalStore";
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
      onBlur={(event) => handleAsideBlur(event, updateGlobalState)}
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
          <a
            className={s.resume}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View my resume"
            aria-label="View my resume (opens in a new tab)"
          >
            Resume
          </a>

          <InstallPWAButton />
        </div>
      </nav>
    </aside>
  );
};

export default MobileNavMenu;

function handleAsideBlur(event, updateGlobalState) {
  const containerElement = event.currentTarget;
  const focusedElement = event.relatedTarget;

  const isFocusStillInside = containerElement.contains(focusedElement);

  if (!isFocusStillInside) {
    updateGlobalState({ isMobileNavOpen: false });
  }
}
