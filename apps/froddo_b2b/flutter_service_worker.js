'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7486fb059409536c5d704e69f0ec9fb9",
"version.json": "a7eee6010b54435174df90a9706f3c34",
"index.html": "7e3967bfeafbe9af34225c19085bcacc",
"/": "7e3967bfeafbe9af34225c19085bcacc",
"main.dart.js": "062a368b224519251f8274f2f80dba6c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eccd9dc071d4287a3f1a9835e0915b56",
"robots.txt": "9152d7f1724ed8fbcd2e0c87029f193c",
"assets/AssetManifest.json": "ecc745b14e75e2ecfd536cff4e3e46f9",
"assets/NOTICES": "ff780950511176a4b9a4ff178610f556",
"assets/FontManifest.json": "34b11445da70ba2f8be12612f9f14b19",
"assets/AssetManifest.bin.json": "af3bf288224cb1c480ece3fc622a2f58",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/shoe.svg": "e5ee0e5c323d40157867d403412e0475",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/barcode_reset_settings.svg": "202075adc186423e9bb3da2114af3a6e",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/logo.svg": "0d7f74d175b09935019d932fe4daed3e",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/barcode_scanner_set_mode.svg": "50a54cd79c88a23e683a99a143a8b980",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/fonts/MerriweatherSans-VariableFont_wght.ttf": "9ca3378cf3a4d03361cf8630282524de",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4d0fb62f43f2103813b404dcae3134d2",
"assets/fonts/MaterialIcons-Regular.otf": "51a0a287c13781f8f97d34650124dd5a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "cc68d6a552b596763bff2f35a13f0f9f",
"canvaskit/canvaskit.js.symbols": "0465b00b2414a711486dff58fef4af46",
"canvaskit/skwasm_heavy.js.symbols": "1d7ea6c1d1f7a2ee6af24280f56f702f",
"canvaskit/skwasm.wasm": "e84e74f826fbd34b27d175287e2ebb19",
"canvaskit/chromium/canvaskit.js.symbols": "846bca24aefe97ff53f8396a6dd0b92b",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "2c01925c82d039b4d85e6aa9e4638796",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "b63231e8819b4d25d957dc8e90e291bd",
"canvaskit/skwasm_heavy.wasm": "9adde1f96ff92bbcbb7a4af917a24556"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
