import AnchorLink from "../Shared/AnchorLink/AnchorLink";
import s from "./Footer.module.scss";
import InLineSocialMedia from "./InLineSocialMedia/InLineSocialMedia";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <InLineSocialMedia />
      <p className={s.copyRights}>
        Designed by{" "}
        <AnchorLink
          href="https://www.linkedin.com/in/bchiang7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </AnchorLink>{" "}
        and Built by{" "}
        <AnchorLink
          href="https://www.linkedin.com/in/moamal-alaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moamal Alaa
        </AnchorLink>{" "}
        with{" "}
        <AnchorLink
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </AnchorLink>
      </p>
    </footer>
  );
};

export default Footer;
