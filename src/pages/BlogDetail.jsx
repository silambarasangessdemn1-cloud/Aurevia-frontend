import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div style={{ padding: '150px 0', textAlign: 'center' }}>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ padding: '150px 0', textAlign: 'center' }}>
        <h2>Article not found</h2>
        <Link to="/blog" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 600 }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article style={{ padding: '120px 0 80px', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/blog" style={{ display: 'inline-block', marginBottom: '30px', color: '#74817f', textDecoration: 'none', fontWeight: 600 }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Insights
        </Link>
        
        <div style={{ marginBottom: '40px' }}>
          <div style={{ color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', fontWeight: 700, marginBottom: '15px' }}>
            Aurevia Insights • {new Date(blog.createdAt).toLocaleDateString()}
          </div>
          <h1 style={{ fontSize: '42px', color: '#164344', fontFamily: '"Outfit", sans-serif', margin: '0 0 20px 0', lineHeight: 1.2 }}>
            {blog.title}
          </h1>
        </div>

        {blog.imageUrls && blog.imageUrls.length > 0 && (
          <div style={{ marginBottom: '50px' }}>
            <img 
              src={blog.imageUrls[0]} 
              alt={blog.title} 
              style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', borderRadius: '16px' }} 
            />
          </div>
        )}

        <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#333' }}>
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
          ))}
        </div>

        {blog.imageUrls && blog.imageUrls.length > 1 && (
          <div style={{ marginTop: '50px', borderTop: '1px solid #edf0ea', paddingTop: '40px' }}>
            <h3 style={{ fontSize: '24px', color: '#164344', fontFamily: '"Outfit", sans-serif', marginBottom: '25px' }}>More Images</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {blog.imageUrls.slice(1).map((imgUrl, index) => (
                <img 
                  key={index}
                  src={imgUrl} 
                  alt={`${blog.title} - ${index + 1}`} 
                  style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogDetail;
