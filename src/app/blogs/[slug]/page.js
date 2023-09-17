import NotionPage from '@/components/NotionPage';
import { notionDbQuery } from '@/services/notion';

const page = async ({ params }) => {
  const data = await notionDbQuery('blogs', {
    property: 'slug',
    rich_text: {
      equals: params.slug,
    },
  });

  return (
    <div>
      <NotionPage id={data[0].id} />
    </div>
  );
};

export default page;
