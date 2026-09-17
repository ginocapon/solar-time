import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solartime.it"),
  title: {
    default: "Solar Time | Energia, risparmio, indipendenza",
    template: "%s | Solar Time",
  },
  description: company.subtitle,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="pb-16 lg:pb-0">
        <a href="#contenuto" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:px-3 focus:py-2">
          Salta al contenuto
        </a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <StickyMobileCta />
        <JsonLd />
      </body>
    </html>
  );
}
