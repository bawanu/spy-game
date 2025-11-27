const CACHE_NAME = 'my-game-cache-v2'; // I updated this to v2 for you

// Files to save for offline use
const URLS_TO_CACHE = [
  './',                     
  './index.html',           
  './manifest.json',        
  './favicon.ico',          
  './apple-touch-icon.png', 
  './icon-192.png',         
  './icon-512.png'          
];

// 1. INSTALL
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache, downloading files...');
        return cache.addAll(URLS_TO_CACHE);
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
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// 3. FETCH (The Fixed Version)
self.addEventListener('fetch', event => {
  // We only want to cache GET requests (not POST, etc.)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      
      const fetchPromise = fetch(event.request).then(networkResponse => {
        
        // Check if we received a valid response
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'error') {
          return networkResponse;
        }

        // IMPORTANT: Clone the response IMMEDIATELY.
        // We clone it here before passing the original to the browser.
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(error => {
        // If fetch fails (offline) and nothing in cache, you could return a fallback here
        console.log('Fetch failed:', error);
      });

      // Return the cached response if present, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
