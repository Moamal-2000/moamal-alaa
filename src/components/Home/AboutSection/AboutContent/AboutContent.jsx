import s from "./AboutContent.module.scss";

const AboutContent = () => {
  return (
    <div className={s.content}>
      <p className={s.firstParagraph}>
        Hi, I’m Moamal, I enjoy building things for the web. I believe websites
        should feel smooth, look great, and work for everyone. That’s why I
        focus on creating interfaces that are not only functional but also
        enjoyable to interact with.
      </p>

      <p>
        I’ve been exploring front-end development for over four years now. It
        all started with writing HTML and CSS, which felt like drawing with
        code, I loved bringing designs to life on the screen. That curiosity led
        me to JavaScript and, eventually, to the world of modern front-end
        technologies I work with today.
      </p>

      <p>Here are a few technologies I’ve been working with recently:</p>
    </div>
  );
};

export default AboutContent;
