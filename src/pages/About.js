import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './About.css';

const About = () => {
  // Animation variants
  const pageTitle = "About Us - Averiqo | Redefining Digital Transformation";
  const pageDescription = "Learn more about Averiqo's mission, vision, core values, and meet our team of innovators driving digital transformation.";
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const coreValues = [
    { icon: "🚀", title: "Innovation", description: "We push boundaries with creative solutions" },
    { icon: "💡", title: "Transparency", description: "Honest communication builds trust" },
    { icon: "🤝", title: "Collaboration", description: "We succeed when our clients succeed" },
    { icon: "🌱", title: "Growth", description: "Continuous learning drives excellence" },
    { icon: "🎯", title: "Impact", description: "Delivering measurable results matters" }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Digital transformation expert with 12+ years in tech innovation",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Design strategist passionate about human-centered experiences",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Tech visionary specializing in scalable architecture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Priya Patel",
      role: "Lead Developer",
      bio: "Full-stack engineer with a focus on performance optimization",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
      social: {
        twitter: "#",
        linkedin: "#"
      }
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
        <meta property="og:image" content="https://www.yourwebsite.com/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.yourwebsite.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.yourwebsite.com/path-to-your-image.jpg" />
      </Helmet>

      <section className="about-section" id="about">
        <div className="container">
          {/* Hero Introduction */}
          <motion.div
            className="about-hero"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h1 className="section-title">
              <span className="gradient-text">Redefining</span> What's Possible
            </h1>
            <p className="hero-description">
              Averiqo is a digital transformation partner that bridges the gap between vision and reality. 
              We combine cutting-edge technology with human-centered design to create solutions that matter.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="mission-vision-grid">
            <motion.div
              className="mission-card card"
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To democratize access to enterprise-grade digital solutions, enabling businesses of all sizes 
                to compete, innovate, and thrive in the digital economy.
              </p>
            </motion.div>

            <motion.div
              className="vision-card card"
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="card-icon">🔭</div>
              <h2>Our Vision</h2>
              <p>
                To create a world where technology amplifies human potential, where every business has 
                the tools to turn their boldest ideas into reality.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            className="values-section"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="section-subtitle">Our Core Principles</h2>
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <motion.div 
                  className="value-card"
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            className="team-section"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="section-subtitle">Meet Our Team</h2>
            <p className="section-description">
              The brilliant minds behind Averiqo's success
            </p>
            
            <motion.div 
              className="team-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {teamMembers.map((member, index) => (
                <motion.div 
                  className="team-card"
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="team-card-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-social-links">
                      <a href={member.social.twitter} aria-label={`${member.name} Twitter`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href={member.social.linkedin} aria-label={`${member.name} LinkedIn`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-1.036 0-1.5-.684-1.5-1.5 0-.825.676-1.5 1.5-1.5 1.027 0 1.5.684 1.5 1.5 0 .816-.673 1.5-1.5 1.5zm12 11.25h-3v-5.5c0-1.52-.903-2.5-2.3-2.5-1.679 0-2.7 1.199-2.7 2.5v5.5h-3v-10h3v1.3h.033c.312-.433 1.15-.9 2.267-.9 2.4 0 3.7 1.6 3.7 3.9v5.7z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p>{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;
