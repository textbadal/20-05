// CertificateVerification.jsx - Alternate Design
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  FaCertificate,
  FaCheckCircle,
  FaTimesCircle,
  FaUserGraduate,
  FaAward,
  FaCalendarAlt,
  FaIdCard,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaArrowRight,
  FaEnvelope,
  FaLock,
  FaStar,
  FaMedal,
  FaClock,
  FaInfoCircle,
  FaFileAlt,
  FaPrint,
  FaDownload,
  FaShare,
  FaCopy,
  FaCheck,
  FaArrowLeft,
  FaBuilding,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import "./CertificateVerification.css";

const CertificateVerification = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [copied, setCopied] = useState(false);
  const [recentVerifications, setRecentVerifications] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const inputRef = useRef(null);

  // Sample certificate data
  const certificates = {
    "AVQ-2024-001": {
      id: "AVQ-2024-001",
      studentName: "Sarah Johnson",
      course: "Frontend Development Internship",
      issueDate: "2024-04-15",
      duration: "3 months",
      grade: "A+",
      performance: "Excellent",
      issuer: "Averiqo Technologies",
      signature: "Dr. Alex Johnson",
      verificationUrl: "https://averiqotech.com/verify/AVQ-2024-001",
      skills: ["React.js", "JavaScript", "CSS3", "Git", "Responsive Design"],
      certificateImage: "/certificate-template.jpg",
    },
    "AVQ-2024-002": {
      id: "AVQ-2024-002",
      studentName: "Michael Chen",
      course: "UI/UX Design Internship",
      issueDate: "2024-04-20",
      duration: "4 months",
      grade: "A",
      performance: "Outstanding",
      issuer: "Averiqo Technologies",
      signature: "Dr. Alex Johnson",
      verificationUrl: "https://averiqotech.com/verify/AVQ-2024-002",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      certificateImage: "/certificate-template.jpg",
    },
    "AVQ-2024-003": {
      id: "AVQ-2024-003",
      studentName: "Priya Sharma",
      course: "Digital Marketing Internship",
      issueDate: "2024-05-01",
      duration: "3 months",
      grade: "A+",
      performance: "Exceptional",
      issuer: "Averiqo Technologies",
      signature: "Dr. Alex Johnson",
      verificationUrl: "https://averiqotech.com/verify/AVQ-2024-003",
      skills: ["SEO", "Content Marketing", "Google Analytics", "Social Media"],
      certificateImage: "/certificate-template.jpg",
    },
  };

  // Auto-verify from URL
  useEffect(() => {
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode) {
      setCode(urlCode);
      handleVerify(urlCode);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Load recent verifications
  useEffect(() => {
    const saved = localStorage.getItem("recentVerifications");
    if (saved) {
      try {
        setRecentVerifications(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load recent verifications");
      }
    }
  }, []);

  const handleVerify = (c) => {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const cert = certificates[c.toUpperCase()];
      if (cert) {
        setResult({ valid: true, data: cert });
        const updated = [
          { id: cert.id, name: cert.studentName, date: new Date().toISOString() },
          ...recentVerifications.filter(item => item.id !== cert.id)
        ].slice(0, 5);
        setRecentVerifications(updated);
        localStorage.setItem("recentVerifications", JSON.stringify(updated));
        window.history.pushState({}, "", `?code=${c}`);
      } else {
        setResult({ valid: false });
      }
      setLoading(false);
    }, 1500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmedCode = code.trim();
    if (trimmedCode) {
      handleVerify(trimmedCode);
    }
  };

  const reset = () => {
    setCode("");
    setResult(null);
    setCopied(false);
    window.history.pushState({}, "", window.location.pathname);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert("Certificate download will be available in the full version.");
  };

  const faqs = [
    {
      question: "How do I find my certificate ID?",
      answer:
        "Your certificate ID is printed at the bottom-right corner of your certificate. It follows the format AVQ-YYYY-NNN (e.g., AVQ-2024-001).",
    },
    {
      question: "What if my certificate is not showing up?",
      answer:
        "Double-check that you've entered the ID exactly as printed on your certificate. If the issue persists, please contact our support team.",
    },
    {
      question: "Can I verify someone else's certificate?",
      answer:
        "Yes! Anyone can verify an Averiqo-issued certificate using the unique ID provided on the certificate.",
    },
    {
      question: "How secure is this verification system?",
      answer:
        "Our verification system uses blockchain-inspired technology to ensure each certificate is unique and cannot be forged.",
    },
  ];

  const stats = [
    { icon: <FaUsers />, value: "1,200+", label: "Certificates Issued" },
    { icon: <FaShieldAlt />, value: "99.9%", label: "Verification Accuracy" },
    { icon: <FaClock />, value: "24/7", label: "Instant Access" },
  ];

  return (
    <>
      <Helmet>
        <title>Certificate Verification | Averiqo</title>
        <meta
          name="description"
          content="Verify your Averiqo certificate instantly. Enter your certificate ID to validate authenticity."
        />
      </Helmet>

      <div className="cert-verify-page">
        {/* Minimal Background */}
        <div className="bg-elements">
          <div className="bg-dot dot-1"></div>
          <div className="bg-dot dot-2"></div>
          <div className="bg-dot dot-3"></div>
          <div className="bg-dot dot-4"></div>
          <div className="bg-dot dot-5"></div>
          <div className="bg-line line-1"></div>
          <div className="bg-line line-2"></div>
        </div>

        <div className="container">
       

          {/* Hero Section - Clean */}
          <motion.div
            className="hero-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="hero-badge">
         
             
            </div>
            <h1>Verify Your Certificate</h1>
            <p>
              Enter your certificate ID to instantly verify authenticity and view
              certificate details. Powered by Averiqo Technologies.
            </p>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main Verification Card - Minimal Design */}
          <motion.div
            className="verify-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-inner">
              {!result ? (
                <>
                  <div className="card-icon-wrapper">
                    <FaIdCard className="card-main-icon" />
                  </div>
                  <h2 className="card-title">Enter Certificate ID</h2>
                  <p className="card-subtitle">
                    Enter the unique ID printed on your certificate
                  </p>

                  <form onSubmit={onSubmit} className="verify-form">
                    <div className="input-group">
                      <FaIdCard className="input-icon" />
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="AVQ-2024-001"
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        className={loading ? "loading" : ""}
                        autoComplete="off"
                      />
                      {code && (
                        <button
                          type="button"
                          className="clear-btn"
                          onClick={() => setCode("")}
                        >
                          <FaTimesCircle />
                        </button>
                      )}
                    </div>
                    <small className="input-helper">
                      Format: AVQ-YYYY-NNN (e.g., AVQ-2024-001)
                    </small>

                    <button
                      type="submit"
                      className="verify-btn"
                      disabled={loading || !code.trim()}
                    >
                      {loading ? (
                        <>
                          <span className="spinner"></span>
                          Verifying...
                        </>
                      ) : (
                        <>
                          <FaSearch />
                          Verify Certificate
                        </>
                      )}
                    </button>
                  </form>

                  {/* Quick Actions */}
                  <div className="quick-actions">
                    <button
                      className="quick-btn"
                      onClick={() => setCode("AVQ-2024-001")}
                    >
                      <FaCertificate /> Sample ID
                    </button>
                    <button
                      className="quick-btn"
                      onClick={() => setShowHistory(!showHistory)}
                    >
                      <FaClock /> Recent
                    </button>
                  </div>

                  {/* Recent Verifications */}
                  <AnimatePresence>
                    {showHistory && recentVerifications.length > 0 && (
                      <motion.div
                        className="recent-dropdown"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="recent-list">
                          {recentVerifications.map((item) => (
                            <button
                              key={item.id}
                              className="recent-item"
                              onClick={() => {
                                setCode(item.id);
                                handleVerify(item.id);
                                setShowHistory(false);
                              }}
                            >
                              <span className="recent-id">{item.id}</span>
                              <span className="recent-name">{item.name}</span>
                              <span className="recent-date">
                                {new Date(item.date).toLocaleDateString()}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="trust-footer">
                    <FaLock className="lock-icon" />
                    <span>Your information is secure and encrypted</span>
                  </div>
                </>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key="result"
                    className="result-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {result.valid ? (
                      <>
                        {/* Success Header */}
                        <div className="result-success">
                          <div className="success-icon-wrapper">
                            <FaCheckCircle className="success-icon" />
                          </div>
                          <h2>Certificate Verified</h2>
                          <p>This certificate is authentic and issued by Averiqo</p>
                        </div>

                        {/* Certificate Details - Clean Grid */}
                        <div className="cert-details">
                          <div className="detail-row">
                            <div className="detail-label">Student Name</div>
                            <div className="detail-value">{result.data.studentName}</div>
                          </div>
                          <div className="detail-row">
                            <div className="detail-label">Program</div>
                            <div className="detail-value">{result.data.course}</div>
                          </div>
                          <div className="detail-row">
                            <div className="detail-label">Issue Date</div>
                            <div className="detail-value">
                              {new Date(result.data.issueDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                          <div className="detail-row">
                            <div className="detail-label">Duration</div>
                            <div className="detail-value">{result.data.duration}</div>
                          </div>
                          <div className="detail-row">
                            <div className="detail-label">Grade</div>
                            <div className="detail-value highlight">{result.data.grade}</div>
                          </div>
                          <div className="detail-row">
                            <div className="detail-label">Issued By</div>
                            <div className="detail-value">{result.data.issuer}</div>
                          </div>
                          <div className="detail-row full">
                            <div className="detail-label">Certificate ID</div>
                            <div className="detail-value id-value">
                              {result.data.id}
                              <button
                                className="copy-btn"
                                onClick={() => handleCopy(result.data.id)}
                              >
                                {copied ? <FaCheck /> : <FaCopy />}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Skills Tags */}
                        {result.data.skills && (
                          <div className="skills-section">
                            <h4>Skills Acquired</h4>
                            <div className="skills-tags">
                              {result.data.skills.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Signature */}
                        <div className="signature-block">
                          <div className="signature-line"></div>
                          <div className="signature-name">{result.data.signature}</div>
                          <div className="signature-title">Director, Averiqo Technologies</div>
                        </div>

                        {/* Actions */}
                        <div className="result-actions">
                          <button onClick={reset} className="btn-outline">
                            <FaArrowLeft /> Verify Another
                          </button>
                          <button onClick={handlePrint} className="btn-outline">
                            <FaPrint /> Print
                          </button>
                          <button
                            onClick={() => handleCopy(result.data.verificationUrl)}
                            className="btn-primary"
                          >
                            {copied ? <FaCheck /> : <FaShare />}
                            {copied ? "Copied!" : "Share"}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Error State */}
                        <div className="result-error">
                          <div className="error-icon-wrapper">
                            <FaTimesCircle className="error-icon" />
                          </div>
                          <h2>Verification Failed</h2>
                          <p>No certificate found with the provided ID</p>
                        </div>

                        <div className="error-help">
                          <div className="help-box">
                            <FaInfoCircle className="help-icon" />
                            <div>
                              <h4>Possible Reasons:</h4>
                              <ul>
                                <li>Certificate ID may be incorrect</li>
                                <li>Certificate may not have been issued yet</li>
                                <li>Certificate ID may have expired</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="result-actions">
                          <button onClick={reset} className="btn-primary">
                            <FaSearch /> Try Again
                          </button>
                          <a href="mailto:support@averiqotech.com" className="btn-outline">
                            <FaEnvelope /> Contact Support
                          </a>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.div>

          {/* FAQ Section - Minimal */}
          <motion.section
            className="faq-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="faq-header">
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions</p>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  className={`faq-item ${openFAQ === index ? "open" : ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">
                      {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.section>

        
        </div>
      </div>
    </>
  );
};

export default CertificateVerification;