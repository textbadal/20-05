import React from "react";
import { 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Star, 
  Globe, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react"; // npm install lucide-react
import "./EnrollNow.css";

// 1. Centralized UI Configuration (Easy to move to a CMS or JSON file later)
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
    title: "Verifiable Certificate", 
    desc: "Earn a globally shareable digital completion certificate showcasing your technical expertise." 
  },
  { 
    id: "lor",
    Icon: Star, 
    title: "Letter of Recommendation", 
    desc: "Stand out to future employers with a merit-based reference letter celebrating your impact." 
  },
  { 
    id: "remote",
    Icon: Globe, 
    title: "Flexible Remote Culture", 
    desc: "Work asynchronously from anywhere across the globe while learning to master remote team syncs." 
  }
];

const SAMPLE_DOCUMENTS = [
  { id: "doc-ol", src: "/Sample_Ol_AVQ.jpg", label: "Offer Letter Blueprint" },
  { id: "doc-cert", src: "/images/certificate.jpg", label: "Program Certificate Variant" },
  { id: "doc-lor", src: "/images/lor.jpg", label: "Letter of Recommendation Model" }
];

// 2. Specialized Presentational Components
const BenefitCard = ({ Icon, title, desc }) => (
  <article className="benefit-card">
    <div className="benefit-icon-wrapper" aria-hidden="true">
      <Icon className="benefit-icon" size={24} />
    </div>
    <div className="benefit-content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </article>
);

const DocumentCard = ({ src, label }) => (
  <figure className="doc-card">
    <div className="image-wrapper">
      <img 
        src={src} 
        alt={`Official Averiqo template preview for ${label}`} 
        loading="lazy" 
        decoding="async"
      />
    </div>
    <figcaption><h3>{label}</h3></figcaption>
  </figure>
);

const PrimaryCTA = ({ href, text }) => (
  <div className="cta-container">
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="apply-btn"
      role="button"
    >
      <span>{text}</span>
      <ArrowRight size={18} className="cta-arrow" />
    </a>
  </div>
);

// 3. Core Component Layout
const EnrollNow = () => {
  return (
    <main className="enroll-page">
      <div className="container">
        
        {/* Hero Banner Area */}
        <header className="hero-section">
          <span className="hero-badge" role="status">
            <span className="pulse-indicator" aria-hidden="true"></span>
            Limited Cohort Openings Available
          </span>
          <h1>Internship Program {COHORT_YEAR}</h1>
          <p className="hero-subtitle">
            Bridge the gap between academia and production. Join Averiqo Technologies 
            to engineering practical solutions through structured mentorship, active sprints, 
            and hands-on tech stacks.
          </p>
          <PrimaryCTA href={FORM_URL} text="Apply for the Program" />
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
            {SAMPLE_DOCUMENTS.map(({ id, ...doc }) => (
              <DocumentCard key={id} {...doc} />
            ))}
          </div>
          
          <footer className="section-notice">
            <p>* Issuance of Certificate tracking markers and official letters of corporate reference are bound strictly to baseline performance metric completions.</p>
          </footer>
        </section>

        {/* Final Retention Segment */}
        <section className="closing-cta-section">
          <h2>Ready to Launch Your Career?</h2>
          <p>Applications are reviewed sequentially. Secure your placement evaluations today.</p>
          <PrimaryCTA href={FORM_URL} text="Submit Your Application" />
        </section>

        {/* Standard Compliance Footer */}
        <footer className="trust-footer">
          <ShieldCheck size={14} className="footer-icon" aria-hidden="true" />
          <span>Secure Enterprise Application Workspace • Averiqo Technologies</span>
        </footer>

      </div>
    </main>
  );
};

export default EnrollNow;