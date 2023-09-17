import 'bootstrap/dist/css/bootstrap.min.css';
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'
// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import './globals.css';
import { Source_Code_Pro} from 'next/font/google';
import Navbar from '@/components/Navbar';
import JsLoader from '@/components/JsLoader';

const inter = Source_Code_Pro({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
});

export const metadata = {
  title: 'Nikhil Mahajan',
  description: 'Nikhil Mahajan is a software engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <JsLoader />
        <Navbar />
        <div style={{ marginTop: '100px' }}>{children}</div>
      </body>
    </html>
  );
}
