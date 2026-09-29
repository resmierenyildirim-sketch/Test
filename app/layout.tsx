import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const font = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight', display: 'swap' });

// Hızlı gezinmede tarayıcı yarım kalan View Transition'ı iptal eder; bu zararsız reddi konsola düşürmemek için yakalanır.
const vtGuard = `["pagereveal","pageswap"].forEach(function(n){addEventListener(n,function(e){var t=e.viewTransition;if(t){["ready","finished","updateCallbackDone"].forEach(function(k){if(t[k])t[k].catch(function(){})})}})})`;

export const metadata: Metadata = {
  title: 'Harbor | Financial Consulting in Manhattan, New York',
  description: 'Expert financial consulting in Manhattan, New York. We give vision, structure, and the confidence you need to build momentum.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: vtGuard }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
