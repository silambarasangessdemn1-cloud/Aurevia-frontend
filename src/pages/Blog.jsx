import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blogs`);
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="section-label">AUREVIA INSIGHTS</div>
          <h1>Helpful Tips for Better Movement</h1>
          <p>Simple, practical information about movement, recovery and physiotherapy care.</p>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="container">
          <div className="section-head">
            <div className="section-label">AUREVIA INSIGHTS</div>
            <h2 className="section-title">Helpful Tips for Better Movement</h2>
            <p className="blog-intro">
              Simple, practical information to help you understand movement, recovery and physiotherapy care.
            </p>
          </div>

          <div className="blog-grid">
            {loading ? (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Loading articles...</p>
            ) : blogs.length > 0 ? (
              blogs.map((blog) => (
                <article className="blog-card" key={blog._id}>
                  <div className="blog-image">
                    <img alt={blog.title} src={blog.imageUrls && blog.imageUrls.length > 0 ? blog.imageUrls[0] : (blog.imageUrl || '')} />
                    <span className="blog-tag">Insights</span>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <i className="fa-regular fa-calendar"></i> {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.content.substring(0, 100)}...</p>
                    <Link to={`/blog/${blog._id}`} className="blog-read" style={{ textDecoration: 'none', display: 'inline-block' }}>
                      Read Article <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#74817f' }}>No articles available at the moment.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;