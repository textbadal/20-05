import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaBullseye,
  FaEye,
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaCheckCircle,
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import SEO from "../components/SEO";
import "./About.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "99%", label: "Client Satisfaction" },
    { value: "150+", label: "Projects Delivered" },
    { value: "24/7", label: "Reliable Support" },
  ];

  const features = [
    {
      title: "Custom Solutions",
      description: "Every project is meticulously tailored to meet your unique business objectives and technical requirements.",
    },
    {
      title: "Modern Technologies",
      description: "We leverage cutting-edge tools, paradigms, and frameworks to build scalable, secure, and production-grade software.",
    },
    {
      title: "Client-Focused Approach",
      description: "Transparent milestones, continuous integration, and deep collaboration define our project lifecycles.",
    },
    {
      title: "Reliable Support",
      description: "We offer proactive post-launch maintenance, ensuring your ecosystem remains high-performing and up-to-date.",
    },
  ];

  const services = [
    { icon: <FaLaptopCode />, title: "Web Development" },
    { icon: <FaPalette />, title: "UI/UX Design" },
    { icon: <FaBullhorn />, title: "Digital Marketing" },
  ];
  const team = [
    {
      name: "Palak Mundhra",
      role: "Social Media Manager",
      image: "/Palak Mundhra.jpeg", 
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Payal Singh",
      role: "Human Resources Manager",
      image: "/Payal Singh.jpeg",   
      linkedin: "#",
      twitter: "#"
    }
  ];
const [activeCard, setActiveCard] = useState(0);
const [activeMission, setActiveMission] = useState(0);
  return (
    <>
      <SEO
        title="About Averiqo Technologies | Enterprise Software Solutions"
        description="Discover how Averiqo Technologies accelerates business growth through custom web development, user experience design, and data-driven digital transformations."
        keywords="About Averiqo Technologies, software development company, enterprise web development, UI/UX design agency"
        url="https://averiqotech.com/about"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Averiqo Technologies",
            "description": "Enterprise-grade software development, professional UI/UX architectures, and tailored digital strategy.",
          })}
        </script>
      </Helmet>

      <div className="about-page">
        
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="hero-content"
            >
             
            <h1>
  Engineering Next-Gen <span className="hero-title-highlight">Digital Architectures</span>
</h1>
              <p>
                Averiqo Technologies is an elite software engineering company delivering high-performance web applications, strategic UI/UX designs, and growth-focused digital marketing ecosystems that transform ambitious concepts into industry leaders.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn-primary">
                  Consult With Our Team
                  <FaArrowRight />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore Capabilities
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW & STATS */}
        <section className="company-overview">
          <div className="container">
            <div className="grid-two-column">
              <motion.div 
                className="overview-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="section-header">
                  <h2>Who We Are</h2>
                </div>
                <p>
                  We partner with enterprise organizations, high-growth startups, and visionary brands to develop reliable, highly-scalable technological assets. Our focus remains heavily guarded on business value, clean architecture, and exceptional execution.
                </p>
                <p>
                  By deploying agile methodologies and keeping cross-functional teams highly integrated, we continuously optimize the metrics that matter most: performance, security, and operational capability.
                </p>
              </motion.div>

              <motion.div 
                className="stats-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {stats.map((stat, i) => (
  <motion.div
    key={i}
    variants={cardVariant}
    onClick={() => setActiveCard(i)}
    className={`stat-card ${activeCard === i ? "active-stat" : ""}`}
  >
    <h3 className="stat-value">{stat.value}</h3>
    <p className="stat-label">{stat.label}</p>
  </motion.div>
))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="mission-vision">
          <div className="container">
            <motion.div 
              className="mission-vision-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
             <motion.div
  variants={cardVariant}
  onClick={() => setActiveMission(0)}
  className={`mission-card ${
    activeMission === 0 ? "active-mission" : ""
  }`}
>
  <div className="icon-wrapper">
    <FaBullseye className="icon" />
  </div>

  <h3>Our Mission</h3>

  <p>
    To empower global organizations by deploying robust,
    cutting-edge software engineering and intelligent user
    designs that systematically scale visibility and
    operational efficiency.
  </p>
</motion.div>

<motion.div
  variants={cardVariant}
  onClick={() => setActiveMission(1)}
  className={`vision-card ${
    activeMission === 1 ? "active-mission" : ""
  }`}
>
  <div className="icon-wrapper">
    <FaEye className="icon" />
  </div>

  <h3>Our Vision</h3>

  <p>
    To serve as the definitive tech-stack ecosystem and
    strategic engineering powerhouse known for turning
    complex ideas into predictable digital success stories.
  </p>
</motion.div>
            </motion.div>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="about-services">
          <div className="container">
            <div className="section-header center">
              <h2>Core Vectors of Expertise</h2>
              <p>End-to-end consulting and execution designed to capture market value.</p>
            </div>

            <motion.div 
              className="services-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {services.map((service, index) => (
                <motion.div key={index} className="service-card" variants={cardVariant}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="why-us">
          <div className="container">
            <div className="section-header center">
              <h2>The Averiqo Differentiation</h2>
            </div>

            <motion.div 
              className="features-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div key={index} className="feature-card" variants={cardVariant}>
                  <FaCheckCircle className="feature-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* LEADERSHIP / TEAM SECTION */}
        <section className="team-section">
          <div className="container">
            <div className="section-header center">
              <h2>Leadership Team</h2>
              <p>The strategic minds and systems engineers behind our digital solutions.</p>
            </div>

            <motion.div 
              className="team-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {team.map((member, index) => (
                <motion.div key={index} className="team-card" variants={cardVariant}>
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} className="team-img" />
                    <div className="team-social-overlay">
                      <a href={member.linkedin} className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                      <a href={member.twitter} className="social-link" aria-label="Twitter"><FaTwitter /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="cta-wrapper"
            >
              <h2>Accelerate Your Engineering Roadmap</h2>
              <p>Let's map out a stable, scalable strategy to build architecture that dominates your industry segment.</p>
              <Link to="/contact" className="btn-primary heavy btn-brown">
                Initiate Engagement
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;