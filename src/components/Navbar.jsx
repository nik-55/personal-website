import Link from 'next/link';
import profile_img from '@/assets/images/profile.jpg';
import twitter from '@/assets/icons/twitter-x.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import github from '@/assets/icons/github.svg';
import email from '@/assets/icons/email.svg';
import Image from 'next/image';

const Navbar = () => {
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
        <a className='navbar-brand' href='/'>
          Nikhil Mahajan
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
              src={profile_img}
              className='border border-dark rounded-circle'
              width={140}
              height={140}
              alt='Nikhil Mahajan'
              id='offcanvasNavbarLabel'
            />
            <h5 className='offcanvas-title' id='offcanvasRightLabel'>
              Nikhil Mahajan
            </h5>
            <span className='badge bg-secondary'>Software Developer</span>
            <div className='w-50 d-flex justify-content-around'>
              <a href='https://google.com'>
                <Image src={email} width={20} height={20} alt='email' />
              </a>
              <a href='https://google.com'>
                <Image src={twitter} width={20} height={20} alt='twitter' />
              </a>
              <a href='https://google.com'>
                <Image src={github} width={20} height={20} alt='github' />
              </a>
              <a href='https://google.com'>
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
          <div className='offcanvas-header p-0 d-flex flex-column border border-top'>
            <small>Views: 10</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
