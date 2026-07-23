// src/components/InternshipRegistration.jsx
import React, { useState, useEffect } from 'react';
import { 
  FileText, Briefcase, GraduationCap, Award, Star, ShieldCheck, 
  ArrowRight, Sparkles, CheckCircle, X, Search
} from "lucide-react";
import "./InternshipRegistration.css";

// ==================== DATA ====================
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

// src/data/internships.js - Complete List of Popular Internship Domains

const INTERNSHIPS = [
  // ==================== TECHNOLOGY DOMAINS ====================
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹15,000 - ₹25,000/month",
    category: "Technology",
    subCategory: "Development",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Docker"],
    status: "Open",
    applicants: 45,
    openings: 3,
    posted: "2 days ago",
    deadline: "2026-08-15",
    description: "Build full-stack web applications using modern JavaScript frameworks. Work on production-grade projects with real users.",
    requirements: ["3rd+ year student", "Git knowledge", "Team player"],
    popularity: 95
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹12,000 - ₹20,000/month",
    category: "Technology",
    subCategory: "Development",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
    status: "Open",
    applicants: 38,
    openings: 2,
    posted: "3 days ago",
    deadline: "2026-08-20",
    description: "Create responsive, user-friendly interfaces with modern frontend technologies. Implement pixel-perfect designs.",
    requirements: ["Portfolio required", "UI/UX understanding"],
    popularity: 90
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹14,000 - ₹22,000/month",
    category: "Technology",
    subCategory: "Development",
    skills: ["Node.js", "Python", "PostgreSQL", "AWS", "Redis"],
    status: "Open",
    applicants: 30,
    openings: 2,
    posted: "4 days ago",
    deadline: "2026-08-18",
    description: "Build scalable backend APIs and microservices. Work on system design and database optimization.",
    requirements: ["Database knowledge", "API design", "Cloud basics"],
    popularity: 88
  },
  {
    id: 4,
    title: "Data Analytics",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹12,000 - ₹18,000/month",
    category: "Technology",
    subCategory: "Data",
    skills: ["Python", "SQL", "Tableau", "Excel", "Pandas"],
    status: "Open",
    applicants: 42,
    openings: 3,
    posted: "1 day ago",
    deadline: "2026-08-25",
    description: "Analyze large datasets, create visualizations, and derive actionable business insights.",
    requirements: ["Statistics knowledge", "Analytical mindset"],
    popularity: 85
  },
  {
    id: 5,
    title: "Data Science & ML",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹18,000 - ₹28,000/month",
    category: "Technology",
    subCategory: "Data",
    skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "Statistics"],
    status: "Open",
    applicants: 35,
    openings: 2,
    posted: "5 days ago",
    deadline: "2026-08-12",
    description: "Develop machine learning models for real-world applications. Work on NLP, Computer Vision, and predictive analytics.",
    requirements: ["ML fundamentals", "Python expertise", "Math background"],
    popularity: 92
  },
  {
    id: 6,
    title: "DevOps / Cloud",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹15,000 - ₹25,000/month",
    category: "Technology",
    subCategory: "Infrastructure",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Linux"],
    status: "Open",
    applicants: 22,
    openings: 2,
    posted: "6 days ago",
    deadline: "2026-08-10",
    description: "Manage cloud infrastructure, automate deployment pipelines, and implement CI/CD practices.",
    requirements: ["Linux knowledge", "Scripting skills"],
    popularity: 82
  },
  {
    id: 7,
    title: "Cybersecurity",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹16,000 - ₹24,000/month",
    category: "Technology",
    subCategory: "Security",
    skills: ["Network Security", "Penetration Testing", "Python", "OWASP", "Firewalls"],
    status: "Open",
    applicants: 18,
    openings: 1,
    posted: "7 days ago",
    deadline: "2026-08-08",
    description: "Conduct security assessments, vulnerability testing, and implement security best practices.",
    requirements: ["Security fundamentals", "Ethical hacking mindset"],
    popularity: 78
  },
  {
    id: 8,
    title: "Artificial Intelligence / AI",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹20,000 - ₹30,000/month",
    category: "Technology",
    subCategory: "AI",
    skills: ["Python", "Deep Learning", "NLP", "PyTorch", "Computer Vision"],
    status: "Open",
    applicants: 28,
    openings: 2,
    posted: "3 days ago",
    deadline: "2026-08-22",
    description: "Work on cutting-edge AI projects including LLMs, computer vision, and natural language processing.",
    requirements: ["AI/ML experience", "Research mindset"],
    popularity: 96
  },
  {
    id: 9,
    title: "Blockchain Developer",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹18,000 - ₹28,000/month",
    category: "Technology",
    subCategory: "Web3",
    skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DeFi"],
    status: "Open",
    applicants: 15,
    openings: 1,
    posted: "4 days ago",
    deadline: "2026-08-19",
    description: "Develop smart contracts, build Web3 applications, and explore decentralized technologies.",
    requirements: ["Blockchain basics", "JavaScript knowledge"],
    popularity: 75
  },

  // ==================== DESIGN DOMAINS ====================
  {
    id: 10,
    title: "UI/UX Design",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹12,000 - ₹18,000/month",
    category: "Design",
    subCategory: "Product Design",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    status: "Open",
    applicants: 40,
    openings: 3,
    posted: "2 days ago",
    deadline: "2026-08-20",
    description: "Design beautiful user interfaces and experiences for web and mobile applications.",
    requirements: ["Portfolio required", "Design thinking"],
    popularity: 87
  },
  {
    id: 11,
    title: "Graphic Designer",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000 - ₹16,000/month",
    category: "Design",
    subCategory: "Visual Design",
    skills: ["Photoshop", "Illustrator", "InDesign", "Branding", "Typography"],
    status: "Open",
    applicants: 35,
    openings: 2,
    posted: "5 days ago",
    deadline: "2026-08-16",
    description: "Create stunning visual designs for brands, marketing materials, and digital products.",
    requirements: ["Strong portfolio", "Creative skills"],
    popularity: 80
  },
  {
    id: 12,
    title: "Motion Graphics",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹11,000 - ₹17,000/month",
    category: "Design",
    subCategory: "Animation",
    skills: ["After Effects", "Premiere Pro", "2D Animation", "Video Editing"],
    status: "Open",
    applicants: 20,
    openings: 1,
    posted: "6 days ago",
    deadline: "2026-08-14",
    description: "Create animated content, motion graphics, and video edits for marketing campaigns.",
    requirements: ["Animation skills", "Creative mindset"],
    popularity: 72
  },

  // ==================== MARKETING DOMAINS ====================
  {
    id: 13,
    title: "Digital Marketing",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000 - ₹16,000/month",
    category: "Marketing",
    subCategory: "Digital",
    skills: ["SEO", "Content Writing", "Analytics", "Social Media", "Google Ads"],
    status: "Open",
    applicants: 30,
    openings: 2,
    posted: "3 days ago",
    deadline: "2026-08-21",
    description: "Drive digital marketing campaigns, optimize SEO, and grow online presence.",
    requirements: ["Marketing knowledge", "Writing skills"],
    popularity: 78
  },
  {
    id: 14,
    title: "Social Media Marketing",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹9,000 - ₹14,000/month",
    category: "Marketing",
    subCategory: "Social Media",
    skills: ["Instagram", "LinkedIn", "Content Creation", "Community Management"],
    status: "Open",
    applicants: 25,
    openings: 2,
    posted: "4 days ago",
    deadline: "2026-08-18",
    description: "Manage social media presence, create engaging content, and grow community engagement.",
    requirements: ["Social media savvy", "Creativity"],
    popularity: 74
  },
  {
    id: 15,
    title: "Content Writing",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹8,000 - ₹14,000/month",
    category: "Marketing",
    subCategory: "Content",
    skills: ["SEO Writing", "Blogging", "Copywriting", "Editing", "Research"],
    status: "Open",
    applicants: 22,
    openings: 2,
    posted: "5 days ago",
    deadline: "2026-08-17",
    description: "Create compelling content for blogs, websites, and marketing campaigns.",
    requirements: ["Excellent writing skills", "Research ability"],
    popularity: 70
  },

  // ==================== BUSINESS DOMAINS ====================
  {
    id: 16,
    title: "Business Development",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000 - ₹18,000/month",
    category: "Business",
    subCategory: "Sales",
    skills: ["Sales", "CRM", "Communication", "Negotiation", "LinkedIn"],
    status: "Open",
    applicants: 20,
    openings: 2,
    posted: "2 days ago",
    deadline: "2026-08-23",
    description: "Expand business opportunities, build partnerships, and drive revenue growth.",
    requirements: ["Communication skills", "Sales mindset"],
    popularity: 76
  },
  {
    id: 17,
    title: "Product Management",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹14,000 - ₹22,000/month",
    category: "Business",
    subCategory: "Product",
    skills: ["Product Strategy", "Analytics", "User Stories", "Agile", "JIRA"],
    status: "Open",
    applicants: 18,
    openings: 1,
    posted: "3 days ago",
    deadline: "2026-08-22",
    description: "Lead product development, define features, and manage the product lifecycle.",
    requirements: ["Analytical mindset", "Problem-solving"],
    popularity: 81
  },
  {
    id: 18,
    title: "Finance & Accounting",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000 - ₹16,000/month",
    category: "Business",
    subCategory: "Finance",
    skills: ["Excel", "Accounting", "Financial Analysis", "QuickBooks"],
    status: "Open",
    applicants: 15,
    openings: 1,
    posted: "6 days ago",
    deadline: "2026-08-13",
    description: "Manage financial records, analyze data, and support business operations.",
    requirements: ["Finance knowledge", "Math skills"],
    popularity: 65
  },
  {
    id: 19,
    title: "Human Resources / HR",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹8,000 - ₹14,000/month",
    category: "Business",
    subCategory: "HR",
    skills: ["Recruitment", "Onboarding", "Employee Relations", "HRMS"],
    status: "Open",
    applicants: 25,
    openings: 2,
    posted: "4 days ago",
    deadline: "2026-08-19",
    description: "Support recruitment, employee engagement, and HR operations.",
    requirements: ["People skills", "Organizational abilities"],
    popularity: 68
  },

  // ==================== EMERGING/SPECIALIZED DOMAINS ====================
  {
    id: 20,
    title: "Augmented Reality / VR",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹18,000 - ₹28,000/month",
    category: "Technology",
    subCategory: "AR/VR",
    skills: ["Unity", "Unreal Engine", "3D Modeling", "C#", "AR Foundation"],
    status: "Open",
    applicants: 12,
    openings: 1,
    posted: "5 days ago",
    deadline: "2026-08-15",
    description: "Build immersive AR/VR experiences using Unity and AR Foundation.",
    requirements: ["Game dev experience", "3D design"],
    popularity: 70
  },
  {
    id: 21,
    title: "IoT / Embedded Systems",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹15,000 - ₹22,000/month",
    category: "Technology",
    subCategory: "Hardware",
    skills: ["Arduino", "Raspberry Pi", "C++", "MQTT", "Sensor Integration"],
    status: "Open",
    applicants: 10,
    openings: 1,
    posted: "7 days ago",
    deadline: "2026-08-10",
    description: "Work on IoT projects, sensor integration, and embedded systems development.",
    requirements: ["Hardware knowledge", "Programming skills"],
    popularity: 68
  },
  {
    id: 22,
    title: "Cloud Architecture",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹16,000 - ₹24,000/month",
    category: "Technology",
    subCategory: "Cloud",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Cloud Security"],
    status: "Open",
    applicants: 14,
    openings: 1,
    posted: "3 days ago",
    deadline: "2026-08-21",
    description: "Design and manage cloud infrastructure, implement best practices.",
    requirements: ["Cloud fundamentals", "Linux skills"],
    popularity: 76
  },
  {
    id: 23,
    title: "Technical Writing",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000 - ₹16,000/month",
    category: "Marketing",
    subCategory: "Content",
    skills: ["Technical Writing", "Documentation", "API Docs", "Markdown"],
    status: "Open",
    applicants: 16,
    openings: 2,
    posted: "4 days ago",
    deadline: "2026-08-18",
    description: "Create technical documentation, API guides, and developer resources.",
    requirements: ["Writing skills", "Technical aptitude"],
    popularity: 64
  },
  {
    id: 24,
    title: "Project Management",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹12,000 - ₹18,000/month",
    category: "Business",
    subCategory: "Management",
    skills: ["Agile", "Scrum", "JIRA", "Communication", "Risk Management"],
    status: "Open",
    applicants: 20,
    openings: 2,
    posted: "2 days ago",
    deadline: "2026-08-24",
    description: "Lead projects, manage teams, and ensure timely delivery of business goals.",
    requirements: ["Leadership skills", "Organization"],
    popularity: 72
  },
  {
    id: 25,
    title: "Quality Assurance / QA",
    company: "Averiqo Technologies",
    location: "Remote",
    duration: "3 Months",
    stipend: "₹10,000 - ₹16,000/month",
    category: "Technology",
    subCategory: "Testing",
    skills: ["Manual Testing", "Selenium", "Automation", "JIRA", "Test Cases"],
    status: "Open",
    applicants: 18,
    openings: 2,
    posted: "5 days ago",
    deadline: "2026-08-17",
    description: "Ensure quality through testing, automation, and bug tracking.",
    requirements: ["Testing fundamentals", "Attention to detail"],
    popularity: 66
  }
];
const CATEGORIES = ["All", "Technology", "Design", "Marketing", "Business"];

