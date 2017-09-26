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
self.addEventListener('fetch', function(event) {
	  event.respondWith(
	    caches.open('assets').then(function(cache) {
	      return cache.match(event.request).then(function (response) {
	        return response || fetch(event.request).then(function(response) {
	          if(event.request.url.indexOf(".jpg")!=-1){
	        	 cache.put(event.request, response.clone());
	          }
	          return response;
	        });
	      });
	    })
	  );
});