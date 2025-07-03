import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/icons/logo.svg" />
        <meta name="theme-color" content="#3E3F93" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="eservone-theme"
        >
          <div className="fixed top-4 right-4 z-[60] flex items-center space-x-3">
            <ModeToggle />
          </div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
