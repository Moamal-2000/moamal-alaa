import s from "./DirectoryTree.module.scss";

const DirectoryTree = () => {
  return (
    <pre className={s.tree}>
      <code>{`.
├── public/                  # Static files (logos, Open Graph images, map/country assets)
│   ├── assets/
│   └── openGraph/
├── src/
│   ├── app/                 # Next.js App Router entry, layouts, metadata, and route handlers
│   │   ├── (pages)/         # Route-group pages (servers, maps, players, favorites, etc.)
│   │   ├── api/             # App Router API endpoints
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── not-found.js
│   │   └── RootProviders.jsx
│   ├── api/                 # External API clients/services
│   ├── components/          # UI components
│   │   ├── Pages/           # Page-specific UI
│   │   ├── Shared/          # Reusable shared UI
│   │   ├── Header/
│   │   ├── Footer/
│   ├── data/                # Constants, metadata, static datasets, and config objects
│   ├── hooks/               # Custom React hooks
│   │   ├── app/
│   │   └── shared/
│   ├── lib/                 # Core utilities and low-level modules
│   │   └── api/
│   │   └── mappers/
│   ├── redux/               # Global state management
│   │   ├── features/        # Feature slices/thunks/apis
│   │   ├── msgPack/         # MessagePack base query support
│   │   └── store.js
│   └── styles/              # Global SCSS variables, mixins, and styles
├── next.config.mjs
├── package.json
└── README.md
`}</code>
    </pre>
  );
};
export default DirectoryTree;
