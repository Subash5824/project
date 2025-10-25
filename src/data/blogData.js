// src/data/blogData.js
export const blogPosts = [
  {
    id: 1,
    title: "React 18 Features and Best Practices",
    author: "Sarah Johnson",
    date: "December 15, 2023",
    readTime: "8 min read",
    excerpt: "Explore the latest features in React 18 including concurrent rendering, automatic batching, and new hooks that revolutionize how we build modern web applications. Learn how to leverage these features in your enterprise applications for better performance and user experience.",
    tags: ["React", "JavaScript", "Frontend"],
    comments: [
      {
        id: 1,
        author: "Mike Chen",
        date: "December 16, 2023",
        text: "Great overview of React 18! The concurrent features are game-changing for performance.",
        likes: 5
      },
      {
        id: 2,
        author: "Priya Patel",
        date: "December 17, 2023",
        text: "Thanks for the detailed explanation. The automatic batching example was particularly helpful.",
        likes: 3
      }
    ]
  },
  {
    id: 2,
    title: "Building Scalable CSS Architecture",
    author: "David Kim",
    date: "December 10, 2023",
    readTime: "12 min read",
    excerpt: "Learn how to create maintainable and scalable CSS architectures using modern methodologies like BEM, CSS-in-JS, and design tokens. Discover how IBM's design system handles complex theming and accessibility requirements across multiple products.",
    tags: ["CSS", "Architecture", "Design Systems"],
    comments: [
      {
        id: 1,
        author: "Alex Rivera",
        date: "December 11, 2023",
        text: "This is exactly what our team needed. Implementing design tokens has improved our consistency dramatically.",
        likes: 7
      }
    ]
  },
  {
    id: 3,
    title: "Web Performance Optimization at Scale",
    author: "Maria Rodriguez",
    date: "December 5, 2023",
    readTime: "10 min read",
    excerpt: "Discover advanced techniques for optimizing web performance in large-scale applications. From code splitting strategies to image optimization and caching mechanisms, learn how IBM achieves sub-second load times globally.",
    tags: ["Performance", "Optimization", "Web Vitals"],
    comments: []
  }
];