import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "../styles/globals.css";
import { siteConfig } from "@/config/site.config";
import { themeConfig } from "@/config/theme.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: themeConfig.colors.primary,
};

const backgroundClass =
  themeConfig.backgroundStyle === "gradient"
    ? "bg-brand-gradient"
    : themeConfig.backgroundStyle === "pattern"
      ? "bg-brand-pattern"
      : "";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const htmlClass = themeConfig.defaultMode === "dark" ? "dark" : "";

  return (
    <html lang="en" className={`${htmlClass} ${poppins.variable} ${montserrat.variable}`}>
      <body className={`min-h-screen ${backgroundClass} font-body antialiased`}>
        {children}

        {/*
          Analytics snippet slot.
          Drop your Plausible / Umami / GA4 script tag here — components/analytics.ts
          will automatically pick up window.plausible or window.gtag once present.
          Example (Plausible):
          <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" />
        */}
      </body>
    </html>
  );
}
