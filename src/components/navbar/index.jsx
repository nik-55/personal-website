/**
 * @file fetches the profile data from Notion and renders the Offcanvas component
 */

import { notionDbQuery } from '@/services/notion.js';
import Offcanvas from './Offcanvas';
import ComponentError from '../ComponentError';

const Navbar = async () => {
  let error = null,
    profile = null;
  try {
    const data = await notionDbQuery('profile', {
      property: 'tag',
      rich_text: {
        equals: 'profile',
      },
    });

    profile = {
      name: data[0].properties.name.rich_text[0].plain_text,
      github: data[0].properties.github.url,
      linkedin: data[0].properties.linkedin.url,
      twitter: data[0].properties.twitter.url,
      email: data[0].properties.email.email,
      profile_img: data[0].properties.image.files[0].file.url,
    };
  } catch (err) {
    error = 'Error occured while fetching profile';
  }

  return (
    <>
      {error ? (
        <ComponentError error={error} />
      ) : (
        <Offcanvas profile={profile} />
      )}
    </>
  );
};

export default Navbar;
