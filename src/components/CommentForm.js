// src/components/CommentForm.js
import React, { useState } from 'react';
import '../styles/components.css';

const CommentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    text: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.author.trim() && formData.text.trim()) {
      onSubmit(formData);
      setFormData({ author: '', text: '' });
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author" className="form-label">Name</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="form-input"
          placeholder="Your name"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="text" className="form-label">Comment</label>
        <textarea
          id="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          className="form-textarea"
          placeholder="Write your comment here..."
          rows="4"
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="submit" className="ibm-button primary">
          Post Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;