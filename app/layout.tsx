import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppButton from './components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gospel Extension Ministries | Home',
  description: 'We Love God, We Love People',
  icons: {
    icon: '/favicon.png',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}