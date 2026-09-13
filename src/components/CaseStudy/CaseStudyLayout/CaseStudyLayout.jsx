"use client";

import { useEffect, useState } from "react";
import s from "./CaseStudyLayout.module.scss";

const CaseStudyLayout = ({ children }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const articleHeadings = [
      ...document.querySelectorAll(
        "[data-case-study] h2, [data-case-study] h3",
      ),
    ];
    setHeadings(articleHeadings);

    if (!articleHeadings.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (visibleHeading) {
          setActiveId(visibleHeading.target.id);
        }
      },
      { rootMargin: "-120px 0px -65%", threshold: [0, 1] },
    );

    articleHeadings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.pageShell}>
      <aside className={s.sidebar}>
        <nav aria-label="Table of contents">
          <ol className={s.tocList}>
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.tagName === "H3" ? s.subItem : ""}
              >
                <a
                  href={`#${heading.id}`}
                  className={activeId === heading.id ? s.active : ""}
                  aria-current={
                    activeId === heading.id ? "location" : undefined
                  }
                >
                  {heading.textContent}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
      {children}
    </div>
  );
};

export default CaseStudyLayout;
