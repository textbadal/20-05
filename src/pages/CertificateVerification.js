import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaSearch, 
  FaCertificate, 
  FaCheckCircle, 
  FaTimesCircle,
  FaDownload,
  FaShare,
  FaUserGraduate,
  FaCalendarAlt,
  FaAward,
  FaShieldAlt
} from 'react-icons/fa';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [certificateCode, setCertificateCode] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock database - In real implementation, this would be your backend
  const certificateDatabase = {
    'AVQ-2024-001': {
      id: 'AVQ-2024-001',
      studentName: 'Sarah Johnson',
      course: 'Frontend Development Internship',
      issueDate: '2024-01-15',
      completionDate: '2024-04-15',
      duration: '3 months',
      skills: ['React', 'JavaScript', 'CSS3', 'Git', 'Responsive Design'],
      status: 'Completed',
      grade: 'A+',
      verified: true,
      issuer: 'Averiqo Technologies',
      issuerSignature: 'Dr. Emily Chen, CEO'
    },
    'AVQ-2024-002': {
      id: 'AVQ-2024-002',
      studentName: 'Michael Rodriguez',
      course: 'UI/UX Design Internship',
      issueDate: '2024-01-20',
      completionDate: '2024-05-20',
      duration: '4 months',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      status: 'Completed',
      grade: 'A',
      verified: true,
      issuer: 'Averiqo Technologies',
      issuerSignature: 'Priya Patel, Creative Director'
    },
    'AVQ-2024-003': {
      id: 'AVQ-2024-003',
      studentName: 'David Kim',
      course: 'Digital Marketing Internship',
      issueDate: '2024-02-01',
      completionDate: '2024-05-01',
      duration: '3 months',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'Google Analytics'],
      status: 'Completed',
      grade: 'A-',
      verified: true,
      issuer: 'Averiqo Technologies',
      issuerSignature: 'James Wilson, Marketing Director'
    },
    'AVQ-2024-004': {
      id: 'AVQ-2024-004',
      studentName: 'Emma Thompson',
      course: 'Full Stack Development Internship',
      issueDate: '2024-02-15',
      completionDate: '2024-05-15',
      duration: '3 months',
      skills: ['Node.js', 'React', 'MongoDB', 'Express', 'REST APIs'],
      status: 'Completed',
      grade: 'A+',
      verified: true,
      issuer: 'Averiqo Technologies',
      issuerSignature: 'Dr. Emily Chen, CEO'
    }
  };

  const verifyCertificate = (code) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const certificate = certificateDatabase[code.toUpperCase()];
      
      if (certificate) {
        setVerificationResult({
          valid: true,
          certificate: certificate,
          message: 'Certificate verified successfully!'
        });
      } else {
        setVerificationResult({
          valid: false,
          certificate: null,
          message: 'Invalid certificate code. Please check and try again.'
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (certificateCode.trim()) {
      verifyCertificate(certificateCode.trim());
    }
  };

  const handleReset = () => {
    setCertificateCode('');
    setVerificationResult(null);
  };

  const downloadCertificate = (certificate) => {
    // In a real implementation, this would generate/download a PDF
    alert(`Downloading certificate: ${certificate.id}`);
  };

  const shareCertificate = (certificate) => {
    if (navigator.share) {
      navigator.share({
        title: `${certificate.studentName}'s Certificate`,
        text: `Verify ${certificate.studentName}'s ${certificate.course} certificate`,
        url: window.location.href + `?code=${certificate.id}`
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `Certificate Verification: ${certificate.studentName} - ${certificate.course}\n` +
        `Verify at: ${window.location.href}?code=${certificate.id}`
      );
      alert('Certificate link copied to clipboard!');
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  return (
    <>
      <Helmet>
        <title>Verify Certificate - Averiqo | Internship Program</title>
        <meta name="description" content="Verify the authenticity of Averiqo internship certificates. Check certificate validity and details." />
      </Helmet>

      <div className="certificate-verification-page">
        {/* Hero Section */}
        <section className="verification-hero">
          <div className="container">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="hero-text">
                <div className="hero-badge">
                  <FaShieldAlt className="badge-icon" />
                  <span>Secure Verification System</span>
                </div>
                <h1>Verify Certificate Authenticity</h1>
                <p className="hero-description">
                  Ensure the validity of Averiqo internship certificates. Enter the certificate code 
                  below to verify authenticity and view certificate details.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Verification Form */}
        <section className="verification-section">
          <div className="container">
            <motion.div
              className="verification-card"
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="card-header">
                <FaCertificate className="header-icon" />
                <h2>Certificate Verification</h2>
                <p>Enter your 12-digit certificate code to verify</p>
              </div>

              <form onSubmit={handleVerify} className="verification-form">
                <div className="input-group">
                  <div className="input-wrapper">
                    <FaSearch className="input-icon" />
                    <input
                      type="text"
                      placeholder="Enter certificate code (e.g., AVQ-2024-001)"
                      value={certificateCode}
                      onChange={(e) => setCertificateCode(e.target.value)}
                      required
                      pattern="[A-Za-z0-9-]+"
                      title="Please enter a valid certificate code"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary verify-btn"
                    disabled={isLoading || !certificateCode.trim()}
                  >
                    {isLoading ? (
                      <>
                        <div className="spinner"></div>
                        Verifying...
                      </>
                    ) : (
                      <>
                        <FaCheckCircle />
                        Verify Certificate
                      </>
                    )}
                  </button>
                </div>
                
                <div className="help-text">
                  <FaShieldAlt />
                  <span>Your certificate code can be found at the bottom of your certificate document</span>
                </div>
              </form>

              {/* Verification Result */}
              {verificationResult && (
                <motion.div
                  className={`result-card ${verificationResult.valid ? 'valid' : 'invalid'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="result-header">
                    {verificationResult.valid ? (
                      <FaCheckCircle className="result-icon valid" />
                    ) : (
                      <FaTimesCircle className="result-icon invalid" />
                    )}
                    <h3>{verificationResult.valid ? 'Certificate Verified' : 'Verification Failed'}</h3>
                  </div>
                  
                  <p className="result-message">{verificationResult.message}</p>

                  {verificationResult.valid && verificationResult.certificate && (
                    <div className="certificate-details">
                      <div className="details-grid">
                        <div className="detail-item">
                          <strong>Certificate ID:</strong>
                          <span>{verificationResult.certificate.id}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Student Name:</strong>
                          <span>{verificationResult.certificate.studentName}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Course:</strong>
                          <span>{verificationResult.certificate.course}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Duration:</strong>
                          <span>{verificationResult.certificate.duration}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Issue Date:</strong>
                          <span>{new Date(verificationResult.certificate.issueDate).toLocaleDateString()}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Completion Date:</strong>
                          <span>{new Date(verificationResult.certificate.completionDate).toLocaleDateString()}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Status:</strong>
                          <span className="status-badge completed">{verificationResult.certificate.status}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Grade:</strong>
                          <span className="grade">{verificationResult.certificate.grade}</span>
                        </div>
                      </div>

                      <div className="skills-section">
                        <h4>Skills Acquired:</h4>
                        <div className="skills-list">
                          {verificationResult.certificate.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>

                      <div className="issuer-section">
                        <div className="issuer-info">
                          <strong>Issued by:</strong>
                          <span>{verificationResult.certificate.issuer}</span>
                        </div>
                        <div className="signature">
                          <strong>Signature:</strong>
                          <span>{verificationResult.certificate.issuerSignature}</span>
                        </div>
                      </div>

                      <div className="certificate-actions">
                        <button 
                          className="btn btn-primary"
                          onClick={() => downloadCertificate(verificationResult.certificate)}
                        >
                          <FaDownload />
                          Download Certificate
                        </button>
                        <button 
                          className="btn btn-secondary"
                          onClick={() => shareCertificate(verificationResult.certificate)}
                        >
                          <FaShare />
                          Share Verification
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <button className="btn btn-outline reset-btn" onClick={handleReset}>
                    Verify Another Certificate
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Features Section */}
            <motion.div
              className="features-section"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3>Why Verify Certificates?</h3>
              <div className="features-grid">
                <div className="feature-card">
                  <FaShieldAlt className="feature-icon" />
                  <h4>Prevent Fraud</h4>
                  <p>Ensure certificates are genuine and issued by Averiqo</p>
                </div>
                <div className="feature-card">
                  <FaUserGraduate className="feature-icon" />
                  <h4>Verify Credentials</h4>
                  <p>Confirm internship completion and skills acquired</p>
                </div>
                <div className="feature-card">
                  <FaAward className="feature-icon" />
                  <h4>Quality Assurance</h4>
                  <p>All certificates are digitally verified and secure</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2>Frequently Asked Questions</h2>
            </motion.div>

            <div className="faq-grid">
              <motion.div
                className="faq-item"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4>Where can I find my certificate code?</h4>
                <p>Your certificate code is located at the bottom right corner of your digital certificate. It follows the format AVQ-YYYY-NNN.</p>
              </motion.div>

              <motion.div
                className="faq-item"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4>What if my certificate doesn't verify?</h4>
                <p>Please double-check the code for typos. If it still doesn't work, contact our support team with your certificate details.</p>
              </motion.div>

              <motion.div
                className="faq-item"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4>Can I verify expired certificates?</h4>
                <p>Yes, all certificates issued by Averiqo can be verified regardless of issue date.</p>
              </motion.div>

              <motion.div
                className="faq-item"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4>Is my verification data secure?</h4>
                <p>Yes, we don't store any personal data during verification. The process is completely secure and private.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CertificateVerification;