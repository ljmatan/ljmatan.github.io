'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ba3831998d46a3a8115af0bba95a5c54",
"version.json": "893eda7bc35b60c970114a8644649c91",
"index.html": "261eb316b398711c9aa89059f961f67d",
"/": "261eb316b398711c9aa89059f961f67d",
"main.dart.js": "ef7d417861786afc48e6a3e1a0f48117",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "418bd6a1a36923881a317eb9f58dfc18",
"assets/AssetManifest.json": "a1750a4ed00760d16ca61c19fdf332ae",
"assets/NOTICES": "930f07fe406dc52ade843c29c52e705f",
"assets/FontManifest.json": "4c9811c9c40de1d85f6c5cc0ad127cdb",
"assets/AssetManifest.bin.json": "75d7aefa425b1cb5df23da21080ce310",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/shoe.svg": "e5ee0e5c323d40157867d403412e0475",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/barcode_reset_settings.svg": "202075adc186423e9bb3da2114af3a6e",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/barcode_set_name_mode.svg": "aa478239bfcd38725be3e6c3581432f3",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/logo.svg": "f285c4dd74db63b1ff26478cdce77555",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/svg/barcode_scanner_set_mode.svg": "50a54cd79c88a23e683a99a143a8b980",
"assets/packages/generic_shop_app_froddo_b2b/assets/froddo_b2b/fonts/MerriweatherSans-VariableFont_wght.ttf": "9ca3378cf3a4d03361cf8630282524de",
"assets/packages/generic_shop_app_froddo_b2c/assets/froddo_b2c/svg/shoe.svg": "e5ee0e5c323d40157867d403412e0475",
"assets/packages/generic_shop_app_froddo_b2c/assets/froddo_b2c/svg/logo.svg": "f285c4dd74db63b1ff26478cdce77555",
"assets/packages/generic_shop_app_froddo_b2c/assets/froddo_b2c/fonts/MerriweatherSans-VariableFont_wght.ttf": "9ca3378cf3a4d03361cf8630282524de",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/packages/generic_shop_app_fitness_tracker/assets/svg/placeholder.svg": "03ad0e42af62dc4ddbb5bdbc0209e807",
"assets/packages/generic_shop_app_fitness_tracker/assets/fitness_tracker/images/herbalife-logo.webp": "483140e83c7ef1e0a7dbf8991d168b80",
"assets/packages/generic_shop_app_fitness_tracker/assets/fitness_tracker/images/banner_1.webp": "f1742585fb79dd3f65a6a02de9fc05f1",
"assets/packages/generic_shop_app_fitness_tracker/assets/fitness_tracker/images/banner_0.webp": "7d5e56bd6a23470dc7dc48b6c1bab398",
"assets/packages/generic_shop_app_fitness_tracker/assets/fitness_tracker/images/banner_2.webp": "529b9ea2ebbb999587db72098b09c923",
"assets/packages/generic_shop_app_fitness_tracker/assets/fitness_tracker/data.json": "99011b8b56184c636b78911ef02fc4f9",
"assets/packages/generic_shop_app_fitness_tracker/assets/fitness_tracker/fonts/OpenSans-VariableFont_wdth,wght.ttf": "78609089d3dad36318ae0190321e6f3e",
"assets/packages/generic_shop_app_fitness_tracker/assets/html/licences.html": "cb72836ec6f2aa066d1d0ed4b0a1c5a1",
"assets/packages/generic_shop_app_demo/assets/svg/placeholder.svg": "03ad0e42af62dc4ddbb5bdbc0209e807",
"assets/packages/generic_shop_app_demo/assets/demo/banner_1.jpg": "287292ce05f988f9fbf9cc57541f75ad",
"assets/packages/generic_shop_app_demo/assets/demo/banner_0.jpg": "ab65ef4edbdb5e29e5ba13f1657e6b18",
"assets/packages/generic_shop_app_demo/assets/README.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/generic_shop_app_demo/assets/fonts/ComicNeue-Light.ttf": "d281a88408256d295eee264279a181f7",
"assets/packages/generic_shop_app_demo/assets/fonts/ComicNeue-Regular.ttf": "26d37a6883b56cb83fd73b8bc16de513",
"assets/packages/generic_shop_app_demo/assets/fonts/ComicNeue-Bold.ttf": "73c1f26e056a7a57ab05a7c03e9d1e02",
"assets/packages/generic_shop_app_cms/assets/svg/placeholder.svg": "03ad0e42af62dc4ddbb5bdbc0209e807",
"assets/packages/generic_shop_app_cms/assets/demo/banner_1.jpg": "287292ce05f988f9fbf9cc57541f75ad",
"assets/packages/generic_shop_app_cms/assets/demo/banner_0.jpg": "ab65ef4edbdb5e29e5ba13f1657e6b18",
"assets/packages/generic_shop_app_cms/assets/fitness_tracker/data.json": "99011b8b56184c636b78911ef02fc4f9",
"assets/packages/generic_shop_app_cms/assets/README.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/generic_shop_app_cms/assets/froddo_b2b/svg/shoe.svg": "e5ee0e5c323d40157867d403412e0475",
"assets/packages/generic_shop_app_cms/assets/froddo_b2b/svg/barcode_reset_settings.svg": "202075adc186423e9bb3da2114af3a6e",
"assets/packages/generic_shop_app_cms/assets/froddo_b2b/svg/barcode_set_name_mode.svg": "aa478239bfcd38725be3e6c3581432f3",
"assets/packages/generic_shop_app_cms/assets/froddo_b2b/svg/logo.svg": "f285c4dd74db63b1ff26478cdce77555",
"assets/packages/generic_shop_app_cms/assets/froddo_b2b/svg/barcode_scanner_set_mode.svg": "50a54cd79c88a23e683a99a143a8b980",
"assets/packages/generic_shop_app_cms/assets/froddo_b2c/svg/shoe.svg": "e5ee0e5c323d40157867d403412e0475",
"assets/packages/generic_shop_app_cms/assets/froddo_b2c/svg/logo.svg": "f285c4dd74db63b1ff26478cdce77555",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "beb126cc8f87336ce04e893db1d8bce8",
"assets/fonts/MaterialIcons-Regular.otf": "1b68ebcedc929c08db6187bb100b0679",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
