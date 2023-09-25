import Image from 'next/image';
import github from '@/assets/icons/github.svg';
import { dateTimeFormatter } from '@/utils/basicUtils';

const Github = async ({ link }) => {
  const username = link.split('https://github.com/')[1];
  const res = await fetch(
    `https://api.github.com/search/commits?q=author:${username}&sort=author-date&order=desc&per_page=10&page=1`
  );
  const data = await res.json();
  let commits = [];
  data.items.forEach((item) => {
    commits.push({
      id: item.sha,
      message: item.commit.message,
      url: item.html_url,
      date: item.commit.committer.date,
      repoName: item.repository.name,
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
        <div className='list-group list-group-flush'>
          {commits.map((commit) => {
            return (
              <div
                key={commit.id}
                className='d-flex flex-column border-bottom border-dark list-group-item list-group-item-action'
              >
                <a
                  href={commit.url}
                  style={{
                    whiteSpace: 'nowrap',
                    overflowX: 'auto',
                    textDecoration: 'none',
                  }}
                  className='horizontal-scrollbar p-1 text-success'
                  target={'_blank'}
                >
                  {commit.message}
                </a>
                <div className='d-flex github-item-footer mt-1 justify-content-between'>
                  <a
                    className='flex-grow-1 horizontal-scrollbar p-1 text-dark'
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
              </div>
            );
          })}
        </div>
        <a
          href={link}
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
