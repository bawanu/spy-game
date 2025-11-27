// service-worker.js

const CACHE_NAME = 'my-game-cache-v1'; // Increment this when you update the game
const URLS_TO_CACHE = [
  '/',                        // root, resolves to index.html
  '/index.html',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json'
];

// Install: cache all necessary files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, caching files...');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting(); // Activate worker immediately
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim(); // Take control immediately
});

// Fetch: cache-first, then network update
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fails and nothing cached, fallback to index.html
          return cachedResponse || caches.match('/index.html');
        });

      // Return cached response immediately if exists, else wait for network
      return cachedResponse || fetchPromise;
    })
  );
});