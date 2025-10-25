// src/pages/Articles.js
import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import CommentSection from '../components/CommentSection';
import { blogPosts } from '../data/blogData';
import '../styles/components.css';

const Articles = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'React', 'CSS', 'JavaScript', 'Performance', 'Architecture'];

  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.tags.includes(filter));

  const addComment = (postId, comment) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">All Articles</h1>
        <p className="page-subtitle">
          Deep dives, tutorials, and insights from IBM's frontend engineering team
        </p>
      </div>

      <div className="filter-section">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="articles-list">
        {filteredPosts.map(post => (
          <div key={post.id} className="blog-container">
            <BlogPost post={post} />
            <CommentSection 
              comments={post.comments}
              onAddComment={(comment) => addComment(post.id, comment)}
            />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="no-results">
          <h3>No articles found</h3>
          <p>Try selecting a different category</p>
        </div>
      )}
    </div>
  );
};

export default Articles;