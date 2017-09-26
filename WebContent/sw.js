const assets = ["templates/fashion/fonts/fontawesome-webfont.woff2",
	                "templates/fashion/fonts/exo.woff2",
	                "templates/fashion/fonts/opensans.woff2"];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open("assets").then(function(cache) {
      return cache.addAll(assets);
    })
  );
});
self.addEventListener('fetch', function fetcher (event) {
  const request = event.request;
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(response) {
            return response;
        });
      })
    );
});