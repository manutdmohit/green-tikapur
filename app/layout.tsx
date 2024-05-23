import type { Metadata } from 'next';
import { Mukta } from 'next/font/google';
import './globals.css';

import 'photoswipe/dist/photoswipe.css';

import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const mukta = Mukta({ subsets: ['latin'], weight: '600' });

export const metadata: Metadata = {
  title: 'Khadga Smriti Pratisthan',
  description: 'Green Tikapur, Clean Tikapur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mukta.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
