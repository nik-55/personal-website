// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';
import '@/styles/globals.css';

// Other imports
import { Source_Code_Pro } from 'next/font/google';
import { notionDbQuery } from '@/services/notion';
import Navbar from '@/components/Navbar';
import JsLoader from '@/components/JsLoader';

// Load font for the application
const inter = Source_Code_Pro({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

/**
 * Generate metadata for the page
 * Set title and description
 */
export async function generateMetadata() {
  try {
    const data = await notionDbQuery('profil', {
      property: 'tag',
      rich_text: {
        equals: 'profile',
      },
    });

    const profile = {
      name: data[0].properties.name.rich_text[0].plain_text,
      short_describe: data[0].properties.short_describe.rich_text[0].plain_text,
    };

    return {
      title: profile.name,
      description: profile.short_describe,
    };
  } catch (err) {
    return {
      title: 'Portfolio',
      description: 'Portfolio of a software engineer',
    };
  }
}

// Set revalidation of cached data to 1 hour
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
