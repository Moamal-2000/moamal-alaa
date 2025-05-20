import { NAV_LINKS } from "@/data/staticData";
import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = ({ navClicked }) => {
  function handleClick() {
    navClicked.current = true;
  }

  return (
    <ol className={s.navLinks}>
      {NAV_LINKS.map(({ title, id }) => (
        <li key={id}>
          <a onClick={handleClick} href={`#${title.toLowerCase()}`}>
            {title}
          </a>
        </li>
      ))}
    </ol>
  );
};

export default HeaderNavLinks;
