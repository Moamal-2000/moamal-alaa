import s from "./AboutContent.module.scss";

const AboutContent = () => {
  return (
    <div className={s.content}>
      <p>
        Hi there! I'm Moamal, and I like building fast, thoughtful things for
        the web. I’m a frontend engineer with a focus on crafting clean,
        accessible, and high-performance user interfaces. I take pride in the
        little architectural details that make a web experience feel smooth,
        from light bundle sizes to pixel-perfect layouts that load instantly.
      </p>

      <p>
        My interest in code started back in 2021 through an unexpected place:
        custom map creation for{" "}
        <strong className="highlight">Call of Duty 2</strong>. Trying to bring
        my ideas to life forced me to learn GSC script. Wrestling with logic for
        the first time was challenging, but that deep dive into problem-solving
        sparked my passion for building software and led me straight into
        frontend engineering.
      </p>

      <p>
        These days, my main focus is on building scalable frontend applications
        with <strong className="highlight">React</strong> and{" "}
        <strong className="highlight">Next.js</strong>. I prefer working with
        raw CSS Modules and Sass over heavy frameworks, keeping codebases lean
        and maintainable. For me,{" "}
        <strong className="highlight">web accessibility</strong> and performance
        aren't afterthoughts; I care deeply about technical SEO, GPU-accelerated
        CSS animations, and ensuring everything works seamlessly across
        different browsers.
      </p>

      <p>
        I work best in structured, async-first remote environments where clear
        written communication and clean code drive the product forward. Through
        my <strong className="highlight">open-source contributions</strong>,
        I've grown to love diving into unfamiliar codebases, solving complex
        layout bugs, and collaborating asynchronously with developers around the
        world.
      </p>

      <p>Here are a few technologies I’ve been working with recently:</p>
    </div>
  );
};

export default AboutContent;
