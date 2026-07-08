import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Architecture',
      date: 'July 8, 2026',
      summary: 'Explore how artificial intelligence is reshaping the way large organizations structure their internal tech ecosystems.',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Why Design Thinking Matters More Than Ever',
      date: 'June 25, 2026',
      summary: 'A deep dive into integrating human-centric design philosophies into rigorous software development pipelines.',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Scaling Cloud Infrastructure for 2027',
      date: 'May 12, 2026',
      summary: 'Best practices for managing costs while maintaining high availability and zero downtime in modern cloud environments.',
      category: 'Engineering'
    },
    {
      id: 4,
      title: 'The ROI of Accessible Web Design',
      date: 'April 30, 2026',
      summary: 'Why building for everyone isn,t just a moral imperative, but a smart business strategy that drives growth.',
      category: 'Design'
    }
  ];

  return (
    <div className="blog-page-wrapper">
      <div className="blog-hero">
        <h1>Latest Insights</h1>
        <p>Discover our thoughts on technology, design, and engineering.</p>
      </div>

      <div className="blog-container">
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-category">{post.category}</div>
              <h2>{post.title}</h2>
              <div className="blog-card-date">{post.date}</div>
              <p>{post.summary}</p>
              <button className="blog-read-more">Read Article <i className="fas fa-arrow-right"></i></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
