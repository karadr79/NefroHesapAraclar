# Nefro Araçlar

Nefrolojide sık kullanılan hesaplayıcılar, risk skorları, asit–baz ve elektrolit algoritmaları ile böbrek fonksiyonuna göre ilaç dozu rehberi. RTEÜ Tıp Fakültesi Nefroloji Bilim Dalı için hazırlanmıştır. Sürüm 0.2.0.

**Uygulama:** https://karadr79.github.io/NefroHesapAraclar/

İlk açılıştan sonra internetsiz çalışır. Hasta verisi kaydedilmez ve hiçbir sunucuya gönderilmez. Eğitim ve hızlı başvuru amaçlıdır; klinik kararın ve kurum protokollerinin yerini almaz.

## İçerik

| Bölüm | Hesaplayıcılar |
|---|---|
| Hesap | eGFR (CKD-EPI 2021 kreatinin, 2012 kreatinin–sistatin C), Cockcroft-Gault, KDIGO AKI, FENa/FEÜre, HD yeterliliği (URR, spKt/V, eKt/V, stdKt/V, nPCR), HD seans parametreleri, PD haftalık Kt/V ve PET, 24 saatlik idrar, KBH anemisi, KBH-MKB |
| Elektrolit | Asit–baz çözücü, hiponatremi, hipernatremi, hiperkalemi, hipokalemi, ozmolalite, serbest su klirensi, TTKG |
| Risk | KFRE, Mehran (kontrast nefropatisi), KBH progresyon hızı, SCORE2 / SCORE2-OP / SCORE2-Diabetes ve KBH eki, diüretik direnci, takrolimus/KNİ düzeyi |
| İlaç | 46 ilaç; CrCl/eGFR bantları, HD, PD, CRRT dozları |

Formül, eşik ve doz değerleri Nefroloji Kaynaklar eBook esas alınarak hazırlanmıştır; her ilaç kaydı klinik onaydan sonra "Onaylandı" olarak işaretlenir.

## Telefona kurulum

Adresi bir kez internet varken açın.

- **iPhone:** Safari → Paylaş → Ana Ekrana Ekle
- **Android:** Chrome → ⋮ → Uygulamayı yükle

## Güncelleme

Yeni sürümde `index.html` ve `sw.js` birlikte değişir; ikisini birlikte yükleyin (Add file → Upload files). Uygulama açıkken "Yeni sürüm hazır → Yenile" bildirimi çıkar.

## Doğrulama

`test-raporu.txt`: 78 referans olguyla formül testleri (SCORE2, SCORE2-OP ve SCORE2-Diabetes için özgün makalelerdeki örnek hastalar dahil).
