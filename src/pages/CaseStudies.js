import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: 'Global Fintech Platform Overhaul',
      client: 'FinServe Global',
      description: 'How we transformed a legacy banking architecture into a modern, scalable microservices ecosystem, improving transaction speeds by 300%.',
      tags: ['Fintech', 'Microservices', 'Cloud Migration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'E-Commerce AI Recommendation Engine',
      client: 'ShopNex',
      description: 'Implementing a custom AI-driven recommendation engine that increased user engagement and boosted Q4 sales by 45%.',
      tags: ['AI/ML', 'E-Commerce', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Healthcare Patient Portal Redesign',
      client: 'HealthPlus Network',
      description: 'A complete UI/UX overhaul of a patient management portal, focusing on accessibility, resulting in a 60% drop in support calls.',
      tags: ['UI/UX Design', 'Healthcare', 'Accessibility'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="cases-page-wrapper">
      <div className="cases-hero">
        <h1>Proven Impact</h1>
        <p>Explore how we've helped industry leaders solve complex challenges and accelerate growth.</p>
      </div>

      <div className="cases-container">
        {cases.map((study, index) => (
          <div key={study.id} className={`case-study-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="case-study-content">
              <div className="case-client">{study.client}</div>
              <h2>{study.title}</h2>
              <p>{study.description}</p>
              <div className="case-tags">
                {study.tags.map((tag, idx) => (
                  <span key={idx} className="case-tag">{tag}</span>
                ))}
              </div>
              <button className="case-cta">View Full Case Study</button>
            </div>
            <div className="case-study-image-placeholder">
              <img src={study.image} alt={study.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
