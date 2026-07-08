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
  Star,
  Crown,
  Rocket,
  PackageOpen 
} from 'lucide-react';
import './Services.css';


// 1. Centralized Services Configuration Schema
const SERVICE_CATEGORIES = [
  {
    id: "custom-website",
    Icon: Code,
    title: "Custom Website Development",
    description: "Custom responsive websites built for performance and growth.",
    highlights: ["Responsive Design", "Fast Loading", "SEO Friendly"]
  },

  {
    id: "landing-pages",
    Icon: Layers,
    title: "Landing Pages",
    description: "High-converting landing pages designed to maximize leads.",
    highlights: ["Lead Generation", "Conversion Focused", "Mobile Friendly"]
  },

  {
    id: "seo",
    Icon: TrendingUp,
    title: "SEO Optimization",
    description: "Improve search engine rankings and drive organic traffic.",
    highlights: ["Keyword Research", "On Page SEO", "Technical SEO"]
  },

  {
    id: "digital-marketing",
    Icon: TrendingUp,
    title: "Digital Marketing",
    description: "End-to-end digital marketing strategies for businesses.",
    highlights: ["Social Media", "Content Marketing", "Campaign Management"]
  },

  {
    id: "google-ads",
    Icon: Star,
    title: "Google Ads (PPC)",
    description: "ROI-focused Google Ads campaigns with full management.",
    highlights: ["PPC Campaigns", "Keyword Targeting", "Analytics"]
  },

  {
    id: "meta-ads",
    Icon: Briefcase,
    title: "Meta Ads",
    description: "Facebook and Instagram advertising designed for growth.",
    highlights: ["Facebook Ads", "Instagram Ads", "Retargeting"]
  },

  {
    id: "maintenance",
    Icon: Smartphone,
    title: "Website Maintenance",
    description: "Regular updates, backups and security monitoring.",
    highlights: ["Security", "Backups", "Performance"]
  },

  {
    id: "hosting",
    Icon: Cloud,
    title: "Hosting & Domains",
    description: "Reliable hosting and domain setup with SSL.",
    highlights: ["Hosting", "SSL", "Domain Setup"]
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
const PRICING_PLANS = [
  {
    title: "Starter",
    icon: Rocket,
    price: "₹29,999",
    subtitle: "Best for Small Businesses",
    features: [
      "5 Page Website",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "WhatsApp Integration"
    ],
    button: "Get Started"
  },
  {
    title: "Growth",
    icon: Star,
    price: "₹59,999",
    subtitle: "Most Popular",
    popular: true,
    features: [
      "Everything in Starter",
      "Premium UI/UX",
      "Speed Optimization",
      "Google Analytics",
      "Lead Capture Forms"
    ],
    button: "Choose Growth"
  },
  {
    title: "Premium",
    icon: Crown,
    price: "₹99,999+",
    subtitle: "Enterprise Solution",
    features: [
      "Custom Website",
      "Advanced SEO",
      "CRM Integration",
      "Performance Optimization",
      "3 Months Support"
    ],
    button: "Contact Sales"
  }
];
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
  Our Services
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


<button
  className="learn-more-btn"
  onClick={() => setActiveDetailsId(id)}
>
  Learn More
  <ArrowRight size={12} />
</button>
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
       
         <section className="pricing-section">

    <div className="pricing-heading">

        <span className="pricing-badge">
            PRICING PLANS
        </span>

        <h2>
            Choose the Right Plan
            <br />
            for Your Business
        </h2>

        <p>
            Transparent pricing with everything you need
            to launch and grow your business.
        </p>

    </div>

    <div className="pricing-grid">

        {PRICING_PLANS.map((plan,index)=>{

            const Icon=plan.icon;

            return(

                <div
                    key={index}
                    className={`pricing-card ${
                        plan.popular ? "popular-plan" : ""
                    }`}
                >

                    <div className="plan-icon">

                        <Icon size={30}/>

                    </div>

                    <h4>{plan.title}</h4>

                    <h2>{plan.price}</h2>

                    <p>{plan.subtitle}</p>

                    <hr/>

                    <ul>

                        {plan.features.map((item,i)=>(

                            <li key={i}>

                                <CheckCircle2 size={17}/>

                                {item}

                            </li>

                        ))}

                    </ul>

                    <button>

                        {plan.button}

                        <ArrowRight size={16}/>

                    </button>

                </div>

            )

        })}

    </div>

</section> </div>
      </section>

      {/* ===== Bottom Image Banner Section (Tailwind) ===== */}
      <motion.section
        className="tw-services-banner relative w-full overflow-hidden mt-0 bg-gradient-to-br from-[#0f0a1e] via-[#1a1035] to-[#0d0618]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Decorative glow orbs */}
        <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

            {/* Image Container */}
            <motion.div
              className="w-full lg:w-[55%] relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Gradient border frame */}
              <div className="absolute -inset-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/40">
                <img
                  src="/services-banner.png"
                  alt="Digital services collaboration — web development, cloud solutions, and digital marketing"
                  className="w-full h-[240px] sm:h-[320px] lg:h-[400px] object-cover"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="w-full lg:w-[45%] text-center lg:text-left">
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-4 sm:mb-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Why Choose Us
              </motion.span>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4 sm:mb-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Building <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Digital Excellence</span> Together
              </motion.h2>

              <motion.p
                className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                We combine creative design thinking with enterprise-grade engineering to deliver digital experiences that drive measurable business growth and lasting impact.
              </motion.p>

              {/* Stats glassmorphism card */}
              <motion.div
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">150+</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-wide">Projects Delivered</p>
                  </div>
                  <div className="text-center border-x border-white/10">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">98%</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-wide">Client Retention</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">24/7</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-wide">Active Support</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-purple-900/40 hover:shadow-purple-800/60 transition-all duration-300 hover:-translate-y-0.5 no-underline"
                  aria-label="Start your project with our team"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Services;