/**
 * @file contains the Highlights component which displays the what a user is currently working on.
 * It renders the NotionPage component
 */

import NotionPage from '@/components/notion/NotionPage';
import { notionDbQuery } from '@/services/notion';
import { dateTimeFormatter } from '@/utils/basicUtils';
import ComponentError from './ComponentError';

const Highlights = async () => {
  let error = null,
    item = null;
  try {
    const data = await notionDbQuery('profile', {
      property: 'tag',
      rich_text: {
        equals: 'highlights',
      },
    });

    item = {
      id: data[0].id,
      title: 'Highlights',
      last_edited_time: dateTimeFormatter(data[0].last_edited_time),
    };
  } catch (err) {
    error = 'Error occured while fetching highlights';
  }

  return (
    <div>
      {error ? (
        <ComponentError error={error} />
      ) : (
        <NotionPage
          id={item.id}
          title={item.title}
          time={item.last_edited_time}
        />
      )}
    </div>
  );
};

export default Highlights;
