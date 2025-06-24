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
    // icon: [
    //   {
    //     url: "/PWA/icons/favicon-16x16.png",
    //     sizes: "16x16",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/PWA/icons/favicon-32x32.png",
    //     sizes: "32x32",
    //     type: "image/png",
    //   },
    // ],
    // apple: [
    //   {
    //     url: "/PWA/icons/apple-touch-icon.png",
    //     sizes: "192x192",
    //     type: "image/png",
    //   },
    // ],
  },
};

export const METADATA = { ...GLOBAL_METADATA, ...PWA_METADATA };
