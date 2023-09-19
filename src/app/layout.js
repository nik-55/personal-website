import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import './globals.css';
import { Source_Code_Pro } from 'next/font/google';
import Navbar from '@/components/Navbar';
import JsLoader from '@/components/JsLoader';

const inter = Source_Code_Pro({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export const metadata = {
  title: 'Nikhil Mahajan',
  description: 'Nikhil Mahajan is a software engineer',
};

export const revalidate = 3600;

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <div style={{ marginTop: '90px', padding: '10px' }}>{children}</div>
        <JsLoader />
      </body>
    </html>
  );
}
