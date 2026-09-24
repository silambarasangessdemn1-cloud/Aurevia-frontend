import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <div className="logo">
              <img alt="Aurevia Logo" src="https://uploads.onecompiler.io/44h79n8m3/1789648780007/fe4589a4-ab99-42f1-a612-5ff6ac666048-removebg-preview.png"/>
            </div>
            <p className="footer-description">
              Personalized physiotherapy and rehabilitation care
              helping you move better and live better.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/specialities">Specialities</Link>
              <Link to="/why-choose-us">Why Choose Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h4>Our Services</h4>
            <div className="footer-links">
              <Link to="/services">Pain Management</Link>
              <Link to="/services">Orthopaedic Rehabilitation</Link>
              <Link to="/services">Sports Injury Rehabilitation</Link>
              <Link to="/services">Post-Operative Rehabilitation</Link>
              <Link to="/services">Neurological Rehabilitation</Link>
              <Link to="/services">Women's Health Physiotherapy</Link>
            </div>
          </div>
          <div>
            <h4>Contact Info</h4>
            <div className="contact-line">
              <i className="fa-solid fa-location-dot"></i>
              <span>Thoothukudi, Tamil Nadu, India</span>
            </div>
            <div className="contact-line">
              <i className="fa-regular fa-envelope"></i>
              <span>info@aureviaphysioclinic.com</span>
            </div>
            <div className="contact-line">
              <i className="fa-regular fa-clock"></i>
              <span>
                Mon - Sat: 9 AM - 8 PM<br/>
                Sunday: Closed
              </span>
            </div>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Aurevia Physiotherapy &amp; Rehabilitation Centre.
            All Rights Reserved.
          </span>
          <span>
            ✦ Move Better. Live Better.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
