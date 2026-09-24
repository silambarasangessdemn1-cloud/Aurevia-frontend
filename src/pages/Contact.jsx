import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello, I have an inquiry.%0A%0A*Name*: ${formState.name}%0A*Email*: ${formState.email}%0A*Phone*: ${formState.phone}%0A*Message*: ${formState.message}`;
    const whatsappUrl = `https://wa.me/919629765870?text=${text}`;
    window.open(whatsappUrl, '_blank');
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="section-label">CONTACT AUREVIA</div>
          <h1>Get in Touch with Our Experts</h1>
          <p>
            Whether you need to schedule an appointment, inquire about our services, 
            or ask a specific health question, our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="contact-premium-section section">
        <div className="container">
          <div className="contact-premium-grid">
            
            {/* Left: Contact Info & Hours */}
            <div className="contact-premium-info">
              <h2>We're Here to Help</h2>
              <p className="contact-subtitle">
                Don't hesitate to reach out. We aim to respond to all inquiries within 24 hours during business days.
              </p>
              
              <div className="contact-info-list">
                <div className="info-item">
                  <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="info-text">
                    <h4>Clinic Location</h4>
                    <p>Thoothukudi, Tamil Nadu<br />India</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                  <div className="info-text">
                    <h4>Call Us Directly</h4>
                    <p><a href="tel:+919629765870">+91 96297 65870</a></p>
                    <small>Available during clinic hours</small>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><i className="fa-regular fa-envelope"></i></div>
                  <div className="info-text">
                    <h4>Email Support</h4>
                    <p><a href="mailto:info@aureviaphysioclinic.com">info@aureviaphysioclinic.com</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-hours-box">
                <h4><i className="fa-regular fa-clock"></i> Operating Hours</h4>
                <ul>
                  <li><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
                  <li><span>Saturday</span> <span>9:00 AM - 8:00 PM</span></li>
                  <li><span>Sunday</span> <span className="closed">Closed</span></li>
                </ul>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-premium-form-wrapper">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we will contact you shortly.</p>
              </div>
              
              <form className="contact-premium-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formState.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      value={formState.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 XXXXX XXXXX" 
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help you? *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Briefly describe your condition or inquiry..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;