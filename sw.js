self.addEventListener("install", (event) => {
  console.log("Service Worker installato");
  event.waitUntil(
    caches.open("blog-cache").then((cache) => {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
