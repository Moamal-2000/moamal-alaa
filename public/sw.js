const CACHE_NAME = "moamal-alaa-v1.20.1";

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
        const response = await fetch(url);

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

// Cache-first strategy
async function handleFetchRequest(event) {
  try {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    const response = await fetch(event.request);
    const isValidResponse =
      response && response.status === 200 && response.type === "basic";

    if (!isValidResponse) return response;

    await storeResponseInCache(event.request, response.clone());
    return response;
  } catch (error) {
    const cachedResponse = await caches.match("/");
    return cachedResponse || Response.error();
  }
}

async function storeResponseInCache(request, response) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const isPostRequest = request.method === "POST";

    if (isPostRequest) return;

    await cache.put(request, response);
  } catch (error) {
    console.error("Failed to cache response for request:", request.url, error);
  }
}

async function cleanupOldCaches() {
  try {
    const cacheNames = await caches.keys();
    const cachesToDelete = cacheNames
      .filter((cacheName) => cacheName !== CACHE_NAME)
      .map((name) => caches.delete(name));

    await Promise.all(cachesToDelete.filter(Boolean));
  } catch (error) {
    console.error("Failed to cleanup old caches:", error);
  }
}

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(installServiceWorker());
});

self.addEventListener("fetch", (event) => {
  if (!isCacheableRequest(event.request)) return;
  event.respondWith(handleFetchRequest(event));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(Promise.all([clients.claim(), cleanupOldCaches()]));
});
