import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import './globals.css';
import { Source_Code_Pro } from 'next/font/google';
import Navbar from '@/components/Navbar';
import JsLoader from '@/components/JsLoader';
import { notionDbQuery } from '@/services/notion';

const inter = Source_Code_Pro({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export async function generateMetadata() {
  const data = await notionDbQuery('profile', {
    property: 'tag',
    rich_text: {
      equals: 'profile',
    },
  });

  const profile = {
    name: data[0].properties.name.rich_text[0].plain_text,
  };

  return {
    title: profile.name,
  };
}

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
