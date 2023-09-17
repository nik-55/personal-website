import Link from 'next/link';

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
          style={{ width: '250px' }}
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header d-flex justify-content-end'>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
