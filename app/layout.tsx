import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/ui/cookie-consent';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EXCELIA BUSINESS DYNAMICS - Intelligent Business Solutions',
  description: 'Transforming business through intelligent solutions. EXCELIA BUSINESS DYNAMICS provides analytics, process enhancement, and digital transformation services.',
  keywords: 'business intelligence, analytics, digital transformation, process automation, data modeling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Toaster />
      </body>
    </html>
  );
}