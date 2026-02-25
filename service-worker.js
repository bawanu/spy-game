const CACHE_NAME = 'my-game-cache-v3.7.4';

const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/favicon.ico',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',

  // External CDN Resources
  'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;500;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://unpkg.com/peerjs@1.5.1/dist/peerjs.min.js'
];



/* =========================
   1️⃣ INSTALL
========================= */
self.addEventListener('install', event => {
  console.log('[SW] Installing...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async cache => {
        console.log('[SW] Opening cache...');
        try {
          await cache.addAll(URLS_TO_CACHE);
          console.log('[SW] Core assets cached.');
        } catch (err) {
          console.warn('[SW] Some files failed to cache:', err);
        }
      })
  );

  // Activate immediately
  self.skipWaiting();
});



/* =========================
   2️⃣ ACTIVATE
========================= */
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', name);
            return caches.delete(name).then(() => {
              console.log('[SW] Old cache deleted:', name);
            });
          }
        })
      );
    })
  );

  // Take control immediately
  self.clients.claim();
});



/* =========================
   3️⃣ FETCH — Stale While Revalidate
========================= */
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request, { ignoreSearch: true })
        .then(cachedResponse => {

          const networkFetch = fetch(event.request)
            .then(networkResponse => {

              if (!networkResponse) return networkResponse;

              const isValid =
                networkResponse.status === 200 ||
                networkResponse.type === 'opaque';

              if (isValid) {
                cache.put(event.request, networkResponse.clone())
                  .catch(err =>
                    console.warn('[SW] Cache update failed:', err)
                  );
              }

              return networkResponse;
            })
            .catch(() => {
              console.log('[SW] Network failed; using cache if available.');
              return cachedResponse;
            });

          // Return cache immediately if available
          return cachedResponse || networkFetch;
        });
    })
  );
});
