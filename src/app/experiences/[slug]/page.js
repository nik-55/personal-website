import NotionPage from '@/components/NotionPage';
import { notionDbQuery } from '@/services/notion';
import { dateTimeFormatter } from '@/utils/basicUtils';

const page = async ({ params }) => {
  const data = await notionDbQuery('experiences', {
    property: 'slug',
    rich_text: {
      equals: params.slug,
    },
  });

  const item = {
    id: data[0].id,
    org: data[0].properties.org.rich_text[0].plain_text,
    last_edited_time: dateTimeFormatter(data[0].last_edited_time),
  };

  return (
    <div className='experience-container'>
      <NotionPage id={item.id} title={item.org} time={item.last_edited_time} />
    </div>
  );
};

export default page;
