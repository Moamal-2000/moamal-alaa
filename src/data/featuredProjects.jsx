import AnchorLink from "@/components/Shared/AnchorLink/AnchorLink";

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
    previewImg: "/images/e-commercew-project.webp",
    id: 1,
  },

  {
    title: "Jumpers Heaven Stats",
    description: (
      <>
        <p>
          A production-grade gaming analytics platform serving real-time
          statistics for multiple{" "}
          <AnchorLink
            href="https://www.jumpersheaven.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jumpers Heaven
          </AnchorLink>{" "}
          servers across <strong className="highlight">Call of Duty</strong>{" "}
          titles. The system provides interactive leaderboards, player and map
          analytics, server monitoring, and detailed performance insights with
          dedicated pages for each entity.
        </p>
        <p>
          Designed with performance in mind, the platform uses MessagePack
          serialization, client-side caching with compression, and optimized
          data fetching strategies to handle large datasets efficiently while
          maintaining a responsive user experience.
        </p>
        <p>Currently deployed and actively used by the community.</p>
      </>
    ),
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "MessagePack",
      "LZ String",
      "Sass",
    ],
    repoUrl: "https://github.com/Moamal-2000/jumpers-heaven-statistics",
    previewImg: "/images/call-of-duty-2-stats-project.webp",
    id: 3,
  },

  {
    title: "Advanced Tic Tac Toe (Full-Stack)",
    description: (
      <p>
        An <strong className="highlight">Enterprise-standard</strong> remaining
        of the classic game, engineered for peak performance and strategic
        depth. Features a custom-built{" "}
        <strong className="highlight">Offline AI</strong> and{" "}
        <strong className="highlight">Real-time Multiplayer</strong> with live
        chat. Includes game-changing mechanics like Freeze, Bomb, and Swap
        across dynamic 3x3 to 5x5 boards. Achieved{" "}
        <strong className="highlight">100/100 Lighthouse scores</strong> through
        rigorous optimization, semantic HTML, and full PWA support.
      </p>
    ),
    repoUrl: "https://github.com/Moamal-2000/tic-tac-toe",
    previewImg: "/images/advanced-tic-tac-toe.webp",
    technologies: ["Next.js", "Socket.io", "Zustand", "Sass", "PWA"],
    id: 4,
  },
];
