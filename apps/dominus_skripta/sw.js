'use strict';

// Dominus Skripta — the web app's offline copy. Template: plugins/edu/tool/web_offline_sw.js;
// tool/web_offline.dart writes build/web/sw.js from it after `flutter build web`, filling in
// the build's version and the files to keep from the start.
//
// The shell, the content and the fonts are kept when the worker installs; CanvasKit and
// anything else the first visit loaded is kept once the page reports it (see index.html);
// a lesson picture is kept the first time it is shown. Everything is read from the network
// first while online, so a deploy shows at once; the copy answers when the network does not.
// The CMS (admin/) is never kept: it needs the network anyway.

const VERSION = 'a50f309f';
const CACHE = 'skripta-' + VERSION;
const PRECACHE = [
  "./",
  "assets/AssetManifest.bin",
  "assets/AssetManifest.bin.json",
  "assets/FontManifest.json",
  "assets/fonts/MaterialIcons-Regular.otf",
  "assets/packages/flutter_map/lib/assets/flutter_map_logo.png",
  "assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Bold.ttf",
  "assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Light.ttf",
  "assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Medium.ttf",
  "assets/packages/generic_shop_app_content/assets/fonts/Quicksand-Regular.ttf",
  "assets/packages/generic_shop_app_content/assets/fonts/Quicksand-SemiBold.ttf",
  "assets/packages/generic_shop_app_edu/assets/edu/brand/dominus-logo.png",
  "assets/packages/generic_shop_app_edu/assets/edu/data/catalog.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/anatomija-i-fiziologija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/fizikalna-terapija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/kineziterapija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/klinicka-medicina.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/masaza.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/mikrobiologija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/osnove-kineziologije.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/patofiziologija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/subjects/prva-pomoc.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/programs/fizioterapeut/tests.json",
  "assets/packages/generic_shop_app_edu/fonts/Rubik.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-Italic.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-Regular.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-SemiBold.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/LiterataDisplay-SemiBold.ttf",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Bold.ttf",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Medium.ttf",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Regular.ttf",
  "assets/shaders/ink_sparkle.frag",
  "assets/shaders/stretch_effect.frag",
  "flutter.js",
  "flutter_bootstrap.js",
  "icons/Icon-192.png",
  "icons/Icon-512.png",
  "icons/dominus-logo.png",
  "icons/favicon.png",
  "index.html",
  "main.dart.js",
  "manifest.json",
  "version.json"
];
const NETWORK_TIMEOUT_MS = 6000;

const scopePath = new URL(self.registration.scope).pathname;

function handled(url) {
  if (url.origin !== self.location.origin) return false;
  if (!url.pathname.startsWith(scopePath)) return false;
  const path = url.pathname.slice(scopePath.length);
  return !path.startsWith('admin/') && path !== 'sw.js';
}

// Files whose name never changes within a build and that are large: from the copy first.
function immutable(url) {
  const path = url.pathname.slice(scopePath.length);
  return path.startsWith('canvaskit/') || path.startsWith('assets/packages/generic_shop_app_edu/assets/edu/images/');
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // One by one, so a single missing file does not cost the whole copy.
    await Promise.all(PRECACHE.map(async (path) => {
      try {
        await cache.add(new Request(path, { cache: 'reload' }));
      } catch (e) {
        console.warn('sw: could not keep', path, e);
      }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('skripta-') && key !== CACHE) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type !== 'cache-urls' || !Array.isArray(data.urls)) return;
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const raw of data.urls) {
      let url;
      try {
        url = new URL(raw);
      } catch (e) {
        continue;
      }
      if (!handled(url) || (await cache.match(url.href, { ignoreSearch: true }))) continue;
      try {
        await cache.add(url.href);
      } catch (e) {
        console.warn('sw: could not keep', url.href, e);
      }
    }
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (!handled(url)) return;
  event.respondWith(immutable(url) ? fromCopyFirst(request) : fromNetworkFirst(request));
});

async function fromCopyFirst(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request, { ignoreSearch: true });
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) await cache.put(request, response.clone());
  return response;
}

async function fromNetworkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await withTimeout(fetch(request), NETWORK_TIMEOUT_MS);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const hit = (await cache.match(request, { ignoreSearch: true })) ||
      (request.mode === 'navigate' ? await cache.match('./') : undefined);
    if (hit) return hit;
    throw e;
  }
}

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('timeout')), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}
