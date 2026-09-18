// Minimal service worker: exists only to satisfy PWA installability checks.
// No caching -- this app depends on live Supabase data, so every request
// should always hit the network, never a cached copy.
self.addEventListener("install", function (e) {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (e) {
  e.respondWith(fetch(e.request));
});
