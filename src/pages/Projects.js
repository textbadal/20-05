import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Projects.css';

const Projects = () => {
  const allProjects = [
    {
      title: "Kinza Designer",
      category: "Web",
      image: "/projects/pro1.jpg",
      link: "https://kinzadesigndelight.com/",
      description: "A portfolio and product site for a designer brand."
    },
    {
      title: "Harisent Enterprises",
      category: "E-learning",
      image: "/projects/pro2.jpg",
      link: "https://harisenterprises.com/",
      description: "An e-learning platform for business and skill development."
    },
    {
      title: "A1 VPS Hosting",
      category: "Design",
      image: "/projects/pro3.jpg",
      link: "https://a1vpshosting.com/",
      description: "A professional design for a hosting services website."
    },
    {
      title: "E-Commerce",
      category: "Web",
      image: "/projects/pro4.jpg",
      link: "https://fullstack-ecommerce.netlify.app/",
      description: "A full-stack e-commerce application built using modern technologies."
    },
    {
      title: "ASPECT ZONE PROPERTIES",
      category: "E-learning",
      image: "/projects/pro5.jpg",
      link: "https://aspectzoneproperties.com/",
      description: "Real estate platform with educational content for investors."
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
        <title>Projects - Averiqo</title>
        <meta name="description" content="Explore my web development, e-learning, and design projects. See examples of my work in the digital solutions space." />
        <meta name="keywords" content="web development, e-learning, digital solutions, portfolio, civil engineering, house planning, Averiqo" />
        <meta name="author" content="Averiqo" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="My Projects - Averiqo" />
        <meta property="og:description" content="Explore my web development, e-learning, and design projects. See examples of my work in the digital solutions space." />
        <meta property="og:image" content="/images/portfolio-preview.jpg" />
        <meta property="og:url" content="https://yourportfolio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Projects - Averiqo" />
        <meta name="twitter:description" content="Explore my web development, e-learning, and design projects. See examples of my work in the digital solutions space." />
        <meta name="twitter:image" content="/images/portfolio-preview.jpg" />
      </Helmet>

      <section className="projects-section">
        <h2 className="section-title">Our Projects</h2>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title || "Project Image"}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.description && <p>{project.description}</p>}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
