import s from "./page.module.scss";

export const metadata = {
  title: "Offline | Portfolio",
  description:
    "You are currently offline. Please check your internet connection.",
};

export default function OfflinePage() {
  return (
    <main className={s.offlinePage}>
      <h1>You&apos;re Offline</h1>
      <p>Please check your internet connection and try again.</p>
      <div className={s.icon}>⚡</div>
    </main>
  );
}
