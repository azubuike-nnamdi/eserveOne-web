import Navbar from "@/components/common/navbar";
import PWAInstallPrompt from "@/components/pwa/PWAInstallPrompt";
import PWAStatusIndicator from "@/components/pwa/PWAStatusIndicator";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EservOne - Global Service Platform",
  description:
    "Connect with trusted service providers for all your needs. From beauty and wellness to home repairs - all in one platform.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EservOne",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "EservOne",
    title: "EservOne - Global Service Platform",
    description: "Connect with trusted service providers for all your needs.",
  },
  twitter: {
    card: "summary",
    title: "EservOne - Global Service Platform",
    description: "Connect with trusted service providers for all your needs.",
  },
  icons: {
    icon: '/assets/icons/logo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: "#3E3F93",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/assets/icons/logo.svg" />
        <meta name="theme-color" content="#3E3F93" />
        <meta name="apple-mobile-web-app-capable" content="yes" />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <PWAInstallPrompt />
        <PWAStatusIndicator />
      </body>
    </html>
  );
}
