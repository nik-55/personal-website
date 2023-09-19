import Github from '@/components/Github';
import Highlights from '@/components/Highlights';
import Twitter from '@/components/Twitter';

const page = () => {
  return (
    <>
      <Highlights />
      <div className='mt-4'>
        <Twitter />
      </div>
      <div className='mt-4'>
        <Github />
      </div>
    </>
  );
};

export default page;
