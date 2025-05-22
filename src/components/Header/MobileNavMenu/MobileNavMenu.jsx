import { NAV_LINKS } from "@/data/staticData";
import Link from "next/link";
import s from "./MobileNavMenu.module.scss";

const MobileNavMenu = () => {
  return (
    <aside className={s.mobileMenu}>
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
