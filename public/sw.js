const CACHE_NAME = 'eservone-v1';
const urlsToCache = [
  '/',
  '/offline',
  '/manifest.webmanifest',
  '/assets/icons/eservone-logo.png',
  '/assets/images/eservone-logo.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }

        return fetch(event.request).catch(() => {
          // If offline and page not cached, show offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/offline');
          }
        });
      }
      )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered');
  return Promise.resolve();
}

// Push notification handling
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from EservOne',
    icon: '/assets/icons/eservone-logo.png',
    badge: '/assets/icons/eservone-logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Services',
        icon: '/assets/icons/eservone-logo.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/icons/eservone-logo.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('EservOne', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/services')
    );
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
}); 