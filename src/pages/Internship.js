// Internship.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FaDatabase,
  FaTimes,
  FaArrowUp,
  FaStar,
  FaAward,
  FaBriefcase,
  FaUserGraduate,
  FaHandshake,
  FaHeart,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';
import './Internship.css';

const Internship = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    university: '',
    graduationYear: '',
    resume: null,
    portfolio: '',
    motivation: '',
    skills: [],
    availability: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notification, setNotification] = useState(null);
  const fileInputRef = useRef(null);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Notification system
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
  const internships = useMemo(() => [
    {
      id: 1,
      title: "Frontend Development Intern",
      category: "development",
      department: "Web Development",
      duration: "3 months",
      location: "Remote",
      stipend: "$500/month",
      type: "Paid Internship",
      level: "Beginner",
      startDate: "2024-04-01",
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
      company: "Averiqo",
      departmentColor: "#4F46E5"
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
      level: "Beginner",
      startDate: "2024-04-05",
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
      company: "Averiqo",
      departmentColor: "#EC4899"
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
      level: "Intermediate",
      startDate: "2024-04-10",
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
      company: "Averiqo",
      departmentColor: "#F59E0B"
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
      level: "Intermediate",
      startDate: "2024-04-15",
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
      company: "Averiqo",
      departmentColor: "#10B981"
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
      level: "Intermediate",
      startDate: "2024-04-02",
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
      company: "Averiqo",
      departmentColor: "#8B5CF6"
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
      level: "Advanced",
      startDate: "2024-04-20",
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
      company: "Averiqo",
      departmentColor: "#EF4444"
    }
  ], []);

  // Benefits Data
  const benefits = [
    {
      icon: <FaUserGraduate />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with 5+ years of experience"
    },
    {
      icon: <FaDollarSign />,
      title: "Competitive Stipend",
      description: "Get paid while you learn and gain valuable experience"
    },
    {
      icon: <FaAward />,
      title: "Certificate & LOR",
      description: "Receive verified certificates and letters of recommendation"
    },
    {
      icon: <FaHandshake />,
      title: "Networking",
      description: "Connect with professionals and build your industry network"
    },
    {
      icon: <FaBriefcase />,
      title: "Real Projects",
      description: "Work on live projects that impact real businesses"
    },
    {
      icon: <FaHeart />,
      title: "Career Growth",
      description: "High potential for full-time employment after internship"
    }
  ];

  const availableSkills = [
    "JavaScript", "React", "Node.js", "Python", "Java", "PHP",
    "TypeScript", "Vue.js", "Angular", "Next.js", "GraphQL",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "AWS",
    "Docker", "Kubernetes", "Git", "Figma", "Adobe XD"
  ];

  // Filter internships
  const filteredInternships = internships.filter(internship => {
    const matchesCategory = activeFilter === 'all' || internship.category === activeFilter;
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Form handlers
  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => {
      const skills = prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills };
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.education.trim()) errors.education = 'Education is required';
    if (!formData.university.trim()) errors.university = 'University name is required';
    if (!formData.graduationYear) errors.graduationYear = 'Graduation year is required';
    if (!formData.resume) errors.resume = 'Resume is required';
    if (!formData.motivation.trim() || formData.motivation.length < 50) {
      errors.motivation = 'Please write at least 50 characters explaining your motivation';
    }
    if (formData.skills.length === 0) errors.skills = 'Please select at least one skill';
    if (!formData.availability) errors.availability = 'Please select your availability';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleApplyNow = (internship) => {
    setSelectedInternship(internship);
    setFormStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      education: '',
      university: '',
      graduationYear: '',
      resume: null,
      portfolio: '',
      motivation: '',
      skills: [],
      availability: '',
    });
    setFormErrors({});
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseForm = () => {
    setShowApplicationForm(false);
    setSelectedInternship(null);
    setFormStep(1);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector('.error-message');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setNotification({
        type: 'success',
        message: 'Your application has been submitted successfully! We\'ll get back to you soon.'
      });
      setTimeout(() => {
        handleCloseForm();
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Notification */}
        <AnimatePresence>
          {notification && (
            <motion.div
              className={`notification ${notification.type}`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
            >
              <div className="notification-content">
                <FaCheckCircle className="notification-icon" />
                <span>{notification.message}</span>
              </div>
              <button className="notification-close" onClick={() => setNotification(null)}>
                <FaTimes />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="internship-hero">
          <div className="hero-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
          </div>
          <div className="container">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="hero-text" variants={fadeInUp}>
                <div className="hero-badge">
                  <FaStar className="badge-icon" />
                  <span>Top 5% Internship Program</span>
                </div>
                <h1>
                  Launch Your <br />
                  <span className="gradient-text">Tech Career</span>
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
                  <div className="stat-divider"></div>
                  <div className="stat">
                    <div className="stat-number">85%</div>
                    <div className="stat-label">Conversion Rate</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat">
                    <div className="stat-number">4.9/5</div>
                    <div className="stat-label">Satisfaction</div>
                  </div>
                </div>
                <div className="hero-actions">
                  <a href="#listings" className="btn-primary">
                    View Open Positions <FaArrowRight />
                  </a>
                  <button className="btn-secondary" onClick={() => setActiveFilter('all')}>
                    <FaUsers /> Explore Programs
                  </button>
                </div>
              </motion.div>
              
              <motion.div className="hero-visual" variants={fadeInUp}>
                <div className="visual-container">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Team collaboration and internship" 
                    className="hero-image"
                  />
                  <div className="floating-badge badge-1">
                    <FaGraduationCap />
                    <span>3 Month Program</span>
                  </div>
                  <div className="floating-badge badge-2">
                    <FaDollarSign />
                    <span>Paid Internship</span>
                  </div>
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
              <span className="section-badge">Why Join Us</span>
              <h2>Why Choose Our <span className="gradient-text">Internship Program?</span></h2>
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
        <section className="internship-listings" id="listings">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-badge">Open Positions</span>
              <h2>Available <span className="gradient-text">Internships</span></h2>
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
                  placeholder="Search by title, department, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button className="clear-search" onClick={() => setSearchTerm('')}>
                    <FaTimes />
                  </button>
                )}
              </div>

              <div className="filter-section">
                <div className="filter-label">
                  <FaFilter />
                  <span>Filter:</span>
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

            {/* Results info */}
            <div className="results-info">
              <span>Showing {filteredInternships.length} of {internships.length} positions</span>
            </div>

            {/* Internship Grid */}
            <AnimatePresence>
              <motion.div
                className="internship-grid"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                key={activeFilter + searchTerm}
              >
                {filteredInternships.map((internship, index) => (
                  <motion.div
                    key={internship.id}
                    className="internship-card"
                    variants={fadeInUp}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    layout
                  >
                    <div className="card-badge">{internship.department}</div>
                    <div className="card-type">{internship.type}</div>
                    <div className="card-level" style={{ background: internship.departmentColor }}>
                      {internship.level}
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
                        {internship.perks.slice(0, 3).map((perk, i) => (
                          <li key={i}>
                            <FaCheckCircle className="check-icon" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="card-footer">
                      <div className="position-info">
                        <span className="positions">{internship.openPositions} positions</span>
                        <span className="applications">{internship.applications} applied</span>
                      </div>
                      <button 
                        className="btn-primary"
                        onClick={() => handleApplyNow(internship)}
                      >
                        Apply Now <FaArrowRight />
                      </button>
                    </div>

                    <div className="card-deadline">
                      <span>📅 Apply by: {new Date(internship.deadline).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredInternships.length === 0 && (
              <motion.div
                className="no-results"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="no-results-icon">🔍</div>
                <h3>No internships found</h3>
                <p>Try adjusting your search criteria or check back later for new opportunities.</p>
                <button className="btn-secondary" onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}>
                  Reset Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-badge">Success Stories</span>
              <h2>What Our <span className="gradient-text">Interns Say</span></h2>
            </motion.div>

            <motion.div
              className="testimonials-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  name: "Priya Sharma",
                  role: "Software Engineer at Google",
                  quote: "Averiqo's internship program gave me the skills and confidence to land my dream job. The mentorship was incredible.",
                  image: "👩‍💻",
                },
                {
                  name: "Rahul Patel",
                  role: "Product Designer at Microsoft",
                  quote: "I worked on real projects that actually mattered. The portfolio I built during this internship helped me get multiple offers.",
                  image: "🧑‍🎨",
                },
                {
                  name: "Ananya Reddy",
                  role: "Data Analyst at Amazon",
                  quote: "The hands-on experience and industry exposure I gained at Averiqo was invaluable for my career growth.",
                  image: "👩‍💼",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="testimonial-card"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="testimonial-avatar">{testimonial.image}</div>
                  <div className="testimonial-rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p>"{testimonial.quote}"</p>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Form Modal */}
        <AnimatePresence>
          {showApplicationForm && selectedInternship && (
            <div className="application-modal">
              <div className="modal-overlay" onClick={handleCloseForm}></div>
              <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <button className="modal-close" onClick={handleCloseForm}>
                  <FaTimes />
                </button>

                <div className="modal-header">
                  <h2>Apply for {selectedInternship.title}</h2>
                  <p>Complete the form below to start your application</p>
                  <div className="modal-progress">
                    <div className={`progress-step ${formStep >= 1 ? 'active' : ''}`}>
                      <span className="step-number">1</span>
                      <span className="step-label">Personal Info</span>
                    </div>
                    <div className={`progress-line ${formStep >= 2 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${formStep >= 2 ? 'active' : ''}`}>
                      <span className="step-number">2</span>
                      <span className="step-label">Skills & Motivation</span>
                    </div>
                    <div className={`progress-line ${formStep >= 3 ? 'active' : ''}`}></div>
                    <div className={`progress-step ${formStep >= 3 ? 'active' : ''}`}>
                      <span className="step-number">3</span>
                      <span className="step-label">Review & Submit</span>
                    </div>
                  </div>
                </div>

                <div className="modal-body">
                  {isSubmitted ? (
                    <motion.div
                      className="success-state"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <FaCheckCircle className="success-icon" />
                      <h2>Application Submitted!</h2>
                      <p>Thank you for applying to the {selectedInternship.title} position. We'll review your application and get back to you within 5-7 business days.</p>
                    </motion.div>
                  ) : (
                    <form className="application-form" onSubmit={handleSubmit}>
                      {formStep === 1 && (
                        <>
                          <div className="form-row">
                            <div className="form-group">
                              <label>Full Name *</label>
                              <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleFormChange}
                                className={formErrors.fullName ? 'error' : ''}
                              />
                              {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                            </div>
                            <div className="form-group">
                              <label>Email Address *</label>
                              <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleFormChange}
                                className={formErrors.email ? 'error' : ''}
                              />
                              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label>Phone Number *</label>
                              <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleFormChange}
                                className={formErrors.phone ? 'error' : ''}
                              />
                              {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                            </div>
                            <div className="form-group">
                              <label>Current Education *</label>
                              <input
                                type="text"
                                name="education"
                                placeholder="e.g., B.Tech Computer Science, 3rd Year"
                                value={formData.education}
                                onChange={handleFormChange}
                                className={formErrors.education ? 'error' : ''}
                              />
                              {formErrors.education && <span className="error-message">{formErrors.education}</span>}
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label>University/College *</label>
                              <input
                                type="text"
                                name="university"
                                placeholder="Enter your institution name"
                                value={formData.university}
                                onChange={handleFormChange}
                                className={formErrors.university ? 'error' : ''}
                              />
                              {formErrors.university && <span className="error-message">{formErrors.university}</span>}
                            </div>
                            <div className="form-group">
                              <label>Graduation Year *</label>
                              <select
                                name="graduationYear"
                                value={formData.graduationYear}
                                onChange={handleFormChange}
                                className={formErrors.graduationYear ? 'error' : ''}
                              >
                                <option value="">Select year</option>
                                {[2024, 2025, 2026, 2027, 2028].map(year => (
                                  <option key={year} value={year}>{year}</option>
                                ))}
                              </select>
                              {formErrors.graduationYear && <span className="error-message">{formErrors.graduationYear}</span>}
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label>Availability *</label>
                              <select
                                name="availability"
                                value={formData.availability}
                                onChange={handleFormChange}
                                className={formErrors.availability ? 'error' : ''}
                              >
                                <option value="">Select availability</option>
                                <option value="immediate">Immediate</option>
                                <option value="within-1-month">Within 1 month</option>
                                <option value="within-3-months">Within 3 months</option>
                                <option value="flexible">Flexible</option>
                              </select>
                              {formErrors.availability && <span className="error-message">{formErrors.availability}</span>}
                            </div>
                            <div className="form-group">
                              <label>Resume/CV *</label>
                              <div className="file-upload">
                                <input
                                  type="file"
                                  name="resume"
                                  ref={fileInputRef}
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFormChange}
                                  className={formErrors.resume ? 'error' : ''}
                                />
                                <label className="file-upload-label">
                                  <FaFileAlt />
                                  <span>{formData.resume ? formData.resume.name : 'Upload Resume (PDF, DOC)'}</span>
                                </label>
                              </div>
                              {formErrors.resume && <span className="error-message">{formErrors.resume}</span>}
                            </div>
                          </div>

                          <div className="form-group">
                            <label>Portfolio/GitHub (Optional)</label>
                            <input
                              type="url"
                              name="portfolio"
                              placeholder="https://github.com/yourusername"
                              value={formData.portfolio}
                              onChange={handleFormChange}
                            />
                          </div>

                          <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={handleCloseForm}>
                              Cancel
                            </button>
                            <button type="button" className="btn-primary" onClick={() => setFormStep(2)}>
                              Next Step <FaArrowRight />
                            </button>
                          </div>
                        </>
                      )}

                      {formStep === 2 && (
                        <>
                          <div className="form-group">
                            <label>Select Your Skills *</label>
                            <div className="skills-select">
                              {availableSkills.map(skill => (
                                <button
                                  key={skill}
                                  type="button"
                                  className={`skill-chip ${formData.skills.includes(skill) ? 'selected' : ''}`}
                                  onClick={() => handleSkillToggle(skill)}
                                >
                                  {skill}
                                </button>
                              ))}
                            </div>
                            {formErrors.skills && <span className="error-message">{formErrors.skills}</span>}
                          </div>

                          <div className="form-group">
                            <label>Why are you interested in this internship? *</label>
                            <textarea
                              name="motivation"
                              placeholder="Tell us about your motivation and what you hope to achieve..."
                              rows="5"
                              value={formData.motivation}
                              onChange={handleFormChange}
                              className={formErrors.motivation ? 'error' : ''}
                            />
                            {formErrors.motivation && <span className="error-message">{formErrors.motivation}</span>}
                            <div className="char-count">{formData.motivation.length}/50 min</div>
                          </div>

                          <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={() => setFormStep(1)}>
                              <FaArrowRight style={{ transform: 'rotate(180deg)' }} /> Back
                            </button>
                            <button type="button" className="btn-primary" onClick={() => setFormStep(3)}>
                              Review Application
                            </button>
                          </div>
                        </>
                      )}

                      {formStep === 3 && (
                        <>
                          <div className="review-section">
                            <h3>Review Your Application</h3>
                            <div className="review-grid">
                              <div className="review-item">
                                <strong>Full Name</strong>
                                <span>{formData.fullName}</span>
                              </div>
                              <div className="review-item">
                                <strong>Email</strong>
                                <span>{formData.email}</span>
                              </div>
                              <div className="review-item">
                                <strong>Phone</strong>
                                <span>{formData.phone}</span>
                              </div>
                              <div className="review-item">
                                <strong>Education</strong>
                                <span>{formData.education}</span>
                              </div>
                              <div className="review-item">
                                <strong>University</strong>
                                <span>{formData.university}</span>
                              </div>
                              <div className="review-item">
                                <strong>Graduation Year</strong>
                                <span>{formData.graduationYear}</span>
                              </div>
                              <div className="review-item">
                                <strong>Availability</strong>
                                <span>{formData.availability}</span>
                              </div>
                              <div className="review-item">
                                <strong>Skills</strong>
                                <div className="review-skills">
                                  {formData.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="review-item full-width">
                                <strong>Motivation</strong>
                                <p>{formData.motivation}</p>
                              </div>
                              {formData.portfolio && (
                                <div className="review-item full-width">
                                  <strong>Portfolio</strong>
                                  <a href={formData.portfolio} target="_blank" rel="noopener noreferrer">
                                    {formData.portfolio} <FaExternalLinkAlt />
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="form-actions">
                            <button type="button" className="btn-secondary" onClick={() => setFormStep(2)}>
                              <FaArrowRight style={{ transform: 'rotate(180deg)' }} /> Back
                            </button>
                            <button type="submit" className="btn-primary" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <span className="spinner"></span>
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  Submit Application <FaArrowRight />
                                </>
                              )}
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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
                <button className="btn-primary" onClick={() => {
                  setSelectedInternship({
                    title: "General Application",
                    type: "Open Application"
                  });
                  setFormStep(1);
                  setShowApplicationForm(true);
                }}>
                  Submit General Application <FaArrowRight />
                </button>
                <a href="mailto:careers@averiqo.com" className="btn-secondary">
                  <FaEnvelope /> Contact Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              className="scroll-top"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Internship;