import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`} 
      ref={navbarRef}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img 
            src="/Averiqo.logo.png" 
            alt="Averiqo Logo" 
            className="logo-img" 
            width="180" 
            height="50"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
          <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
          <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link></li>
          <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>

        {/* Hamburger */}
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" className={`mobile-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/projects" className={`mobile-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={toggleMenu}>Projects</Link></li>
         
          <li><Link to="/contact" className="mobile-cta" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}
