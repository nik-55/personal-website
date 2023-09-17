import { notionpage } from '@/services/notion';
import NotionRender from './NotionRender';

export default async function NotionPage({ id }) {
  const recordMap = await notionpage(id);
  return (
    <div className='bg-secondary'>
      <NotionRender recordMap={recordMap} />
    </div>
  );
}
