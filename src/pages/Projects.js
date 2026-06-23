import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const allProjects = [
    {
      title: "Kinza Designer",
      category: "Web",
      image: "/projects/pro1.jpg",
      link: "https://kinzadesigndelight.com/",
      description: "A premium portfolio and digital store interface engineered for a designer fashion label."
    },
    {
      title: "Harisent Enterprises",
      category: "E-learning",
      image: "/projects/pro2.jpg",
      link: "https://harisenterprises.com/",
      description: "An advanced e-learning infrastructure supporting modular digital skills training."
    },
    {
      title: "A1 VPS Hosting",
      category: "Design",
      image: "/projects/pro3.jpg",
      link: "https://a1vpshosting.com/",
      description: "A high-conversion interface designed specifically for enterprise web hosting environments."
    },
    {
      title: "E-Commerce Application",
      category: "Web",
      image: "/projects/pro4.jpg",
      link: "https://fullstack-ecommerce.netlify.app/",
      description: "A robust full-stack asynchronous commerce platform optimized for fast processing speeds."
    },
    {
      title: "Aspect Zone Properties",
      category: "E-learning",
      image: "/projects/pro5.jpg",
      link: "https://aspectzoneproperties.com/",
      description: "Real estate marketplace augmented with dynamic investment calculation coursework blocks."
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(allProjects.map(project => project.category))];

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio & Projects | Averiqo Technologies</title>
        <meta name="description" content="Explore Averiqo Technologies' engineering case studies. Delve into custom web applications, e-learning architectures, and performant design configurations." />
        <meta name="keywords" content="web development, custom software engineering, cloud architecture solutions, portfolio, interactive systems, digital systems roadmap, Averiqo" />
        <meta name="author" content="Averiqo Technologies" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Portfolio & Digital Implementations | Averiqo Technologies" />
        <meta property="og:description" content="Explore Averiqo Technologies' engineering case studies. Delve into custom web applications, e-learning architectures, and performant design configurations." />
        <meta property="og:image" content="/images/portfolio-preview.jpg" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & Digital Implementations | Averiqo Technologies" />
        <meta name="twitter:description" content="Explore Averiqo Technologies' engineering case studies. Delve into custom web applications, e-learning architectures, and performant design configurations." />
        <meta name="twitter:image" content="/images/portfolio-preview.jpg" />
      </Helmet>

      <main className="projects-page-wrapper">
        <section className="projects-section" aria-labelledby="portfolio-main-heading">
          <div className="projects-container">
            
            {/* Header Block */}
            <div className="projects-header">
              <h1 id="portfolio-main-heading" className="section-title">
                Our Proven <span className="gradient-text">Case Studies</span>
              </h1>
              <p className="section-subtitle">
                Explore real-world software implementations, interactive portal architectures, and user-centric platform assemblies.
              </p>
            </div>

            {/* Dynamic Filter Controls */}
            <nav className="category-filters" aria-label="Filter case studies by execution field">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </nav>

            {/* AnimatePresence for smooth project grid transitions */}
            <motion.div 
              layout 
              className="projects-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="project-card" 
                    key={project.title}
                  >
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={`Interface mockup preview of ${project.title}`}
                        className="project-image"
                        loading="lazy"
                      />
                      <span className="project-category-badge">{project.category}</span>
                    </div>
                    
                    <div className="project-content">
                      <h2 className="project-title">{project.title}</h2>
                      <p className="project-description">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label={`Launch deployment link to external site for ${project.title}`}
                      >
                        Launch Project <FaExternalLinkAlt className="link-icon" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;