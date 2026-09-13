"use client";

import { useEffect, useState } from "react";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  function trackActiveHeading() {
    const articleHeadings = [
      ...document.querySelectorAll(
        "[data-case-study] h2, [data-case-study] h3",
      ),
    ];
    setHeadings(articleHeadings);

    if (!articleHeadings.length) {
      return undefined;
    }

    const options = { rootMargin: "-120px 0px -65%", threshold: [0, 1] };
    const observer = new IntersectionObserver((entries) => {
      const visibleHeading = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (visibleHeading) {
        setActiveId(visibleHeading.target.id);
      }
    }, options);

    articleHeadings.forEach((heading) => observer.observe(heading));

    return observer;
  }

  useEffect(() => {
    const observer = trackActiveHeading();

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <aside className={s.sidebar}>
      <nav aria-label="Table of contents">
        <ol className={s.tocList}>
          {headings.map(({ id, tagName, textContent }) => (
            <li key={id} className={tagName === "H3" ? s.subItem : ""}>
              <a
                href={`#${id}`}
                className={activeId === id ? s.active : ""}
                aria-current={activeId === id ? "location" : undefined}
              >
                {textContent}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};
export default Sidebar;
