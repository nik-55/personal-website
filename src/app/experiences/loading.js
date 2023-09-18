import loader from '@/assets/animations/loading.gif';
import Image from 'next/image';

const loading = () => {
  return (
    <div className='overlay'>
      <Image src={loader} alt='loading' width={200} height={200} />
    </div>
  );
};

export default loading;
