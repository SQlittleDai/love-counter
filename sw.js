const CACHE = 'love-counter-v1';
const FILES = [
  '/love-counter/',
  '/love-counter/index.html',
  '/love-counter/manifest.json',
  '/love-counter/icon-192.png',
  '/love-counter/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
