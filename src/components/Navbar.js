import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navbarRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/case-studies", label: "Case Studies" },
     { path: "/internship-registration", label: "Internships" },
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
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out border-b ${
        scrolled 
          ? "bg-white py-1 border-black/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]" 
          : "bg-white border-black/10"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center z-[1010] group">
          <img
            src="/Averiqo Technologies logo.jpeg"
            alt="Averiqo Technologies"
            className="h-[45px] md:h-[60px] w-auto object-contain rounded-lg transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:block">
          <ul className="flex list-none gap-8 m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[0.95rem] font-semibold relative py-2 transition-colors duration-200 ${
                    location.pathname === link.path ? "text-[#1a1a1a]" : "text-[#4b5563] hover:text-[#1a1a1a]"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-br after:from-[#8b5cf6] after:to-[#ff4eb2] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    location.pathname === link.path ? "after:scale-x-100 after:origin-left" : "after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden lg:block">
          <Link to="/contact" className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',system-ui,sans-serif] bg-[#8b5cf6] text-white no-underline px-6 py-2.5 rounded-xl font-bold text-[0.9rem] border-2 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.15)] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] group">
            Start Project
            <span className="transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
          </Link>
        </div>

        {/* Hamburger Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col justify-between w-[28px] h-[20px] shrink-0 bg-transparent border-none cursor-pointer p-0 z-[1010]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`w-full h-[2.5px] bg-[#1a1a1a] rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${menuOpen ? "rotate-45" : ""}`} />
          <span className={`w-full h-[2.5px] bg-[#1a1a1a] rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`w-full h-[2.5px] bg-[#1a1a1a] rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${menuOpen ? "-rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`fixed top-0 right-0 w-full h-screen bg-[#0b0f19] z-[1005] px-8 pt-[120px] pb-10 box-border transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col gap-6 max-h-[calc(100vh-160px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-[1.4rem] font-bold py-1 transition-colors duration-200 block ${
                location.pathname === link.path 
                  ? "text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-[#ff4eb2]" 
                  : "text-[#94a3b8] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-[#8b5cf6] hover:to-[#ff4eb2]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
        </div>
      </div>
    </header>
  );
}