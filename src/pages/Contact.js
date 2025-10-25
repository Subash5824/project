// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/components.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    department: ''
  });

  const departments = [
    'General Inquiry',
    'Technical Support',
    'Partnership Opportunities',
    'Careers',
    'Press & Media'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake submission - in real app, this would connect to a backend
    alert('Thank you for your message! This is a demo - no actual message was sent.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      department: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      content: 'IBM Corporation\n1 New Orchard Road\nArmonk, New York 10504'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+1 (800) 426-4968\nMon - Fri, 9:00 AM - 6:00 PM EST'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      content: 'frontend-engineering@ibm.com\nWe respond within 24 hours'
    },
    {
      icon: '🌐',
      title: 'Connect Online',
      content: 'GitHub: @ibm\nTwitter: @IBM\nLinkedIn: IBM Corporation'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Contact IBM Frontend Engineering</h1>
        <p className="page-subtitle">
          Get in touch with our team. We'd love to hear from you.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our work? Interested in collaboration? 
              Looking to join our team? Reach out through any of these channels.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <p style={{whiteSpace: 'pre-line'}}>{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="office-hours">
              <h3>Global Offices</h3>
              <ul>
                <li>🇺🇸 Armonk, New York (Headquarters)</li>
                <li>🇮🇪 Dublin, Ireland</li>
                <li>🇮🇳 Bangalore, India</li>
                <li>🇨🇦 Toronto, Canada</li>
                <li>🇬🇧 London, United Kingdom</li>
              </ul>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="department" className="form-label">Department</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a department</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Brief subject line"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell us about your inquiry..."
                  rows="6"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="ibm-button primary large">
                  Send Message
                </button>
              </div>

              <div className="form-note">
                <p>
                  <small>
                    This is a demonstration contact form. No actual messages will be sent or stored.
                    In a real application, this would connect to a backend service.
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;