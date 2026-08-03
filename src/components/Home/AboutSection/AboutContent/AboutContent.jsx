import s from "./AboutContent.module.scss";

const AboutContent = () => {
  return (
    <div className={s.content}>
      <p className={s.firstParagraph}>
        Hi, I’m Moamal, a Front-End Engineer & Open-Source Contributor, dedicated to building
        high-performance, accessible, and scalable web applications. With over
        five years of experience, I specialize in crafting seamless user
        interfaces using React and Next.js, with a strong focus on technical SEO
        and achieving flawless Core Web Vitals.
      </p>

      <p>
        I take pride in writing clean, semantic HTML and structured,
        maintainable styles using Sass and CSS Modules. For me, web
        accessibility (A11y) and optimization aren't afterthoughts, they are
        foundational to every project I build. I thrive in remote, async
        environments where clear written communication and clean architecture
        drive product success.
      </p>

      <p>Here are a few technologies I’ve been working with recently:</p>
    </div>
  );
};

export default AboutContent;
