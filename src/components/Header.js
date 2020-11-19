import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav-container'>
        <img className='nav-logo' src={logo} alt='logo' />

        <ul className='nav-links'>
          <li className='nav-item'>
            <a
              target='blank'
              rel='noreferrer'
              href='https://github.com/brandensherman'
              className='footer-link'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              target='blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/brandensherman/'
              className='footer-link'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
