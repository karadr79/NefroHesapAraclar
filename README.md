# Nefro Araçlar (PWA) — sürüm 0.2.0

Nefroloji hesaplayıcıları, asit–baz/elektrolit algoritmaları, klinik modüller (diüretik direnci, takrolimus) ve böbrek dozu rehberi. İlk açılıştan sonra internetsiz çalışır. Hasta verisi kaydedilmez, hiçbir sunucuya gönderilmez.

## GitHub Pages'e yükleme
1. GitHub'da `karadr79` hesabında yeni depo: **nefro-araclar** (Public).
2. Bu klasördeki tüm dosyaları depo köküne yükleyin: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable.png` (README ve test raporu isteğe bağlı).
3. Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `(root)` → Save.
4. Birkaç dakika sonra adres: `https://karadr79.github.io/nefro-araclar/`
5. Telefonda bu adresi açın → Paylaş/menü → **Ana Ekrana Ekle**. Bir kez açıldıktan sonra çevrimdışı çalışır.

## Güncelleme
Yeni sürümde `index.html` ile birlikte `sw.js` içindeki `VER` değeri değişir; ikisini birlikte yükleyin. Uygulama açıkken "Yeni sürüm hazır → Yenile" bildirimi çıkar.

## Doğrulama
`test-raporu.txt`: 78 referans olgu (SCORE2, SCORE2-OP ve SCORE2-Diabetes için makaledeki örnek hastalar dahil) ile formül testleri. İlaç kayıtları "Klinik onay bekliyor" etiketiyle gelir; onaylanan ilaçlar bir sonraki sürümde işaretlenir.
