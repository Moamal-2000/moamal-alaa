import Link from "next/link";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navLinks}>
        <Link className={s.logo} href="/">
          MA
        </Link>

        <div className={s.wrapper}>
          <ol>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>

          <a className={s.resume} href="#">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
