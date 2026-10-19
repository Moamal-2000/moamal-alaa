"use client";

import { NAV_LINKS } from "@/constants/staticData";
import { isSmallScreen, scrollToTop } from "@/lib/utils";
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

  function handleClick({ title, skipHashLink = false } = {}) {
    if (pathname !== "/" && !skipHashLink) {
      router.push(`/#${title}`);
    }
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
          {NAV_LINKS.map(({ title, href, id }) => {
            if (href && href !== undefined && href !== null) {
              return (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={() => {
                      scrollToTop();
                      handleClick({ skipHashLink: true });
                    }}
                  >
                    {title}
                  </Link>
                </li>
              );
            }

            return (
              <li key={id}>
                <a
                  href={`#${title.toLowerCase()}`}
                  onClick={() => handleClick({ title: title.toLowerCase() })}
                >
                  {title}
                </a>
              </li>
            );
          })}
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
