let CACHE_NAME = 'gift-guide-project';
let urlsToCache = [
    '/',
    '/completed'
];

// INSTALLED SERVICE WORKER
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// CACHE AND RETURN REQUESTS
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if(response) {
                return response;
            }
            return fetch(event.request)
        })
    )
})

// UPDATE SERVICE WORKER
self.addEventListener('activate', event => {
    let cacheWhiteList = ['gift-guide-project'];
    event.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if(cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})
