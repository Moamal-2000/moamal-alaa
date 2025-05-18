import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.copyRights}>
        Designed by Brittany Chiang and Built by Moamal Alaa with Next.js
      </p>
    </footer>
  );
};

export default Footer;
