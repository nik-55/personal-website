import Link from 'next/link';
import profile_img from '@/assets/images/profile.jpg';
import twitter from '@/assets/icons/twitter-x.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import github from '@/assets/icons/github.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='navbar bg-body-tertiary fixed-top'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
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
          <div className='offcanvas-header border border-bottom d-flex flex-column'>
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
            <span class='badge bg-secondary'>Software Developer</span>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav mt-2 justify-content-end flex-grow-1 pe-3'>
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
                <Link className='nav-link' href='/internships'>
                  Internships
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

              <li
                className='nav-item'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              >
                <a
                  className='nav-link'
                  target={'_blank'}
                  href='https://github.com/nik-55'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <div className='offcanvas-header d-flex flex-column p-0 border border-top'>
            <div className='w-50 d-flex justify-content-around'>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
