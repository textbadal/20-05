import React, { useState } from 'react';

const CaseStudies = () => {
  // 1. Expanded and detailed case study data with metrics
  const cases = [
    {
      id: 1,
      title: 'Global Fintech Platform Overhaul',
      client: 'FinServe Global',
      impact: '300% Speed Increase',
      metricLabel: 'Transaction Processing',
      description: 'How we transformed a legacy monolithic banking architecture into a modern, auto-scaling microservices ecosystem. Faced with high concurrency bottlenecks during peak market hours, our team re-architected their core framework to eliminate thread contention and optimize database queries.',
      tags: ['Fintech', 'Microservices', 'Cloud Migration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'E-Commerce AI Recommendation Engine',
      client: 'ShopNex',
      impact: '+45% Sales Boost',
      metricLabel: 'Q4 Revenue Growth',
      description: 'Implementing a custom collaborative filtering AI model that analyzes real-time user browsing telemetry. The engine dynamically delivers highly tailored product arrays, resulting in an aggressive spike in cross-selling metrics, average order value, and repeat user engagement.',
      tags: ['AI/ML', 'E-Commerce', 'Data Analytics'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Healthcare Patient Portal Redesign',
      client: 'HealthPlus Network',
      impact: '60% Drop',
      metricLabel: 'Inbound Support Calls',
      description: 'A complete UI/UX overhaul of an enterprise patient management ecosystem serving millions. Built around WCAG 2.1 accessibility guidelines, we streamlined the prescription renewal flow and appointment scheduling into an intuitive, high-legibility interface.',
      tags: ['UI/UX Design', 'Healthcare', 'Accessibility'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // 2. State tracking for active filter category
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Fintech', 'AI/ML', 'UI/UX Design', 'Cloud Migration'];

  // 3. Filter processing logic
  const filteredCases = activeFilter === 'All' 
    ? cases 
    : cases.filter(c => c.tags.includes(activeFilter) || c.title.includes(activeFilter));

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <span style={styles.heroSub}>CASE STUDIES</span>
        <h1 style={styles.heroTitle}>Proven Impact</h1>
        <p style={styles.heroDescription}>
          Explore how we solve complex technological challenges, scale architectures, and accelerate business growth for industry leaders.
        </p>
      </div>

      {/* Dynamic Filter Bar */}
      <div style={styles.filterBar}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              ...styles.filterBtn,
              ...(activeFilter === filter ? styles.filterBtnActive : {})
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Case Studies Layout Container */}
      <div style={styles.container}>
        {filteredCases.map((study, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={study.id} style={{
              ...styles.card,
              flexDirection: isEven ? 'row' : 'row-reverse'
            }}>
              {/* Text Content Column */}
              <div style={styles.contentCol}>
                <div style={styles.client}>{study.client}</div>
                <h2 style={styles.title}>{study.title}</h2>
                
                {/* Metric Highlight Block */}
                <div style={styles.metricBlock}>
                  <div style={styles.metricValue}>{study.impact}</div>
                  <div style={styles.metricLabel}>{study.metricLabel}</div>
                </div>

                <p style={styles.description}>{study.description}</p>
                
                {/* Tag Chips */}
                <div style={styles.tagsContainer}>
                  {study.tags.map((tag, idx) => (
                    <span key={idx} style={styles.tag}>{tag}</span>
                  ))}
                </div>
                
                <button 
                  style={styles.cta}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                  Read Full Story
                </button>
              </div>

              {/* Image Column */}
              <div style={styles.imageCol}>
                <div style={styles.imageWrapper}>
                  <img src={study.image} alt={study.title} style={styles.image} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 4. Clean, consolidated inline JavaScript styles
const styles = {
  pageWrapper: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    minHeight: '100vh',
    paddingBottom: '5rem',
  },
  hero: {
    textAlign: 'center',
    padding: '6rem 2rem 4rem 2rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
  },
  heroSub: {
    fontSize: '0.875rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    color: '#2563eb',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    marginTop: '0.5rem',
    marginBottom: '1rem',
    letterSpacing: '-0.025em',
  },
  heroDescription: {
    fontSize: '1.25rem',
    color: '#475569',
    maxWidth: '42rem',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    margin: '3rem auto',
    padding: '0 1rem',
    flexWrap: 'wrap',
    maxWidth: '1200px',
  },
  filterBtn: {
    padding: '0.625rem 1.25rem',
    borderRadius: '9999px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    color: '#475569',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  filterBtnActive: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    borderColor: '#0f172a',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f1f5f9',
    flexWrap: 'wrap', // Ensures graceful wrapping on small tablet layouts
  },
  contentCol: {
    flex: '1 1 500px',
    padding: '3.5rem',
  },
  imageCol: {
    flex: '1 1 500px',
    alignSelf: 'stretch',
    minHeight: '400px',
  },
  client: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#2563eb',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    lineHeight: '1.25',
    marginBottom: '1.5rem',
    letterSpacing: '-0.025em',
  },
  metricBlock: {
    backgroundColor: '#eff6ff',
    borderLeft: '4px solid #2563eb',
    padding: '0.75rem 1.25rem',
    marginBottom: '1.5rem',
    borderRadius: '0 0.5rem 0.5rem 0',
  },
  metricValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e3a8a',
  },
  metricLabel: {
    fontSize: '0.875rem',
    color: '#1e40af',
  },
  description: {
    fontSize: '1.05rem',
    color: '#475569',
    lineHeight: '1.7',
    marginBottom: '2rem',
  },
  tagsContainer: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    marginBottom: '2.5rem',
  },
  tag: {
    backgroundColor: '#f1f5f9',
    color: '#334155',
    padding: '0.375rem 0.875rem',
    borderRadius: '0.375rem',
    fontSize: '0.8125rem',
    fontWeight: '500',
  },
  cta: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    padding: '0.875rem 1.75rem',
    borderRadius: '0.5rem',
    fontSize: '0.9375rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  imageWrapper: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};

export default CaseStudies;