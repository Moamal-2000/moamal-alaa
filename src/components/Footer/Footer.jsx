import s from "./Footer.module.scss";
import InLineSocialMedia from "./InLineSocialMedia/InLineSocialMedia";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <InLineSocialMedia />
      <p className={s.copyRights}>
        Designed by Brittany Chiang and Built by Moamal Alaa with Next.js
      </p>
    </footer>
  );
};

export default Footer;
