import { notionpage } from '@/services/notion';
import NotionRender from './NotionRender';

export default async function NotionPage({ id, title, time }) {
  const recordMap = await notionpage(id);
  return (
    <div>
      <div className='card border-dark text-dark'>
        <div
          className='card-header border-dark'
          style={{ background: 'inherit' }}
        >
          <h5 className='card-title'>{title}</h5>
        </div>
        <div
          className='card-body'
          style={{ overflowY: 'auto', maxHeight: '70vh' }}
        >
          <NotionRender recordMap={recordMap} />
          <div className='mt-3'>
            <small
              href='#'
              className='border border-dark rounded p-1'
              target={'_blank'}
            >
              {time}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
