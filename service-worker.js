const CACHE_NAME = 'my-game-cache-v3.5.8';

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


// 1. INSTALL

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      console.log('[SW] Opening cache...');
      try {
        await cache.addAll(URLS_TO_CACHE);
      } catch (err) {
        console.warn('[SW] Some files failed to cache:', err);
      }
    })
  );
  self.skipWaiting();
});


// 2. ACTIVATE

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', name);
            return caches.delete(name);
            console.log('Old cache deleted');
          }
        })
      )
    )
  );
  self.clients.claim();
});


// 3. FETCH — Stale-While-Revalidate
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request, { ignoreSearch: true }).then(cachedResponse => {

        // Start network fetch in the background
        const networkFetch = fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse) return networkResponse;

            const isOpaque = networkResponse.type === 'opaque';
            const isOK = networkResponse.status === 200;

            if (isOK || isOpaque) {
              try {
                cache.put(event.request, networkResponse.clone());
              } catch (err) {
                console.warn('[SW] Cache update failed:', err);
              }
            }

            return networkResponse;
          })
          .catch(() => {
            console.log('[SW] Network failed; using cache if available.');
            return cachedResponse;
          });

        return cachedResponse || networkFetch;
      });
    })
  );
});
