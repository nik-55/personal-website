import NotionPage from '@/components/notion/NotionPage';
import { notionDbQuery } from '@/services/notion';
import { dateTimeFormatter } from '@/utils/basicUtils';

const page = async ({ params }) => {
  const data = await notionDbQuery('projects', {
    property: 'slug',
    rich_text: {
      equals: params.slug,
    },
  });
  const item = {
    id: data[0].id,
    title: data[0].properties.title.rich_text[0].plain_text,
    last_edited_time: dateTimeFormatter(data[0].last_edited_time),
  };

  return (
    <div className='project-container'>
      <NotionPage
        id={item.id}
        title={item.title}
        time={item.last_edited_time}
      />
    </div>
  );
};

export default page;
