import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const font = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight', display: 'swap' });

export const metadata: Metadata = {
  title: 'Harbor | Financial Consulting in Manhattan, New York',
  description: 'Expert financial consulting in Manhattan, New York. We give vision, structure, and the confidence you need to build momentum.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
