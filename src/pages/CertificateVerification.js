// CertificateVerification.jsx
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
  FaUsers,
} from "react-icons/fa";
import "./CertificateVerification.css";

const CertificateVerification = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const timeoutRef = useRef(null);
  const inputRef = useRef(null);

  // Lazy initialization of recent verifications directly from localStorage
  const [recentVerifications, setRecentVerifications] = useState(() => {
    try {
      const saved = localStorage.getItem("recentVerifications");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load recent verifications", e);
      return [];
    }
  });

  // Sample certificate data database
  const certificates = {
    "AT-2709": {
      id: "AT-2709",
      studentName: "Risabh Raj",
      course: "Digital Marketing Internship",
      issueDate: "2026-04-15",
      duration: "3 months",
      grade: "A+",
      issuer: "Averiqo Technologies",
      signature: "Shivam Singh",
      verificationUrl: "https://averiqotech.com/verify/AT-2709",
    },
    "AT-2710": {
      id: "AT-2710",
      studentName: "B.Rubavasudeva",
      course: "Frontend Development Internship",
      issueDate: "2026-06-30",
      duration: "1 month",
      grade: "A+",
      issuer: "Averiqo Technologies",
      signature: "Shivam Singh",
      verificationUrl: "https://averiqotech.com/verify/AT-2710",
    },
    "AT-2711": {
      id: "AT-2711",
      studentName: "Arikrishnan",
      course: "Frontend Development Internship",
      issueDate: "2026-06-30",
      duration: "1 month",
      grade: "A+",
      issuer: "Averiqo Technologies",
      signature: "Shivam Singh",
      verificationUrl: "https://averiqotech.com/verify/AT-2711",
    },
    "AT-2712": {
      id: "AT-2712",
      studentName: "SHAUN HANSUM M",
      course: "Frontend Development Internship",
      issueDate: "2026-06-30",
      duration: "1 month",
      grade: "A+",
      issuer: "Averiqo Technologies",
      signature: "Shivam Singh",
      verificationUrl: "https://averiqotech.com/verify/AT-2712",
    },
    "AT-2713": {
      id: "AT-2713",
      studentName: "AGNEESWARAN R S",
      course: "Frontend Development Internship",
      issueDate: "2026-06-30",
      duration: "1 month",
      grade: "A+",
      issuer: "Averiqo Technologies",
      signature: "Shivam Singh",
      verificationUrl: "https://averiqotech.com/verify/AT-2713",
    },
    "AT-2714": {
      id: "AT-2714",
      studentName: "Patel Meghaben Jiteshkumar",
      course: "Frontend Development Internship",
      issueDate: "2026-07-17",
      duration: "15 days",
      grade: "A+",
      issuer: "Averiqo Technologies",
      signature: "Shivam Singh",
      verificationUrl: "https://averiqotech.com/verify/AT-2714",
    },
  };

  const handleVerify = (c) => {
    if (!c || !c.trim()) return;
    setLoading(true);
    setResult(null);

    // Clear any previous active timeout before starting a new one
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const targetCode = c.trim().toUpperCase();
      const cert = certificates[targetCode];

      if (cert) {
        setResult({ valid: true, data: cert });
        
        // Use functional state updates to avoid stale closure issues with asynchronous code
        setRecentVerifications((prev) => {
          const updated = [
            { id: cert.id, name: cert.studentName, date: new Date().toISOString() },
            ...prev.filter((item) => item.id !== cert.id),
          ].slice(0, 5);
          localStorage.setItem("recentVerifications", JSON.stringify(updated));
          return updated;
        });

        window.history.pushState({}, "", `?code=${targetCode}`);
      } else {
        setResult({ valid: false });
      }
      setLoading(false);
    }, 1500);
  };

  // Auto-verify from URL parameters on mount
  useEffect(() => {
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode) {
      setCode(urlCode.toUpperCase());
      handleVerify(urlCode);
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Cleanup timeouts if component unmounts mid-verification
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    handleVerify(code);
  };

  const reset = () => {
    setCode("");
    setResult(null);
    setCopied(false);
    window.history.pushState({}, "", window.location.pathname);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 50);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const faqs = [
    {
      question: "How do I find my certificate ID?",
      answer: "Your certificate ID is printed at the bottom-right corner of your certificate.",
    },
    {
      question: "What if my certificate is not showing up?",
      answer: "Double-check that you've entered the ID exactly as printed on your certificate. If the issue persists, please contact our support team.",
    },
    {
      question: "Can I verify someone else's certificate?",
      answer: "Yes! Anyone can verify an Averiqo-issued certificate using the unique ID provided on the certificate.",
    },
    {
      question: "How secure is this verification system?",
      answer: "Our verification system uses secure lookup engines to ensure each certificate matches our registry database layout details.",
    },
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
        {/* Background Elements */}
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
          {/* Main Verification Card */}
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
                        placeholder="Enter Certificate ID"
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

                  <div className="trust-footer">
                    <FaLock className="lock-icon" />
                    <span>Your information is secure and encrypted</span>
                  </div>
                </>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={result.valid ? "success" : "error"}
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

                        {/* Certificate Details */}
                        <div className="cert-details">
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
                          <div className="detail-row">
                            <div className="detail-label">Student Name</div>
                            <div className="detail-value">{result.data.studentName}</div>
                          </div>
                          
                          <div className="detail-row">
                            <div className="detail-label">Internship Domain</div>
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
                          
                        </div>

                        {/* Signature */}
                        <div className="signature-block">
                        
                          <div className="signature-name">{result.data.signature}</div>
                          <div className="signature-title">HR Executive, Averiqo Technologies</div>
                        </div>

                        {/* Actions */}
                        <div className="result-actions">
                          <button onClick={reset} className="btn-outline">
                            <FaArrowLeft /> Verify Another
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

          {/* FAQ Section */}
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