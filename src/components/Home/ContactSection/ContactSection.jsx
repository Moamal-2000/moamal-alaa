import s from "./ContactSection.module.scss";

const ContactSection = () => {
  return (
    <section className={s.contactSection}>
      <h2>04. What's Next?</h2>
      <h3>Get In Touch</h3>
      <p className={s.description}>
        I'm currently looking for new opportunities. Whether you have a question
        or just want to say hi, I'll get back to you as soon as possible!
      </p>
      <a href="mailto:moamalalaapro1@gmail.com">Say Hello</a>
    </section>
  );
};

export default ContactSection;
