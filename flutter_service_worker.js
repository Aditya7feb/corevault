'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "031abc811ef3cdb0fca2e1f3d4dee2de",
"index.html": "791dd75987b067db54c4e69940559f5e",
"/": "791dd75987b067db54c4e69940559f5e",
"main.dart.js": "b485b5805a56323811913c7361411c61",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "13252dc8a29aa903168d23e8222ef2ec",
"assets/AssetManifest.json": "28a6c0580b226c3bf18d8c577e416703",
"assets/NOTICES": "85a76e61f8a27dcde17230e3bc9ce282",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bd5f1805979e119c3d2bee6731456dcb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "98d44d6bab45f3a252327cb41268af6f",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/p12.png": "5a0a426b4301e3c1ac919ddb971ebf0a",
"assets/assets/p11.png": "2972d1b550ac6ee32c7877c3772561a4",
"assets/assets/p10.png": "9692a06a53266ec060169504972abacf",
"assets/assets/vimar-payoff-pos.png": "0e1af405227d80e468264446c024fd72",
"assets/assets/8.png": "2c50ea19eca17b1c9724697d9116223a",
"assets/assets/compAdv.png": "97912af86d2b46b7d61070abc0474fad",
"assets/assets/weWork.png": "7186231fa8bf0ffef5b6281325871e1f",
"assets/assets/9.png": "6bafcd9ac97cb38d6ed25d6ca456f225",
"assets/assets/14.png": "d3415e235efc884945489dfd2bd8d138",
"assets/assets/15.png": "c565207bd252cb71d71b2e5fc8b93f8e",
"assets/assets/p9.png": "2af878d63b2fb3e048b6ca692e8d19f4",
"assets/assets/Mission%2520%257C%2520Target.json": "7eebaa265b463267fbf7bc5583c67725",
"assets/assets/16.png": "d0d20628ad284240b43f3d6c4c639fce",
"assets/assets/p8.png": "b222484fc16a60133b7078161e0cddee",
"assets/assets/12.png": "cffc1deb6478554a915dcbea4efdff4d",
"assets/assets/11.png": "f2078e3641cdb3377570029140628581",
"assets/assets/10.png": "d67a1c890b3da9efa283cd7e7a66d538",
"assets/assets/p3.png": "954f1a9bb69b8757da8953ceea105b8d",
"assets/assets/b&o.png": "7ca61b5ba15aba4b4b5c84e885edd16d",
"assets/assets/p2.png": "1d7f3097b95d6a3229ce45efe60a19b2",
"assets/assets/p1.png": "875bd5d6a100526aefe40e7a9a325487",
"assets/assets/p5.png": "f5283961436f61aa3ce470eec0741d28",
"assets/assets/p4.png": "91b7ba04d82ad5b249ae7ab3d713b2d0",
"assets/assets/p6.png": "8dc68e1ae8ccbe1277c12411c987eea4",
"assets/assets/BlinkingEye.json": "74ead50729dc7117d67e22e293c479a5",
"assets/assets/p7.png": "ade5878229f92da068d8a45937c14f97",
"assets/assets/4.png": "01b3302dbe70ef0120c1e1323f679622",
"assets/assets/5.png": "94cd6ce5d87f23f965f02cdf51f6f366",
"assets/assets/7.png": "69671ef953413c4b8b5e095d5dca32cd",
"assets/assets/about.png": "960c510d148dabf451420549fdaecb2a",
"assets/assets/6.png": "ebe195637866c1844724760473de9fe6",
"assets/assets/benefit.png": "ad397d4813cac80a2b5587cddf262bea",
"assets/assets/2.png": "dd7f67d507c6429f8152d9d525aa6e6a",
"assets/assets/3.png": "3ebb6a3356ad045679f7ed1a70295255",
"assets/assets/televes.png": "bae8bed9462a17092ad9ccd9331446c5",
"assets/assets/Brochure.pdf": "58d16554d950a1ec1ea3063917097f1d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
