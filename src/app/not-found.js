"use client";

import s from "@/components/NotFoundPage/NotFoundPage.module.scss";
import LinkButton from "@/components/Shared/Buttons/LinkButton/LinkButton";

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
