// About.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaUsers,
  FaTrophy,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaCode,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const stats = [
    { icon: <FaRocket />, number: "150+", label: "Projects Delivered" },
    { icon: <FaUsers />, number: "50+", label: "Happy Clients" },
    { icon: <FaTrophy />, number: "12", label: "Industry Awards" },
    { icon: <FaHeart />, number: "98%", label: "Client Satisfaction" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/team-1.jpg",
      bio: "15+ years of experience in digital transformation",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      image: "/team-2.jpg",
      bio: "Award-winning designer with a passion for UX",
      social: { linkedin: "#", dribbble: "#" },
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      image: "/team-3.jpg",
      bio: "Full-stack expert specializing in React & Node.js",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Emily Thompson",
      role: "Marketing Director",
      image: "/team-4.jpg",
      bio: "Growth strategist with a data-driven approach",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation First",
      description: "We embrace cutting-edge technology to deliver exceptional solutions.",
    },
    {
      icon: <FaHandshake />,
      title: "Client Partnership",
      description: "We build lasting relationships by understanding your unique needs.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assurance",
      description: "We never compromise on quality and always deliver on time.",
    },
    {
      icon: <FaClock />,
      title: "Reliability",
      description: "You can count on us for consistent, dependable service.",
    },
  ];

  const skills = [
    { icon: <FaCode />, label: "Web Development", percentage: 95 },
    { icon: <FaMobileAlt />, label: "Mobile Apps", percentage: 90 },
    { icon: <FaPalette />, label: "UI/UX Design", percentage: 92 },
    { icon: <FaGlobe />, label: "Digital Marketing", percentage: 88 },
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: "Best Digital Agency 2024",
      description: "Recognized for excellence in digital innovation",
    },
    {
      icon: <FaStar />,
      title: "4.9/5 Average Rating",
      description: "Based on 200+ client reviews",
    },
    {
      icon: <FaCheckCircle />,
      title: "100% Success Rate",
      description: "Every project delivered on time and on budget",
    },
  ];

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-hero-content"
          >
            <span className="hero-badge">About Us</span>
            <h1>
              Crafting Digital <br />
              <span className="gradient-text">Experiences That Matter</span>
            </h1>
            <p>
              We're a passionate team of designers, developers, and strategists 
              dedicated to helping businesses thrive in the digital age. 
              With years of experience and a love for innovation, we create 
              solutions that make a real difference.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <FaArrowRight />
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-card"
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="story-content"
            >
              <span className="section-badge">Our Story</span>
              <h2>How We Started</h2>
              <p>
                Founded in 2018, Averiqo began with a simple mission: to help 
                businesses leverage technology for growth. What started as a 
                small team of passionate developers has grown into a full-service 
                digital agency serving clients worldwide.
              </p>
              <p>
                Today, we're proud to have helped over 150 businesses transform 
                their digital presence. Our team combines technical expertise 
                with creative vision to deliver solutions that exceed expectations.
              </p>
              <div className="story-milestones">
                <div className="milestone">
                  <span className="year">2018</span>
                  <span className="event">Company Founded</span>
                </div>
                <div className="milestone">
                  <span className="year">2020</span>
                  <span className="event">First Award</span>
                </div>
                <div className="milestone">
                  <span className="year">2022</span>
                  <span className="event">50+ Clients</span>
                </div>
                <div className="milestone">
                  <span className="year">2024</span>
                  <span className="event">Global Expansion</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="story-image"
            >
              <img src="/about-story.jpg" alt="Our Story" />
              <div className="floating-card">
                <FaQuoteLeft className="quote-icon" />
                <p>
                  "The team at Averiqo transformed our digital presence and 
                  helped us achieve 3x growth in just 6 months."
                </p>
                <div className="author">
                  <strong>Sarah Chen</strong>
                  <span>CEO, TechInnovate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="our-values">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-badge">Our Values</span>
            <h2>What Drives Us</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="value-card"
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section">
        <div className="container">
          <div className="skills-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="skills-content"
            >
              <span className="section-badge">Our Expertise</span>
              <h2>We Excel In</h2>
              <p>
                Our team brings together diverse skills and expertise to deliver 
                comprehensive digital solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="skills-bars"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-label">{skill.label}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-badge">Our Team</span>
            <h2>Meet the Team</h2>
            <p>The creative minds behind our success</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="team-card"
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-social">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <span className="social-icon">🔗</span>
                      </a>
                    ))}
                  </div>
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <span className="section-badge">Achievements</span>
            <h2>Our Accomplishments</h2>
            <p>Recognition for our commitment to excellence</p>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="achievement-card"
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Work Together?</h2>
            <p>
              Let's create something amazing for your business. We'd love to 
              hear about your project.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                Get Started Today
                <FaArrowRight />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;