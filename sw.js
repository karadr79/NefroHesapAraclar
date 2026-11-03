/* Nefro Araçlar service worker — önce önbellek, arka planda güncelleme */
const VER = 'nefro-araclar-v0.4.1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png','fonts.css','atkinson-hyperlegible-mono-latin-400-normal.woff2','atkinson-hyperlegible-mono-latin-600-normal.woff2','atkinson-hyperlegible-mono-latin-ext-400-normal.woff2','atkinson-hyperlegible-mono-latin-ext-600-normal.woff2','atkinson-hyperlegible-next-latin-400-normal.woff2','atkinson-hyperlegible-next-latin-500-normal.woff2','atkinson-hyperlegible-next-latin-700-normal.woff2','atkinson-hyperlegible-next-latin-800-normal.woff2','atkinson-hyperlegible-next-latin-ext-400-normal.woff2','atkinson-hyperlegible-next-latin-ext-500-normal.woff2','atkinson-hyperlegible-next-latin-ext-700-normal.woff2','atkinson-hyperlegible-next-latin-ext-800-normal.woff2','icon.svg','apple-touch-icon.png','disaktar.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VER).then(c => c.addAll(SHELL.map(u => new Request(u, {cache: 'reload'}))))); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER && k.startsWith('nefro-araclar')).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request.url, {cache: 'no-store'}).then(r => { const cp = r.clone(); caches.open(VER).then(c => c.put('index.html', cp)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r.ok) caches.open(VER).then(c => c.put(e.request, r.clone())); return r; }).catch(() => hit || caches.match('index.html'));
    return hit || net;
  }));
});
