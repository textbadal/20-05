// components/OfferLetterGenerator.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  FaFileAlt,
  FaUser,
  FaBriefcase,
  FaCalendar,
  FaEye,
  FaDownload,
  FaPrint,
  FaCopy,
  FaCheck,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaHistory,
  FaArrowLeft,
  FaSpinner,
  FaCheckCircle,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaUserTie,
  FaClock,
  FaMoneyBillWave,
  FaLaptop,
  FaEdit,
  FaTrash,
  FaUndo,
  FaStar,
} from 'react-icons/fa';
import './OfferLetterGenerator.css';

const OfferLetterGenerator = () => {
  // ============================================
  // COMPANY CONFIGURATION
  // ============================================
  const COMPANY_CONFIG = {
    name: 'Averiqo Technologies',
    tagline: 'Innovating Tomorrow',
    address: '123 Digital Avenue, San Francisco, CA 94105',
    website: 'www.averiqotech.com',
    email: 'hr@averiqotech.com',
    phone: '+1 (555) 123-4567',
    logo: '/Averiqo Technologies logo.jpeg',
  };

  // ============================================
  // DEFAULT OFFER TEMPLATE
  // ============================================
  const DEFAULT_OFFER = {
    reportingManager: 'Jane Smith',
    managerTitle: 'Senior HR Manager',
    workType: 'Remote',
    stipend: '$500/month',
    workingHours: '40 hours/week',
    department: 'Engineering',
    internshipType: 'Full-time',
    probationPeriod: '3 months',
    benefits: 'Health insurance, Paid time off, Professional development',
    additionalNotes: '',
  };

  // ============================================
  // STATE MANAGEMENT
  // ============================================
  const [formData, setFormData] = useState({
    internName: '',
    internEmail: '',
    internPhone: '',
    position: '',
    duration: '',
    offerDate: new Date().toISOString().split('T')[0],
    ...DEFAULT_OFFER,
    companyName: COMPANY_CONFIG.name,
    companyAddress: COMPANY_CONFIG.address,
    companyWebsite: COMPANY_CONFIG.website,
    companyEmail: COMPANY_CONFIG.email,
    companyPhone: COMPANY_CONFIG.phone,
  });

  const [generatedOffer, setGeneratedOffer] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isPrinting, setIsPrinting] = useState(false);
  const documentRef = useRef(null);

  // ============================================
  // EFFECTS
  // ============================================
  useEffect(() => {
    const saved = localStorage.getItem('offerHistory');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load history');
      }
    }
  }, []);

  // ============================================
  // TEMPLATE STYLES
  // ============================================
  const getTemplateStyles = (template) => {
    switch(template) {
      case 'classic':
        return {
          container: 'og-doc-classic',
          header: 'og-doc-header-classic',
          title: 'og-doc-title-classic',
          accent: '#2c3e50',
          font: 'Georgia, serif',
        };
      case 'modern':
        return {
          container: 'og-doc-modern',
          header: 'og-doc-header-modern',
          title: 'og-doc-title-modern',
          accent: '#6C63FF',
          font: 'Inter, sans-serif',
        };
      case 'minimal':
        return {
          container: 'og-doc-minimal',
          header: 'og-doc-header-minimal',
          title: 'og-doc-title-minimal',
          accent: '#2d3436',
          font: 'Helvetica, sans-serif',
        };
      default:
        return {
          container: 'og-doc-modern',
          header: 'og-doc-header-modern',
          title: 'og-doc-title-modern',
          accent: '#6C63FF',
          font: 'Inter, sans-serif',
        };
    }
  };

  // ============================================
  // VALIDATION
  // ============================================
  const validateForm = () => {
    const errors = {};
    if (!formData.internName.trim()) errors.internName = 'Full Name is required';
    if (!formData.position.trim()) errors.position = 'Position is required';
    if (!formData.duration.trim()) errors.duration = 'Duration is required';
    if (!formData.offerDate) errors.offerDate = 'Date is required';
    if (formData.internEmail && !/\S+@\S+\.\S+/.test(formData.internEmail)) {
      errors.internEmail = 'Valid email is required';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ============================================
  // HANDLERS
  // ============================================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleAdvancedChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ============================================
  // GENERATE OFFER
  // ============================================
  const generateOffer = async () => {
    if (!validateForm()) {
      const firstError = Object.values(validationErrors)[0];
      toast.error(firstError || 'Please fix all errors');
      return;
    }

    setIsGenerating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const offer = {
        id: `OFF-${Date.now()}`,
        ...formData,
        generatedDate: new Date().toISOString(),
        status: 'draft',
        template: selectedTemplate,
      };
      
      setGeneratedOffer(offer);
      setShowPreview(true);
      
      const newHistory = [offer, ...history].slice(0, 20);
      setHistory(newHistory);
      localStorage.setItem('offerHistory', JSON.stringify(newHistory));
      
      toast.success('Offer letter generated successfully! 🎉');
    } catch (error) {
      toast.error('Failed to generate offer letter');
    } finally {
      setIsGenerating(false);
    }
  };

  // ============================================
  // DOWNLOAD PDF
  // ============================================
  const downloadPDF = async () => {
    const element = documentRef.current;
    if (!element) {
      toast.error('Document not found');
      return;
    }

    try {
      toast.loading('Generating PDF...', { id: 'pdf' });
      
      // Add a class for PDF generation
      element.classList.add('pdf-generating');
      
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: true,
        width: 800,
        height: element.scrollHeight,
        windowWidth: 800,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('offer-document');
          if (clonedElement) {
            clonedElement.style.width = '800px';
            clonedElement.style.padding = '40px';
            clonedElement.style.margin = '0 auto';
            clonedElement.style.background = '#ffffff';
          }
        }
      });

      element.classList.remove('pdf-generating');

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const maxPageHeight = pdf.internal.pageSize.getHeight();
      
      if (pdfHeight <= maxPageHeight) {
        const yOffset = (maxPageHeight - pdfHeight) / 2;
        pdf.addImage(imgData, 'PNG', 0, yOffset, pdfWidth, pdfHeight);
      } else {
        const scale = maxPageHeight / pdfHeight;
        const scaledWidth = pdfWidth * scale;
        const scaledHeight = maxPageHeight;
        const xOffset = (pdfWidth - scaledWidth) / 2;
        pdf.addImage(imgData, 'PNG', xOffset, 0, scaledWidth, scaledHeight);
      }
      
      pdf.save(`Offer_Letter_${formData.internName || 'Intern'}.pdf`);
      
      toast.success('PDF downloaded successfully!', { id: 'pdf' });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast.error('Failed to generate PDF', { id: 'pdf' });
    }
  };

  // ============================================
  // PRINT OFFER
  // ============================================
  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 100);
  };

  // ============================================
  // COPY LINK
  // ============================================
  const copyLink = () => {
    const link = `${window.location.origin}/offer/${generatedOffer?.id || 'draft'}`;
    navigator.clipboard.writeText(link);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
    toast.success('Link copied to clipboard!');
  };

  // ============================================
  // RESET FORM
  // ============================================
  const resetForm = () => {
    if (window.confirm('Are you sure you want to reset the form?')) {
      setFormData({
        internName: '',
        internEmail: '',
        internPhone: '',
        position: '',
        duration: '',
        offerDate: new Date().toISOString().split('T')[0],
        ...DEFAULT_OFFER,
        companyName: COMPANY_CONFIG.name,
        companyAddress: COMPANY_CONFIG.address,
        companyWebsite: COMPANY_CONFIG.website,
        companyEmail: COMPANY_CONFIG.email,
        companyPhone: COMPANY_CONFIG.phone,
      });
      setGeneratedOffer(null);
      setShowPreview(false);
      setValidationErrors({});
      setShowAdvanced(false);
      toast.success('Form reset successfully');
    }
  };

  // ============================================
  // LOAD FROM HISTORY
  // ============================================
  const loadFromHistory = (item) => {
    setFormData(item);
    setGeneratedOffer(item);
    setSelectedTemplate(item.template || 'modern');
    setShowPreview(true);
    setShowHistory(false);
    toast.success('Loaded from history');
  };

  // ============================================
  // DELETE FROM HISTORY
  // ============================================
  const deleteFromHistory = (index) => {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);
    localStorage.setItem('offerHistory', JSON.stringify(newHistory));
    toast.success('Removed from history');
  };

  // ============================================
  // RENDER HELPERS
  // ============================================
  const formatDate = (date) => {
    if (!date) return 'TBD';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return 'TBD';
    return amount;
  };

  // ============================================
  // MAIN RENDER
  // ============================================
  const templateStyles = getTemplateStyles(selectedTemplate);

  return (
    <div className="og-container">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      {/* Header */}
      <header className="og-header">
        <div className="og-header-left">
          <button className="og-back-btn" onClick={() => window.history.back()}>
            <FaArrowLeft /> Back
          </button>
          <div className="og-header-brand">
            <div className="og-brand-icon">
              <FaFileAlt />
            </div>
            <div>
              <h1>Offer Letter Generator</h1>
              <p>Create professional internship offer letters</p>
            </div>
          </div>
        </div>
        <div className="og-header-right">
          <button className="og-btn-outline" onClick={() => setShowHistory(!showHistory)}>
            <FaHistory /> History <span className="og-badge">{history.length}</span>
          </button>
        </div>
      </header>

      {/* History Panel */}
      <AnimatePresence>
        {showHistory && (
          <motion.div 
            className="og-history-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="og-history-header">
              <h3><FaHistory /> Recent Offer Letters</h3>
              <button className="og-btn-sm" onClick={() => setShowHistory(false)}>
                <FaTimes />
              </button>
            </div>
            {history.length === 0 ? (
              <p className="og-empty-text">No offers generated yet</p>
            ) : (
              <div className="og-history-list">
                {history.slice(0, 10).map((item, index) => (
                  <div key={index} className="og-history-item">
                    <div className="og-history-info">
                      <strong>{item.internName}</strong>
                      <span>{item.position}</span>
                      <span className="og-history-date">
                        <FaCalendar /> {new Date(item.generatedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="og-history-actions">
                      <button
                        className="og-btn-sm"
                        onClick={() => loadFromHistory(item)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="og-btn-sm og-btn-danger"
                        onClick={() => deleteFromHistory(index)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="og-main">
        {/* Form Section */}
        <motion.div 
          className="og-form-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="og-form-header">
            <h2>Enter Intern Details</h2>
            <p>Fill in the required fields below to generate the offer letter</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); generateOffer(); }}>
            {/* Required Fields */}
            <div className="og-form-group">
              <div className="og-form-row">
                <div className="og-form-field">
                  <label><FaUser /> Full Name <span className="og-required">*</span></label>
                  <input
                    type="text"
                    name="internName"
                    value={formData.internName}
                    onChange={handleChange}
                    placeholder="Enter intern's full name"
                    className={validationErrors.internName ? 'og-error' : ''}
                  />
                  {validationErrors.internName && (
                    <span className="og-error-message">{validationErrors.internName}</span>
                  )}
                </div>
                <div className="og-form-field">
                  <label><FaBriefcase /> Position <span className="og-required">*</span></label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Frontend Developer Intern"
                    className={validationErrors.position ? 'og-error' : ''}
                  />
                  {validationErrors.position && (
                    <span className="og-error-message">{validationErrors.position}</span>
                  )}
                </div>
              </div>
              <div className="og-form-row">
                <div className="og-form-field">
                  <label><FaCalendar /> Duration <span className="og-required">*</span></label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="3 months (June - August 2024)"
                    className={validationErrors.duration ? 'og-error' : ''}
                  />
                  {validationErrors.duration && (
                    <span className="og-error-message">{validationErrors.duration}</span>
                  )}
                </div>
                <div className="og-form-field">
                  <label><FaCalendar /> Offer Date <span className="og-required">*</span></label>
                  <input
                    type="date"
                    name="offerDate"
                    value={formData.offerDate}
                    onChange={handleChange}
                    className={validationErrors.offerDate ? 'og-error' : ''}
                  />
                  {validationErrors.offerDate && (
                    <span className="og-error-message">{validationErrors.offerDate}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Optional Contact Fields */}
            <div className="og-form-group">
              <div className="og-form-row">
                <div className="og-form-field">
                  <label><FaEnvelope /> Email (Optional)</label>
                  <input
                    type="email"
                    name="internEmail"
                    value={formData.internEmail}
                    onChange={handleChange}
                    placeholder="intern@example.com"
                  />
                </div>
                <div className="og-form-field">
                  <label><FaPhone /> Phone (Optional)</label>
                  <input
                    type="tel"
                    name="internPhone"
                    value={formData.internPhone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Options Toggle */}
            <button
              type="button"
              className="og-advanced-toggle"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              <FaEdit /> {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
            </button>

            {/* Advanced Fields */}
            <AnimatePresence>
              {showAdvanced && (
                <motion.div 
                  className="og-advanced-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="og-form-row">
                    <div className="og-form-field">
                      <label><FaUserTie /> Reporting Manager</label>
                      <input
                        type="text"
                        name="reportingManager"
                        value={formData.reportingManager}
                        onChange={handleAdvancedChange}
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="og-form-field">
                      <label><FaBuilding /> Department</label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleAdvancedChange}
                        placeholder="Engineering"
                      />
                    </div>
                  </div>
                  <div className="og-form-row">
                    <div className="og-form-field">
                      <label><FaMoneyBillWave /> Stipend</label>
                      <input
                        type="text"
                        name="stipend"
                        value={formData.stipend}
                        onChange={handleAdvancedChange}
                        placeholder="$500/month"
                      />
                    </div>
                    <div className="og-form-field">
                      <label><FaLaptop /> Work Type</label>
                      <select
                        name="workType"
                        value={formData.workType}
                        onChange={handleAdvancedChange}
                      >
                        <option value="Remote">Remote</option>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  <div className="og-form-row">
                    <div className="og-form-field">
                      <label><FaClock /> Working Hours</label>
                      <input
                        type="text"
                        name="workingHours"
                        value={formData.workingHours}
                        onChange={handleAdvancedChange}
                        placeholder="40 hours/week"
                      />
                    </div>
                    <div className="og-form-field">
                      <label>Probation Period</label>
                      <input
                        type="text"
                        name="probationPeriod"
                        value={formData.probationPeriod}
                        onChange={handleAdvancedChange}
                        placeholder="3 months"
                      />
                    </div>
                  </div>
                  <div className="og-form-row">
                    <div className="og-form-field full">
                      <label>Benefits</label>
                      <textarea
                        name="benefits"
                        value={formData.benefits}
                        onChange={handleAdvancedChange}
                        placeholder="Health insurance, Paid time off, Professional development"
                        rows="2"
                      />
                    </div>
                  </div>
                  <div className="og-form-row">
                    <div className="og-form-field full">
                      <label>Additional Notes</label>
                      <textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleAdvancedChange}
                        placeholder="Any additional information for the intern..."
                        rows="3"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Template Selection */}
            <div className="og-template-selector">
              <label>Template Style</label>
              <div className="og-template-options">
                {['modern', 'classic', 'minimal'].map((template) => (
                  <button
                    key={template}
                    type="button"
                    className={`og-template-btn ${selectedTemplate === template ? 'active' : ''}`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <FaStar /> {template.charAt(0).toUpperCase() + template.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Auto-filled Info Display */}
            <div className="og-auto-fill-info">
              <div className="og-auto-fill-header">
                <FaCheckCircle className="og-auto-icon" />
                <span>Auto-filled from company settings</span>
              </div>
              <div className="og-auto-fill-grid">
                <div className="og-auto-item">
                  <span className="og-auto-label"><FaBuilding /> Company:</span>
                  <span className="og-auto-value">{COMPANY_CONFIG.name}</span>
                </div>
                <div className="og-auto-item">
                  <span className="og-auto-label"><FaMoneyBillWave /> Stipend:</span>
                  <span className="og-auto-value">{formData.stipend}</span>
                </div>
                <div className="og-auto-item">
                  <span className="og-auto-label"><FaLaptop /> Work Type:</span>
                  <span className="og-auto-value">{formData.workType}</span>
                </div>
                <div className="og-auto-item">
                  <span className="og-auto-label"><FaUserTie /> Manager:</span>
                  <span className="og-auto-value">{formData.reportingManager}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="og-form-actions">
              <button type="button" className="og-btn-secondary" onClick={resetForm}>
                <FaUndo /> Reset
              </button>
              <button type="submit" className="og-btn-primary" disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <FaSpinner className="og-spinning" />
                    Generating...
                  </>
                ) : (
                  <>
                    <FaEye /> Generate Offer
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Preview Section */}
        <motion.div 
          className="og-preview-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!showPreview ? (
            <div className="og-preview-placeholder">
              <div className="og-preview-icon-wrapper">
                <FaFileAlt className="og-placeholder-icon" />
              </div>
              <h3>Ready to Generate</h3>
              <p>Enter the details and click "Generate Offer"</p>
              <div className="og-placeholder-features">
                <div className="og-feature-item">
                  <FaCheckCircle className="og-feature-icon" />
                  <span>Only 4 required fields</span>
                </div>
                <div className="og-feature-item">
                  <FaCheckCircle className="og-feature-icon" />
                  <span>Auto-filled company details</span>
                </div>
                <div className="og-feature-item">
                  <FaCheckCircle className="og-feature-icon" />
                  <span>Multiple template styles</span>
                </div>
                <div className="og-feature-item">
                  <FaCheckCircle className="og-feature-icon" />
                  <span>Export as PDF</span>
                </div>
                <div className="og-feature-item">
                  <FaCheckCircle className="og-feature-icon" />
                  <span>Email & WhatsApp sharing</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="og-preview-wrapper">
              {/* Toolbar */}
              <div className="og-toolbar">
                <div className="og-toolbar-left">
                  <button className="og-toolbar-btn" onClick={handlePrint}>
                    <FaPrint /> Print
                  </button>
                  <button className="og-toolbar-btn" onClick={downloadPDF}>
                    <FaDownload /> PDF
                  </button>
                  <button className="og-toolbar-btn" onClick={copyLink}>
                    {showCopied ? <FaCheck /> : <FaCopy />}
                    {showCopied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
                <div className="og-toolbar-right">
                  <button className="og-toolbar-btn og-btn-email" onClick={() => {
                    const email = formData.internEmail || 'intern@example.com';
                    const subject = encodeURIComponent(`Offer Letter - ${formData.position}`);
                    const body = encodeURIComponent(
                      `Dear ${formData.internName},\n\n` +
                      `We are pleased to offer you the position of ${formData.position} at ${formData.companyName}.\n\n` +
                      `Please find attached your offer letter.\n\n` +
                      `Best regards,\nHR Team\n${formData.companyName}`
                    );
                    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                  }}>
                    <FaPaperPlane /> Email
                  </button>
                  <button className="og-toolbar-btn og-btn-whatsapp" onClick={() => {
                    const phone = formData.internPhone || '+1234567890';
                    const message = encodeURIComponent(
                      `Hi ${formData.internName},\n\n` +
                      `We are pleased to offer you the position of ${formData.position} at ${formData.companyName}.\n\n` +
                      `Best regards,\nHR Team\n${formData.companyName}`
                    );
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                  }}>
                    <FaWhatsapp /> WhatsApp
                  </button>
                </div>
              </div>

              {/* Document */}
              <div 
                ref={documentRef} 
                id="offer-document" 
                className={`og-document ${templateStyles.container}`}
              >
                {/* Header with Logo */}
                <div className={`og-doc-header ${templateStyles.header}`}>
                  <div className="og-doc-logo">
                    <img 
                      src={COMPANY_CONFIG.logo} 
                      alt="Company Logo" 
                      className="og-doc-logo-img"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const placeholder = document.createElement('div');
                        placeholder.className = 'og-doc-logo-placeholder';
                        placeholder.style.background = templateStyles.accent;
                        placeholder.innerHTML = `<span>${formData.companyName.charAt(0)}</span>`;
                        parent.insertBefore(placeholder, e.target);
                      }}
                    />
                    <div>
                      <h2 style={{ color: templateStyles.accent }}>{formData.companyName}</h2>
                      <p>{formData.companyAddress}</p>
                      <p>{formData.companyWebsite} | {formData.companyPhone}</p>
                    </div>
                  </div>
                  <div className={`og-doc-title ${templateStyles.title}`}>
                    <h1>OFFER LETTER</h1>
                    <p>Internship Offer</p>
                  </div>
                </div>

                {/* Body */}
                <div className="og-doc-body" style={{ fontFamily: templateStyles.font }}>
                  <p className="og-doc-date">
                    Date: {formatDate(formData.offerDate)}
                  </p>

                  <p className="og-doc-greeting">
                    Dear <strong>{formData.internName || 'Candidate'}</strong>,
                  </p>

                  <p>
                    We are pleased to offer you the position of <strong>{formData.position}</strong> 
                    at <strong>{formData.companyName}</strong>. We were impressed by your skills and 
                    enthusiasm, and we believe you would be a valuable addition to our team.
                  </p>

                  <div className="og-doc-details">
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Position:</span>
                      <span className="og-doc-value">{formData.position}</span>
                    </div>
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Duration:</span>
                      <span className="og-doc-value">{formData.duration}</span>
                    </div>
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Department:</span>
                      <span className="og-doc-value">{formData.department}</span>
                    </div>
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Stipend:</span>
                      <span className="og-doc-value">{formatCurrency(formData.stipend)}</span>
                    </div>
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Work Type:</span>
                      <span className="og-doc-value">{formData.workType}</span>
                    </div>
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Working Hours:</span>
                      <span className="og-doc-value">{formData.workingHours}</span>
                    </div>
                    <div className="og-doc-detail">
                      <span className="og-doc-label">Reporting Manager:</span>
                      <span className="og-doc-value">{formData.reportingManager}</span>
                    </div>
                    {formData.probationPeriod && (
                      <div className="og-doc-detail">
                        <span className="og-doc-label">Probation Period:</span>
                        <span className="og-doc-value">{formData.probationPeriod}</span>
                      </div>
                    )}
                    {formData.benefits && (
                      <div className="og-doc-detail">
                        <span className="og-doc-label">Benefits:</span>
                        <span className="og-doc-value">{formData.benefits}</span>
                      </div>
                    )}
                  </div>

                  {formData.additionalNotes && (
                    <div className="og-doc-notes">
                      <h4>Additional Notes:</h4>
                      <p>{formData.additionalNotes}</p>
                    </div>
                  )}

                  <div className="og-doc-closing">
                    <p>
                      Please confirm your acceptance of this offer by signing below and 
                      returning this letter within 5 business days.
                    </p>
                    <p>
                      We look forward to welcoming you to our team and wish you a successful 
                      and rewarding internship experience.
                    </p>
                  </div>

                  <div className="og-doc-signatures">
                    <div className="og-doc-signature">
                      <div className="og-doc-signature-line"></div>
                      <p className="og-doc-signature-label">Signature</p>
                      <p className="og-doc-signature-name">{formData.reportingManager}</p>
                      <p className="og-doc-signature-title">{formData.managerTitle || 'HR Manager'}, {formData.companyName}</p>
                    </div>
                    <div className="og-doc-signature">
                      <div className="og-doc-signature-line"></div>
                      <p className="og-doc-signature-label">Signature</p>
                      <p className="og-doc-signature-name">{formData.internName || 'Candidate'}</p>
                      <p className="og-doc-signature-title">Intern</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="og-doc-footer">
                  <p>This is a system-generated offer letter. For any queries, contact {formData.companyEmail}</p>
                  <p className="og-doc-footer-id">Document ID: {generatedOffer?.id || 'DRAFT'}</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default OfferLetterGenerator;