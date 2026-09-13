"use client";

import s from "./SkipContentLink.module.scss";

const SkipContentLink = () => {
  return (
    <a href="#main-content" className={s.skipLink}>
      Skip to content
    </a>
  );
};

export default SkipContentLink;
