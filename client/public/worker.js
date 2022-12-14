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