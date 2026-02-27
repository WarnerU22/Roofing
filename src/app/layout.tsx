import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Appalachian Roofing | Trusted Roofing Experts',
  description:
    'Appalachian Roofing provides reliable roof replacement, repair, inspection, and storm damage services for residential and commercial properties.',
  keywords: ['roofing', 'roof repair', 'roof replacement', 'storm damage', 'Appalachian Roofing']
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
