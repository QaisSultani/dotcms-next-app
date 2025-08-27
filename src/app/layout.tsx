import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/sections/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real-World NextJS App with dotCMS",
  description:
    "Discover amazing products, events, and experiences. Join our community for unforgettable adventures and lasting memories.",
  keywords: [
    "Next.js",
    "dotCMS",
    "React",
    "products",
    "events",
    "blog",
    "headless CMS",
  ],
  authors: [{ name: "dotCMS Demo Team" }],
  creator: "dotCMS",
  publisher: "dotCMS",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Real-World NextJS App with dotCMS",
    description:
      "Discover amazing products, events, and experiences. Join our community for unforgettable adventures and lasting memories.",
    siteName: "dotCMS Next.js Demo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "dotCMS Next.js Demo Application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-World NextJS App with dotCMS",
    description:
      "Discover amazing products, events, and experiences. Join our community for unforgettable adventures and lasting memories.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full">
          <Header />
          <main id="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
