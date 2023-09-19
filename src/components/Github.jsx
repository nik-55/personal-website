import Image from 'next/image';
import github from '@/assets/icons/github.svg';
import { dateTimeFormatter } from '@/utils/basicUtils';

const Github = async () => {
  const res = await fetch(
    'https://api.github.com/search/commits?q=author:nik-55&sort=author-date&order=desc&per_page=10&page=1'
  );
  const data = await res.json();
  let commits = [];
  data.items.forEach((item) => {
    commits.push({
      message: item.commit.message,
      url: item.commit.url,
      date: item.commit.committer.date,
      repoName: item.repository.full_name,
      repoUrl: item.repository.html_url,
    });
  });

  return (
    <div className='card github-container border-success text-success'>
      <div className='card-header text-bg-success border-success'>
        Recent Activity on <Image src={github} alt='X' width={20} height={20} />
      </div>
      <div
        className='card-body'
        style={{ overflowY: 'auto', maxHeight: '70vh' }}
      >
        <div class='list-group list-group-flush'>
          {commits.map((commit) => {
            return (
              <div class='d-flex border-bottom border-dark justify-content-between list-group-item list-group-item-action'>
                <a
                  href={commit.url}
                  style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}
                  className='horizontal-scrollbar p-1 border rounded'
                  target={'_blank'}
                >
                  {commit.message}
                </a>
                <a
                  className='horizontal-scrollbar p-1 border rounded'
                  style={{
                    whiteSpace: 'nowrap',
                    overflowX: 'auto',
                    textDecoration: 'none',
                  }}
                  href={commit.repoUrl}
                  target={'_blank'}
                >
                  {commit.repoName}
                </a>
                <span
                  className='horizontal-scrollbar p-1 border rounded'
                  style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}
                >
                  {dateTimeFormatter(commit.date)}
                </span>
              </div>
            );
          })}
        </div>
        <a
          href='#'
          target={'_blank'}
          className='mt-3 btn btn-outline-success btn-sm'
        >
          Show all commits
        </a>
      </div>
    </div>
  );
};

export default Github;
