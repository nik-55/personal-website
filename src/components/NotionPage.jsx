import { notionx } from '@/services/notion';
import NotionRender from './NotionRender';

async function notionpage(id) {
  const recordMap = await notionx.getPage(id);
  return recordMap;
}

export default async function NotionPage({ id }) {
  const recordMap = await notionpage(id);
  return (
    <div className='bg-secondary'>
      <NotionRender recordMap={recordMap} />
    </div>
  );
}
