import MobileNavBtn from "../Shared/MobileNavBtn/MobileNavBtn";
import s from "./Header.module.scss";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderWrapper from "./HeaderWrapper";
import MobileNavMenu from "./MobileNavMenu/MobileNavMenu";

const Header = () => {
  return (
    <HeaderWrapper>
      <nav className={s.navLinks}>
        <HeaderLogo />
        <MobileNavBtn />
        <MobileNavMenu />
        <HeaderButtons />
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
