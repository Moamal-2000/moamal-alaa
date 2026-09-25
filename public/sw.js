const CACHE_NAME = "moamal-alaa-v1.21.2";

const urlsToCache = [
  "/",
  "/manifest.json",
  "/resume.pdf",
  "/images/e-commercew-project.webp",
  "/images/call-of-duty-2-stats-project.webp",
  "/images/advanced-tic-tac-toe.webp",
  "/images/me.webp",
  "/PWA/icons/maskable-icon.webp",
  "/icons-sprite.svg",
];

function isCacheableRequest(request) {
  if (request.method !== "GET") return false;

  const url = new URL(request.url);
  return url.protocol === "http:" || url.protocol === "https:";
}

async function installServiceWorker() {
  const cache = await caches.open(CACHE_NAME);

  await Promise.all(
    urlsToCache.map(async (url) => {
      try {
        const response = await fetch(url, { cache: "no-store" });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        await cache.put(url, response);
      } catch (error) {
        console.error(`Failed to cache ${url}:`, error);
      }
    }),
  );
}

function isNavigationRequest(request) {
  return request.mode === "navigate";
}

function isValidResponse(response) {
  return response && response.status === 200 && response.type === "basic";
}

// Network-first keeps deployed HTML and application code up to date.
async function handleFetchRequest(event) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(event.request);

  try {
    const response = await fetch(
      event.request,
      isNavigationRequest(event.request) ? { cache: "no-store" } : undefined,
    );

    if (!isValidResponse(response)) return response;

    await cache.put(event.request, response.clone());

    return response;
  } catch (error) {
    return cachedResponse || (await caches.match("/")) || Response.error();
  }
}

async function cleanupOldCaches() {
  try {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((cacheName) => cacheName !== CACHE_NAME)
        .map((cacheName) => caches.delete(cacheName)),
    );
  } catch (error) {
    console.error("Failed to cleanup old caches:", error);
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(installServiceWorker());
});

self.addEventListener("fetch", (event) => {
  if (!isCacheableRequest(event.request)) return;
  event.respondWith(handleFetchRequest(event));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(Promise.all([clients.claim(), cleanupOldCaches()]));
});
