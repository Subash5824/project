// src/components/CommentSection.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import '../styles/components.css';

const CommentSection = ({ comments, onAddComment }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmitComment = (commentData) => {
    const newComment = {
      id: Date.now(),
      ...commentData,
      date: new Date().toLocaleDateString(),
      likes: 0
    };
    onAddComment(newComment);
    setShowForm(false);
  };

  return (
    <section className="comment-section">
      <div className="comment-header">
        <h3 className="comment-title">
          Comments ({comments.length})
        </h3>
        <button 
          className="ibm-button primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Comment'}
        </button>
      </div>

      {showForm && (
        <CommentForm onSubmit={handleSubmitComment} />
      )}

      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="no-comments">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-header">
                <div className="comment-author">
                  <strong>{comment.author}</strong>
                  <span className="comment-date">{comment.date}</span>
                </div>
              </div>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-actions">
                <button className="action-btn">Like ({comment.likes})</button>
                <button className="action-btn">Reply</button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;