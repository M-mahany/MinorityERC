import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo from '../../logo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [effect, setEffect] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setEffect('after');
      } else {
        setEffect('');
      }
    });
  });
  return (
    <div className={`Nav ${effect}`}>
      <div className="container">
        <Link style={{ textDecoration: 'none' }} to="/">
          <div className="logo">
            <img
              src={logo}
              style={{
                height: '45px',
                borderRadius: '50px',
                marginRight: '5px',
              }}
              alt="logo"
            />
            Minority ERC
          </div>
        </Link>
        <div className="mobileIconDiv" onClick={() => setShow(!show)}>
          <BiMenuAltRight />
        </div>

        <div className="linksDiv">
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="/aboutus">
            About Us
          </a>
          <a className="link" href="/services">
            Services
          </a>
          <a className="link" href="/faq">
            FAQ
          </a>
          <a className="link" href="/contact">
            Contact Us
          </a>
          <a className="link" href="/#Partners">
            Partners
          </a>
        </div>
      </div>

      {show && (
        <div className="linksDivMobile">
          <a className="link" href="/">
            Home
          </a>
          <a className="link" href="/aboutus">
            About Us
          </a>
          <a className="link" href="/services">
            Services
          </a>
          <a className="link" href="/faq">
            FAQ
          </a>
          <a className="link" href="/contact">
            Contact Us
          </a>
          <a className="link" href="/#Partners">
            Partners
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
