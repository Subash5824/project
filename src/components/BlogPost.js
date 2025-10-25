
import React from 'react';
import '../styles/components.css';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{post.date}</span>
          <span className="read-time">{post.readTime}</span>
        </div>
      </div>
      
      <div className="post-content">
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;