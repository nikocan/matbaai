/**
 * Bu sayfa Matbaai platformunun temel modüllerini ve hızlı akışlarını özetleyen ana paneldir.
 */
import Link from "next/link";

const modules = [
  {
    name: "CRM ve İletişim",
    description:
      "Müşteri kayıtları, çok kanallı mesajlaşma ve otomatik yanıt akışlarıyla lead yönetimini hızlandırır.",
    href: "#crm"
  },
  {
    name: "Teklif Motoru",
    description:
      "Adet, malzeme ve yüzey işlemlerine göre anında fiyat aralığı ve PDF teklif çıktısı sağlar.",
    href: "#pricing"
  },
  {
    name: "Tasarım Stüdyosu",
    description:
      "AI destekli renk varyantı, dieline kütüphanesi ve sosyal medya ölçülerine otomatik uyarlama sunar.",
    href: "#design"
  },
  {
    name: "Üretim Planlama",
    description:
      "İş emri, makine kapasitesi ve kalite kontrol adımlarını izlenebilir kılan planlama panosu içerir.",
    href: "#production"
  },
  {
    name: "Raporlama",
    description:
      "Sektörel ciro, termin performansı ve marj takibini gerçek zamanlı panellerle görselleştirir.",
    href: "#reports"
  }
];

const flows = [
  {
    title: "Lead'den Siparişe Akış",
    steps: [
      "WhatsApp veya formdan talep al",
      "AI niyet analizi ile sektör ve ürün tespit et",
      "Kural bazlı fiyat aralığı oluştur",
      "Satış onayı sonrası PDF teklif paylaş",
      "Ödeme bağlantısı ve sipariş onayını tamamla"
    ]
  },
  {
    title: "Tasarım Onay Döngüsü",
    steps: [
      "Dieline seç veya müşteri tasarımını yükle",
      "Preflight raporunu oluştur ve uyarıları çöz",
      "Revizyon yorumlarını takip et",
      "Renk onayı ver ve üretime yönlendir"
    ]
  },
  {
    title: "Üretimden Teslime",
    steps: [
      "Makine ve vardiya planını oluştur",
      "Kalite kontrol için checklist uygula",
      "Paketleme ve kargo etiketini hazırla",
      "Takip numarasını müşteriyle paylaş"
    ]
  }
];

export default function HomePage() {
  return (
    <main className="px-6 py-10 md:px-12 lg:px-20">
      <section className="max-w-5xl">
        <p className="text-sm uppercase tracking-wide text-brand-accent">Matbaai Platformu</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">
          Matbaa ve grafik ajans süreçlerinizi tek panelde yönetin.
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          İlaç, kozmetik ve gıda üreticilerine özel hazırlanmış bu platform; teklif, tasarım,
          üretim ve iletişim süreçlerini dijitalleştirerek ekibinizin aynı dili konuşmasını sağlar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {modules.map((module) => (
            <Link
              key={module.name}
              href={module.href}
              className="rounded-full border border-brand-accent/20 px-4 py-2 text-sm text-brand-accent transition hover:bg-brand-accent hover:text-white"
            >
              {module.name}
            </Link>
          ))}
        </div>
      </section>

      <section id="crm" className="mt-14 grid gap-8 md:grid-cols-2">
        {modules.map((module) => (
          <article key={module.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{module.name}</h2>
            <p className="mt-3 text-slate-600">{module.description}</p>
            <p className="mt-4 text-sm font-medium text-brand-accent">
              Örnek çıktı: {module.name} modülü için demo ekranı hazırlanıyor.
            </p>
          </article>
        ))}
      </section>

      <section id="flows" className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Temel İş Akışları</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {flows.map((flow) => (
            <article key={flow.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{flow.title}</h3>
              <ol className="mt-4 space-y-2 text-sm text-slate-600">
                {flow.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section id="reports" className="mt-16 rounded-2xl border border-dashed border-brand-accent/40 bg-brand-soft p-8">
        <h2 className="text-2xl font-semibold text-slate-900">Sonraki Adımlar</h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          Bu iskelet; teklif formu, CRM, tasarım stüdyosu ve üretim planlama modüllerinin ilk ekranlarını hızlıca
          geliştirmek için temel oluşturur. Bir sonraki iterasyonda AI servis entegrasyonları, PDF teklif üretimi
          ve WhatsApp otomasyonunu ekleyebiliriz.
        </p>
      </section>
    </main>
  );
}
