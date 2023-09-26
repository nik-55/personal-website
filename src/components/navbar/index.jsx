import { notionDbQuery } from '@/services/notion.js';
import Offcanvas from './Offcanvas';

const Navbar = async () => {
  try {
    const data = await notionDbQuery('profile', {
      property: 'tag',
      rich_text: {
        equals: 'profile',
      },
    });

    const profile = {
      name: data[0].properties.name.rich_text[0].plain_text,
      github: data[0].properties.github.url,
      linkedin: data[0].properties.linkedin.url,
      twitter: data[0].properties.twitter.url,
      email: data[0].properties.email.email,
      profile_img: data[0].properties.image.files[0].file.url,
    };

    return (
      <>
        <Offcanvas profile={profile} />
      </>
    );
  } catch (error) {
    return <>Error loading profile...</>;
  }
};

export default Navbar;
