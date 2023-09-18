import NotionPage from '@/components/NotionPage';
import { notionDbQuery } from '@/services/notion';
import { dateTimeFormatter } from '@/utils/basicUtils';

const Highlights = async () => {
  const data = await notionDbQuery('profile', {
    property: 'tag',
    rich_text: {
      equals: 'highlights',
    },
  });

  const item = {
    id: data[0].id,
    title: 'Highlights',
    last_edited_time: dateTimeFormatter(data[0].last_edited_time),
  };

  return (
    <div>
      <NotionPage
        id={item.id}
        title={item.title}
        time={item.last_edited_time}
      />
    </div>
  );
};

export default Highlights;
