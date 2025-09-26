# Matbaai

Matbaai; matbaa ve grafik ajansı süreçlerini dijitalleştirmek için hazırlanan Next.js + Express monoreposudur.

## Yapı

- `apps/web`: Next.js 14 + TailwindCSS ile hazırlanmış müşteri ve yönetici arayüzü iskeleti.
- `apps/api`: Express tabanlı temel fiyatlandırma ve niyet analizi uç noktaları.

## Geliştirme Komutları

```bash
npm run dev:web   # Next.js arayüzünü başlatır
npm run dev:api   # Express API sunucusunu başlatır
```

## Ortam Değişkenleri

`apps/api/.env.example` dosyasını referans alarak kendi `.env` dosyanızı oluşturun.
