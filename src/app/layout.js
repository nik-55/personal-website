'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nikhil Mahajan',
  description: 'Nikhil Mahajan is a software engineer',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div style={{ marginTop: '60px' }}>{children}</div>
      </body>
    </html>
  );
}
