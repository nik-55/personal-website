import Github from '@/components/Github';
import Highlights from '@/components/Highlights';
import Twitter from '@/components/Twitter';
import { notionDbQuery } from '@/services/notion';

const page = async () => {
  const data = await notionDbQuery('profile', {
    property: 'tag',
    rich_text: {
      equals: 'profile',
    },
  });

  const profile = {
    github: data[0].properties.github.url,
    twitter: data[0].properties.twitter.url,
  };
  return (
    <div className='home-container'>
      <Highlights />
      <div className='mt-4'>
        <Twitter link={profile.twitter} />
      </div>
      <div className='mt-4 mb-2'>
        <Github link={profile.github} />
      </div>
    </div>
  );
};

export default page;
