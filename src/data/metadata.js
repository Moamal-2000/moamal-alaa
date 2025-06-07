const keywords = [
  "Moamal Alaa",
  "Moamal Alaa CV",
  "Moamal Alaa Resume",
  "Front-End Developer",
  "React Developer",
  "Next.js Developer",
  "React developer portfolio",
  "Freelance Front-End Developer",
  "Web Developer Iraq",
  "Responsive Web Design",
  "Modern UI",
  "Portfolio",
];
const description =
  "Moamal Alaa - Front-End Developer specializing in modern, responsive websites using React or Next.js. Passionate about clean UI, performance, and user-friendly design. Let's create something great together!";
const GLOBAL_METADATA = { title: "Moamal Alaa", description, keywords };
const PWA_METADATA = {
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Moamal Alaa",
  },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      {
        url: "/PWA/icons/maskable-icon.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        url: "/PWA/icons/maskable-icon.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
    apple: [
      {
        url: "/PWA/icons/maskable-icon.webp",
        sizes: "180x180",
        type: "image/webp",
      },
    ],
  },
};

export const METADATA = { ...GLOBAL_METADATA, ...PWA_METADATA };
