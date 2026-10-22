'use strict';

// Dominus Skripta — the web app's offline copy. Template: plugins/edu/tool/web_offline_sw.js;
// tool/web_offline.dart writes build/web/sw.js from it after `flutter build web`, filling in the
// build's version and a fingerprint of every file.
//
// Nothing is downloaded for the copy itself. What the first visit loaded before this worker took
// over is kept once the page reports it (see index.html), from the browser's own cache; every
// later read is kept as it passes. Lesson pictures are kept as they are shown, or all at once when
// the app asks for them (Settings). The copy outlives a deploy: the new worker drops only the
// files whose fingerprint changed, so a content edit costs a returning visitor that one file.
//
// Everything but the pictures and CanvasKit is read from the network first while online, so a
// deploy shows at once, and the copy answers when the network does not. "The network" means the
// server, not the browser's HTTP cache: GitHub Pages lets a browser keep a file for 10 minutes,
// which would hide a publish from anyone who opened the app shortly before it. Every such read is
// revalidated (an unchanged file costs a 304). The CMS (admin/) is never kept: it needs the
// network anyway.

const VERSION = '04c4bdd5';
// One copy for every version; FILES says which of its files are current.
const CACHE = 'skripta-files';
// The fingerprints of the files CACHE holds, under MANIFEST.
const META = 'skripta-meta';
const MANIFEST = 'manifest.json';
const FILES = {
  "assets/AssetManifest.bin": "0ee1135e",
  "assets/AssetManifest.bin.json": "45435f21",
  "assets/FontManifest.json": "38447304",
  "assets/NOTICES": "2a732d83",
  "assets/fonts/MaterialIcons-Regular.otf": "d9775941",
  "assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "b742afe4",
  "assets/packages/generic_shop_app_edu/assets/edu/brand/dominus-logo.png": "a4f06226",
  "assets/packages/generic_shop_app_edu/assets/edu/data/catalog.json": "c00459a5",
  "assets/packages/generic_shop_app_edu/assets/edu/data/index.json": "2cc65791",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/anatomija-i-fiziologija.json": "a0a0e8f7",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/fizikalna-terapija.json": "6a286eab",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/kineziterapija.json": "ccf92295",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/klinicka-medicina.json": "968ed7be",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/masaza.json": "fb7db84a",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/mikrobiologija.json": "0a8f2a88",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/osnove-kineziologije.json": "815c2664",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/patofiziologija.json": "7722a4b0",
  "assets/packages/generic_shop_app_edu/assets/edu/data/subjects/prva-pomoc.json": "9ee2a065",
  "assets/packages/generic_shop_app_edu/assets/edu/data/tests.json": "e7a03f5d",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/kostur.jpg": "38ef08ff",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/neuron.jpg": "08570d68",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/pluca-model.jpg": "48a3b8a9",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/skeletno-misicno-tkivo.jpg": "84cf6f82",
  "assets/packages/generic_shop_app_edu/assets/edu/images/anatomija-i-fiziologija/srce.jpg": "fa39bf77",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/ems-uredaj.jpg": "015c2877",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/hladni-oblog.jpg": "b6690a45",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/termalni-bazen.jpg": "229bb1c8",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/termofor.jpg": "bd2ace69",
  "assets/packages/generic_shop_app_edu/assets/edu/images/fizikalna-terapija/uv-lampa.jpg": "734836f4",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/bucice.jpg": "2aa7eac5",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/dinamometar.jpg": "201aaf68",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/hodalica.jpg": "3792cfad",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/istezanje.jpg": "0740fac4",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/spirometar.jpg": "74948191",
  "assets/packages/generic_shop_app_edu/assets/edu/images/kineziterapija/stake.jpg": "00d48916",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/endoproteza-kuka-rtg.jpg": "a71f3585",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/kraljeznicna-mozdina.jpg": "e436b7f7",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/mozdani-udar-presjek.jpg": "58215074",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/prijelom-kuka-rtg.jpg": "4c9f1610",
  "assets/packages/generic_shop_app_edu/assets/edu/images/klinicka-medicina/reumatoidni-artritis-sake.jpg": "f7526b58",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/kompresivni-zavoj.jpg": "19c5b8be",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/masaza-nakon-utrke.jpg": "c8cf00f9",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/masaza-potkoljenice.jpg": "9610ef9e",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/natpis-masaza.jpg": "b3302039",
  "assets/packages/generic_shop_app_edu/assets/edu/images/masaza/sportska-masaza.jpg": "22992570",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/antibiogram.jpg": "5083d679",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/aspergillus-kultura.jpg": "c2176b00",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/autoklav.jpg": "de49caa5",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/endospore-bacillus.jpg": "429e66a7",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/gram-bojenje.jpg": "e3ab4698",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/gram-pozitivni-koki.jpg": "75b075a4",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/krpelj-ixodes.jpg": "1075cd1d",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/mikroskop.jpg": "45ab125b",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/mycobacterium-ziehl-neelsen.jpg": "0c99bff7",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/pranje-ruku.jpg": "0d546e7c",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/rukavica.jpg": "a7e1fabf",
  "assets/packages/generic_shop_app_edu/assets/edu/images/mikrobiologija/staphylococcus-krvni-agar.jpg": "23dfaab6",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/hod.jpg": "91956db1",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/kifoticno-drzanje.jpg": "59606223",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/klackalica.jpg": "4724e6f4",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/koljeno-rtg.jpg": "5e250710",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/pregib-lakta.jpg": "041f899b",
  "assets/packages/generic_shop_app_edu/assets/edu/images/osnove-kineziologije/ravnine-tijela.jpg": "e62ecedf",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/erizipel.jpg": "c1d4f59b",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/osteoartritis-saka-rtg.jpg": "df48cf50",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/sivana-rana.jpg": "b7024520",
  "assets/packages/generic_shop_app_edu/assets/edu/images/patofiziologija/varikozne-vene.jpg": "17b570a1",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/aed-novigrad.jpg": "1a66f22d",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/bocni-polozaj.jpg": "8739e89d",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/lancetar-glukometar.jpg": "d2cf74ed",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/tecaj-ozivljavanja.jpg": "0b035772",
  "assets/packages/generic_shop_app_edu/assets/edu/images/prva-pomoc/zavoj-palca.jpg": "742298ea",
  "assets/packages/generic_shop_app_edu/fonts/Rubik.ttf": "3950290d",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-Italic.ttf": "a320f3ce",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-Regular.ttf": "0a891136",
  "assets/packages/generic_shop_app_edu/fonts/literata/Literata-SemiBold.ttf": "ebb26e28",
  "assets/packages/generic_shop_app_edu/fonts/literata/LiterataDisplay-SemiBold.ttf": "6a3d9f5a",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Bold.ttf": "e24317a1",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Medium.ttf": "c093d3ea",
  "assets/packages/generic_shop_app_edu/fonts/pdf/Rubik-Regular.ttf": "6d2e08d5",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Bold.ttf": "97b4861f",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Light.ttf": "9327d0a2",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Medium.ttf": "52ed3025",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-Regular.ttf": "2d8895ba",
  "assets/packages/merged_gsa/assets/fonts/Quicksand-SemiBold.ttf": "7ae8cc23",
  "assets/shaders/ink_sparkle.frag": "66d67417",
  "assets/shaders/stretch_effect.frag": "e4babd66",
  "canvaskit/canvaskit.js": "5db6f5c5",
  "canvaskit/canvaskit.wasm": "670cdecb",
  "canvaskit/chromium/canvaskit.js": "9ffe1adc",
  "canvaskit/chromium/canvaskit.wasm": "5ff06f7c",
  "canvaskit/experimental_webparagraph/canvaskit.js": "ca815e8f",
  "canvaskit/experimental_webparagraph/canvaskit.wasm": "3daf6ea5",
  "canvaskit/skwasm.js": "c715b92f",
  "canvaskit/skwasm.wasm": "bbf53370",
  "canvaskit/skwasm_heavy.js": "66d3845a",
  "canvaskit/skwasm_heavy.wasm": "fe5843ea",
  "canvaskit/wimp.js": "2d093b56",
  "canvaskit/wimp.wasm": "c086c587",
  "config.json": "17543092",
  "flutter.js": "e14d9b11",
  "flutter_bootstrap.js": "100eeee7",
  "icons/Icon-192.png": "1f8ed701",
  "icons/Icon-512.png": "c307445a",
  "icons/dominus-logo.png": "a4f06226",
  "icons/favicon.png": "a9b180ac",
  "index.html": "9559d4f8",
  "main.dart.js": "b34bfb20",
  "manifest.json": "560eee7b",
  "version.json": "e26f50ba"
};
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

