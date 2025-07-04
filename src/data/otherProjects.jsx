import AnchorLink from "@/components/Shared/AnchorLink/AnchorLink";

export const OTHER_PROJECTS_DATA = [
  {
    title: "Challenges with JavaScript",
    description:
      "A set of JavaScript challenges focused on solving real-world interactivity problems using only HTML, CSS, and JavaScript. Built to sharpen DOM manipulation, event handling, and logic-building skills.",
    year: "2022",
    liveUrl: "https://moamal-2000.github.io/simple-javascript-projects/",
    repoUrl: "https://github.com/Moamal-2000/simple-javascript-projects",
    technologies: ["HTML", "CSS", "Sass", "JavaScript"],
    id: 1,
  },
  {
    title: "Responsive Landing Page",
    description:
      "A clean and modern landing page template designed to capture visitor attention and effectively showcase content or products.",
    year: "2022",
    liveUrl: "https://moamal-2000.github.io/template2",
    repoUrl: "https://github.com/Moamal-2000/template2",
    technologies: ["HTML", "CSS", "Sass", "JavaScript"],
    id: 2,
  },
  {
    title: "Superado Landing Page",
    description:
      "A single-page site designed to introduce the Superado brand. Additional sections like About and Jobs are planned but not yet implemented.",
    year: "2023",
    liveUrl: "https://superado-landing.netlify.app",
    repoUrl: "https://github.com/Moamal-2000/superado-landing",
    technologies: ["React", "Vite", "Sass"],
    id: 3,
  },
  {
    title: "Custom React Hooks Library",
    description:
      "A collection of reusable and well-documented custom React hooks for boosting productivity and consistency across React projects. Includes live previews and code highlighting",
    year: "2024",
    liveUrl: "https://hooks-time.netlify.app",
    repoUrl: "https://github.com/Moamal-2000/custom-hooks",
    technologies: ["React", "PWA", "JSZip", "syntax highlighter"],
    id: 4,
  },
  {
    title: "Call of Duty 2 – Jumpers Heaven Statistics Website",
    description: (
      <>
        A dynamic website that displays real-time statistics for Call of Duty 2
        players on{" "}
        <AnchorLink
          href="https://jumpersheaven.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jumpers Heaven
        </AnchorLink>{" "}
        servers. Still in active development, the platform aims to offer
        detailed insights and leaderboard data.
      </>
    ),
    year: "2025",
    liveUrl: "https://jh-leaderboard.netlify.app",
    repoUrl: "https://github.com/Moamal-2000/JHLeaderboard",
    technologies: ["Next.js", "MessagePack", "Sass", "Redux Toolkit"],
    id: 5,
  },
  {
    title: "CSS Arts Gallery",
    description:
      "A personal gallery of creative CSS-based visual artworks built during my front-end learning journey. Each piece explores animations, shapes, and UI tricks using CSS (and sometimes JavaScript) to push the limits of what's possible in the browser.",
    year: "2025",
    liveUrl: "https://css-arts-gallery.netlify.app",
    repoUrl: "https://github.com/Moamal-2000/css-arts-gallery",
    technologies: ["Next.js", "Sass"],
    isFeatured: true,
    id: 6,
  },
  {
    title: "Advanced Tic Tac Toe",
    description:
      "An upgraded version of the classic Tic Tac Toe featuring exciting power-ups like Freeze, Bomb, and Swap to make gameplay more strategic and fun. Supports 3 board sizes: classic 3x3, 4x4 and 5x5 with abilities. Includes responsive modern UI/UX, animations, sound effects, and an in-game tutorial. Future updates planned for AI single-player mode and online multiplayer.",
    year: "2025",
    liveUrl: "https://tictactoe-4x4.netlify.app/",
    repoUrl: "https://github.com/Moamal-2000/tic-tac-toe",
    technologies: ["Next.js", "Sass", "Zustand", "PWA"],
    isFeatured: true,
    id: 7,
  },
].reverse();
