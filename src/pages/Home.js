import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaBusinessTime, FaCog, FaRegFileAlt, FaChartLine, FaUsers, FaBullseye, FaMapMarkedAlt, FaHandshake, FaMobileAlt } from 'react-icons/fa';
import './Home.css';


const Home = () => {
 
  const services = [
    {
      icon: <FaLaptopCode size={40} color="#00bcd4" />,
      title: "Web Development",
      description: "Modern and responsive websites built to scale your business.",
      highlights: ["Custom CMS", "E-commerce", "Web Apps"]
    },
    {
      icon: <FaPaintBrush size={40} color="#ff5722" />,
      title: "UI/UX Design",
      description: "Creative and user-centered designs that drive engagement.",
      highlights: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: <FaBullhorn size={40} color="#4caf50" />,
      title: "Digital Marketing",
      description: "Grow your audience with SEO, Ads, and content strategy.",
      highlights: ["SEO", "PPC", "Social Media"]
    },
    {
      icon: <FaBusinessTime size={40} color="#9c27b0" />,
      title: "Business Consulting",
      description: "Turn ideas into strategies with expert business guidance.",
      highlights: ["Market Analysis", "Strategy", "Implementation"]
    },
    {
      icon: <FaCog size={40} color="#00bcd4" />,
      title: "Automation Services",
      description: "Streamline your processes with custom automation solutions.",
      highlights: ["Workflow Automation", "CRM Integration", "Business Process Optimization"]
    },
    {
      icon: <FaRegFileAlt size={40} color="#ff5722" />,
      title: "Content Strategy",
      description: "Develop a tailored content plan that resonates with your target audience.",
      highlights: ["Content Creation", "Brand Messaging", "Content Distribution"]
    },
    {
      icon: <FaChartLine size={40} color="#4caf50" />,
      title: "Analytics & Insights",
      description: "Leverage data and analytics to improve business performance and make data-driven decisions.",
      highlights: ["Google Analytics", "Performance Reporting", "Data-Driven Strategy"]
    },
    {
      icon: <FaUsers size={40} color="#9c27b0" />,
      title: "Community Management",
      description: "Engage with your audience and foster a loyal community.",
      highlights: ["Social Media Engagement", "Brand Advocacy", "User Interaction"]
    },
    {
      icon: <FaBullseye size={40} color="#00bcd4" />,
      title: "Paid Advertising",
      description: "Maximize ROI with targeted ad campaigns on platforms like Google Ads and Facebook.",
      highlights: ["PPC Campaigns", "Google Ads", "Facebook/Instagram Ads"]
    },
    {
      icon: <FaMapMarkedAlt size={40} color="#ff5722" />,
      title: "Local SEO",
      description: "Optimize your business for local search to attract nearby customers.",
      highlights: ["Google My Business", "Local Listings", "Map Optimization"]
    },
    {
      icon: <FaHandshake size={40} color="#4caf50" />,
      title: "Partnership Development",
      description: "Build and maintain strong partnerships to expand your business network.",
      highlights: ["Strategic Partnerships", "Networking", "Affiliate Marketing"]
    },
    {
      icon: <FaMobileAlt size={40} color="#ff5722" />,
      title: "App Development",
      description: "Create innovative mobile applications tailored to your business needs.",
      highlights: ["Android Apps", "iOS Apps", "Cross-Platform Apps"]
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 id="hero-heading">
                <span className="gradient-text">Innovative Solutions</span> for Your Digital Transformation
              </h1>
              <p className="hero-subtitle">
                Averiqo delivers cutting-edge technology, design, and strategy services to propel your business forward in the digital landscape.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary" aria-label="Get started with Averiqo">
                  Get Started
                </Link>
                <Link to="/projects" className="btn btn-secondary" aria-label="View our portfolio">
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <img 
              src="/hero-image.png" 
              alt="Digital transformation illustration" 
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="container">
          <p>Trusted by innovative companies worldwide</p>
          <div className="badges-grid">
            {[1, 2, 3, 4, 5].map((item) => (
              <img 
                key={item}
                src={`/logos/company-${item}.svg`} 
                alt="Trusted company logo" 
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="services" aria-labelledby="services-heading">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <h2 id="services-heading">Our Expertise</h2>
              <p className="section-subtitle">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
            
            <div className="services-grid">
  {services.map((service, index) => (
    <motion.div 
      className="service-card"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="service-icon-container">
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="service-highlights">
        {service.highlights.map((highlight, i) => (
          <li key={i}>• {highlight}</li>
        ))}
      </ul>
      <Link 
        to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
        className="service-link"
      >
        Learn more →
      </Link>
    </motion.div>
  ))}
</div>

          </motion.div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="about-teaser">
        <div className="container">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 id="about-heading">Why Choose Averiqo</h2>
              <p className="about-description">
                We combine technical excellence with business acumen to deliver solutions that drive measurable results. Our approach is built on three core principles:
              </p>
              <ul className="about-features">
                <li>
                  <h4>Strategic Thinking</h4>
                  <p>Aligning technology with business objectives</p>
                </li>
                <li>
                  <h4>Technical Excellence</h4>
                  <p>Cutting-edge solutions with robust architecture</p>
                </li>
                <li>
                  <h4>User-Centric Design</h4>
                  <p>Intuitive interfaces that drive engagement</p>
                </li>
              </ul>
              <div className="about-cta">
                <Link to="/about" className="btn btn-outline" aria-label="Learn more about our approach">
                  Our Methodology
                </Link>
                <Link to="/case-studies" className="btn btn-text" aria-label="View our case studies">
                  View Case Studies →
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/AI-Collaboration-Tools.jpg" 
              alt="Averiqo team collaborating" 
              loading="lazy"
            />
            <div className="experience-badge">
              <span>10+</span>
              <p>Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                className="stat-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" aria-labelledby="cta-heading">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 id="cta-heading">Ready to Transform Your Business?</h2>
            <p className="cta-subtitle">
              Schedule a free consultation with our experts to discuss your project requirements and how we can help.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary" aria-label="Contact us for a consultation">
                Book a Consultation
              </Link>
              <Link to="/pricing" className="btn btn-secondary" aria-label="View our pricing plans">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;