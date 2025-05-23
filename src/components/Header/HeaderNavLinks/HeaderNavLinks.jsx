"use client";

import { NAV_LINKS } from "@/data/staticData";
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
      {NAV_LINKS.map(({ title, id }) => (
        <li key={id}>
          <a
            onClick={() => handleClick(title.toLowerCase())}
            href={`#${title.toLowerCase()}`}
          >
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default HeaderNavLinks;
