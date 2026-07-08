import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-[#f0f0f0] pt-12 pb-4 px-6 font-['Segoe_UI',sans-serif]">
      <div className="flex flex-wrap justify-between max-w-[1200px] mx-auto gap-8">

        {/* Section 1: Company Info */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="text-[1.8rem] text-white mb-4">Averiqo</h2>
          <p className="text-[0.95rem] text-[#cccccc] leading-[1.6]">
            We specialize in digital transformation, data intelligence, and design thinking to help your business scale smarter.
          </p>
        </div>

        {/* Section 2: Company Links */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-[1.1rem] text-white mb-4">Company</h4>
          <ul className="list-none p-0">
            <li><Link to="/about" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">About Us</Link></li>
            <li><Link to="/career" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Careers</Link></li>
            <li><Link to="/services" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Our Services</Link></li>
            <li><Link to="/contact" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Contact</Link></li>
            <li><Link to="/terms" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Section 3: Resources */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-[1.1rem] text-white mb-4">Resources</h4>
          <ul className="list-none p-0">
            <li><Link to="/certificate-verification" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Verify Certificate</Link></li>
            <li><Link to="/blog" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Blog</Link></li>
            <li><Link to="/case-studies" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Case Studies</Link></li>
            <li><Link to="/privacy-policy" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Privacy Policy</Link></li>
            <li><Link to="/support" className="text-[0.95rem] text-[#cccccc] leading-[1.6] no-underline hover:text-[#00bcd4]">Support</Link></li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="text-[1.1rem] text-white mb-4">Contact</h4>
          <p className="text-[0.95rem] text-[#cccccc] leading-[1.6]">Email: <a href="mailto:contact@averiqotech.com" className="text-[#cccccc] no-underline hover:text-[#00bcd4]">contact@averiqotech.com</a></p>
          <p className="text-[0.95rem] text-[#cccccc] leading-[1.6]">Phone: <a href="tel:+919334991688" className="text-[#cccccc] no-underline hover:text-[#00bcd4]">+91 93349 91688</a></p>
          <div className="mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mr-[10px] text-[1.2rem] text-[#cccccc] transition-colors duration-300 hover:text-[#00bcd4]"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mr-[10px] text-[1.2rem] text-[#cccccc] transition-colors duration-300 hover:text-[#00bcd4]"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mr-[10px] text-[1.2rem] text-[#cccccc] transition-colors duration-300 hover:text-[#00bcd4]"><i className="fab fa-facebook-f"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mr-[10px] text-[1.2rem] text-[#cccccc] transition-colors duration-300 hover:text-[#00bcd4]"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-[0.85rem] text-[#999999] border-t border-[#222] pt-4">
        <p className="text-[0.95rem] text-[#cccccc] leading-[1.6]">© {year} Averiqo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
