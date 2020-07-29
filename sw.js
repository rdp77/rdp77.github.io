var CACHE_NAME = "rdp77-cache-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/resume",
  "/portfolio",
  "/awards",
  "/offline.html",
  "/assets/img/avatar.png",
  "/assets/img/certification/css_sololearn.jpg",
  "/assets/img/certification/html_sololearn.jpg",
  "/assets/img/certification/lintasarta2.png",
  "/assets/img/certification/lintasarta3.png",
  "/assets/img/certification/lintasarta4.png",
  "/assets/img/certification/php_sololearn.jpg",
  "/assets/img/certification/seo_skillacademy.jpg",
  "/assets/img/certification/seo_skillacademy1.jpg",
  "/assets/img/works/work3.jpg",
];

self.addEventListener("install", function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(function (response) {
          // Check if we received a valid response
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          var responseToCache = response.clone();

          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
      .catch(function () {
        // If both fail, show a generic fallback:
        return caches.match("/offline.html");
        // However, in reality you'd have many different
        // fallbacks, depending on URL & headers.
        // Eg, a fallback silhouette image for avatars.
      })
  );
});

self.addEventListener("activate", function (event) {
  var cacheAllowlist = CACHE_NAME;

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
