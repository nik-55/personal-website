import { notionpage } from '@/services/notion';
import NotionRender from './NotionRender';

export default async function NotionPage({ id, title, time }) {
  const recordMap = await notionpage(id);
  return (
    <div>
      <div className='card'>
        <div className='card-header'>
          <h5 className='card-title'>{title}</h5>
        </div>
        <div className='card-body'>
          <NotionRender recordMap={recordMap} />
        </div>
        <div className='card-footer text-center'>{time}</div>
      </div>
    </div>
  );
}
