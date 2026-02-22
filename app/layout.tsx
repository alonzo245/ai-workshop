import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-workshop.alonalush.com";
const siteName = "סדנת פיתוח אפליקציות עם AI";
const title = "סדנת פיתוח אפליקציות עם AI – מהרעיון למוצר עובד";
const description =
  "סדנה חיה שבה בונים אפליקציה אמיתית שלב-אחר-שלב. בלי תאוריה מיותרת – עם תרגול, הדגמות וכלים ליישם מיד. גם בלי ניסיון בתכנות.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <body
        className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased`}
      >
        <a href="#main" className="skip-link">
          דלג לתוכן הראשי
        </a>
        <link
          rel="preload"
          href="/images/classroom.webp"
          as="image"
          fetchPriority="high"
        />
        {children}
      </body>
    </html>
  );
}
