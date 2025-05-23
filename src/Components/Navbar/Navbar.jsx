import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    setActiveLink(link);
    const element = document.getElementById(link);
    const navbarHeight = navbarRef.current?.offsetHeight || 0;

    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav ref={navbarRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo" tabIndex="0">
            <h1 className="site-title">RoMan Web</h1>
          </div>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {/* Close Button Inside Menu */}
            <span className="close-icon" onClick={() => setMenuOpen(false)}>×</span>

            {['home', 'about', 'projects', 'skills', 'contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                  }}
                  className={activeLink === link ? 'active' : ''}
                  tabIndex="0"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div
            className="menu-icon"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleMenu();
              }
            }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile */}
      <div
        className={`overlay ${menuOpen ? 'overlay-active' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
    </>
  );
};

export default Navbar;
