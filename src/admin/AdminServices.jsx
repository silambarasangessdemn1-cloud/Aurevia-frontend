import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const AdminServices = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [status, setStatus] = useState('');
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchServices = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/services`);
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
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
    if (images.length === 0 && !editingId) return setStatus('Please select at least one image.');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (images.length > 0) {
      images.forEach(img => formData.append('images', img));
    }

    try {
      setStatus(editingId ? 'Updating...' : 'Uploading...');
      const url = editingId 
        ? `http://localhost:5001/api/services/${editingId}` 
        : `${API_BASE_URL}/services`;
        
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setTitle('');
        setDescription('');
        setImages([]);
        setImagePreviews([]);
        setEditingId(null);
        fetchServices();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleEdit = (service) => {
    setEditingId(service._id);
    setTitle(service.title);
    setDescription(service.description);
    setImagePreviews(service.imageUrls || (service.imageUrl ? [service.imageUrl] : []));
    setImages([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        const response = await fetch(`http://localhost:5001/api/services/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchServices();
        }
      } catch (error) {
        console.error('Failed to delete', error);
      }
    }
  };

  return (
    <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #edf0ea', maxWidth: '800px' }}>
      <div style={{ borderBottom: '1px solid #edf0ea', paddingBottom: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '24px', color: '#164344', fontFamily: '"Outfit", sans-serif', margin: 0 }}>
            {editingId ? 'Edit Service' : 'Add New Service'}
          </h2>
          <p style={{ color: '#74817f', fontSize: '14px', marginTop: '8px', margin: '8px 0 0 0' }}>Add a new physical therapy or rehabilitation service to your offerings.</p>
        </div>
        {editingId && (
          <button 
            type="button" 
            onClick={() => {
              setEditingId(null);
              setTitle('');
              setDescription('');
              setImages([]);
              setImagePreviews([]);
              setStatus('');
            }}
            style={{ background: '#f3f4f6', color: '#374151', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
          >
            Cancel Edit
          </button>
        )}
      </div>
      
      {(status === 'Uploading...' || status === 'Updating...') && <div style={{ background: '#eaf1ed', color: '#164344', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>{status}</div>}
      {status === 'success' && <div style={{ background: '#eaf3e9', color: '#2b7835', border: '1px solid #cfddd2', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>✅ Service successfully {editingId ? 'updated' : 'added'}!</div>}
      {status === 'error' && <div style={{ background: '#fdf2f2', color: '#b91c1c', border: '1px solid #f9dcdc', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>❌ Failed to add service. Check your database connection.</div>}
      {status === 'Please select an image.' && <div style={{ background: '#fdf2f2', color: '#b91c1c', border: '1px solid #f9dcdc', padding: '15px', borderRadius: '8px', marginBottom: '25px', fontWeight: 600 }}>{status}</div>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        <div>
          <label style={labelStyle}>Service Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            placeholder="e.g. Sports Massage"
            style={inputStyle}
          />
        </div>
        
        <div>
          <label style={labelStyle}>Short Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            rows="4"
            placeholder="Describe what the service entails..."
            style={{...inputStyle, resize: 'vertical'}}
          />
        </div>

        <div>
          <label style={labelStyle}>Service Icons / Images</label>
          <div style={{ background: '#f8faf9', border: '2px dashed #cfddd2', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
            <input 
              type="file" 
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                setImages(files);
                const previews = files.map(file => URL.createObjectURL(file));
                setImagePreviews(previews);
              }} 
              required={images.length === 0 && !editingId} 
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
                    title="Remove image"
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
            {editingId ? 'Update Service' : 'Save Service'}
          </button>
        </div>
      </form>

      <div style={{ marginTop: '50px', borderTop: '1px solid #edf0ea', paddingTop: '30px' }}>
        <h3 style={{ fontSize: '20px', color: '#164344', fontFamily: '"Outfit", sans-serif', marginBottom: '20px' }}>Manage Services</h3>
        {services.length === 0 ? (
          <p style={{ color: '#74817f' }}>No services found.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {services.map(service => (
              <div key={service._id} style={{ border: '1px solid #edf0ea', borderRadius: '8px', padding: '15px', background: '#f8faf9', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <img 
                    src={service.imageUrls && service.imageUrls.length > 0 ? service.imageUrls[0] : (service.imageUrl || '')} 
                    alt={service.title} 
                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }} 
                  />
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#164344' }}>{service.title}</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#74817f', marginBottom: '15px', flex: 1 }}>{service.description.substring(0, 80)}...</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                  <button 
                    onClick={() => handleEdit(service)}
                    style={{ flex: 1, background: '#eaf1ed', color: '#164344', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(service._id)}
                    style={{ flex: 1, background: '#fdf2f2', color: '#b91c1c', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminServices;
