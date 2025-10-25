// src/pages/Home.js
import React from 'react';
import '../styles/components.css';

const Home = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to IBM Frontend Engineering</h1>
          <p className="hero-subtitle">
            Exploring the latest in web technologies, React development, 
            and cutting-edge frontend solutions.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Published Articles</p>
            </div>
            <div className="stat">
              <h3>10k+</h3>
              <p>Community Members</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Expert Authors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-posts">
        <h2 className="section-title">Featured Articles</h2>
        <div className="posts-grid">
          <div className="post-card">
            <div className="post-card-header">
              <span className="post-category">React</span>
              <span className="post-date">Dec 15, 2023</span>
            </div>
            <h3 className="post-card-title">React 18 Concurrent Features Deep Dive</h3>
            <p className="post-card-excerpt">
              Explore the revolutionary concurrent features in React 18 that 
              are changing how we think about performance and user experience.
            </p>
            <div className="post-card-author">
              <span>By Sarah Johnson</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className="post-card">
            <div className="post-card-header">
              <span className="post-category">CSS</span>
              <span className="post-date">Dec 10, 2023</span>
            </div>
            <h3 className="post-card-title">Building Scalable Design Systems</h3>
            <p className="post-card-excerpt">
              Learn how IBM's design system team creates scalable, maintainable 
              CSS architectures for enterprise applications.
            </p>
            <div className="post-card-author">
              <span>By David Kim</span>
              <span>12 min read</span>
            </div>
          </div>

          <div className="post-card">
            <div className="post-card-header">
              <span className="post-category">Performance</span>
              <span className="post-date">Dec 5, 2023</span>
            </div>
            <h3 className="post-card-title">Web Vitals Optimization Strategies</h3>
            <p className="post-card-excerpt">
              Practical techniques to improve Core Web Vitals scores in 
              large-scale React applications.
            </p>
            <div className="post-card-author">
              <span>By Maria Rodriguez</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Get the latest articles and insights delivered to your inbox.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="ibm-button primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;