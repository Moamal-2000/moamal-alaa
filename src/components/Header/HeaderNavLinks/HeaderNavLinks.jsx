import s from "./HeaderNavLinks.module.scss";

const HeaderNavLinks = ({ navClicked }) => {
  function handleClick() {
    navClicked.current = true;
  }

  return (
    <ol className={s.navLinks}>
      <li>
        <a onClick={handleClick} href="#about">
          About
        </a>
      </li>
      <li>
        <a onClick={handleClick} href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a onClick={handleClick} href="#contact">
          Contact
        </a>
      </li>
    </ol>
  );
};

export default HeaderNavLinks;
