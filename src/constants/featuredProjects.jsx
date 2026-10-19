import AnchorLink from "@/components/Shared/AnchorLink/AnchorLink";

export const COD_JUMPING_STATS_REPO_URL =
  "https://github.com/Moamal-2000/cod-jumping-stats";

export const FEATURED_PROJECTS = [
  {
    title: "E-Commercew",
    description: (
      <>
        <p>
          A comprehensive e-commerce platform built with React and Redux
          Toolkit, demonstrating modern front-end architecture, state
          management, and performance best practices. Featuring multi-language
          support, cart and wishlist systems, product search, and PWA
          functionality.
        </p>
        <p>
          The project was chosen as a{" "}
          <strong className="highlight">learning reference</strong> on{" "}
          <AnchorLink
            href="https://www.codewithrandom.com/2024/06/04/create-e-commerce-website-using-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeWithRandom
          </AnchorLink>{" "}
          for developers building real-world React applications.
        </p>
      </>
    ),
    technologies: [
      "React",
      "Sass",
      "Redux/Toolkit",
      "Swiper",
      "I18next",
      "PWA",
    ],
    repoUrl: "https://github.com/Moamal-2000/e-commerce",
    previewImg: "/images/avif/e-commercew-project.avif",
    id: 1,
  },

  {
    title: "Cod Jumping Stats",
    underDev: false,
    description: (
      <p>
        CJ Statistics is an analytics platform built for the{" "}
        <AnchorLink
          href="https://www.jumpersheaven.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          JumpersHeaven
        </AnchorLink>{" "}
        and{" "}
        <AnchorLink
          href="https://jump4life.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jump4Life
        </AnchorLink>{" "}
        communities across <strong className="highlight">Call of Duty</strong>{" "}
        titles, featuring leaderboards, player and map analytics, and server
        statistics. Now archived as a showcase powered by JSON, the project
        demonstrates my approach to UI/UX, frontend architecture, and
        performance optimization. It was selected as a{" "}
        <strong className="highlight">reference</strong> for building a
        platform.
      </p>
    ),
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "MessagePack",
      "LZ String",
      "Sass",
    ],
    repoUrl: COD_JUMPING_STATS_REPO_URL,
    previewImg: "/images/avif/call-of-duty-2-stats-project.avif",
    caseStudyPath: "/projects/cj-stats",
    id: 2,
  },

  {
    title: "Advanced Tic Tac Toe (Full-Stack)",
    description: (
      <p>
        A <strong className="highlight">full-stack</strong> reimagining of the
        classic game, engineered for peak performance and strategic depth.
        Features a custom-built{" "}
        <strong className="highlight">Offline AI</strong> and{" "}
        <strong className="highlight">Real-time Multiplayer</strong> with live
        chat. Includes game-changing mechanics like Freeze, Bomb, and Swap
        across dynamic 3x3 to 5x5 boards. Achieved{" "}
        <strong className="highlight">100/100 Lighthouse scores</strong> through
        rigorous optimization, semantic HTML, and full PWA support.
      </p>
    ),
    repoUrl: "https://github.com/Moamal-2000/tic-tac-toe",
    previewImg: "/images/avif/advanced-tic-tac-toe.avif",
    technologies: ["Next.js", "Socket.IO", "Zustand", "Sass", "PWA"],
    id: 3,
  },
];

export const COD_JUMPING_STATS_PROJECT = {
  repoUrl: COD_JUMPING_STATS_REPO_URL,
  liveUrl: "https://cjstats.moamalalaa.com",
  stars: 6,
  forks: 1,
  commitCount: "~3000",
  isPrivate: true,
};
