import AnchorLink from "@/components/Shared/AnchorLink/AnchorLink";

export const FEATURED_PROJECTS = [
  {
    title: "E-Commercew",
    description: (
      <p>
        A responsive and modern{" "}
        <strong className="highlight">e-commerce web application</strong> built
        with React and Redux Toolkit. It supports multi-language functionality,
        a dynamic shopping cart, wishlist, product search, order tracking, and
        zoomable product details. Designed with a clean UI, optimized for SEO,
        and built as a Progressive Web App for an app-like experience across all
        devices
      </p>
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
    title: "Aster Information",
    description: (
      <p>
        A fully responsive website built as a{" "}
        <strong className="highlight">freelance project</strong> for a potential
        client, featuring a professional design, user-friendly interface, smooth
        on-scroll animations, and cross-browser compatibility.
      </p>
    ),
    technologies: ["React Helmet Async", "React Router Dom", "Sass", "React"],
    repoUrl: "https://github.com/Moamal-2000/aster-information",
    previewImg: "/images/aster-information-project.webp",
    id: 2,
  },
];