// The build's name for the file at [url] ('index.html' for the app's folder); null for CanvasKit.
function buildPath(url) {
  if (canvasKit(url)) return null;
  let path = url.pathname.slice(scopePath.length);
  try {
    path = decodeURIComponent(path);
  } catch (e) {
    // Kept as it is.
  }
  return path === '' ? 'index.html' : path;
}

// Files whose fingerprint guards them, and that are large: from the copy first.
function fromCopy(url) {
  if (canvasKit(url)) return true;
  const path = url.pathname.slice(scopePath.length);
  return path.startsWith('canvaskit/') || path.startsWith('assets/packages/generic_shop_app_edu/assets/edu/images/');
}

// The copy's key for [url]: without the query, so `version.json?cachebuster=…` is one entry.
function key(url) {
  const bare = new URL(url);
  bare.search = '';
  return bare.href;
}

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Builds before this worker kept a copy per version.
    for (const name of await caches.keys()) {
      if (name.startsWith('skripta-') && name !== CACHE && name !== META) await caches.delete(name);
    }
    const meta = await caches.open(META);
    const stored = await meta.match(MANIFEST);
    const kept = stored ? await stored.json() : {};
    const cache = await caches.open(CACHE);
    for (const request of await cache.keys()) {
      const path = buildPath(new URL(request.url));
      if (path === null || (FILES[path] !== undefined && kept[path] === FILES[path])) continue;
      // Changed or gone. The page may have read the new file through the previous worker while
      // this one installed: what matches the new fingerprint is current, and stays.
      const response = FILES[path] === undefined ? undefined : await cache.match(request);
      if (!response || (await fingerprint(response)) !== FILES[path]) await cache.delete(request);
    }
    await meta.put(MANIFEST, new Response(JSON.stringify(FILES), { headers: { 'Content-Type': 'application/json' } }));
    await self.clients.claim();
  })());
});

