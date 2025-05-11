import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>MA</div>

      <nav className={s.navLinks}>
        <ul>
          <li>
            <a href="#about-section">About</a>
          </li>
          <li>
            <a href="#projects-section">Projects</a>
          </li>
          <li>
            <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>

      <a className={s.resume} href="#">
        Resume
      </a>
    </header>
  );
};

export default Header;
