# Nefro Araçlar

Nefrolojide sık kullanılan hesaplayıcılar, risk skorları, asit–baz ve elektrolit algoritmaları ile böbrek fonksiyonuna göre ilaç dozu rehberi. RTEÜ Tıp Fakültesi Nefroloji Bilim Dalı için hazırlanmıştır. Sürüm 0.3.2.

**Uygulama:** https://karadr79.github.io/NefroHesapAraclar/

İlk açılıştan sonra internetsiz çalışır. Hasta verisi kaydedilmez ve hiçbir sunucuya gönderilmez. Eğitim ve hızlı başvuru amaçlıdır; klinik kararın ve kurum protokollerinin yerini almaz.

## İçerik

| Bölüm | Hesaplayıcılar |
|---|---|
| Hesap | eGFR (CKD-EPI 2021 kreatinin, 2012 kreatinin–sistatin C), Cockcroft-Gault, VKİ, KDIGO AKI, FENa/FEÜre, fraksiyonel atılımlar (FEMg, FEPO₄, FEÜA, FEK), serbest su klirensi, idrar ozmolal açığı, HD yeterliliği (URR, spKt/V, eKt/V, stdKt/V, nPCR), HD seans parametreleri, PD haftalık Kt/V ve PET, CRRT (doz, filtrasyon fraksiyonu, sitrat, hiponatremi), 24 saatlik idrar, KBH anemisi, KBH-MKB, birim dönüştürücü |
| Elektrolit | Asit–baz çözücü, hiponatremi, hipernatremi, hiperkalemi, hipokalemi, ozmolalite, serbest su klirensi, TTKG |
| Risk | KFRE, Mehran, Thakar, KBH progresyon hızı, ADPKD (Mayo sınıfı, PROPKD), SCORE2 / SCORE2-OP / SCORE2-Diabetes ve KBH eki, PREVENT, KBM evresi, CHA₂DS₂-VA, HAS-BLED, RCRI, LDL (Sampson), QTc, H₂FPEF, diüretik direnci, takrolimus/KNİ düzeyi, PLASMIC, MGUS/MGRS, steroid eşdeğeri |
| İlaç | 46 ilaç (22.10.2026 klinik onaylı); CrCl/eGFR bantları, HD, PD, CRRT dozları |

Formül, eşik ve doz değerleri Nefroloji Kaynaklar eBook esas alınarak hazırlanmıştır.

## Nefro Kons ile birlikte

Nefro Kons'taki "Hesap araçları" düğmesi bu uygulamayı açar ve formdaki yaş, cinsiyet, kilo ve kreatinin değerlerini hasta şeridine aktarır. Değerler bağlantının `#` kısmında taşınır, sunucuya gönderilmez ve uygulama açılınca adresten silinir. Kaynak sekmesinden Nefro Kons'a geri dönülebilir.

## Telefona kurulum

Adresi bir kez internet varken açın.

- **iPhone:** Safari → Paylaş → Ana Ekrana Ekle
- **Android:** Chrome → ⋮ → Uygulamayı yükle

## Güncelleme

Yeni sürümde `index.html` ve `sw.js` birlikte değişir; ikisini birlikte yükleyin (Add file → Upload files). Uygulama açıkken "Yeni sürüm hazır → Yenile" bildirimi çıkar.

## Doğrulama

`test-raporu.txt`: 108 referans olguyla formül testleri (SCORE2, SCORE2-OP ve SCORE2-Diabetes için özgün makalelerdeki örnek hastalar, PREVENT için preventr paketinin referans değerleri dahil).
