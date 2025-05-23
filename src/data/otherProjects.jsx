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
    title: "Static Country Info App",
    description:
      "A static website that allows users to search and view details about countries. Note: the data is not updated in real-time and remains static.",
    year: "2023",
    liveUrl: "https://moamal-2000.github.io/rest-api-countries",
    repoUrl: "https://github.com/Moamal-2000/rest-api-countries",
    technologies: ["HTML", "CSS", "JavaScript"],
    id: 3,
  },
  {
    title: "Superado Landing Page",
    description:
      "A single-page site designed to introduce the Superado brand. Additional sections like About and Jobs are planned but not yet implemented.",
    year: "2023",
    liveUrl: "https://superado-landing.netlify.app",
    repoUrl: "https://github.com/Moamal-2000/superado-landing",
    technologies: ["React", "Vite", "Sass"],
    id: 4,
  },
  {
    title: "Custom React Hooks Library",
    description:
      "A collection of reusable and well-documented custom React hooks for boosting productivity and consistency across React projects. Includes live previews and code highlighting",
    year: "2024",
    liveUrl: "https://hooks-time.netlify.app",
    repoUrl: "https://github.com/Moamal-2000/custom-hooks",
    technologies: ["React", "PWA", "JSZip", "syntax highlighter"],
    id: 5,
  },
  {
    title: "Call of Duty 2 – Jumpers Heaven Statistics Website",
    description: (
      <>
        A dynamic website that displays real-time statistics for Call of Duty 2
        players on{" "}
        <AnchorLink
          href="https://jumpersheaven.com/"
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
    id: 6,
  },
].reverse();
