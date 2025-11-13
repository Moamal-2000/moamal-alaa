import AnchorLink from "@/components/Shared/AnchorLink/AnchorLink";

export const FEATURED_PROJECTS = [
  {
    title: "E-Commercew",
    description: (
      <>
        A responsive and modern{" "}
        <strong className="highlight">e-commerce web application</strong> built
        with React and Redux Toolkit. It supports multi-language functionality,
        a dynamic shopping cart, wishlist, product search, order tracking, and
        zoomable product details. Designed with a clean UI, optimized for SEO,
        and built as a Progressive Web App for an app-like experience across all
        devices
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
    title: "Call of Duty 2 Stats",
    description: (
      <>
        A live platform providing real-time stats for{" "}
        <AnchorLink
          href="https://en.wikipedia.org/wiki/Call_of_Duty_2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call of Duty 2
        </AnchorLink>{" "}
        <AnchorLink
          href="https://www.jumpersheaven.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jumpers Heaven
        </AnchorLink>{" "}
        servers, including leaderboards, maps, players, and servers with online
        player data. Each player and map has its own detailed page. Currently in{" "}
        <strong className="highlight">active development</strong> and available
        as a beta release.
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
    title: "Aster Information",
    description: (
      <>
        A fully responsive website built as a{" "}
        <strong className="highlight">freelance project</strong> for a potential
        client, featuring a professional design, user-friendly interface, smooth
        on-scroll animations, and cross-browser compatibility.
      </>
    ),
    technologies: ["React Helmet Async", "React Router Dom", "Sass", "React"],
    repoUrl: "https://github.com/Moamal-2000/aster-information",
    previewImg: "/images/aster-information-project.webp",
    id: 2,
  },
];
