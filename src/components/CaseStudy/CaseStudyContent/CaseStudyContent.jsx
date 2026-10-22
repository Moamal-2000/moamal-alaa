import AnchorLink from "@/components/Shared/AnchorLink/AnchorLink";
import CaseStudyHeading from "../CaseStudyLayout/Shared/CaseStudyHeading/CaseStudyHeading";
import ArticleHeader from "./ArticleHeader/ArticleHeader";
import s from "./CaseStudyContent.module.scss";
import DirectoryTree from "./DirectoryTree/DirectoryTree";
import HighlightSection from "./HighlightSection/HighlightSection";

const CaseStudyContent = () => (
  <article className={s.article} data-case-study>
    <ArticleHeader />

    <div className={s.prose}>
      <p>
        <AnchorLink
          href="https://cjstats.moamalalaa.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CJ Statistics
        </AnchorLink>{" "}
        is a web app for browsing and analyzing Call of Duty jumping statistics
        from Jumpers Heaven and Jump 4 Life.
      </p>

      <h2 id="introduction">2+ years of development · 3,000 commits</h2>
      <p>
        CJ Statistics has been continuously developed for more than two years,
        growing from a relatively small statistics frontend into a data-heavy
        application with its own routing, state management, data transformation
        layer, reusable UI systems, and production deployment infrastructure.
      </p>

      <p>
        I started working on the project when it was much smaller. Over time,
        more data, pages, and features were added. At some point the frontend
        was no longer just about displaying API responses. It needed its own
        structure, state management, reusable UI, better routing, and a way to
        deal with the growing amount of data.
      </p>
      <p>
        I ended up taking responsibility for most of that frontend work. The
        backend API and backend services were handled separately. My work was on
        the frontend and everything needed to turn that API into the application
        users interact with.
      </p>

      <HighlightSection />

      <CaseStudyHeading id="where-the-project-started">
        Where the project started
      </CaseStudyHeading>
      <p>
        The early version of CJ Statistics was fairly straightforward. Fetch
        some data, render it, add a few filters, and make the pages usable. That
        approach is fine for a small application. It becomes less comfortable
        once the same data starts appearing everywhere.
      </p>
      <p>
        Players were shown in leaderboards, player pages, recent activity, and
        other parts of the app. Maps had similar relationships. Filters needed
        to be reflected in the URL. Different leaderboard sources had different
        fields and behavior.
      </p>
      <p>
        The problem was not that the code stopped working. The problem was that
        every new feature had a little more knowledge about the rest of the
        application than I wanted it to have. That is where most of the
        architectural work started.
      </p>

      <CaseStudyHeading id="giving-the-frontend-some-structure">
        Giving the frontend some structure
      </CaseStudyHeading>
      <p>
        I gradually separated the application into areas for pages, UI
        components, API code, data transformation, hooks, utilities, Redux
        state, and styles.
      </p>

      <DirectoryTree />

      <p>
        There was no point in creating a complicated architecture just for the
        sake of having one. The useful part of the split was knowing where
        different kinds of logic belonged.
      </p>

      <ul>
        <li>API code handled communication.</li>
        <li>Data mappers handled the shape of the data.</li>
        <li>Redux handled shared application state.</li>
        <li>Components handled presentation and interaction.</li>
      </ul>

      <p>
        That separation made later changes easier because a change in one layer
        did not automatically have to spread through the whole UI.
      </p>

      <CaseStudyHeading id="player-and-map-routes">
        Player and map routes
      </CaseStudyHeading>
      <p>
        One of the bigger refactors was changing how individual players and maps
        were represented in the application.
      </p>
      <p>
        The change affected more than the page itself. Those links existed
        across leaderboards, map cards, player activity, route completion, run
        analytics, and other parts of the UI.
      </p>
      <p>
        Updating the route meant finding and updating all of those references
        too. The player page also gained dynamic metadata and a clearer
        page-level data flow. The map page followed the same direction.
      </p>
      <p>
        This ended up being one of those changes that looks small when written
        as a Git commit and turns out to touch half the application.
      </p>

      <CaseStudyHeading id="working-with-messagepack">
        Working with MessagePack
      </CaseStudyHeading>
      <p>
        The API eventually introduced a newer MessagePack-based format for
        several of the main datasets. It was compact, which was useful, but the
        response format was not something I wanted components to know about.
      </p>
      <p>
        Some data came back as positional arrays. A component should not have to
        know that index <code>0</code> means one thing and index <code>4</code>{" "}
        means another.
      </p>

      <div
        className={s.flow}
        aria-label="Data flow from the API to the user interface"
      >
        <span>API</span>
        <b aria-hidden="true">→ </b>
        <span>MessagePack decoding</span>
        <b aria-hidden="true">→</b>
        <span>mapping</span>
        <b aria-hidden="true">→</b>
        <span>Redux / cache</span>
        <b aria-hidden="true">→</b>
        <span>UI</span>
      </div>

      <p>
        The same idea was used for maps, players, and leaderboards. The actual
        list mapping is linear in the number of records, but the bigger benefit
        was keeping the transport format out of the rest of the application. If
        the API representation changes, there is one place where that change
        needs to be understood.
      </p>

      <CaseStudyHeading id="redux-and-shared-state">
        Redux and shared state
      </CaseStudyHeading>
      <p>
        As the application grew, more of the data needed to be used in more than
        one place. I used Redux Toolkit for shared state and organized it around
        the domains that actually exist in the application:
      </p>

      <div className={s.chipList}>
        {PROJECT_REDUX_SLICES.map((item) => (
          <code key={item}>{item}</code>
        ))}
      </div>

      <p>
        The point was not to put everything in Redux. Local UI state could stay
        local. Shared data and state that crossed page or component boundaries
        had a more central place to live.
      </p>
      <p>
        That distinction helped keep individual pages from becoming responsible
        for everything.
      </p>

      <CaseStudyHeading id="building-the-actual-ui">
        Building the actual UI
      </CaseStudyHeading>
      <p>
        The project has a lot of data, but users do not want to "browse the
        API". They want to find a player, compare leaderboard results, look at a
        map, check a run, or find a server.
      </p>
      <p>
        A lot of the frontend work was therefore about making that data easier
        to navigate. The application gained things such as:
      </p>

      <ul>
        <li>player search</li>
        <li>leaderboard sorting</li>
        <li>pagination</li>
        <li>URL-based filters</li>
        <li>FPS filters</li>
        <li>player status filters</li>
        <li>server browsing</li>
        <li>map browsing</li>
        <li>player profiles</li>
        <li>route completion</li>
        <li>run analytics</li>
        <li>badges and rank information</li>
      </ul>

      <p>
        Some of those features were small. Others became shared patterns after I
        noticed the same problem appearing in several places.
      </p>

      <CaseStudyHeading id="the-map-preview">The map preview</CaseStudyHeading>
      <p>
        Map thumbnails are useful, but sometimes you want to actually look at
        the map image. I built a full-screen preview with thumbnail navigation,
        previous/next controls, counters, and keyboard support.
      </p>
      <p>
        The modal was moved into the global provider layer so it did not need to
        be mounted separately on every page. I also simplified the navigation
        logic and replaced some repeated inline SVG markup with a shared SVG
        sprite.
      </p>
      <p>
        Nothing particularly exotic was happening here. It was mostly a case of
        building the feature, then cleaning up the parts around it that became
        obviously repetitive.
      </p>

      <CaseStudyHeading id="different-leaderboard-systems">
        Different leaderboard systems
      </CaseStudyHeading>
      <p>
        CJ Statistics has more than one leaderboard system, so the frontend
        cannot assume that every leaderboard has the same meaning.
      </p>
      <p>
        I added support for the Jump 4 Life Rank XP leaderboard, including rank
        levels, badges, total XP, and progress toward the next level.
      </p>
      <p>
        The layout also changes depending on the leaderboard source and type.
        That meant some filters, columns, and information could only be shown
        when they actually made sense for the selected leaderboard.
      </p>
      <p>
        This was one of the points where understanding the domain mattered as
        much as writing the component.
      </p>

      <CaseStudyHeading id="accessibility">Accessibility</CaseStudyHeading>
      <p>
        Accessibility has been part of the frontend work throughout the project.
      </p>
      <p>
        I worked on semantic HTML, heading structure, keyboard interaction, form
        labels, custom controls, skip links, landmarks, tooltips, and
        screen-reader behavior.
      </p>
      <p>I also added accessibility tooling during development.</p>
      <p>
        Some fixes were very small. For example, a custom checkbox still needs
        to behave like a checkbox. A repeated map name does not always need to
        be announced twice. A navigation element should have a useful landmark
        name when there is more than one of the same type.
      </p>
      <p>
        These things are easy to overlook when a page looks correct in a
        browser.
      </p>

      <CaseStudyHeading id="performance">Performance</CaseStudyHeading>
      <p>
        Performance has mostly been a collection of smaller decisions rather
        than one big optimization.
      </p>
      <p>
        The application uses Next.js App Router, server rendering where
        appropriate, caching, MessagePack responses, modern image formats,
        preconnects, and other application-level optimizations.
      </p>
      <p>
        Map images were moved toward AVIF/WebP, and I also worked on reducing
        unnecessary client-side work and hydration.
      </p>
      <p>
        I tend to prefer simple optimizations that fit the architecture over
        adding another library every time there is a performance problem.
      </p>

      <CaseStudyHeading id="seo-and-social-previews">
        SEO and social previews
      </CaseStudyHeading>
      <p>
        Once player and map pages became proper dynamic routes, it also made
        sense for them to have their own metadata.
      </p>
      <p>
        I added dynamic metadata and Open Graph image generation for those
        pages. That means a player page can represent that player in search and
        when shared, and a map page can do the same for that map.
      </p>
      <p>
        The route, page data, and metadata now describe the same resource
        instead of the page being just another state of a generic route.
      </p>

      <CaseStudyHeading id="deployment">Deployment</CaseStudyHeading>
      <p>
        The project was initially deployed on Vercel. Later, I worked on moving
        it to Cloudflare Workers using Vinext.
      </p>
      <p>
        That meant configuring the build and deployment setup, Wrangler, Worker
        assets, caching, images, and environment variables.
      </p>
      <p>
        The migration was not completely transparent. Some pages behaved
        differently in the new environment, which led to debugging issues that
        did not exist in the original deployment.
      </p>
      <p>
        That part of the project reminded me that deployment is also an
        application concern. A frontend can work perfectly in one environment
        and still make assumptions that do not hold somewhere else.
      </p>

      <CaseStudyHeading id="what-im-working-on-now">
        What I'm working on now
      </CaseStudyHeading>
      <p>
        CJ Statistics is <del>still being developed</del>, so some parts of the
        frontend are not finished yet.
      </p>
      <p>
        Current work includes responsive improvements, continuing the
        MessagePack v2 migration, refining data reflow, improving URL-driven
        fetching on the Players page, and cleaning up parts of the UI.
      </p>
      <p>
        I am keeping those items separate from the completed work in this case
        study because the project is <del>still changing</del>.
      </p>

      <CaseStudyHeading id="my-role">My role</CaseStudyHeading>
      <p>My work on CJ Statistics has been focused on the frontend.</p>

      <ul>
        <li>Next.js application structure and routing</li>
        <li>React components and UI systems</li>
        <li>Redux state management</li>
        <li>API integration</li>
        <li>MessagePack decoding and data mapping</li>
        <li>caching and data flow</li>
        <li>responsive UI</li>
        <li>accessibility</li>
        <li>performance</li>
        <li>SEO and Open Graph metadata</li>
        <li>deployment configuration</li>
      </ul>

      <p>The backend API and backend services were maintained separately.</p>
      <p>So the simplest way to describe my role is:</p>

      <blockquote>
        I owned the frontend application and the user-facing experience built on
        top of the backend API.
      </blockquote>

      <CaseStudyHeading id="key-takeaways">Key Takeaways</CaseStudyHeading>
      <p>
        The most useful thing I got from this project was learning what happens
        when an application stays alive long enough for its first implementation
        to become too small for what the product has turned into.
      </p>
      <p>
        A new feature can expose a problem in routing. A new API format can
        expose a problem in data handling. A new interaction can expose
        duplicated UI logic. A performance issue can turn out to be a
        data-fetching problem rather than a rendering problem.
      </p>
      <p>
        You end up spending a lot of time deciding where something should live
        and how much of the rest of the application should know about it. That
        is the part of frontend engineering I found most useful in this project.
      </p>
      <p>
        CJ Statistics also gave me hands-on experience with a data-heavy
        application where the frontend has to deal with a lot of information
        without making the interface feel complicated.
      </p>
      <p>
        <del>
          There is still work to do, and I expect the codebase to keep changing
        </del>
        . That is normal. For me, the interesting part is trying to make the
        next change easier than the last one.
      </p>
    </div>
  </article>
);

export default CaseStudyContent;

const PROJECT_REDUX_SLICES = [
  "servers",
  "recent",
  "maps",
  "players",
  "playerProfile",
  "leaderboard",
  "global",
];
