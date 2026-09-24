import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="section-label">OUR SERVICES</div>
          <h1>Physiotherapy Care for Every Need</h1>
          <p>
            At Aurevia, we provide a wide range of specialized physiotherapy and rehabilitation services. 
            Whether you are dealing with chronic pain, recovering from an injury, or rehabilitating after surgery, 
            our expert team is here to guide you toward a full, active life.
          </p>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-head">
            <div className="section-label">COMPREHENSIVE CARE</div>
            <h2 className="section-title">Explore Our Specialized Treatments</h2>
          </div>
          
          <div className="premium-services-grid">
            {loading ? (
              <div className="loading-spinner">Loading services...</div>
            ) : services.length > 0 ? (
              services.map((service) => (
                <div className="premium-service-card" key={service._id}>
                  <div className="psc-image-wrapper">
                    <img 
                      src={service.imageUrls && service.imageUrls.length > 0 ? service.imageUrls[0] : (service.imageUrl || '')} 
                      alt={service.title} 
                      className="psc-image"
                    />
                    <div className="psc-overlay">
                      <Link to="/contact" className="psc-btn">Book Consultation</Link>
                    </div>
                  </div>
                  <div className="psc-content">
                    <h3 className="psc-title">{service.title}</h3>
                    <p className="psc-desc">{service.description}</p>
                    <div className="psc-footer">
                      <Link to="/contact" className="psc-link">
                        Learn More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#74817f' }}>No services available at the moment.</p>
            )}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="section-head">
            <div className="section-label">HOW IT WORKS</div>
            <h2 className="section-title">Your Journey to Better Movement</h2>
          </div>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">01</div>
              <div className="process-icon"><i className="fa-regular fa-calendar-check"></i></div>
              <h4>Book an Appointment</h4>
              <p>Schedule your initial consultation at a time that works best for you.</p>
            </div>
            <div className="process-item">
              <div className="process-number">02</div>
              <div className="process-icon"><i className="fa-regular fa-clipboard"></i></div>
              <h4>Detailed Assessment</h4>
              <p>Our expert physiotherapist thoroughly evaluates your condition and medical history.</p>
            </div>
            <div className="process-item">
              <div className="process-number">03</div>
              <div className="process-icon"><i className="fa-solid fa-bed"></i></div>
              <h4>Personalized Treatment</h4>
              <p>Receive a custom, targeted treatment plan designed specifically for your goals.</p>
            </div>
            <div className="process-item">
              <div className="process-number">04</div>
              <div className="process-icon"><i className="fa-solid fa-person-running"></i></div>
              <h4>Recover & Move Better</h4>
              <p>Follow the guided protocol to regain strength, mobility, and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Ready to Start Your Recovery?</h2>
              <p>Don't let pain hold you back. Reach out today to schedule your consultation.</p>
            </div>
            <div className="cta-right">
              <Link to="/contact" className="cta-btn">
                <i className="fa-regular fa-calendar"></i>
                &nbsp; Book Your Appointment
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .premium-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
          margin-top: 50px;
        }
        
        .premium-service-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(22, 67, 68, 0.08);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid #f0f4f3;
          display: flex;
          flex-direction: column;
        }

        .premium-service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(22, 67, 68, 0.15);
        }

        .psc-image-wrapper {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
        }

        .psc-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .premium-service-card:hover .psc-image {
          transform: scale(1.05);
        }

        .psc-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(22, 67, 68, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .premium-service-card:hover .psc-overlay {
          opacity: 1;
        }

        .psc-btn {
          background: var(--gold);
          color: #fff;
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          text-decoration: none;
          transform: translateY(20px);
          transition: all 0.4s ease;
          opacity: 0;
        }

        .premium-service-card:hover .psc-btn {
          transform: translateY(0);
          opacity: 1;
        }

        .psc-btn:hover {
          background: #fff;
          color: var(--gold);
        }

        .psc-content {
          padding: 35px 30px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .psc-title {
          font-family: "Outfit", sans-serif;
          font-size: 24px;
          color: #164344;
          margin: 0 0 15px 0;
          font-weight: 700;
          line-height: 1.3;
        }

        .psc-desc {
          color: #74817f;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 25px 0;
          flex: 1;
        }

        .psc-footer {
          border-top: 1px solid #f0f4f3;
          padding-top: 20px;
          margin-top: auto;
        }

        .psc-link {
          color: var(--teal);
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .psc-link i {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        .psc-link:hover {
          color: var(--gold);
        }

        .psc-link:hover i {
          transform: translateX(5px);
        }

        .loading-spinner {
          text-align: center;
          grid-column: 1 / -1;
          padding: 60px;
          font-size: 18px;
          color: #74817f;
        }
        
        @media (max-width: 768px) {
          .premium-services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </>
  );
};

export default Services;