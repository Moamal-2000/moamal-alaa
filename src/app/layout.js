import "../styles/globals.scss";
import RootProviders from "./RootProviders";

export const metadata = {
  title: "Moamal Alaa",
  description:
    "Moamal Alaa – Front-End Developer specializing in modern, responsive websites using React or Next.js. Passionate about clean UI, performance, and user-friendly design. Let's create something great together!",
  keywords: [
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
  ],
};

export default function RootLayout({ children }) {
  return <RootProviders>{children}</RootProviders>;
}