// ==================== REUSABLE COMPONENTS ====================
const CTAButton = ({ href, text, variant = "primary", className = "" }) => (
  <div className={`cta-container ${variant}-container`}>
    <a 
      href={href} 
      target={href.startsWith("http") ? "_blank" : "_self"} 
      rel={href.startsWith("http") ? "noopener noreferrer" : ""} 
      className={`cta-btn ${variant}-btn ${className}`}
    >
      <span>{text}</span>
      <ArrowRight size={18} className="cta-arrow" />
    </a>
  </div>
);

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

const DocumentCard = ({ src, label, onPreview }) => (
  <button type="button" className="doc-card-btn" onClick={onPreview} aria-label={`Preview ${label}`}>
    <figure className="doc-card">
      <div className="image-wrapper">
        <img src={src} alt={`Official template preview for ${label}`} loading="lazy" decoding="async" />
        <div className="overlay-msg">Click to Preview Document</div>
      </div>
      <figcaption><h3>{label}</h3></figcaption>
    </figure>
  </button>
);

const InternshipCard = ({ internship }) => {
  const getStatusColor = (status) => {
    if (status === "Open") return "status-open";
    if (status === "Closing Soon") return "status-closing";
    return "status-filled";
  };

  return (
    <div className="internship-card">
      <div className="card-header">
        <div className="card-title-group">
          <h3>{internship.title}</h3>
          <span className={`status-badge ${getStatusColor(internship.status)}`}>
            {internship.status}
          </span>
        </div>
        <p className="company-name">{internship.company}</p>
      </div>
      
      <div className="card-meta">
        <span>📍 {internship.location}</span>
        <span>⏳ {internship.duration}</span>
        <span>💰 {internship.stipend}</span>
      </div>
      
      <div className="card-skills">
        {internship.skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
      
      <div className="card-footer">
        <div className="card-stats">
          <span>👥 {internship.applicants} applicants</span>
          <span>🎯 {internship.openings} openings</span>
        </div>
        <CTAButton 
          href={FORM_URL}
          text="Apply Now"
          variant="secondary"
          className="apply-btn-small"
        />
      </div>
    </div>
  );
};

// ==================== MAIN COMPONENT ====================
const InternshipRegistration = () => {
  const [activePreview, setActivePreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showInternships, setShowInternships] = useState(true);

  // Lightbox keyboard handler
  useEffect(() => {
    if (!activePreview) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActivePreview(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePreview]);

  // Filter internships
  const filteredInternships = INTERNSHIPS.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || internship.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="internships-page">
      <div className="container">
        
        {/* ======== HERO SECTION ======== */}
       

          <div className="hero-actions">
            <CTAButton href={FORM_URL} text="Register Now" variant="primary" />
            <CTAButton href="/certificate-verification" text="Verify Certificate" variant="secondary" />
          </div>

          
         

        {/* ======== INTERNSHIP LISTINGS (NEW SEARCHABLE SECTION) ======== */}
        <section className="listings-section">
          <div className="section-header">
            <h2>Available Internships</h2>
            <p>Find the perfect role to launch your career</p>
          </div>

          {/* Search & Filter Bar */}
          <div className="search-filter-bar">
            <div className="search-input-wrapper">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search by title, skills, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filters">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="results-count">
            <span>Found {filteredInternships.length} internships</span>
          </div>

          {/* Internship Grid */}
          {filteredInternships.length === 0 ? (
            <div className="no-results">
              <p>No internships found matching your criteria</p>
              <button 
                className="clear-filters"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="internship-grid">
              {filteredInternships.map(internship => (
                <InternshipCard key={internship.id} internship={internship} />
              ))}
            </div>
          )}
        </section>

        {/* ======== BENEFITS SECTION ======== */}
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

        {/* ======== DOCUMENT PREVIEWS ======== */}
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

        {/* ======== CLOSING CTA ======== */}
        <section className="closing-cta-section">
          <h2>Ready to Launch Your Career?</h2>
          <p>Applications are reviewed sequentially. Secure your placement evaluations today.</p>
          <CTAButton 
            href={FORM_URL} 
            text="Submit Your Application" 
            variant="primary" 
            className="btn-brown" 
          />
        </section>

        {/* ======== FOOTER ======== */}
        <footer className="trust-footer">
          <ShieldCheck size={14} className="footer-icon" aria-hidden="true" />
          <span>Secure Enterprise Application Workspace • Averiqo Technologies</span>
        </footer>

      </div>

      {/* ======== LIGHTBOX MODAL ======== */}
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