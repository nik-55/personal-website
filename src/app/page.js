/**
 * @file contains:
 * - Highlights component
 * - Github component
 */

import Github from '@/components/Github';
import Highlights from '@/components/Highlights';

const page = () => {
  return (
    <div className='home-container'>
      <Highlights />
      <div className='mt-4 mb-2'>
        <Github />
      </div>
    </div>
  );
};

export default page;
