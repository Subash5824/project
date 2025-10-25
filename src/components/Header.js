// src/components/Header.js
import React from 'react';
import '../styles/components.css';

const Header = ({ currentPage, onNavigate }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'articles', label: 'Articles' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' }
  ];

  return (
    <header className="ibm-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="ibm-logo">
            <span className="ibm-text">IBM</span>
          </div>
          <h1 className="header-title">Frontend Engineering Blog</h1>
        </div>
        <nav className="header-nav">
          {navItems.map(item => (
            <button
              key={item.key}
              className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;