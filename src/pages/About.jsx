import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div className="section-label">ABOUT AUREVIA</div>
          <h1>Your Partner in Recovery &amp; Better Movement</h1>
          <p>
            We are dedicated to helping you overcome physical challenges, manage pain, 
            and regain the confidence to live a full, active life.
          </p>
        </div>
      </section>

      <section className="about-detailed section">
        <div className="container">
          <div className="about-detailed-grid">
            <div className="about-detailed-content">
              <div className="section-label">OUR STORY</div>
              <h2>Setting a Higher Standard in Physiotherapy</h2>
              <p className="lead-text">
                At Aurevia Physiotherapy & Rehabilitation Centre, we believe that every patient 
                deserves personalized, uninterrupted attention.
              </p>
              <p>
                Founded on the principles of evidence-based practice and compassionate care, 
                our clinic was established to provide a sanctuary for healing. We recognize that 
                pain and injury can be incredibly isolating and frustrating. That's why our 
                approach goes beyond just treating the symptoms; we dig deep to find the root 
                cause of your discomfort.
              </p>
              <p>
                From the moment you walk through our doors, you are treated as an individual, 
                not just a diagnosis. Our state-of-the-art facility is equipped with modern 
                rehabilitation tools, and our highly trained specialists work closely with you 
                to design a roadmap to recovery.
              </p>
              
              <div className="about-stats">
                <div className="stat-box">
                  <h3>10+</h3>
                  <span>Years Experience</span>
                </div>
                <div className="stat-box">
                  <h3>5k+</h3>
                  <span>Patients Recovered</span>
                </div>
                <div className="stat-box">
                  <h3>100%</h3>
                  <span>Personalized Care</span>
                </div>
              </div>
            </div>
            
            <div className="about-detailed-images">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=85" alt="Physiotherapist assisting patient" className="main-img" />
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=85" alt="Aurevia Clinic Interior" className="secondary-img" />
              <div className="experience-badge">
                <i className="fa-solid fa-award"></i>
                <span>Certified Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-premium section" id="why">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-label">WHY CHOOSE AUREVIA?</div>
            <h2 className="section-title">Care That Makes a Difference</h2>
            <p className="section-subtitle">We are committed to delivering the highest quality of rehabilitative care through focused, individualized treatment plans.</p>
          </div>
          
          <div className="why-premium-grid">
            <div className="why-premium-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h4>Individualised Assessment</h4>
              <p>We don't use cookie-cutter programs. Every treatment plan is uniquely tailored to your specific body, injury, and personal lifestyle goals.</p>
            </div>
            
            <div className="why-premium-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-file-waveform"></i>
              </div>
              <h4>Evidence-Based Practice</h4>
              <p>Our therapies are grounded in the latest scientific research, ensuring you receive the most effective and proven clinical treatments available.</p>
            </div>
            
            <div className="why-premium-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <h4>One-to-One Attention</h4>
              <p>We guarantee dedicated, undivided time with your physiotherapist during every session to ensure maximum progress and faster outcomes.</p>
            </div>
            
            <div className="why-premium-card">
              <div className="why-icon-box">
                <i className="fa-solid fa-person-running"></i>
              </div>
              <h4>Functional Recovery</h4>
              <p>Our ultimate goal isn't just pain relief—it's restoring your functional ability so you can return to the sports, work, and activities you love.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Ready to Start Your Journey?</h2>
              <p>Our team is here to support you every step of the way. Book a consultation today.</p>
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
    </>
  );
};

export default About;