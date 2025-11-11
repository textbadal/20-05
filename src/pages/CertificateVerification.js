import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";
import "./CertificateVerification.css";

const CertificateVerification = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

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
    },
  };

  useEffect(() => {
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode) {
      setCode(urlCode);
      handleVerify(urlCode);
    }
  }, []);

  const handleVerify = (c) => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const cert = certificates[c.toUpperCase()];
      if (cert) {
        setResult({ valid: true, data: cert });
        window.history.pushState({}, "", `?code=${c}`);
      } else {
        setResult({ valid: false });
      }
      setLoading(false);
    }, 1000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) handleVerify(code.trim());
  };

  const reset = () => {
    setCode("");
    setResult(null);
    window.history.pushState({}, "", window.location.pathname);
  };

  const faqs = [
    {
      question: "How do I find my certificate ID?",
      answer:
        "Your certificate ID is printed at the bottom of your certificate. It usually looks like AVQ-YYYY-XXX.",
    },
    {
      question: "What if my certificate is not showing up?",
      answer:
        "Ensure the ID you entered matches exactly as printed on your certificate. If it still doesn’t work, contact Averiqo support.",
    },
    {
      question: "Can I verify someone else’s certificate?",
      answer:
        "Yes. You can verify any Averiqo-issued certificate using the ID provided on it.",
    },
    {
      question: "How secure is this verification?",
      answer:
        "Each certificate is stored in a secure database and verified through unique IDs that cannot be duplicated.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Verify Certificate | Averiqo</title>
      </Helmet>

      <div className="verify-container">
        <motion.div
          className="verify-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaCertificate className="header-icon" />
          <h1>Certificate Verification</h1>
          <p>Powered by Averiqo Technologies</p>
        </motion.div>

        <motion.div
          className="verify-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {!result && (
            <form onSubmit={onSubmit} className="verify-form">
              <label>
                <FaIdCard /> Enter Certificate ID
              </label>
              <input
                type="text"
                placeholder="AVQ-2024-001"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Verifying..." : "Verify Certificate"}
              </button>
              <small>Format: AVQ-YYYY-NNN</small>
            </form>
          )}

          <AnimatePresence>
            {result && (
              <motion.div
                key="result"
                className={`verify-result ${result.valid ? "valid" : "invalid"}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
              >
                {result.valid ? (
                  <>
                    <FaCheckCircle className="result-icon success" />
                    <h2>Certificate Verified</h2>
                    <p>This certificate is authentic and issued by Averiqo.</p>

                    <div className="details">
                      <div>
                        <FaUserGraduate /> <strong>Student:</strong>{" "}
                        {result.data.studentName}
                      </div>
                      <div>
                        <FaAward /> <strong>Program:</strong>{" "}
                        {result.data.course}
                      </div>
                      <div>
                        <FaCalendarAlt /> <strong>Duration:</strong>{" "}
                        {result.data.duration}
                      </div>
                      <div>
                        <FaCheckCircle /> <strong>Grade:</strong>{" "}
                        {result.data.grade}
                      </div>
                      <div>
                        <FaCertificate /> <strong>Issued By:</strong>{" "}
                        {result.data.issuer}
                      </div>
                      <div>
                        <FaCalendarAlt /> <strong>Issue Date:</strong>{" "}
                        {new Date(result.data.issueDate).toLocaleDateString()}
                      </div>
                    </div>

                    <button onClick={reset} className="reset-btn">
                      Verify Another
                    </button>
                  </>
                ) : (
                  <>
                    <FaTimesCircle className="result-icon error" />
                    <h2>Verification Failed</h2>
                    <p>No certificate found with the provided ID.</p>
                    <button onClick={reset} className="reset-btn">
                      Try Again
                    </button>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* FAQ Section */}
        <motion.section
          className="faq-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openFAQ === index ? "open" : ""}`}
                onClick={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.p
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <footer className="verify-footer">
          <FaShieldAlt /> <p>Secure Verification by Averiqo Technologies</p>
        </footer>
      </div>
    </>
  );
};

export default CertificateVerification;
