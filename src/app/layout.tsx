import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://continuiqconsulting.com"),
  title: "Continuiq | Business Intelligence Partner for Growing Businesses",
  description:
    "We help growing businesses make more money using the data they already have. BI partner for D2C, retail, manufacturing, logistics & healthcare. Free data audit worth ₹20,000.",
  keywords: [
    "business intelligence partner india",
    "outsourced bi team",
    "data audit d2c brands",
    "executive dashboard setup",
    "growth intelligence retainer",
    "revenue optimization analytics",
    "power bi consultant india",
    "shopify analytics consultant",
    "retail analytics india",
    "manufacturing bi consultant",
    "data analyst indore",
  ],
  authors: [{ name: "Continuiq Consulting", url: "https://continuiqconsulting.com" }],
  openGraph: {
    title: "Continuiq | Business Intelligence Partner for Growing Businesses",
    description:
      "Your data already knows where the money is. We help you find it. Free data audit worth ₹20,000 for D2C, retail, manufacturing, logistics & healthcare.",
    url: "https://continuiqconsulting.com",
    siteName: "Continuiq",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuiq | Business Intelligence Partner",
    description:
      "Your data already knows where the money is. We help you find it. Free data audit worth ₹20,000.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://continuiqconsulting.com/#org",
      name: "Continuiq Consulting",
      url: "https://continuiqconsulting.com",
      logo: "https://continuiqconsulting.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "contactcontinuiq@gmail.com",
        contactType: "customer service",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://continuiqconsulting.com/#local",
      name: "Continuiq Consulting",
      description:
        "Data & business analytics agency serving e-commerce and D2C brands across India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      areaServed: "IN",
      email: "contactcontinuiq@gmail.com",
      url: "https://continuiqconsulting.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter, system-ui, sans-serif)" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
