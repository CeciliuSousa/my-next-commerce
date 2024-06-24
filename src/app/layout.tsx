import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Next Commerce',
  description: 'Next E-Commerce utilizando V20.15.0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, ' bg-slate-700')}>
        <Navbar></Navbar>
        <main className=' h-screen p-16'>{children}</main>
      </body>
    </html>
  );
}
