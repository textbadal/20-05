import React, { useEffect } from "react";
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
} from "react-icons/fa";
import "./Home.css";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
      features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android", "Cross-Platform", "User-Friendly", "App Store Ready"],
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that enhance user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your business.",
      features: ["SEO", "PPC Campaigns", "Social Media", "Content Strategy"],
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Actionable insights from your data to drive decisions.",
      features: ["Google Analytics", "Custom Dashboards", "KPI Tracking", "Reports"],
    },
    {
      icon: <FaCog />,
      title: "Automation",
      description:
        "Streamline processes with smart automation solutions.",
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
      quote:
        "Averiqo transformed our digital presence and helped us achieve 3x growth in just 6 months.",
      author: "Sarah Chen",
      role: "CEO, TechInnovate",
      rating: 5,
    },
    {
      quote:
        "Professional, reliable, and delivered beyond our expectations. Highly recommended!",
      author: "Michael Rodriguez",
      role: "Marketing Director, GrowthCo",
      rating: 5,
    },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We learn about your business and goals" },
    { step: "02", title: "Strategy", description: "We create a customized plan" },
    { step: "03", title: "Development", description: "We build your solution" },
    { step: "04", title: "Launch & Support", description: "We deploy and maintain" },
  ];

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="hero-text"
            >
              <h1>
                Digital Solutions for{" "}
                <span className="highlight">Modern Businesses</span>
              </h1>

              <p className="hero-description">
                We create beautiful, functional digital experiences that drive
                growth and engage your audience. From web development to digital
                marketing, we've got you covered.
              </p>

              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View Our Work
                </Link>
              </div>

              <div className="hero-features">
                {["No upfront costs", "Free consultation", "14-day delivery"].map(
                  (item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i}
                      initial="hidden"
                      animate="show"
                      className="feature"
                    >
                      <FaCheck className="feature-icon" />
                      <span>{item}</span>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="show"
              className="hero-visual"
            >
              <div className="visual-container">
                <img src="/hero-image.png" alt="Digital solutions" />
              </div>
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
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions to grow your business</p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feat, j) => (
                    <li key={j}>
                      <FaCheck className="check-icon" /> {feat}
                    </li>
                  ))}
                </ul>

                <Link to={`/services#${service.title.toLowerCase()}`} className="service-link">
                  Learn more <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>How We Work</h2>
            <p>Our proven process ensures success</p>
          </div>

          <div className="process-steps">
            {process.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="process-step"
              >
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
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
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testi, i) => (
              <motion.div
                key={i}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="testimonial-card"
              >
                <FaQuoteLeft className="quote-icon" />
                <p>"{testi.quote}"</p>

                <div className="rating">
                  {[...Array(testi.rating)].map((_, j) => (
                    <FaStar key={j} className="star" />
                  ))}
                </div>

                <div className="author">
                  <strong>{testi.author}</strong>
                  <span>{testi.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss your project and see how we can help your business grow.</p>

            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
