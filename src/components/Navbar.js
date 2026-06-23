import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/internship", label: "Internship" },
    { path: "/certificate-verification", label: "Verify Certificate" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      ref={navbarRef}
      className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <img
            src="/Averiqo Technologies logo.jpeg"
            alt="Averiqo Technologies"
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-navigation">
          <ul className="navbar-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Call To Action */}
        <div className="navbar-actions">
          <Link to="/contact" className="cta-button">
            Start Project
            <span className="btn-arrow">→</span>
          </Link>
        </div>

        {/* Hamburger Mobile Menu Toggle */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu-drawer ${menuOpen ? "show" : ""}`}>
        <div className="mobile-links-container">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-link ${
                location.pathname === link.path ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start Project →
          </Link>
        </div>
      </div>
    </header>
  );
}