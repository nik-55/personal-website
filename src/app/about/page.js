/**
 * @file contains:
 * - Few words about me
 * - Education
 * - Skills
 */

import NotionPage from '@/components/notion/NotionPage';
import { notionDbQuery } from '@/services/notion';

const Highlights = async () => {
  const data = await notionDbQuery('profile', {
    or: [
      {
        property: 'tag',
        rich_text: {
          equals: 'describe',
        },
      },
      {
        property: 'tag',
        rich_text: {
          equals: 'skills',
        },
      },
      {
        property: 'tag',
        rich_text: {
          equals: 'education',
        },
      },
    ],
  });

  let items = [];
  data.forEach((item) => {
    const tag = item.properties.tag.rich_text[0].plain_text;
    if (tag === 'describe') {
      items[0] = {
        id: item.id,
        title: 'Few words about me',
      };
    }
    if (tag === 'skills') {
      items[2] = {
        id: item.id,
        title: 'Skills',
      };
    }
    if (tag === 'education') {
      items[1] = {
        id: item.id,
        title: 'Education',
      };
    }
  });

  return (
    <div className='about-container'>
      {items.map((item) => {
        return (
          <div key={item.id} className='mb-4'>
            <NotionPage id={item.id} title={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
