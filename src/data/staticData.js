export const NAV_LINKS = [
  { title: "About", id: 1 },
  { title: "Projects", id: 2 },
  { title: "Contact", id: 3 },
];

export const SOCIAL_MEDIA = [
  {
    media: "GitHub",
    iconName: "github",
    url: "https://github.com/Moamal-2000",
    id: 1,
  },
  {
    media: "LinkedIn",
    iconName: "linkedin",
    url: "https://www.linkedin.com/in/moamal-alaa",
    id: 2,
  },
  {
    media: "CodePen",
    iconName: "codepen",
    url: "https://codepen.io/moamal-2000",
    id: 3,
  },
  {
    media: "Twitter",
    iconName: "twitter",
    url: "https://x.com/MoamalAlaa7",
    id: 4,
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "E-Commercew",
    description: `A responsive and modern e-commerce web application built with React and Redux Toolkit. 
    It supports multi-language functionality, a dynamic shopping cart, 
    wishlist, product search, order tracking, and zoomable product details. Designed with a clean UI, 
    optimized for SEO, and built as a Progressive Web App for an app-like experience across all devices`,
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
    description: `A dynamic website that displays real-time statistics for Call of Duty 2
    players on Jumpers Heaven servers. Still in active development, the platform aims to offer
    detailed insights and leaderboard data.`,
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "MessagePack",
      "LZ String",
      "Sass",
    ],
    repoUrl: "https://github.com/Moamal-2000/jumpers-heaven-statistics",
    previewImg: "/images/call-of-duty-2-stats-project.png",
    id: 3,
  },
  {
    title: "Aster Information",
    description: `A fully responsive website built as a freelance project for a potential client,
    featuring a professional design, user-friendly interface, smooth on-scroll animations,
    and cross-browser compatibility.`,
    technologies: ["React Helmet Async", "React Router Dom", "Sass", "React"],
    repoUrl: "https://github.com/Moamal-2000/aster-information",
    previewImg: "/images/aster-information-project.webp",
    id: 2,
  },
];

export const TECHNOLOGIES = [
  {
    name: "JavaScript (ES6+)",
    description: `A versatile scripting language for web development, enabling dynamic and interactive websites. ES6+ adds modern features like arrow functions, classes, and modules.`,
    id: 1,
  },
  {
    name: "Sass",
    description: `A preprocessor for CSS, combining CSS and SCSS features for enhanced styling and organization.`,
    id: 2,
  },
  {
    name: "React",
    description: `A JavaScript library for building user interfaces using reusable components and a virtual DOM for efficient updates.`,
    id: 3,
  },
  {
    name: "Next",
    description: `A React framework for server-side rendering, static site generation, and building fast, SEO-friendly web apps.`,
    id: 4,
  },
  {
    name: "Progressive Web App",
    description: `A web application that uses modern web capabilities to deliver an app-like experience, including offline support and installability.`,
    id: 5,
  },
  {
    name: "Redux/Toolkit",
    description: `A state management library, simplifying complex state management and ensuring consistency across the application.`,
    id: 6,
  },
];
