import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pandawaproperty.com"),

  title: {
    default: "Pandawa Property | Warehouse, Factory & Industrial Land Indonesia",
    template: "%s | Pandawa Property",
  },

  description:
    "Pandawa Property adalah spesialis pemasaran warehouse, factory, dan industrial land di Cikarang, Karawang, Bekasi, Subang, dan kawasan industri di Indonesia.",

  keywords: [
    "Gudang Dijual Cikarang",
    "Gudang Disewa Cikarang",
    "Warehouse Cikarang",
    "Warehouse Karawang",
    "Factory Bekasi",
    "Industrial Land",
    "Tanah Industri",
    "Jababeka",
    "Delta Silicon",
    "KIIC",
    "GIIC",
    "MM2100",
    "Pandawa Property",
  ],

  authors: [
    {
      name: "Pandawa Property",
    },
  ],

  creator: "Pandawa Property",

  publisher: "Pandawa Property",

  category: "Real Estate",

 robots: {
  index: true,
  follow: true,

  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
  verification: {
  google: "",
  other: {
    "msvalidate.01": "",
  },
},

  alternates: {
    canonical: "/",
  },

icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},

manifest: "/manifest.webmanifest",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pandawaproperty.com",
    title: "Pandawa Property",
    description:
      "Marketing Properti Spesialis Warehouse, Factory & Industrial Land.",
    siteName: "Pandawa Property",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pandawa Property",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pandawa Property",
    description:
      "Warehouse, Factory & Industrial Land Specialist",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-screen flex flex-col">

<Script
  id="organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Pandawa Property",
      url: "https://pandawaproperty.com",
      logo: "https://pandawaproperty.com/images/logo/pandawa-logo.png",
      image: "https://pandawaproperty.com/images/og-image.jpg",
      description:
        "Marketing Properti Spesialis Warehouse, Factory dan Industrial Land di Indonesia.",
      telephone: "+62-812-5555-8283",
      areaServed: [
        "Cikarang",
        "Karawang",
        "Bekasi",
        "Subang",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "The Hive Spark North N105",
        addressLocality: "Cikarang",
        addressRegion: "Jawa Barat",
        postalCode: "17530",
        addressCountry: "ID",
      },
      sameAs: [
        "https://www.instagram.com/pandawaproperty",
        "https://www.linkedin.com/company/pandawaproperty",
      ],
    }),
  }}
/>

        <Navbar />

        <main className="flex-1">{children}</main>

        <FloatingWhatsapp />

        <Footer />
      </body>
    </html>
  );
}