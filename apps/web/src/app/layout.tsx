/**
 * Bu layout bileşeni uygulamanın temel HTML iskeletini ve stil dosyalarını yükler.
 */
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matbaai Yönetim Paneli",
  description:
    "Matbaa ve grafik ajansı müşterileri için teklif, tasarım ve üretim süreçlerini dijitalleştiren platform."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className="h-full bg-brand-soft">
      <body className={`${inter.className} min-h-screen`}>{children}</body>
    </html>
  );
}
