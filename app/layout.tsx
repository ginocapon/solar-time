import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AdvisorBot } from "@/components/AdvisorBot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { company } from "@/data/company";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://solartime.it"),
  title: {
    default: "Solar Time | Fotovoltaico civile, industriale e a terra",
    template: "%s | Solar Time",
  },
  description: company.subtitle,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="bg-cream pb-16 font-sans text-ink lg:pb-0">
        <a href="#contenuto" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-cream focus:px-3 focus:py-2">
          Salta al contenuto
        </a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <StickyMobileCta />
        <AdvisorBot />
        <JsonLd />
      </body>
    </html>
  );
}
