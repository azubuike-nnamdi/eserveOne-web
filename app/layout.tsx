import type { Metadata } from "next";
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
  themeColor: "#3E3F93",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
