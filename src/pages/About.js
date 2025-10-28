import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaRocket, 
  FaEye, 
  FaUsers, 
  FaHandshake, 
  FaLightbulb, 
  FaAward,
  FaChartLine,
  FaGlobe,
  FaHeart,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaQuoteLeft,
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap
} from 'react-icons/fa';
import './About.css';

const About = () => {
  // SEO Meta Data
  const pageTitle = "About Averiqo - Digital Innovation & Technology Partners";
  const pageDescription = "Discover Averiqo's journey, values, and the expert team behind our digital transformation success. Learn how we're shaping the future of technology.";

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerFast = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Core Values Data
  const coreValues = [
    { 
      icon: <FaLightbulb />, 
      title: "Innovation First", 
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      color: "#FF6B35"
    },
    { 
      icon: <FaHandshake />, 
      title: "Client Partnership", 
      description: "Your success is our success. We build long-term relationships based on trust and results.",
      color: "#00A8E8"
    },
    { 
      icon: <FaChartLine />, 
      title: "Data-Driven", 
      description: "Every decision is backed by data and analytics to ensure optimal outcomes.",
      color: "#2EC4B6"
    },
    { 
      icon: <FaUsers />, 
      title: "Collaborative Excellence", 
      description: "We believe in the power of teamwork and diverse perspectives.",
      color: "#FF9F1C"
    },
    { 
      icon: <FaGlobe />, 
      title: "Global Impact", 
      description: "Creating solutions that make a positive difference in the world.",
      color: "#9D4EDD"
    },
    { 
      icon: <FaHeart />, 
      title: "Social Responsibility", 
      description: "Committed to ethical practices and giving back to our community.",
      color: "#E71D36"
    }
  ];

  // Team Members Data
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      bio: "Former Google AI researcher with 15+ years in digital transformation. PhD in Computer Science from Stanford.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      expertise: ["AI/ML", "Strategy", "Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      joinDate: "2018"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Ex-Microsoft architect specializing in cloud infrastructure and scalable systems. Built platforms serving 10M+ users.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: ["Cloud Architecture", "DevOps", "Security"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      joinDate: "2019"
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      bio: "Award-winning designer with background at Apple and IDEO. Passionate about human-centered design.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["UX/UI", "Product Design", "Brand Strategy"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      joinDate: "2019"
    },
    {
      name: "James Wilson",
      role: "Head of Engineering",
      bio: "Full-stack expert with 12 years experience building enterprise applications. Open source contributor.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: ["React/Node", "API Design", "Performance"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      joinDate: "2020"
    },
    {
      name: "Elena Martinez",
      role: "Digital Marketing Director",
      bio: "Growth hacker with proven track record of scaling startups to 7-figure revenue through data-driven marketing.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      expertise: ["SEO", "Growth", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      joinDate: "2020"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      bio: "Former PM at Amazon with expertise in agile methodologies and product lifecycle management.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
      expertise: ["Agile", "Roadmapping", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      },
      joinDate: "2021"
    }
  ];

  // Company Milestones
  const milestones = [
    { year: "2018", event: "Company Founded", description: "Started with a vision to democratize digital transformation" },
    { year: "2019", event: "First Enterprise Client", description: "Landed Fortune 500 client, proving our enterprise capabilities" },
    { year: "2020", event: "Team Expansion", description: "Grew to 25+ experts across design, development, and strategy" },
    { year: "2021", event: "AI Division Launch", description: "Established dedicated AI and machine learning practice" },
    { year: "2022", event: "Global Recognition", description: "Featured in TechCrunch and awarded 'Top Digital Agency'" },
    { year: "2023", event: "150+ Projects", description: "Successfully delivered 150+ projects with 98% client satisfaction" }
  ];

  // Client Testimonials
  const testimonials = [
    {
      quote: "Averiqo transformed our digital infrastructure and helped us achieve 300% growth in user engagement.",
      author: "Jennifer Lopez",
      company: "TechNova Inc",
      role: "CTO",
      rating: 5
    },
    {
      quote: "Their strategic approach to our digital transformation was nothing short of revolutionary.",
      author: "Robert Chen",
      company: "Global Retail Corp",
      role: "Digital Director",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://averiqo.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="hero-text" variants={fadeInUp}>
                <div className="hero-badge">
                  <FaAward className="badge-icon" />
                  <span>Trusted by 50+ Enterprise Clients</span>
                </div>
                <h1>
                  Shaping the Future of <span className="gradient-text">Digital Innovation</span>
                </h1>
                <p className="hero-description">
                  At Averiqo, we're more than a digital agency – we're your strategic partners in 
                  transformation. Combining deep technical expertise with creative vision to build 
                  solutions that drive real business impact.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Excellence</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Projects Delivered</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="hero-visual" variants={fadeInRight}>
                <div className="visual-container">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Averiqo team collaboration" 
                  />
                  <div className="floating-card experience">
                    <FaCalendarAlt />
                    <div>
                      <div className="card-value">5+ Years</div>
                      <div className="card-label">Experience</div>
                    </div>
                  </div>
                  <div className="floating-card clients">
                    <FaUsers />
                    <div>
                      <div className="card-value">50+</div>
                      <div className="card-label">Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mission-vision-section">
          <div className="container">
            <div className="mission-vision-grid">
              <motion.div
                className="mission-card"
                initial="hidden"
                whileInView="visible"
                variants={fadeInLeft}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="card-header">
                  <div className="card-icon mission">
                    <FaRocket />
                  </div>
                  <h2>Our Mission</h2>
                </div>
                <p>
                  To empower businesses with transformative digital solutions that drive growth, 
                  enhance efficiency, and create lasting competitive advantages in an ever-evolving 
                  technological landscape.
                </p>
                <ul className="mission-points">
                  <li>Democratize access to cutting-edge technology</li>
                  <li>Foster innovation through collaboration</li>
                  <li>Deliver measurable business outcomes</li>
                  <li>Build sustainable digital ecosystems</li>
                </ul>
              </motion.div>

              <motion.div
                className="vision-card"
                initial="hidden"
                whileInView="visible"
                variants={fadeInRight}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="card-header">
                  <div className="card-icon vision">
                    <FaEye />
                  </div>
                  <h2>Our Vision</h2>
                </div>
                <p>
                  To be the world's most trusted partner for digital innovation, where technology 
                  serves humanity, businesses thrive through digital excellence, and every idea 
                  has the potential to change the world.
                </p>
                <ul className="vision-points">
                  <li>Pioneer the future of digital experiences</li>
                  <li>Bridge the gap between imagination and reality</li>
                  <li>Create technology that serves people first</li>
                  <li>Build a legacy of innovation and impact</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="values-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Our Core Values</h2>
              <p>The principles that guide every decision we make and every solution we build</p>
            </motion.div>

            <motion.div
              className="values-grid"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  variants={fadeInUp}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="value-icon" style={{ color: value.color }}>
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="story-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Our Journey</h2>
              <p>From startup to industry leader - the milestones that shaped our story</p>
            </motion.div>

            <div className="timeline">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <h3>{milestone.event}</h3>
                    <p>{milestone.description}</p>
                  </div>
                  <div className="timeline-dot"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Meet Our Leadership</h2>
              <p>The brilliant minds driving innovation and excellence at Averiqo</p>
            </motion.div>

            <motion.div
              className="team-grid"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="team-card"
                  variants={scaleIn}
                  whileHover={{ 
                    y: -15,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="team-card-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-social">
                      <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`}>
                        <FaLinkedin />
                      </a>
                      <a href={member.social.twitter} aria-label={`${member.name} Twitter`}>
                        <FaTwitter />
                      </a>
                      <a href={member.social.github} aria-label={`${member.name} GitHub`}>
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <p className="role">{member.role}</p>
                    <p className="bio">{member.bio}</p>
                    <div className="expertise">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                    <div className="join-date">
                      <FaCalendarAlt />
                      <span>Since {member.joinDate}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Client Success Stories</h2>
              <p>Hear from the businesses we've helped transform</p>
            </motion.div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2 }}
                >
                  <FaQuoteLeft className="quote-icon" />
                  <p>"{testimonial.quote}"</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}, {testimonial.company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="container">
            <motion.div
              className="cta-content"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Ready to Write Your Success Story?</h2>
              <p>Join the 50+ enterprises that trust Averiqo with their digital transformation</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Start Your Project</button>
                <button className="btn btn-secondary">Meet Our Team</button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;