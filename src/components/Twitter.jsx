import Image from 'next/image';
import twitter from '@/assets/icons/twitter-x.svg';

const Twitter = ({ link }) => {
  return (
    <div className='card border-info text-info'>
      <div className='card-header text-bg-info border-info'>
        Recent Activity on{' '}
        <Image src={twitter} alt='X' width={20} height={20} />
      </div>
      <div
        className='card-body'
        style={{ overflowY: 'auto', maxHeight: '70vh' }}
      >
        <p className='card-text'>
          Things have changed a lot since... u know better 😉
        </p>
        <a
          href={link}
          target={'_blank'}
          className='btn btn-outline-info btn-sm'
        >
          Show all tweets
        </a>
      </div>
    </div>
  );
};

export default Twitter;
