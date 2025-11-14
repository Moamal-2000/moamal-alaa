const CACHE_NAME = "moamal-alaa-v18.6.0";

const urlsToCache = [
  "/",
  "/archive",
  "/manifest.json",
  "/resume.pdf",
  "/images/e-commercew-project.webp",
  "/images/call-of-duty-2-stats-project.webp",
  "/images/aster-information-project.webp",
  "/images/me.png",
  "/PWA/icons/maskable-icon.webp",
  "/icons-sprite.svg",
];

async function installServiceWorker() {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(urlsToCache);
  } catch (error) {
    console.error("Failed to install service worker:", error);
  }
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
    return null;
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
  event.respondWith(handleFetchRequest(event));
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(cleanupOldCaches());
});
