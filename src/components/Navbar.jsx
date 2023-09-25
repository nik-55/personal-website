import Link from 'next/link';
import twitter from '@/assets/icons/twitter-x.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import github from '@/assets/icons/github.svg';
import email from '@/assets/icons/email.svg';
import Image from 'next/image';
import { notionDbQuery } from '@/services/notion.js';

const Navbar = async () => {
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
    <nav
      className='navbar border-bottom border-dark fixed-top'
      style={{
        background:
          'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))',
      }}
    >
      <div className='container-fluid'>
        <button
          className='ms-3 ps-2 pe-2 text-success bg-white rounded'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          ls /
        </button>
        <a className='navbar-brand bg-white ps-1 pe-1 rounded-3' href='/'>
          {profile.name}
        </a>
        <div
          className='offcanvas offcanvas-start'
          style={{ width: 'fit-content' }}
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header p-2 border border-bottom d-flex flex-column'>
            <Image
              src={profile.profile_img}
              className='border border-dark rounded-circle'
              width={140}
              height={140}
              alt={profile.name}
              id='offcanvasNavbarLabel'
            />
            <h5 className='offcanvas-title' id='offcanvasRightLabel'>
              {profile.name}
            </h5>
            <span className='badge bg-secondary'>Software Developer</span>
            <div className='w-50 d-flex justify-content-around'>
              <a target={'_blank'} href={`mailto:${profile.email}`}>
                <Image src={email} width={20} height={20} alt='email' />
              </a>
              <a target={'_blank'} href={profile.twitter}>
                <Image src={twitter} width={20} height={20} alt='twitter' />
              </a>
              <a target={'_blank'} href={profile.github}>
                <Image src={github} width={20} height={20} alt='github' />
              </a>
              <a target={'_blank'} href={profile.linkedin}>
                <Image src={linkedin} width={20} height={20} alt='linkedin' />
              </a>
            </div>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 p-0'>
              <li
                className='nav-item'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                <Link className='nav-link active' aria-current='page' href='/'>
                  Home
                </Link>
              </li>
              <li
                className='nav-item'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                <Link className='nav-link' href='/about'>
                  About
                </Link>
              </li>
              <li
                className='nav-item'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                <Link className='nav-link' href='/projects'>
                  Projects
                </Link>
              </li>
              <li
                className='nav-item'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                <Link className='nav-link' href='/experiences'>
                  Experiences
                </Link>
              </li>

              <li
                className='nav-item'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                <Link className='nav-link' href='/blogs'>
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
