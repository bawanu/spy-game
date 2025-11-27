const CACHE_NAME = 'my-site-cache-v1'; // Change version when updating
const urlsToCache = [
  '/',
  'index.html',
  'favicon.ico',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',

];

// Install event: cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, caching files...');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches if needed
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
  self.clients.claim();
});

// Fetch event: serve cached files first, then update cache in background
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
          // If network fails, return cached version
          return cachedResponse;
        });

      // Return cached response immediately if exists, else wait for network
      return cachedResponse || fetchPromise;
    })
  );
});