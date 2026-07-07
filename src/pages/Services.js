import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Layers, 
  TrendingUp, 
  Briefcase, 
  Smartphone, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Cpu, 
  KanbanSquare, 
  PackageOpen 
} from 'lucide-react';
import './Services.css';

// 1. Centralized Services Configuration Schema
const SERVICE_CATEGORIES = [
  {
    id: "web-development",
    Icon: Code,
    title: "Web Development",
    description: "Full-spectrum, enterprise-grade web solutions from raw concept execution to automated global deployment.",
    highlights: [
      "Custom headless CMS builds",
      "Robust architectural E-commerce solutions",
      "High-performance Progressive Web Apps",
      "Secure third-party API integrations",
      "Server-side optimization layers"
    ],
    details: {
      process: ["Discovery & Architecture Planning", "High-Fidelity UI/UX Design", "Component-Driven Development", "Comprehensive Automated Testing", "CI/CD Pipeline Deployment"],
      techLabel: "Core Stack",
      technologies: ["React", "Next.js", "Node.js", "GraphQL", "Shopify", "TypeScript"],
      deliverables: ["Fully fluid, responsive infrastructure", "Secure administrative dash frameworks", "Semantic SEO indexing hierarchy", "Native system performance analytics"]
    }
  },
  {
    id: "ui-ux-design",
    Icon: Layers,
    title: "UI/UX Design",
    description: "Human-centered user experiences engineered directly to enhance user task-completion models and conversions.",
    highlights: [
      "Quantitative user research & tracking",
      "Complex information blueprinting",
      "Highly interactive system prototypes",
      "Design systems & token setups",
      "Strict WCAG accessibility auditing"
    ],
    details: {
      process: ["User Context Interviews", "Competitive UX Matrix Audits", "Low-Fi Layout Wireframing", "High-Fidelity Interactive Mockups", "Live Usability Testing Sprints"],
      techLabel: "Tool Suite",
      technologies: ["Figma", "Adobe Creative Suite", "Tokens Studio", "Principle", "Webflow"],
      deliverables: ["Validated behavioral personas", "Interactive user flows maps", "Global centralized style guides", "Atomic design system code handoffs"]
    }
  },
  {
    id: "digital-marketing",
    Icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven growth hacking methodologies engineered to maximize client retention matrices and programmatic ROI.",
    highlights: [
      "Technical & semantic SEO optimization",
      "PPC target acquisition campaign management",
      "Social engagement conversion strategies",
      "Inbound content engine tracking",
      "A/B multivariate conversion rate optimizations"
    ],
    details: {
      process: ["Market Segment Research", "Omnichannel Growth Strategy", "Campaign Structural Execution", "Real-time Attribution Tracking", "Continuous Funnel Optimization"],
      techLabel: "Channels mastered",
      technologies: ["Google Analytics 4", "Meta Ads Manager", "LinkedIn Ads", "Klaviyo Lifecycle Engine", "Semrush Systems"],
      deliverables: ["Deep competitor intelligence grids", "High-intent keyword matrix maps", "Dynamic content engine calendars", "Granular performance revenue sheets"]
    }
  },
  {
    id: "business-consulting",
    Icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic engineering consultation designed to update legacy models into high-yield automated business operations.",
    highlights: [
      "End-to-end digital business scaling",
      "Competitive product market positioning",
      "Agile product strategy design",
      "Operational pipeline process refinement",
      "Strategic technical architectural layout"
    ],
    details: {
      process: ["Organizational Audit", "Gap Matrix Disjoint Analysis", "Operational Architecture Drafting", "Deployment Planning Sprints", "Change-Management Operations"],
      techLabel: "Core Specializations",
      technologies: ["SaaS Scaling Models", "Startup Seed Acceleration", "Enterprise System Refinement", "Workflow Automation Planning", "Corporate Data Analytics Matrix"],
      deliverables: ["SWOT market viability reports", "Financial project justification cases", "System implementation roadmap track", "Enterprise KPI tracking protocols"]
    }
  },
  {
    id: "mobile-development",
    Icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps matching zero-latency native performance metrics with fluid interactive layouts.",
    highlights: [
      "Native iOS & Android compilation",
      "Universal codebase React Native builds",
      "App store optimization optimizations",
      "Transactional dynamic push engines",
      "Asynchronous local database offline support"
    ],
    details: {
      process: ["Requirement Structural Mapping", "Interactive Layout Prototyping", "Native Pipeline Code Construction", "Automated Device Matrix QA Testing", "App/Play Store Deployment Sprints"],
      techLabel: "Ecosystem Stack",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase Web Services"],
      deliverables: ["Assembled mobile application builds", "Cloud system dashboard hooks", "RESTful/GraphQL API networks", "Integrated event tracing frameworks"]
    }
  },
  {
    id: "cloud-solutions",
    Icon: Cloud,
    title: "Cloud Solutions",
    description: "Elastic cloud infrastructure setups built for continuous availability configurations and automated microservices.",
    highlights: [
      "Zero-downtime legacy systems migration",
      "Highly scalable serverless processing layers",
      "Automated GitOps continuous pipeline execution",
      "Secure container cluster orchestration",
      "Granular continuous resource spend tuning"
    ],
    details: {
      process: ["System Load Profiling", "Elastic Microservices Architecture", "Migration Pipeline Sequencing", "Infrastructure Implementation Sprints", "Real-time Telemetry Deployments"],
      techLabel: "Infrastructure Environments",
      technologies: ["AWS", "Microsoft Azure", "Google Cloud Engine", "Docker Containers", "Kubernetes Clusters"],
      deliverables: ["Architectural cloud framework plans", "Declarative Infrastructure as Code (IaC)", "Automated GitOps production pipelines", "Hardened infrastructure security policies"]
    }
  }
];

