import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaArrowRight,
  FaGlobe,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaChevronDown,
} from "react-icons/fa";

import SEO from "../components/SEO";
import "./Home.css";

// --- Static Data Moved Outside Component to Optimize Rendering Performance ---
const SERVICES = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Custom websites and web applications built for performance, security, and global scalability.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    desc: "Modern, research-driven user experiences designed to maximize engagement and conversions.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Data-backed SEO, social media, and marketing strategies engineered to drive organic growth.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "We analyze your business goals, target audience, and engineering requirements.",
  },
  {
    step: "02",
    title: "Plan & Strategy",
    desc: "Creating an agile roadmap, wireframes, and architectural strategy for success.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Engineering modern, scalable, and secure production-ready solutions.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "Continuous deployment, rigorous QA testing, and reliable post-launch maintenance.",
  },
];

const VALUES = [
  {
    icon: <FaRocket />,
    title: "Innovative Solutions",
    desc: "Leveraging cutting-edge tech stacks and modular architectures for long-term scalability.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric Approach",
    desc: "We function as your extended team, ensuring every feature directly maps to commercial success.",
  },
  {
    icon: <FaGlobe />,
    title: "Digital Expertise",
    desc: "A multidisciplinary agency offering cohesive engineering and creative services under one roof.",
  },
  {
    icon: <FaChartLine />,
    title: "Growth-Driven Engineering",
    desc: "We build with speed and analytics instrumentation to track and deliver measurable metrics.",
  },
];



const FAQ_DATA = [
  {
    question: "What core services does Averiqo Technologies provide?",
    answer: "We specialize in custom web development, bespoke UI/UX design architectures, high-performance digital marketing funnels, tailored software product consulting, and professional industry tech internships.",
  },
  {
    question: "Do you collaborate with early-stage startups?",
    answer: "Absolutely. We routinely partner with early-stage startups to build modern MVPs, as well as mid-market enterprises looking to optimize and scale their legacy software infrastructures.",
  },
];

