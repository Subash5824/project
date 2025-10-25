// src/pages/About.js
import React from 'react';
import '../styles/components.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Senior Frontend Architect',
      bio: '10+ years experience in React ecosystem. Lead architect for IBM Cloud UI.',
      expertise: ['React', 'TypeScript', 'System Design']
    },
    {
      name: 'David Kim',
      role: 'CSS & Design Systems Lead',
      bio: 'Specialized in scalable CSS architectures and design token systems.',
      expertise: ['CSS', 'Design Systems', 'Accessibility']
    },
    {
      name: 'Maria Rodriguez',
      role: 'Performance Engineering',
      bio: 'Focused on web performance optimization and Core Web Vitals.',
      expertise: ['Performance', 'Web Vitals', 'Optimization']
    },
    {
      name: 'Alex Chen',
      role: 'React Native Specialist',
      bio: 'Building cross-platform mobile experiences with React Native.',
      expertise: ['React Native', 'Mobile', 'Animation']
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About IBM Frontend Engineering</h1>
        <p className="page-subtitle">
          Driving innovation in user interface development at scale
        </p>
      </div>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At IBM Frontend Engineering, we're committed to pushing the boundaries 
            of what's possible in web development. We build enterprise-grade 
            applications that serve millions of users worldwide while maintaining 
            exceptional performance, accessibility, and developer experience.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <h3>Enterprise React Development</h3>
              <p>Building scalable React applications with TypeScript and modern tooling</p>
            </div>
            <div className="capability-card">
              <h3>Design Systems</h3>
              <p>Creating consistent, accessible UI components for IBM's product suite</p>
            </div>
            <div className="capability-card">
              <h3>Performance Optimization</h3>
              <p>Ensuring lightning-fast load times and smooth interactions</p>
            </div>
            <div className="capability-card">
              <h3>Open Source Contributions</h3>
              <p>Active contributors to React, Webpack, and other key frontend technologies</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-card-header">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                </div>
                <p className="team-bio">{member.bio}</p>
                <div className="team-expertise">
                  {member.expertise.map(skill => (
                    <span key={skill} className="expertise-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section stats-section">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Components Built</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Users Served Daily</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Open Source Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;