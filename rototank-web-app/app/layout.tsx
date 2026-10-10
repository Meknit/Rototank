import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CallFloat from "@/components/CallFloat";
import ScrollProgress from "@/components/ScrollProgress";
import { site, siteUrl } from "@/lib/site";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Water Tanks in Kenya | Rototank Stores — Prices from KSh 6,500",
  description:
    "Buy durable water storage tanks in Kenya — 1,000L to 24,000L from KSh 6,500. Rototank Stores: plastic, underground & industrial tanks with fast delivery, installation and warranty across Nairobi. Get a free quote on WhatsApp.",
  keywords: [
    "water tanks Kenya",
    "water tank prices Kenya",
    "water storage tanks Nairobi",
    "plastic water tanks Kenya",
    "5000 litre water tank price Kenya",
    "10000 litre water tank Kenya",
    "underground water tanks Kenya",
    "industrial water tanks",
    "buy water tank Nairobi",
    "Rototank Stores",
  ],
  openGraph: {
    title: "Water Tanks in Kenya | Rototank Stores — Prices from KSh 6,500",
    description:
      "Durable water storage tanks 1,000L–24,000L with delivery, installation & warranty across Kenya. Free quote on WhatsApp.",
    type: "website",
    images: ["/media/tanks-hero.jpg"],
  },
  verification: {
    google: "4MO7GUZvCY7jUO6NFtPVNtX62hlgT3u6kXR8kphgZ0Y",
  },
};

export const viewport: Viewport = {
  themeColor: "#083344",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: site.name,
              description:
                "Water storage tank supplier in Kenya — plastic, underground and industrial tanks from 1,000L to 24,000L.",
              url: siteUrl,
              image: `${siteUrl}/media/tanks-hero.jpg`,
              telephone: "+254753273248",
              email: site.email,
              priceRange: "KSh 6,500 - KSh 135,000",
              areaServed: "Kenya",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Enterprise Road, Industrial Area",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
            }),
          }}
        />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CallFloat href={site.phones[0].href} />
        <WhatsAppFloat phone={site.whatsapp} />
      </body>
    </html>
  );
}
