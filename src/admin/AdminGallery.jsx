import React, { useState, useEffect } from 'react';

const AdminGallery = () => {
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [status, setStatus] = useState('');
  const [galleryItems, setGalleryItems] = useState([]);

  const fetchGallery = async () => {
    try {
      const res = await fetch('http://localhost:5001/api/gallery');
      if (res.ok) {
        const data = await res.json();
        setGalleryItems(data);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const removeImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
    setImagePreviews(imagePreviews.filter((_, index) => index !== indexToRemove));
  };

  const inputStyle = {
    width: '100%', 
    padding: '14px 16px', 
    borderRadius: '8px', 
    border: '1px solid #e1e6e4', 
    background: '#f8faf9',
    fontSize: '15px',
    color: '#333',
    fontFamily: '"Outfit", sans-serif',
    outline: 'none',
    transition: 'border 0.3s ease'
  };

  const labelStyle = {
    display: 'block', 
    marginBottom: '8px', 
    fontWeight: '600', 
    color: '#164344',
    fontSize: '14px'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (images.length === 0) return setStatus('Please select at least one image.');

    const formData = new FormData();
    formData.append('title', title);
    images.forEach(img => formData.append('images', img));

    try {
      setStatus('Uploading...');
      const response = await fetch('http://localhost:5001/api/gallery', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setTitle('');
        setImages([]);
        setImagePreviews([]);
        fetchGallery();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        const response = await fetch(`http://localhost:5001/api/gallery/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchGallery();
        }
      } catch (error) {
        console.error('Failed to delete', error);
      }
    }
  };

  return (
    <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #edf0ea', maxWidth: '800px' }}>
      <div style={{ borderBottom: '1px solid #edf0ea', paddingBottom: '20px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', color: '#164344', fontFamily: '"Outfit", sans-serif', margin: 0 }}>Add Gallery Image</h2>
        <p style={{ color: '#74817f', fontSize: '14px', marginTop: '8px', margin: '8px 0 0 0' }}>Upload photos of your clinic, treatments, and rehabilitation equipment.</p>
      </div>
      
      {status === 'Uploading...' && <div style={{ background: '#eaf1ed', color: '#164344', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>Uploading images...</div>}
      {status === 'success' && <div style={{ background: '#eaf3e9', color: '#2b7835', border: '1px solid #cfddd2', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>✅ Images added to gallery!</div>}
      {status === 'error' && <div style={{ background: '#fdf2f2', color: '#b91c1c', border: '1px solid #f9dcdc', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>❌ Failed to upload image. Check your database connection.</div>}
      {status === 'Please select at least one image.' && <div style={{ background: '#fdf2f2', color: '#b91c1c', border: '1px solid #f9dcdc', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>{status}</div>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <div>
          <label style={labelStyle}>Image Caption / Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            placeholder="e.g. Front Reception Desk"
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Image Files</label>
          <div style={{ background: '#f8faf9', border: '2px dashed #cfddd2', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <input 
              type="file" 
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                setImages(files);
                setImagePreviews(files.map(file => URL.createObjectURL(file)));
              }} 
              required={images.length === 0} 
              style={{ width: '100%', cursor: 'pointer' }}
            />
          </div>
          {imagePreviews.length > 0 && (
            <div style={{ display: 'flex', gap: '15px', marginTop: '15px', flexWrap: 'wrap' }}>
              {imagePreviews.map((preview, index) => (
                <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                  <img 
                    src={preview} 
                    alt={`Preview ${index}`} 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e1e6e4' }} 
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      background: '#fff',
                      border: '1px solid #e1e6e4',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#b91c1c',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      padding: 0,
                      lineHeight: '1'
                    }}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ borderTop: '1px solid #edf0ea', paddingTop: '25px', marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            type="submit" 
            style={{ background: 'var(--teal)', color: '#fff', padding: '14px 28px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '15px', fontWeight: '600', transition: 'all 0.3s ease' }}
            onMouseOver={(e) => e.target.style.background = '#113536'}
            onMouseOut={(e) => e.target.style.background = 'var(--teal)'}
          >
            Add to Gallery
          </button>
        </div>
      </form>

      <div style={{ marginTop: '50px', borderTop: '1px solid #edf0ea', paddingTop: '30px' }}>
        <h3 style={{ fontSize: '20px', color: '#164344', fontFamily: '"Outfit", sans-serif', marginBottom: '20px' }}>Manage Gallery</h3>
        {galleryItems.length === 0 ? (
          <p style={{ color: '#74817f' }}>No images found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {galleryItems.map(item => (
              <div key={item._id} style={{ border: '1px solid #edf0ea', borderRadius: '8px', padding: '10px', background: '#f8faf9', display: 'flex', flexDirection: 'column' }}>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} 
                />
                <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#164344', wordBreak: 'break-word' }}>{item.title}</h4>
                <button 
                  onClick={() => handleDelete(item._id)}
                  style={{ marginTop: 'auto', background: '#fdf2f2', color: '#b91c1c', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, width: '100%' }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminGallery;
