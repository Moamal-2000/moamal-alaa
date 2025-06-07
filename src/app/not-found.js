import Link from "next/link";
import s from "../styles/NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <main className={s.notFoundPage}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link href="/" className={s.homeButton}>
        Go Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
