import s from "./AnchorLink.module.scss";

const AnchorLink = ({ children, ...props }) => {
  return (
    <a className={s.link} {...props}>
      {children}
    </a>
  );
};

export default AnchorLink;
