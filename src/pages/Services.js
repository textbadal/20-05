import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const serviceCategories = [
  {
    id: "web-development",
    icon: "/icons/web.svg",
    title: "Web Development",
    description: "Full-spectrum web solutions from concept to deployment and beyond.",
    highlights: [
      "Custom CMS Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Integrations",
      "Headless Architecture"
    ],
    details: {
      process: [
        "Discovery & Planning",
        "UI/UX Design",
        "Development",
        "Quality Assurance",
        "Deployment & Maintenance"
      ],
      technologies: ["React", "Next.js", "Node.js", "GraphQL", "Shopify", "WordPress"],
      deliverables: [
        "Fully responsive website",
        "Admin dashboard",
        "SEO-optimized structure",
        "Performance analytics",
        "Ongoing support"
      ]
    }
  },
  {
    id: "ui-ux-design",
    icon: "/icons/design.svg",
    title: "UI/UX Design",
    description: "Human-centered design that drives engagement and conversions.",
    highlights: [
      "User Research & Testing",
      "Information Architecture",
      "Interactive Prototypes",
      "Design Systems",
      "Accessibility Audits"
    ],
    details: {
      process: [
        "User Interviews",
        "Competitive Analysis",
        "Wireframing",
        "High-Fidelity Mockups",
        "Usability Testing"
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Webflow"],
      deliverables: [
        "User personas",
        "User flow diagrams",
        "Style guide",
        "Design system",
        "Developer handoff"
      ]
    }
  },
  {
    id: "digital-marketing",
    icon: "/icons/marketing.svg",
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your online presence.",
    highlights: [
      "SEO Optimization",
      "PPC Campaign Management",
      "Social Media Strategy",
      "Content Marketing",
      "Conversion Rate Optimization"
    ],
    details: {
      process: [
        "Market Research",
        "Strategy Development",
        "Campaign Execution",
        "Performance Tracking",
        "Continuous Optimization"
      ],
      channels: ["Google Ads", "Meta Ads", "LinkedIn", "Email", "Organic Social"],
      deliverables: [
        "Competitor analysis",
        "Keyword strategy",
        "Content calendar",
        "Performance reports",
        "ROI optimization"
      ]
    }
  },
  {
    id: "business-consulting",
    icon: "/icons/consulting.svg",
    title: "Business Consulting",
    description: "Strategic guidance to transform your digital business model.",
    highlights: [
      "Digital Transformation",
      "Market Positioning",
      "Product Strategy",
      "Operational Efficiency",
      "Technology Roadmapping"
    ],
    details: {
      process: [
        "Business Assessment",
        "Gap Analysis",
        "Solution Design",
        "Implementation Plan",
        "Change Management"
      ],
      specialties: [
        "SaaS Products",
        "Startup Scaling",
        "Enterprise Innovation",
        "Process Automation",
        "Data Strategy"
      ],
      deliverables: [
        "SWOT analysis",
        "Business case",
        "Implementation roadmap",
        "KPI framework",
        "Executive coaching"
      ]
    }
  },
  {
    id: "mobile-development",
    icon: "/icons/mobile.svg",
    title: "Mobile Development",
    description: "Cross-platform mobile experiences with native performance.",
    highlights: [
      "iOS & Android Apps",
      "React Native Development",
      "App Store Optimization",
      "Push Notifications",
      "Offline Capabilities"
    ],
    details: {
      process: [
        "Requirement Analysis",
        "Prototyping",
        "App Development",
        "QA Testing",
        "Store Deployment"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      deliverables: [
        "Native mobile apps",
        "Admin panel",
        "API integration",
        "App analytics",
        "Maintenance plan"
      ]
    }
  },
  {
    id: "cloud-solutions",
    icon: "/icons/cloud.svg",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure tailored to your workload needs.",
    highlights: [
      "Cloud Migration",
      "Serverless Architecture",
      "DevOps Automation",
      "Containerization",
      "Cost Optimization"
    ],
    details: {
      process: [
        "Workload Assessment",
        "Architecture Design",
        "Migration Planning",
        "Implementation",
        "Monitoring Setup"
      ],
      platforms: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Kubernetes"],
      deliverables: [
        "Cloud strategy",
        "Infrastructure as code",
        "CI/CD pipelines",
        "Security compliance",
        "Performance monitoring"
      ]
    }
  }
];

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // SEO: Generate Schema.org structured data JSON for professional services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Transformation and Software Engineering Services",
    "provider": {
      "@type": "Organization",
      "name": "Averiqo Technologies",
      "url": window.location.origin
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Comprehensive Digital Services",
      "itemListElement": serviceCategories.map((service, index) => ({
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
      {/* Dynamic SEO JSON-LD Injection */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <section className="services-section" id="services" aria-labelledby="main-services-heading">
        <div className="container">
          
          {/* Header Section */}
          <motion.div
            className="services-header"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h1 id="main-services-heading" className="section-title">
              <span className="gradient-text">Comprehensive</span> Digital Services
            </h1>
            <p className="section-subtitle">
              End-to-end solutions designed to propel your business forward in the digital landscape
            </p>
          </motion.div>

          {/* Services Grid using semantic <article> cards */}
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceCategories.map((service) => (
              <motion.article
                className="service-card"
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-card-top">
                  <div className="service-icon-container">
                    <img 
                      src={service.icon} 
                      alt="" 
                      aria-hidden="true"
                      width="48"
                      height="48"
                      loading="lazy"
                    />
                  </div>
                  {/* Changed to h2 to respect correct structural hierarchy */}
                  <h2 className="service-card-title">{service.title}</h2>
                </div>

                <p className="service-description">{service.description}</p>
                
                {/* Key Offerings List */}
                <div className="service-highlights">
                  <h3 className="sub-section-title">Key Offerings:</h3>
                  <ul>
                    {service.highlights.map((highlight, i) => (
                      <li key={i}>
                        <span className="highlight-icon" aria-hidden="true">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Approach Tags Section */}
                <div className="service-details-preview">
                  <h3 className="sub-section-title">Our Approach:</h3>
                  <div className="detail-tags" aria-label={`Process execution steps for ${service.title}`}>
                    {service.details.process.slice(0, 3).map((step, i) => (
                      <span key={i} className="detail-tag">{step}</span>
                    ))}
                    {service.details.process.length > 3 && (
                      <span className="detail-tag">+{service.details.process.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Clear Learn More Link */}
                <Link 
                  to={`/services/${service.id}`}
                  className="service-link"
                  aria-label={`Learn more details about ${service.title}`}
                >
                  Explore Service
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom Action Block */}
          <motion.div
            className="services-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="cta-heading">Need a custom solution?</h2>
            <p>We specialize in tailored digital strategies for unique business challenges</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary" aria-label="Book a free consultation with our strategy experts">
                Get a Free Consultation
              </Link>
              <Link to="/case-studies" className="cta-button secondary" aria-label="Browse previous enterprise tech implementation results">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;