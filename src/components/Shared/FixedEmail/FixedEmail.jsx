import { MY_EMAIL } from "@/constants/metadata";
import s from "./FixedEmail.module.scss";

const LABEL = "Send me an email";

const FixedEmail = () => {
  return (
    <aside className={s.fixedEmail} aria-label={LABEL}>
      <a href={`mailto:${MY_EMAIL}`} aria-label={`${LABEL} at ${MY_EMAIL}`}>
        {MY_EMAIL}
      </a>
    </aside>
  );
};

export default FixedEmail;