// FNV-1a over the body, as tool/web_offline.dart fingerprints a file.
async function fingerprint(response) {
  const bytes = new Uint8Array(await response.arrayBuffer());
  let hash = 0x811c9dc5;
  for (let i = 0; i < bytes.length; i++) hash = Math.imul(hash ^ bytes[i], 0x01000193) >>> 0;
  return hash.toString(16).padStart(8, '0');
}

// The files the first visit loaded before this worker took over: kept from the browser's cache,
// which has them already, so nothing is downloaded twice.
self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type !== 'cache-urls' || !Array.isArray(data.urls)) return;
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    for (const raw of [self.registration.scope, ...data.urls]) {
      let url;
      try {
        url = new URL(raw);
      } catch (e) {
        continue;
      }
      if (!handled(url) || (await cache.match(key(url)))) continue;
      try {
        const response = await fetch(url.href, { cache: 'force-cache' });
        if (response.ok) await cache.put(key(url), response);
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
  event.respondWith(fromCopy(url) ? fromCopyFirst(request) : fromNetworkFirst(request));
});

async function fromCopyFirst(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(key(request.url));
  if (hit) return hit;
  const response = await fetch(request);
  // A script tag fetches a cross-origin file without CORS: its response is opaque, yet usable.
  if (response.ok || response.type === 'opaque') await cache.put(key(request.url), response.clone());
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
    if (response.ok) await cache.put(key(request.url), response.clone());
    return response;
  } catch (e) {
    const hit = (await cache.match(key(request.url))) ||
      (request.mode === 'navigate' ? await cache.match(key(self.registration.scope)) : undefined);
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
