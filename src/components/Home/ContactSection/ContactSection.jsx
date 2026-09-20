import LinkButton from "@/components/Shared/Buttons/LinkButton/LinkButton";
import s from "./ContactSection.module.scss";
import ContactWrapper from "./ContactWrapper";

const ContactSection = () => {
  return (
    <ContactWrapper>
      <h2>04. What's Next?</h2>
      <h3>Get In Touch</h3>
      <p className={s.description}>
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll get back to you as soon as possible!
      </p>
      <LinkButton
        href="mailto:moamalalaapro1@gmail.com"
        title="Send me an email"
      >
        Say Hello
      </LinkButton>
    </ContactWrapper>
  );
};

export default ContactSection;
