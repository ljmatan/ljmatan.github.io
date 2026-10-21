'use strict';

// Dominus Skripta — the web app's offline copy. Template: plugins/edu/tool/web_offline_sw.js;
// tool/web_offline.dart writes build/web/sw.js from it after `flutter build web`, filling in
// the build's version and the files to keep from the start.
//
// The shell, the content and the fonts are kept when the worker installs; CanvasKit and
// anything else the first visit loaded is kept once the page reports it (see index.html);
// then, one by one in the background, every lesson picture — unless the browser asks to save
// data, in which case a picture is kept the first time it is shown. Everything is read from
// the network first while online, so a deploy shows at once; the copy answers when the
// network does not. The CMS (admin/) is never kept: it needs the network anyway.
//
// "The network" means the server, not the browser's HTTP cache: GitHub Pages lets a browser
// keep a file for 10 minutes, which would hide a publish from anyone who opened the app shortly
// before it. Every such read is revalidated (an unchanged file costs a 304).

const VERSION = '8088bb1a';
const CACHE = 'skripta-' + VERSION;
const PRECACHE = [
  "./",
  "assets/AssetManifest.bin",
  "assets/AssetManifest.bin.json",
  "assets/FontManifest.json",
  "assets/fonts/MaterialIcons-Regular.otf",
  "assets/packages/flutter_map/lib/assets/flutter_map_logo.png",
  "assets/packages/generic_shop_app_edu/assets/edu/brand/dominus-logo.png",
  "assets/packages/generic_shop_app_edu/assets/edu/data/catalog.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/anatomija-i-fiziologija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/fizikalna-terapija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/kineziterapija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/klinicka-medicina.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/masaza.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/mikrobiologija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/osnove-kineziologije.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/patofiziologija.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/prva-pomoc.json",
  "assets/packages/generic_shop_app_edu/assets/edu/data/tests.json",
  "assets/packages/generic_shop_app_edu/fonts/Rubik.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-Italic.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-Regular.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-SemiBold.ttf",
  "assets/packages/generic_shop_app_edu/fonts/literata/LiterataDisplay-SemiBold.ttf",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Bold.ttf",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Medium.ttf",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Regular.ttf",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Bold.ttf",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Light.ttf",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Medium.ttf",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Regular.ttf",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-SemiBold.ttf",
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
const IMAGES = [
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/kostur.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/neuron.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/pluca-model.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/skeletno-misicno-tkivo.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/srce.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/ems-uredaj.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/hladni-oblog.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/termalni-bazen.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/termofor.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/uv-lampa.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/bucice.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/dinamometar.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/hodalica.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/istezanje.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/spirometar.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/stake.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/endoproteza-kuka-rtg.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/kraljeznicna-mozdina.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/mozdani-udar-presjek.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/prijelom-kuka-rtg.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/reumatoidni-artritis-sake.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/kompresivni-zavoj.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/masaza-nakon-utrke.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/masaza-potkoljenice.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/natpis-masaza.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/sportska-masaza.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/antibiogram.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/aspergillus-kultura.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/autoklav.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/endospore-bacillus.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/gram-bojenje.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/gram-pozitivni-koki.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/krpelj-ixodes.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/mikroskop.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/mycobacterium-ziehl-neelsen.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/pranje-ruku.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/rukavica.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/staphylococcus-krvni-agar.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/hod.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/kifoticno-drzanje.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/klackalica.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/koljeno-rtg.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/pregib-lakta.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/ravnine-tijela.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/erizipel.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/osteoartritis-saka-rtg.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/sivana-rana.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/varikozne-vene.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/aed-novigrad.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/bocni-polozaj.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/lancetar-glukometar.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/tecaj-ozivljavanja.jpg",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/zavoj-palca.jpg"
];
const NETWORK_TIMEOUT_MS = 6000;

const scopePath = new URL(self.registration.scope).pathname;

// CanvasKit comes from Google's CDN, under a path named by the engine build.
function canvasKit(url) {
  return url.origin === 'https://www.gstatic.com' && url.pathname.startsWith('/flutter-canvaskit/');
}

function handled(url) {
  if (canvasKit(url)) return true;
  if (url.origin !== self.location.origin) return false;
  if (!url.pathname.startsWith(scopePath)) return false;
  const path = url.pathname.slice(scopePath.length);
  return !path.startsWith('admin/') && path !== 'sw.js';
}

// Files whose name never changes within a build and that are large: from the copy first.
function immutable(url) {
  if (canvasKit(url)) return true;
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
  if (data.type === 'cache-images') {
    event.waitUntil(keepImages());
    return;
  }
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

// Every lesson picture, one at a time so the app's own requests keep the bandwidth; a picture
// already kept is skipped, so a later visit only finishes what an earlier one began.
let keepingImages = null;
function keepImages() {
  keepingImages = keepingImages || (async () => {
    const cache = await caches.open(CACHE);
    for (const path of IMAGES) {
      if (await cache.match(path)) continue;
      try {
        await cache.add(path);
      } catch (e) {
        console.warn('sw: could not keep', path, e);
      }
    }
  })().finally(() => {
    keepingImages = null;
  });
  return keepingImages;
}

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
  // A script tag fetches a cross-origin file without CORS: its response is opaque, yet usable.
  if (response.ok || response.type === 'opaque') await cache.put(request, response.clone());
  return response;
}

// A navigation's Request cannot be copied with new options, so it is fetched by its URL — with
// redirects left to the browser, as for the navigation itself (".../admin" → ".../admin/").
function revalidated(request) {
  return request.mode === 'navigate'
    ? fetch(request.url, { cache: 'no-cache', redirect: 'manual' })
    : fetch(request, { cache: 'no-cache' });
}

async function fromNetworkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await withTimeout(revalidated(request), NETWORK_TIMEOUT_MS);
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
