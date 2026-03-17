import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ecommerce Store - Premium Shopping Experience",
  description: "Discover amazing products at unbeatable prices. Fast delivery, best deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          <header className="flex-shrink-0">
            {/* Navbar will be injected here by pages */}
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="flex-shrink-0 mt-auto">
            {/* Footer will be injected here by pages */}
          </footer>
        </div>
      </body>
    </html>
  );
}
