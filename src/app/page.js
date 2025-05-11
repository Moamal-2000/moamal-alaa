import HeroSection from "@/components/Home/HeroSection/HeroSection";
import s from "./page.module.scss";

export default function Home() {
  return (
    <main className={s.home}>
      <HeroSection />
    </main>
  );
}
