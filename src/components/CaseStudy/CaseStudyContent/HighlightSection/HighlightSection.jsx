import s from "./HighlightSection.module.scss";

const HighlightSection = () => {
  return (
    <section className={s.highlightPanel} aria-labelledby="key-highlights">
      <h2 id="key-highlights">Key Highlights</h2>

      <ul>
        <li>
          <strong>Data layer:</strong> Added MessagePack decoding and mapping so
          API responses could be turned into normal domain objects before
          reaching Redux and the UI. The list mappers run in{" "}
          <strong>O(n)</strong> time.
        </li>
        <li>
          <strong>Routing:</strong> Moved player and map pages from query-based
          navigation to Next.js dynamic routes such as{" "}
          <code>/player/[playerId]</code> and <code>/map/[cpId]</code>.
        </li>
        <li>
          <strong>Frontend architecture:</strong> Reworked the application
          around Next.js App Router, Redux Toolkit, reusable components, API
          modules, and separate data transformation logic.
        </li>
        <li>
          <strong>Accessibility and performance:</strong> Worked on semantic
          HTML, keyboard interaction, screen-reader behavior, accessibility
          checks, caching, image formats, rendering, and application-level
          performance.
        </li>
      </ul>
    </section>
  );
};
export default HighlightSection;
