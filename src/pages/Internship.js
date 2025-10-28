import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGraduationCap, 
  FaDollarSign,
  FaFilter,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
  FaCloud,
  FaDatabase
} from 'react-icons/fa';
import './Internship.css';

const Internship = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  // SEO Meta Data
  const pageTitle = "Internship Program - Averiqo | Launch Your Tech Career";
  const pageDescription = "Join Averiqo's internship program. Gain real-world experience, work on live projects, and kickstart your career in technology with industry experts.";

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Internship Categories
  const categories = [
    { id: 'all', name: 'All Roles', icon: <FaUsers />, count: 12 },
    { id: 'development', name: 'Development', icon: <FaLaptopCode />, count: 5 },
    { id: 'design', name: 'Design', icon: <FaPaintBrush />, count: 3 },
    { id: 'marketing', name: 'Marketing', icon: <FaChartLine />, count: 2 },
    { id: 'mobile', name: 'Mobile', icon: <FaMobileAlt />, count: 1 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <FaShieldAlt />, count: 1 }
  ];

  // Internships Data
  const internships = [
    {
      id: 1,
      title: "Frontend Development Intern",
      category: "development",
      department: "Web Development",
      duration: "3 months",
      location: "Remote",
      stipend: "$500/month",
      type: "Paid Internship",
      description: "Work on cutting-edge React applications and learn industry best practices from senior developers. You'll be involved in real client projects and contribute to our open-source libraries.",
      requirements: [
        "Strong understanding of HTML5, CSS3, and JavaScript ES6+",
        "Experience with React.js or similar frameworks",
        "Knowledge of responsive design principles",
        "Familiarity with Git version control",
        "Basic understanding of REST APIs"
      ],
      skills: ["React", "JavaScript", "CSS3", "Git", "Responsive Design"],
      perks: [
        "Certificate of Completion",
        "Letter of Recommendation",
        "Job Offer Potential",
        "Flexible Hours",
        "Mentorship Program"
      ],
      openPositions: 5,
      applications: 23,
      deadline: "2024-03-15",
      startDate: "2024-04-01"
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      category: "design",
      department: "Design Team",
      duration: "4 months",
      location: "Remote",
      stipend: "$400/month",
      type: "Paid Internship",
      description: "Create beautiful, user-centered designs for web and mobile applications. Work closely with our design team on wireframing, prototyping, and user testing.",
      requirements: [
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Understanding of design principles and UX best practices",
        "Portfolio showcasing design projects",
        "Knowledge of user research methodologies",
        "Basic understanding of HTML/CSS"
      ],
      skills: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Wireframing"],
      perks: [
        "Certificate of Completion",
        "Design Mentorship",
        "Portfolio Projects",
        "Creative Freedom",
        "Industry Networking"
      ],
      openPositions: 3,
      applications: 18,
      deadline: "2024-03-20",
      startDate: "2024-04-05"
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      category: "marketing",
      department: "Marketing",
      duration: "3 months",
      location: "Hybrid",
      stipend: "$450/month",
      type: "Paid Internship",
      description: "Learn and implement digital marketing strategies including SEO, social media marketing, content creation, and analytics tracking.",
      requirements: [
        "Understanding of digital marketing concepts",
        "Experience with social media platforms",
        "Basic knowledge of SEO principles",
        "Content writing skills",
        "Analytical mindset"
      ],
      skills: ["SEO", "Social Media", "Content Marketing", "Google Analytics", "Copywriting"],
      perks: [
        "Certificate of Completion",
        "Marketing Campaign Experience",
        "Analytics Training",
        "Networking Opportunities",
        "Performance Bonuses"
      ],
      openPositions: 4,
      applications: 15,
      deadline: "2024-03-25",
      startDate: "2024-04-10"
    },
    {
      id: 4,
      title: "Mobile App Development Intern",
      category: "mobile",
      department: "Mobile Development",
      duration: "4 months",
      location: "Remote",
      stipend: "$550/month",
      type: "Paid Internship",
      description: "Develop cross-platform mobile applications using React Native. Work on real projects that serve thousands of users.",
      requirements: [
        "Knowledge of JavaScript/TypeScript",
        "Understanding of React or React Native",
        "Familiarity with mobile development concepts",
        "Experience with REST APIs",
        "Problem-solving skills"
      ],
      skills: ["React Native", "JavaScript", "Mobile Development", "API Integration", "App Store Deployment"],
      perks: [
        "Certificate of Completion",
        "App Store Publication",
        "Mentorship from Senior Developers",
        "Flexible Schedule",
        "Potential Full-time Offer"
      ],
      openPositions: 2,
      applications: 12,
      deadline: "2024-04-01",
      startDate: "2024-04-15"
    },
    {
      id: 5,
      title: "Backend Development Intern",
      category: "development",
      department: "Backend Engineering",
      duration: "3 months",
      location: "Remote",
      stipend: "$500/month",
      type: "Paid Internship",
      description: "Build scalable backend systems using Node.js and cloud technologies. Learn about database design, API development, and system architecture.",
      requirements: [
        "Understanding of Node.js and Express",
        "Knowledge of database systems (SQL/NoSQL)",
        "Basic understanding of REST API design",
        "Familiarity with Git",
        "Problem-solving abilities"
      ],
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Cloud Services"],
      perks: [
        "Certificate of Completion",
        "Cloud Certification Support",
        "Real Project Experience",
        "Code Review Sessions",
        "Career Guidance"
      ],
      openPositions: 3,
      applications: 20,
      deadline: "2024-03-18",
      startDate: "2024-04-02"
    },
    {
      id: 6,
      title: "Cybersecurity Intern",
      category: "cybersecurity",
      department: "Security",
      duration: "4 months",
      location: "Remote",
      stipend: "$600/month",
      type: "Paid Internship",
      description: "Learn about cybersecurity best practices, vulnerability assessment, and security monitoring in a real-world environment.",
      requirements: [
        "Basic understanding of networking concepts",
        "Interest in cybersecurity",
        "Familiarity with Linux command line",
        "Problem-solving mindset",
        "Attention to detail"
      ],
      skills: ["Network Security", "Vulnerability Assessment", "Security Monitoring", "Linux", "Risk Analysis"],
      perks: [
        "Certificate of Completion",
        "Security Certifications Support",
        "Hands-on Security Projects",
        "Industry Expert Mentorship",
        "High-Demand Skill Development"
      ],
      openPositions: 2,
      applications: 8,
      deadline: "2024-04-05",
      startDate: "2024-04-20"
    }
  ];

  // Benefits Data
  const benefits = [
    {
      icon: <FaGraduationCap />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with 5+ years of experience"
    },
    {
      icon: <FaDollarSign />,
      title: "Competitive Stipend",
      description: "Get paid while you learn and gain valuable experience"
    },
    {
      icon: <FaCheckCircle />,
      title: "Certificate & LOR",
      description: "Receive verified certificates and letters of recommendation"
    },
    {
      icon: <FaUsers />,
      title: "Networking",
      description: "Connect with professionals and build your industry network"
    },
    {
      icon: <FaLaptopCode />,
      title: "Real Projects",
      description: "Work on live projects that impact real businesses"
    },
    {
      icon: <FaChartLine />,
      title: "Career Growth",
      description: "High potential for full-time employment after internship"
    }
  ];

  // Filter internships based on category and search term
  const filteredInternships = internships.filter(internship => {
    const matchesCategory = activeFilter === 'all' || internship.category === activeFilter;
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleApplyNow = (internship) => {
    setSelectedInternship(internship);
    setShowApplicationForm(true);
    window.scrollTo(0, 0);
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedInternship(null);
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://averiqo.com/internships" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>

      <div className="internship-page">
        {/* Hero Section */}
        <section className="internship-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="hero-text" variants={fadeInUp}>
                <h1>
                  Launch Your <span className="gradient-text">Tech Career</span>
                </h1>
                <p className="hero-description">
                  Join Averiqo's internship program and gain hands-on experience working on real projects 
                  with industry experts. Get paid to learn, grow, and build your future in technology.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Interns Hired</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">85%</div>
                    <div className="stat-label">Conversion Rate</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">4.9/5</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div className="hero-visual" variants={fadeInUp}>
                <div className="visual-container">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Team collaboration and internship" 
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Why Choose Our Internship Program?</h2>
              <p>We're committed to your growth and success</p>
            </motion.div>

            <motion.div
              className="benefits-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-card"
                  variants={scaleIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Internship Listings */}
        <section className="internship-listings">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Available Internship Positions</h2>
              <p>Find the perfect role to start your career journey</p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              className="search-filter-section"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search internships by title, skills, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filter-section">
                <div className="filter-label">
                  <FaFilter />
                  <span>Filter by Category:</span>
                </div>
                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(category.id)}
                    >
                      {category.icon}
                      <span>{category.name}</span>
                      <span className="count-badge">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Internship Grid */}
            <motion.div
              className="internship-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {filteredInternships.map((internship, index) => (
                <motion.div
                  key={internship.id}
                  className="internship-card"
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="card-header">
                    <div className="category-badge">{internship.department}</div>
                    <div className="type-badge">{internship.type}</div>
                  </div>

                  <h3>{internship.title}</h3>
                  <p className="description">{internship.description}</p>

                  <div className="internship-details">
                    <div className="detail">
                      <FaClock />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="detail">
                      <FaMapMarkerAlt />
                      <span>{internship.location}</span>
                    </div>
                    <div className="detail">
                      <FaDollarSign />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>

                  <div className="skills-section">
                    <h4>Required Skills:</h4>
                    <div className="skills-list">
                      {internship.skills.map((skill, i) => (
                        <span key={i} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="perks-section">
                    <h4>Perks & Benefits:</h4>
                    <ul>
                      {internship.perks.map((perk, i) => (
                        <li key={i}>
                          <FaCheckCircle className="check-icon" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer">
                    <div className="position-info">
                      <span className="positions">{internship.openPositions} positions available</span>
                      <span className="applications">{internship.applications} applications</span>
                    </div>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleApplyNow(internship)}
                    >
                      Apply Now <FaArrowRight />
                    </button>
                  </div>

                  <div className="deadline">
                    <strong>Apply before:</strong> {new Date(internship.deadline).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredInternships.length === 0 && (
              <motion.div
                className="no-results"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3>No internships found</h3>
                <p>Try adjusting your search criteria or check back later for new opportunities.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Application Form Modal */}
        {showApplicationForm && selectedInternship && (
          <div className="application-modal">
            <div className="modal-overlay" onClick={handleCloseForm}></div>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-header">
                <h2>Apply for {selectedInternship.title}</h2>
                <button className="close-btn" onClick={handleCloseForm}>×</button>
              </div>
              <div className="modal-body">
                <form className="application-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                  </div>
                  <div className="form-group">
                    <label>Current Education *</label>
                    <input type="text" placeholder="e.g., B.Tech Computer Science, 3rd Year" required />
                  </div>
                  <div className="form-group">
                    <label>University/College *</label>
                    <input type="text" placeholder="Enter your institution name" required />
                  </div>
                  <div className="form-group">
                    <label>Resume/CV *</label>
                    <input type="file" accept=".pdf,.doc,.docx" required />
                  </div>
                  <div className="form-group">
                    <label>Portfolio/GitHub (Optional)</label>
                    <input type="url" placeholder="https://" />
                  </div>
                  <div className="form-group">
                    <label>Why are you interested in this internship? *</label>
                    <textarea 
                      placeholder="Tell us about your motivation and what you hope to achieve..." 
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="form-actions">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <section className="internship-cta">
          <div className="container">
            <motion.div
              className="cta-content"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Ready to Launch Your Career?</h2>
              <p>Don't see the perfect role? Send us your resume and we'll notify you when matching positions open up.</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Submit General Application</button>
                <button className="btn btn-secondary">Contact Our Team</button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Internship;