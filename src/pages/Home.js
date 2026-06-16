// Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaCog,
  FaChartLine,
  FaMobileAlt,
  FaArrowRight,
  FaCheck,
  FaQuoteLeft,
  FaStar,
  FaArrowUp,
} from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android", "Cross-Platform", "User-Friendly", "App Store Ready"],
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your business.",
      features: ["SEO", "PPC Campaigns", "Social Media", "Content Strategy"],
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description: "Actionable insights from your data to drive decisions.",
      features: ["Google Analytics", "Custom Dashboards", "KPI Tracking", "Reports"],
    },
    {
      icon: <FaCog />,
      title: "Automation",
      description: "Streamline processes with smart automation solutions.",
      features: ["Workflow Automation", "CRM Integration", "AI Solutions", "API Integration"],
    },
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" },
  ];

  const testimonials = [
    {
      quote: "Averiqo transformed our digital presence and helped us achieve 3x growth in just 6 months.",
      author: "Sarah Chen",
      role: "CEO, TechInnovate",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and delivered beyond our expectations. Highly recommended!",
      author: "Michael Rodriguez",
      role: "Marketing Director, GrowthCo",
      rating: 5,
    },
  ];

  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-text"
            >
              <h1>
                Digital Solutions for <br />
                <span className="highlight">Modern Businesses</span>
              </h1>
              <p className="hero-description">
                We create beautiful, functional digital experiences that drive
                growth and engage your audience. From web development to digital
                marketing, we've got you covered.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                  <FaArrowRight />
                </Link>
                <Link to="/projects" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
              <div className="hero-features">
                <span>
                  <FaCheck /> No upfront costs
                </span>
                <span>
                  <FaCheck /> Free consultation
                </span>
                <span>
                  <FaCheck /> 14-day delivery
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-image"
            >
              <img src="/hero-image.png" alt="Digital solutions" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trust-bar">
        <div className="container">
          <p className="trust-title">Trusted by innovative companies</p>
          <div className="logos">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="logo">
                <img src={`/client-${item}.svg`} alt={`Client ${item}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions to grow your business</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/services#${service.title.toLowerCase()}`} className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="testimonial-card"
              >
                <FaQuoteLeft className="quote-icon" />
                <p>{testimonial.quote}</p>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and see how we can help your business grow.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
                <FaArrowRight />
              </Link>
              <Link to="/projects" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Home;