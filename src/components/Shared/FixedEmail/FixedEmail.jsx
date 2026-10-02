import s from "./FixedEmail.module.scss";

const MY_EMAIL = "moamalalaapro1@gmail.com";
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
