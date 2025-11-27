const CACHE_NAME = 'my-game-cache-v1'; // Change this to 'v2' when you update the game!

// Files to save for offline use
const URLS_TO_CACHE = [
  './',                     // The main folder
  './index.html',           // The game file
  './manifest.json',        // The app installer info
  './favicon.ico',          // Small icon
  './apple-touch-icon.png', // iOS icon
  './icon-192.png',         // Android icon
  './icon-512.png'          // Large Android icon
  // Note: If you want 'edit.html' to work offline too, add './edit.html' here.
];

// 1. INSTALL: Download and save the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, downloading files...');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting(); // Force this new service worker to activate immediately
});

// 2. ACTIVATE: Delete old cache versions
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
  self.clients.claim(); // Take control of the page immediately
});

// 3. FETCH: The "Stale-While-Revalidate" Strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Strategy: Use the Cache first (FAST), but check Network for updates (SMART)
      
      const fetchPromise = fetch(event.request)
        .then(networkResponse => {
          // If we got a valid response from the internet, update the cache
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If internet is dead, do nothing (we already have the cachedResponse)
        });

      // Return the cached version immediately if we have it!
      // Otherwise, wait for the network.
      return cachedResponse || fetchPromise;
    })
  );
});