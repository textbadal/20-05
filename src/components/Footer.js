import React from 'react';
import { Link } from 'react-router-dom';
import './FooterGlass.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-corporate">
      <div className="footer-corporate-container">

        {/* Section 1: Company Info */}
        <div className="footer-corp-column">
          <h2>Averiqo</h2>
          <p>
            We specialize in digital transformation, data intelligence, and design thinking to help your business scale smarter.
          </p>
        </div>

        {/* Section 2: Company Links */}
        <div className="footer-corp-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Section 3: Resources */}
        <div className="footer-corp-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/case-studies">Case Studies</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div className="footer-corp-column">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:contact@averiqo.com">contact@averiqo.com</a></p>
          <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
          <div className="footer-corp-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-corporate-bottom">
        <p>© {year} Averiqo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
