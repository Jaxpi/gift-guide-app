let CACHE_NAME = 'gift-guide-project';
let urlsToCache = [
    '/',
    '/completed'
];

// INSTALLED SERVICE WORKER - hasan
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});