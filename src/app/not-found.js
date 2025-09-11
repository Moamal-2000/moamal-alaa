import LinkButton from "@/components/Shared/Buttons/LinkButton/LinkButton";
import s from "../styles/NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <main className={s.notFoundPage}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <LinkButton href="/">Go Home</LinkButton>
    </main>
  );
};

export default NotFoundPage;
