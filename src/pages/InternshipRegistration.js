import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  X
} from "lucide-react"; 
import "./InternshipRegistration.css";

// 1. Centralized UI Configuration
const COHORT_YEAR = 2026;
const FORM_URL = "https://forms.gle/dKeQpotTiXwU1sge9";

const BENEFITS = [
  { 
    id: "offer-letter",
    Icon: FileText, 
    title: "Official Offer Letter", 
    desc: "Receive an official corporate internship offer letter immediately upon successful selection." 
  },
  { 
    id: "projects",
    Icon: Briefcase, 
    title: "Production-Grade Projects", 
    desc: "Collaborate on real-world systems, working through industry-standard development lifecycles." 
  },
  { 
    id: "mentorship",
    Icon: GraduationCap, 
    title: "1-on-1 Mentorship", 
    desc: "Accelerate your career with guided engineering benchmarks and support from industry veterans." 
  },
  { 
    id: "certificate",
    Icon: Award, 
    title: "Secure Verification Hub", 
    desc: "Earn a globally shareable digital completion certificate backed by our live tracking verification database." 
  },
  { 
    id: "lor",
    Icon: Star, 
    title: "Letter of Recommendation", 
    desc: "Stand out to future employers with a merit-based reference letter celebrating your real impact." 
  },
  { 
    id: "skills-matrix",
    Icon: Sparkles, 
    title: "Curated Skill Matrix", 
    desc: "Graduate with a validated list of technologies and metrics attached directly to your portfolio registry." 
  }
];

const SAMPLE_DOCUMENTS = [
  { id: "doc-ol", src: "/Sample_Ol_AVQ.jpg", label: "Offer Letter Blueprint" },
  { id: "doc-cert", src: "/Risabh Raj_AVQ.png", label: "Program Certificate Variant" },
  { id: "doc-lor", src: "/LoR Sample AVQ.png", label: "Letter of Recommendation Model" }
];

// 2. Sub-components (Optimized for performance and compliance)
const BenefitCard = React.memo(({ Icon, title, desc }) => (
  <article className="benefit-card">
    <div className="benefit-icon-wrapper" aria-hidden="true">
      <Icon className="benefit-icon" size={24} />
    </div>
    <div className="benefit-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </article>
));
BenefitCard.displayName = "BenefitCard";

const DocumentCard = ({ src, label, onPreview }) => (
  <button 
    type="button"
    className="doc-card-btn" 
    onClick={onPreview} 
    aria-label={`Preview ${label}`}
  >
    <figure className="doc-card">
      <div className="image-wrapper">
        <img 
          src={src} 
          alt={`Official template preview for ${label}`} 
          loading="lazy" 
          decoding="async"
        />
        <div className="overlay-msg">Click to Preview Document</div>
      </div>
      <figcaption><h3>{label}</h3></figcaption>
    </figure>
  </button>
);

const CTAButton = ({ href, text, variant = "primary" }) => (
  <div className={`cta-container ${variant}-container`}>
    <a 
      href={href} 
      target={href.startsWith("http") ? "_blank" : "_self"} 
      rel={href.startsWith("http") ? "noopener noreferrer" : ""} 
      className={`cta-btn ${variant}-btn`}
    >
      <span>{text}</span>
      <ArrowRight size={18} className="cta-arrow" />
    </a>
  </div>
);

// 3. Core Component Layout
const InternshipRegistration = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Manage Keyboard Focus & Escape Handling only when lightbox is visible
  useEffect(() => {
    if (!activePreview) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActivePreview(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePreview]);

  return (
    <main className="internships-page">
      <div className="container">
        
        {/* Hero Banner Area */}
        <header className="hero-section">
          <span className="hero-badge" role="status">
            <span className="pulse-indicator" aria-hidden="true"></span>
            Limited Cohort Openings Available
          </span>
          <h1>Internship Program {COHORT_YEAR}</h1>
          <p className="hero-subtitle">
            Bridge the gap between academia and production environments. Join Averiqo Technologies 
            to engineer practical solutions through structured mentorship, active sprints, 
            and modern tech stacks.
          </p>
          <div className="hero-actions">
            <CTAButton href={FORM_URL} text="Apply for the Program" variant="primary" />
            <CTAButton href="/certificate-verification" text="Verify Certificate" variant="secondary" />
          </div>
        </header>

        {/* Deliverables Grid */}
        <section className="benefits-section" aria-labelledby="benefits-heading">
          <header className="section-header">
            <h2 id="benefits-heading">Program Ecosystem Benefits</h2>
            <p>Every resource you need to jumpstart a career in technology.</p>
          </header>
          <div className="benefits-grid">
            {BENEFITS.map(({ id, ...benefit }) => (
              <BenefitCard key={id} {...benefit} />
            ))}
          </div>
        </section>

        {/* Verification / Document Previews */}
        <section className="documents-section" aria-labelledby="docs-heading">
          <header className="section-header">
            <h2 id="docs-heading">Sample Documentation</h2>
            <p>Review the verified career assets granted upon triumphant completion of program tracking parameters.</p>
          </header>
          
          <div className="document-cards">
            {SAMPLE_DOCUMENTS.map((doc) => (
              <DocumentCard 
                key={doc.id} 
                {...doc} 
                onPreview={() => setActivePreview(doc)} 
              />
            ))}
          </div>
          
          <footer className="section-notice">
            <p>* Issuance of Certificate tracking markers and official letters of corporate reference are bound strictly to baseline performance metric completions.</p>
          </footer>
        </section>

        {/* Final Retention Segment */}
        <section className="closing-cta-section">
          <h2>Ready to Launch Your Career??</h2>
          <p>Applications are reviewed sequentially. Secure your placement evaluations today.</p>
          <CTAButton href={FORM_URL} text="Submit Your Application" variant="primary" />
        </section>

        {/* Standard Compliance Footer */}
        <footer className="trust-footer">
          <ShieldCheck size={14} className="footer-icon" aria-hidden="true" />
          <span>Secure Enterprise Application Workspace • Averiqo Technologies</span>
        </footer>

      </div>

      {/* Lightbox Modal System */}
      {activePreview && (
        <div 
          className="lightbox-overlay" 
          onClick={() => setActivePreview(null)} 
          role="dialog" 
          aria-modal="true"
          aria-label="Document Image Preview Modal"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="close-lightbox" 
              onClick={() => setActivePreview(null)} 
              aria-label="Close Preview"
            >
              <X size={24} />
            </button>
            <img src={activePreview.src} alt={activePreview.label} />
            <div className="lightbox-caption">
              <h3>{activePreview.label}</h3>
              <p>
                <CheckCircle size={14} className="caption-check-icon" /> 
                Official Averiqo System Template
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default InternshipRegistration;