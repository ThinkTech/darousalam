const assets = ["templates/fashion/fonts/fontawesome-webfont.woff2",
	                "templates/fashion/fonts/exo.woff2",
	                "templates/fashion/css/template.css",
	                "templates/fashion/js/template.js"];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open("assets").then(function(cache) {
      return cache.addAll(assets);
    })
  );
});
self.addEventListener('fetch', function(event) {
	  const request = event.request;
	  event.respondWith(
	    caches.open('assets').then(function(cache) {
	      return cache.match(request).then(function (response) {
	        return response || fetch(request).then(function(response) {
	          if(request.url.indexOf("/images/")!=-1){
	        	 cache.put(request, response.clone());
	          }
	          return response;
	        });
	      });
	    })
	  );
});