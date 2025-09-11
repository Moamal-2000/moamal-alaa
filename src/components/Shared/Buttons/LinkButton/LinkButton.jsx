import Link from "next/link";
import s from "./LinkButton.module.scss";

const LinkButton = ({ children, ...props }) => {
  return (
    <Link className={s.button} {...props}>
      {children}
    </Link>
  );
};

export default LinkButton;