// --- Animation Variants for Uniform Scroll Revelations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
const Home = () => {
const [activeWhy, setActiveWhy] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
const [activeProcess, setActiveProcess] = useState(0);
const [activeProject, setActiveProject] = useState(0);
  return (
    <>
      <SEO
        title="Averiqo Technologies | Enterprise Web Development & Digital Engineering"
        description="Transforming visions into high-performance digital architectures. Leading-edge Web Development, UI/UX Design, and Strategy built for scalability."
        keywords="web development company, software company, UI UX design agency, digital enterprise solutions, Averiqo Technologies"
        url="https://averiqotech.com/"
      />

      <main className="home-page">
       


       {/* HERO SECTION */}
<section className="hero-section" aria-label="Introduction">
  <div className="container hero-grid">
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
     

      <h1>
        Build Your Business. <br />
        <span className="gradient-text">
          Build Your Career.
        </span>
      </h1>

      <p>
        Averiqo Technologies helps businesses grow through modern IT
        solutions while providing students with industry-focused
        internships to gain real-world experience and build successful
        careers.
      </p>

      <div className="hero-buttons">
        <Link to="/services" className="btn-primary">
          Our Services
          <FaArrowRight className="btn-icon-right" />
        </Link>

        <Link to="/internships" className="btn-secondary">
          Apply for Internship
        </Link>
      </div>
    </motion.div>

    <motion.div
      className="hero-image-wrapper"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <img
        src="/hero-image.png"
        alt="Averiqo Technologies Services and Internship Programs"
        loading="eager"
      />
    </motion.div>
  </div>
</section>

        {/* SERVICES SECTION */}
        <section className="services-section" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-header text-center">
              <h2 id="services-heading">Our Core Services</h2>
              <p>End-to-end engineered capabilities constructed to expand your digital market share.</p>
            </div>

            <motion.div 
              className="services-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                 className={`service-card ${
  activeService === index ? "active-service" : ""
}`}
onClick={() => setActiveService(index)} 
                >
                  <div className="service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* VALUE PROPOSITION (WHY CHOOSE US) */}
        <section className="why-section" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-header text-center">
              <h2 id="why-heading">Why Choose Averiqo Technologies</h2>
            </div>

            <motion.div 
              className="why-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {VALUES.map((value, index) => (
           <motion.div
  key={index}
  variants={fadeInUp}
  className={`why-card ${
    activeWhy === index ? "active-why-card" : ""
  }`}
  onClick={() => setActiveWhy(index)}
>  
                  <div className="why-icon-wrapper" aria-hidden="true">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

       

        {/* PROCESS FLOW SECTION */}
        <section className="process-section" aria-labelledby="process-heading">
          <div className="container">
            <div className="section-header text-center">
              <h2 id="process-heading">Our Engineering Process</h2>
              <p>A rigorous, collaborative development workflow structured for precision delivery.</p>
            </div>

            <motion.div 
              className="process-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {PROCESS_STEPS.map((item, index) => (
                <motion.div
  key={index}
  variants={fadeInUp}
  className={`process-card ${
    activeProcess === index ? "active-process-card" : ""
  }`}
  onClick={() => setActiveProcess(index)}
>
                  <span className="process-step-num" aria-hidden="true">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PORTFOLIO SHOWCASE */}
        <section className="projects-section" aria-labelledby="projects-heading">
          <div className="container">
            <div className="section-header text-center">
              <h2 id="projects-heading">Featured Deployments</h2>
              <p>Explore real-world case studies demonstrating our commitment to quality execution.</p>
            </div>

            <motion.div 
              className="projects-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
  variants={fadeInUp}
  whileHover={{ y: -4 }}
  className={`project-card ${
    activeProject === 0 ? "active-project-card" : ""
  }`}
  onClick={() => setActiveProject(0)}
>
                <div className="project-meta">Enterprise Stack</div>
                <h3>Next-Gen Corporate Platform</h3>
                <p>High-speed headless CMS system with tailored user telemetry configurations.</p>
              </motion.div>
              <motion.div
  variants={fadeInUp}
  whileHover={{ y: -4 }}
  className={`project-card ${
    activeProject === 1 ? "active-project-card" : ""
  }`}
  onClick={() => setActiveProject(1)}
>
                <div className="project-meta">EdTech Systems</div>
                <h3>E-Learning Hub Architecture</h3>
                <p>Interactive platform with low latency real-time asset delivery management.</p>
              </motion.div>
            <motion.div
  variants={fadeInUp}
  whileHover={{ y: -4 }}
  className={`project-card ${
    activeProject === 2 ? "active-project-card" : ""
  }`}
  onClick={() => setActiveProject(2)}
>
                <div className="project-meta">Performance Marketing</div>
                <h3>Data-Driven Growth Campaign</h3>
                <p>Scalable dynamic landing operations optimized for hyper-converting conversion funnels.</p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="center-btn-wrapper"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/projects" className="btn-secondary-outline">
                View Case Studies
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="container compact-container">
            <div className="section-header text-center">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
            </div>

            <div className="faq-list">
              {FAQ_DATA.map((faq, index) => {
                const isOpen = activeFaq === index;
                const panelId = `faq-panel-${index}`;
                return (
                  <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
                    <button 
                      className="faq-trigger" 
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span>{faq.question}</span>
                      <FaChevronDown className={`faq-icon ${isOpen ? "rotate" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="faq-content-wrapper"
                        >
                          <p className="faq-answer">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="cta-section" aria-label="Call to Action">
          <motion.div 
            className="container text-center"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Build Your Next Digital Solution?</h2>
            <p>Connect with our technical strategy engineers today to structure your product architecture blueprint.</p>
            <Link to="/contact" className="btn-primary btn-large">
              Get A Free Consultation
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;