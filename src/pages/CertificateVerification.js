import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaCertificate, 
  FaCheckCircle, 
  FaTimesCircle,
  FaShare,
  FaUserGraduate,
  FaCalendarAlt,
  FaAward,
  FaShieldAlt,
  FaLink,
  FaCopy,
  FaQrcode,
  FaIdCard,
  FaLock,
  FaDatabase,
  FaClock,
  FaUniversity,
  FaSignature,
  FaChartLine,
  FaRibbon
} from 'react-icons/fa';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  // Certificate database with provided details
  const certificateDatabase = {
    'AVQ-2024-001': {
      id: 'AVQ-2024-001',
      studentName: 'Sarah Johnson',
      course: 'Frontend Development Internship',
      issueDate: '2024-04-15',
      startingDate: '2024-01-15',
      completionDate: '2024-04-15',
      duration: '3 months',
      skills: ['React', 'JavaScript', 'CSS3', 'Git', 'Responsive Design', 'TypeScript'],
      status: 'Completed',
      grade: 'A+',
      verified: true,
      issuer: 'Averiqo Technologies',
      issuerSignature: 'Dr. Emily Chen, CEO',
      performance: 'Excellent',
      project: 'E-commerce Platform Redesign',
      digitalSeal: true,
      verificationCount: 47,
      lastVerified: '2024-06-20'
    }
  };

  // Auto-verify if certificate code is in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');
    if (codeFromUrl) {
      setCertificateCode(codeFromUrl);
      verifyCertificate(codeFromUrl);
    }
  }, []);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('certificateSearchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const verifyCertificate = useCallback((code) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const certificate = certificateDatabase[code.toUpperCase()];
      
      // Update search history
      const newSearch = {
        code: code.toUpperCase(),
        timestamp: new Date().toISOString(),
        valid: !!certificate
      };
      
      const updatedHistory = [newSearch, ...searchHistory.filter(item => item.code !== code.toUpperCase())].slice(0, 5);
      setSearchHistory(updatedHistory);
      localStorage.setItem('certificateSearchHistory', JSON.stringify(updatedHistory));

      if (certificate) {
        setVerificationResult({
          valid: true,
          certificate: {
            ...certificate,
            verificationCount: certificate.verificationCount + 1,
            lastVerified: new Date().toISOString()
          },
          message: 'Certificate authenticity confirmed. This is a valid Averiqo certificate.',
          timestamp: new Date().toISOString(),
          verificationId: `VER-${Date.now()}`
        });
        
        // Update URL without page reload
        const newUrl = `${window.location.origin}${window.location.pathname}?code=${code}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
        
      } else {
        setVerificationResult({
          valid: false,
          message: 'Certificate not found in our database. Please verify the certificate ID and try again.',
          timestamp: new Date().toISOString(),
          suggestions: [
            'Check for typos in the certificate ID',
            'Ensure you are using the correct format: AVQ-YYYY-NNN',
            'Contact our support team if the issue persists'
          ]
        });
      }
      setIsLoading(false);
    }, 1500);
  }, [searchHistory]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (certificateCode.trim()) {
      verifyCertificate(certificateCode.trim());
    }
  };

  const handleReset = () => {
    setCertificateCode('');
    setVerificationResult(null);
    setCopied(false);
    const newUrl = `${window.location.origin}${window.location.pathname}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const getCertificateUrl = (id) => `${window.location.origin}${window.location.pathname}?code=${id}`;

  const copyCertificateUrl = (id) => {
    navigator.clipboard.writeText(getCertificateUrl(id)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };



  const shareCertificate = (certificate) => {
    const url = getCertificateUrl(certificate.id);
    const text = `Verify ${certificate.studentName}'s ${certificate.course} certificate issued by Averiqo Technologies`;
    
    if (navigator.share) {
      navigator.share({ 
        title: 'Averiqo Certificate Verification', 
        text, 
        url 
      });
    } else {
      copyCertificateUrl(certificate.id);
    }
  };

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Certificate Verification - Averiqo Technologies</title>
        <meta name="description" content="Official Averiqo certificate verification portal. Verify your certificate authenticity with our secure verification system." />
      </Helmet>

      <div className="certificate-verification-page">
        {/* Main Verification Section */}
        <section className="verification-section">
          <div className="container">
            <motion.div
              className="verification-container"
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                className="verification-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-header">
                  <div className="header-main">
                    <div className="header-icon-container">
                      <FaCertificate className="header-icon" />
                    </div>
                    <div>
                      <h2>Verify Certificate Authenticity</h2>
                      <p>Enter your certificate ID to verify authenticity</p>
                    </div>
                  </div>
                  <div className="header-stats">
                    <div className="stat">
                      <FaDatabase />
                      <span>{Object.keys(certificateDatabase).length} Certificates</span>
                    </div>
                    <div className="stat">
                      <FaCheckCircle />
                      <span>100% Secure</span>
                    </div>
                  </div>
                </div>

                {/* Verification Form */}
                <form onSubmit={handleVerify} className="verification-form">
                  <div className="form-group">
                    <label htmlFor="certificateCode">
                      <FaIdCard /> Certificate Identification Number
                    </label>
                    <div className="input-with-button">
                      <input
                        id="certificateCode"
                        type="text"
                        placeholder="AVQ-2024-001"
                        value={certificateCode}
                        onChange={(e) => setCertificateCode(e.target.value)}
                        required
                        pattern="AVQ-\d{4}-\d{3}"
                        title="Format: AVQ-YYYY-NNN (e.g., AVQ-2024-001)"
                        className="certificate-input"
                      />
                      <button 
                        type="submit" 
                        className="btn btn-primary verify-btn"
                        disabled={isLoading || !certificateCode.trim()}
                      >
                        {isLoading ? (
                          <>
                            <div className="spinner"></div> 
                            <span>Verifying...</span>
                          </>
                        ) : (
                          <>
                            <FaCheckCircle /> 
                            <span>Verify Authenticity</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="input-help">
                      <FaLink /> Required format: AVQ-YYYY-NNN (e.g., AVQ-2024-001)
                    </div>
                  </div>
                </form>

                {/* Search History */}
                {searchHistory.length > 0 && (
                  <div className="search-history">
                    <h4>Recent Verifications</h4>
                    <div className="history-list">
                      {searchHistory.map((item, index) => (
                        <div 
                          key={index} 
                          className={`history-item ${item.valid ? 'valid' : 'invalid'}`}
                          onClick={() => {
                            setCertificateCode(item.code);
                            verifyCertificate(item.code);
                          }}
                        >
                          <span className="history-code">{item.code}</span>
                          <span className="history-status">
                            {item.valid ? 'Valid' : 'Invalid'}
                          </span>
                          <span className="history-time">
                            {new Date(item.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Verification Result */}
                <AnimatePresence>
                  {verificationResult && (
                    <motion.div
                      className={`result-container ${verificationResult.valid ? 'valid' : 'invalid'}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="result-header">
                        <div className="result-status">
                          {verificationResult.valid ? (
                            <>
                              <FaCheckCircle className="status-icon valid" />
                              <div>
                                <h3>Certificate Verified Successfully</h3>
                                <p>{verificationResult.message}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <FaTimesCircle className="status-icon invalid" />
                              <div>
                                <h3>Verification Failed</h3>
                                <p>{verificationResult.message}</p>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="verification-meta">
                          <div className="verification-timestamp">
                            <FaClock />
                            Verified: {new Date(verificationResult.timestamp).toLocaleString()}
                          </div>
                          {verificationResult.verificationId && (
                            <div className="verification-id">
                              Ref: {verificationResult.verificationId}
                            </div>
                          )}
                        </div>
                      </div>

                      {verificationResult.valid && verificationResult.certificate && (
                        <motion.div 
                          className="certificate-details"
                          variants={staggerChildren}
                          initial="hidden"
                          animate="visible"
                        >
                          {/* Certificate Overview */}
                          <div className="certificate-overview">
                            <motion.div className="overview-card" variants={fadeInUp}>
                              <div className="overview-icon">
                                <FaUserGraduate />
                              </div>
                              <div>
                                <span className="label">Certificate Holder</span>
                                <span className="value">{verificationResult.certificate.studentName}</span>
                              </div>
                            </motion.div>
                            <motion.div className="overview-card" variants={fadeInUp}>
                              <div className="overview-icon">
                                <FaAward />
                              </div>
                              <div>
                                <span className="label">Program Completed</span>
                                <span className="value">{verificationResult.certificate.course}</span>
                              </div>
                            </motion.div>
                            <motion.div className="overview-card" variants={fadeInUp}>
                              <div className="overview-icon">
                                <FaCalendarAlt />
                              </div>
                              <div>
                                <span className="label">Program Duration</span>
                                <span className="value">{verificationResult.certificate.duration}</span>
                              </div>
                            </motion.div>
                            <motion.div className="overview-card" variants={fadeInUp}>
                              <div className="overview-icon">
                                <FaRibbon />
                              </div>
                              <div>
                                <span className="label">Final Grade</span>
                                <span className={`value grade-${verificationResult.certificate.grade.toLowerCase()}`}>
                                  {verificationResult.certificate.grade}
                                </span>
                              </div>
                            </motion.div>
                          </div>

                          {/* Detailed Information */}
                          <div className="detailed-information">
                            <div className="info-grid">
                              <motion.div className="info-section" variants={fadeInUp}>
                                <h4>
                                  <FaUniversity />
                                  Program Details
                                </h4>
                                <div className="info-content">
                                  <div className="info-row">
                                    <strong>Certificate ID:</strong>
                                    <code>{verificationResult.certificate.id}</code>
                                  </div>
                                  <div className="info-row">
                                    <strong>Starting Date:</strong>
                                    <span>{new Date(verificationResult.certificate.startingDate).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'long', 
                                      day: 'numeric' 
                                    })}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Completion Date:</strong>
                                    <span>{new Date(verificationResult.certificate.completionDate).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'long', 
                                      day: 'numeric' 
                                    })}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Issue Date:</strong>
                                    <span>{new Date(verificationResult.certificate.issueDate).toLocaleDateString('en-US', { 
                                      year: 'numeric', 
                                      month: 'long', 
                                      day: 'numeric' 
                                    })}</span>
                                  </div>
                                </div>
                              </motion.div>

                              <motion.div className="info-section" variants={fadeInUp}>
                                <h4>
                                  <FaChartLine />
                                  Performance Metrics
                                </h4>
                                <div className="info-content">
                                  <div className="info-row">
                                    <strong>Overall Grade:</strong>
                                    <span className={`grade grade-${verificationResult.certificate.grade.toLowerCase()}`}>
                                      {verificationResult.certificate.grade}
                                    </span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Performance Rating:</strong>
                                    <span className={`performance ${verificationResult.certificate.performance.toLowerCase()}`}>
                                      {verificationResult.certificate.performance}
                                    </span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Capstone Project:</strong>
                                    <span>{verificationResult.certificate.project}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Status:</strong>
                                    <span className="status-completed">{verificationResult.certificate.status}</span>
                                  </div>
                                </div>
                              </motion.div>

                              <motion.div className="info-section" variants={fadeInUp}>
                                <h4>
                                  <FaSignature />
                                  Issuing Authority
                                </h4>
                                <div className="info-content">
                                  <div className="info-row">
                                    <strong>Issuing Organization:</strong>
                                    <span>{verificationResult.certificate.issuer}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Authorized Signature:</strong>
                                    <span>{verificationResult.certificate.issuerSignature}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Digital Seal:</strong>
                                    <span className={verificationResult.certificate.digitalSeal ? 'security-active' : 'security-inactive'}>
                                      {verificationResult.certificate.digitalSeal ? 'Active' : 'Inactive'}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>

                              <motion.div className="info-section" variants={fadeInUp}>
                                <h4>
                                  <FaShieldAlt />
                                  Verification Data
                                </h4>
                                <div className="info-content">
                                  <div className="info-row">
                                    <strong>Verification Count:</strong>
                                    <span>{verificationResult.certificate.verificationCount}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Last Verified:</strong>
                                    <span>{new Date(verificationResult.certificate.lastVerified).toLocaleDateString()}</span>
                                  </div>
                                  <div className="info-row">
                                    <strong>Certificate Status:</strong>
                                    <span className="status-completed">Active and Valid</span>
                                  </div>
                                </div>
                              </motion.div>
                            </div>

                            {/* Skills Section */}
                            <motion.div className="info-section skills-section" variants={fadeInUp}>
                              <h4>Acquired Skills & Competencies</h4>
                              <div className="skills-grid">
                                {verificationResult.certificate.skills.map((skill, index) => (
                                  <motion.div 
                                    key={index} 
                                    className="skill-item"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                  >
                                    <FaCheckCircle className="skill-icon" />
                                    <span>{skill}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </div>
    {/* Action Buttons */}
                          <motion.div className="certificate-actions" variants={fadeInUp}>
               
                           
                             
                             
                       
                          </motion.div>
                        </motion.div>
                      )}
                      {/* Invalid Certificate Suggestions */}
                      {!verificationResult.valid && verificationResult.suggestions && (
                        <div className="suggestions-container">
                          <h4>Suggestions:</h4>
                          <ul className="suggestions-list">
                            {verificationResult.suggestions.map((suggestion, index) => (
                              <li key={index}>{suggestion}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="result-footer">
                        <button className="btn btn-ghost" onClick={handleReset}>
                          Verify Another Certificate
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Security Section */}
        <section className="security-section">
          <div className="container">
            <motion.div
              className="security-content"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="security-badge">
                <FaLock />
                Enterprise Security
              </div>
              <h2>Secure & Trusted Verification System</h2>
              <p className="security-description">
                Our verification system employs multiple layers of security to ensure 
                the authenticity and integrity of every certificate issued by Averiqo Technologies.
              </p>
              
              <div className="security-features-grid">
                <div className="security-feature">
                  <div className="feature-icon">
                    <FaShieldAlt />
                  </div>
                  <h4>Digital Seal</h4>
                  <p>Every certificate includes a secure digital seal for authenticity verification</p>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">
                    <FaCheckCircle />
                  </div>
                  <h4>Instant Validation</h4>
                  <p>Real-time verification against our secure database with immediate results</p>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">
                    <FaLink />
                  </div>
                  <h4>Unique Verification Links</h4>
                  <p>Each certificate has a unique, shareable verification URL for easy access</p>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">
                    <FaDatabase />
                  </div>
                  <h4>Secure Database</h4>
                  <p>Enterprise-grade database with encryption and regular security audits</p>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">
                    <FaClock />
                  </div>
                  <h4>Audit Trail</h4>
                  <p>Complete history of all verification attempts with timestamps and metadata</p>
                </div>
                <div className="security-feature">
                  <div className="feature-icon">
                    <FaAward />
                  </div>
                  <h4>Professional Standards</h4>
                  <p>All certificates meet industry standards for digital credential verification</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CertificateVerification;