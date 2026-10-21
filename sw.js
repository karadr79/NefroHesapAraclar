/* Nefro Araçlar service worker — önce önbellek, arka planda güncelleme */
const VER = 'nefro-araclar-v0.3.2';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VER).then(c => c.addAll(SHELL))); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const net = fetch(e.request).then(r => { if (r.ok) caches.open(VER).then(c => c.put(e.request, r.clone())); return r; }).catch(() => hit || caches.match('index.html'));
    return hit || net;
  }));
});
