import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/gallery');
        if (response.ok) {
          const data = await response.json();
          setGalleryItems(data);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <section className="page-hero" style={{ padding: '100px 0 60px', background: '#f8faf9', textAlign: 'center', borderBottom: '1px solid #eef2f1' }}>
        <div className="container page-hero-inner">
          <div className="section-label" style={{ color: 'var(--teal)', fontWeight: '700', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>
            Our Gallery
          </div>
          <h1 style={{ fontSize: '42px', fontFamily: '"Outfit", sans-serif', marginBottom: '20px', color: '#164344' }}>
            A Look Inside Aurevia
          </h1>
          <p style={{ fontSize: '18px', maxWidth: '650px', margin: '0 auto', color: '#74817f', lineHeight: '1.7' }}>
            Explore our state-of-the-art clinic, dedicated treatment spaces, and comprehensive rehabilitation environment designed for your comfort and recovery.
          </p>
        </div>
      </section>

      <section className="gallery" id="gallery" style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', gridAutoRows: '300px' }}>
            {loading ? (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '60px', fontSize: '18px', color: '#74817f' }}>Loading gallery images...</p>
            ) : galleryItems.length > 0 ? (
              galleryItems.map((item, index) => {
                // Alternating span logic for masonry feel
                const isLarge = index % 5 === 0 || index % 6 === 0;
                
                return (
                  <div 
                    key={item._id}
                    style={{
                      position: 'relative',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
                      gridRow: isLarge ? 'span 2' : 'span 1',
                      cursor: 'pointer',
                      border: '1px solid #f1f4f3',
                      background: '#fff'
                    }}
                    className="medical-gallery-card"
                  >
                    <img 
                      alt={item.title} 
                      src={item.imageUrl} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="mg-image"
                    />
                    <div 
                      className="mg-overlay"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
                        padding: '50px 25px 20px',
                        color: '#164344',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        transition: 'all 0.3s ease',
                        transform: 'translateY(20px)',
                        opacity: 0 // Hidden by default
                      }}
                    >
                      <small style={{ color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>{item.category}</small>
                      <strong style={{ fontSize: '20px', fontFamily: '"Outfit", sans-serif', color: '#164344' }}>{item.title}</strong>
                    </div>
                  </div>
                );
              })
            ) : (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '60px', background: '#f8faf9', borderRadius: '12px', border: '1px dashed #d4e0df' }}>
                 <i className="fa-regular fa-image" style={{ fontSize: '40px', color: '#a8c0bf', marginBottom: '15px' }}></i>
                 <p style={{ color: '#74817f', fontSize: '18px', margin: 0 }}>No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .medical-gallery-card:hover .mg-image {
          transform: scale(1.05);
        }
        .medical-gallery-card:hover .mg-overlay {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}} />
    </>
  );
};

export default Gallery;