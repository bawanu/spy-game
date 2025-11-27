const CACHE_NAME = 'my-site-cache-v1';
const CACHE_FILES = [
  '/',                // index.html
  '/index.html',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  // Add all image paths
  '/images/image1.jpg',
  '/images/image2.png',
  // Add CSS/JS files if any
];

// Install event - cache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[ServiceWorker] Caching all files');
      return cache.addAll(CACHE_FILES);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - respond with cache first, then update cache in background
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Update cache if request succeeds
        if (networkResponse && networkResponse.status === 200) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() => {
        // Network failed, just return cached response
        return cachedResponse;
      });

      // Return cached response immediately if available, else wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