const Services = () => {
  // Stateful view controller for deeper technical inspection
  const [activeDetailsId, setActiveDetailsId] = useState(null);

  const selectedService = SERVICE_CATEGORIES.find(s => s.id === activeDetailsId);

  // Animation Variant Configurations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.08 } }
  };

  // Safe window parsing for deterministic structured schema builds
  const safeOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://averiqo.com';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Enterprise Technology Implementation and Software Engineering Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Averiqo Technologies",
      "url": safeOrigin
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Enterprise Services Suite",
      "itemListElement": SERVICE_CATEGORIES.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <main className="services-page-wrapper">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <section className="services-section" id="services" aria-labelledby="main-services-heading">
        <div className="container">
          
          {/* Section Hero Banner */}
          <motion.header 
            className="services-header"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 id="main-services-heading" className="section-title">
              Engineered <span className="gradient-text">Digital Ecosystems</span>
            </h1>
            <p className="section-subtitle">
              We engineer scalable, enterprise-ready software frameworks and growth metrics tailored for unique business optimization vectors.
            </p>
          </motion.header>

          {/* Cards Interface */}
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {SERVICE_CATEGORIES.map(({ id, Icon, title, description, highlights }) => (
              <motion.article
                className={`service-card ${activeDetailsId === id ? 'active-card-view' : ''}`}
                key={id}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              >
                <div className="service-card-top">
                  <div className="service-icon-container">
                    <Icon className="lucide-service-icon" size={26} aria-hidden="true" />
                  </div>
                  <h2 className="service-card-title">{title}</h2>
                </div>

                <p className="service-description">{description}</p>
                
                <div className="service-highlights">
                  <h3 className="sub-section-title">Operational Core Focus:</h3>
                  <ul>
                    {highlights.map((highlight, i) => (
                      <li key={i}>
                        <CheckCircle2 className="highlight-check" size={14} aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-actions">
                  <button 
                    onClick={() => setActiveDetailsId(id)}
                    className="service-explore-btn"
                    aria-expanded={activeDetailsId === id}
                    aria-label={`View interactive specification parameters for ${title}`}
                  >
                    Inspect Architecture
                  </button>
                  
                  <Link 
                    to={`/services/${id}`}
                    className="service-link"
                    aria-label={`Maps to dedicated tracking directory page for ${title}`}
                  >
                    <span>Full Specification</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Dynamic contextual inspection modal overlay drawer */}
          <AnimatePresence>
            {activeDetailsId && selectedService && (
              <motion.div 
                className="inspection-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveDetailsId(null)}
              >
                <motion.div 
                  className="inspection-drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="drawer-heading"
                >
                  <button 
                    className="close-drawer-btn" 
                    onClick={() => setActiveDetailsId(null)}
                    aria-label="Terminate inspection drawer interface overlay"
                  >
                    <X size={20} />
                  </button>

                  <header className="drawer-header">
                    <span className="drawer-pre-title">Technical Parameter Specifications</span>
                    <h2 id="drawer-heading">{selectedService.title}</h2>
                    <p>{selectedService.description}</p>
                  </header>

                  <div className="drawer-body">
                    <section className="drawer-block">
                      <div className="block-title-wrapper">
                        <Cpu size={16} className="block-icon" />
                        <h3>{selectedService.details.techLabel}</h3>
                      </div>
                      <div className="tech-pills-container">
                        {selectedService.details.technologies.map((tech, i) => (
                          <span key={i} className="tech-pill">{tech}</span>
                        ))}
                      </div>
                    </section>

                    <section className="drawer-block">
                      <div className="block-title-wrapper">
                        <KanbanSquare size={16} className="block-icon" />
                        <h3>Operational Lifecycle Roadmap</h3>
                      </div>
                      <ol className="pipeline-steps-list">
                        {selectedService.details.process.map((step, i) => (
                          <li key={i}>
                            <span className="step-number">0{i + 1}</span>
                            <span className="step-name">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </section>

                    <section className="drawer-block">
                      <div className="block-title-wrapper">
                        <PackageOpen size={16} className="block-icon" />
                        <h3>Project Target Deliverables</h3>
                      </div>
                      <ul className="deliverables-checklist">
                        {selectedService.details.deliverables.map((item, i) => (
                          <li key={i}>
                            <span className="bullet-dot" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <footer className="drawer-footer">
                    <Link to="/contact" className="cta-button primary full-width-cta">
                      Initialize Consultation Process
                    </Link>
                  </footer>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Callouts */}
          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="cta-heading  ">Require custom operational configurations?</h2>
            <p>We specialized in isolated workflow adjustments built directly around complex micro-service operational targets.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary" aria-label="Book a free consultation session with our solution architects">
                Initialize Free Consultation
              </Link>
              <Link to="/case-studies" className="cta-button secondary" aria-label="Review system tracking implementation study cases">
                Read Verified Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;