import Image from 'next/image';
import github from '@/assets/icons/github.svg';

const Github = () => {
  return (
    <div className='card border-success text-success'>
      <div className='card-header text-bg-success border-success'>
        Recent Activity on <Image src={github} alt='X' width={20} height={20} />
      </div>
      <div
        className='card-body'
        style={{ overflowY: 'auto', maxHeight: '70vh' }}
      >
        <p className='card-text'>
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a
          href='#'
          target={'_blank'}
          className='btn btn-outline-success btn-sm'
        >
          Show all commits
        </a>
      </div>
    </div>
  );
};

export default Github;
