import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <>
      <section style={{ padding: '100px 0 60px', background: 'linear-gradient(135deg, #f8faf9 0%, #eaf1ed 100%)', textAlign: 'center', borderBottom: '1px solid #eef2f1' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: 'var(--teal)', fontWeight: '700', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>
            Why Choose Aurevia?
          </div>
          <h1 style={{ fontSize: '46px', fontFamily: '"Outfit", sans-serif', marginBottom: '20px', color: '#164344', lineHeight: '1.2' }}>
            Care That Makes a Difference
          </h1>
          <p style={{ fontSize: '18px', margin: '0 auto', color: '#4a5b5a', lineHeight: '1.7' }}>
            Individualised assessment, evidence-based physiotherapy, one-to-one care and a focus on functional recovery to help you get back to what you love.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            <div style={{ padding: '40px 30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f4f3', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(22, 67, 68, 0.08)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#eaf1ed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--teal)', fontSize: '24px' }}>
                <i className="fa-solid fa-user-doctor"></i>
              </div>
              <h4 style={{ fontSize: '20px', fontFamily: '"Outfit", sans-serif', color: '#164344', marginBottom: '10px' }}>Individualised Assessment</h4>
              <p style={{ color: '#74817f', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
                Tailored care that suits your unique needs, medical history, and lifestyle goals.
              </p>
            </div>

            <div style={{ padding: '40px 30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f4f3', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(22, 67, 68, 0.08)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#fdf7e8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--gold)', fontSize: '24px' }}>
                <i className="fa-solid fa-file-waveform"></i>
              </div>
              <h4 style={{ fontSize: '20px', fontFamily: '"Outfit", sans-serif', color: '#164344', marginBottom: '10px' }}>Evidence-Based Practice</h4>
              <p style={{ color: '#74817f', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
                We utilize the latest techniques and proven methods to ensure effective healing.
              </p>
            </div>

            <div style={{ padding: '40px 30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f4f3', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(22, 67, 68, 0.08)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#eaf1ed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--teal)', fontSize: '24px' }}>
                <i className="fa-solid fa-people-group"></i>
              </div>
              <h4 style={{ fontSize: '20px', fontFamily: '"Outfit", sans-serif', color: '#164344', marginBottom: '10px' }}>One-to-One Care</h4>
              <p style={{ color: '#74817f', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
                Focused, uninterrupted attention from your physiotherapist for faster and better outcomes.
              </p>
            </div>

            <div style={{ padding: '40px 30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f4f3', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(22, 67, 68, 0.08)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)'; }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#fdf7e8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: 'var(--gold)', fontSize: '24px' }}>
                <i className="fa-solid fa-chart-column"></i>
              </div>
              <h4 style={{ fontSize: '20px', fontFamily: '"Outfit", sans-serif', color: '#164344', marginBottom: '10px' }}>Functional Recovery</h4>
              <p style={{ color: '#74817f', lineHeight: '1.6', fontSize: '15px', margin: 0 }}>
                Helping you safely and sustainably return to your daily activities and sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#164344', color: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ color: 'var(--gold)', fontWeight: '700', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>
              Patient Testimonials
            </div>
            <h2 style={{ fontSize: '36px', fontFamily: '"Outfit", sans-serif', margin: 0 }}>
              Real People. Real Results.
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '18px', marginBottom: '15px' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px', color: '#eef2f1' }}>
                "I had severe back pain and after a few sessions at Aurevia, I feel so much better. The staff are professional and caring."
              </p>
              <strong style={{ display: 'block', fontSize: '15px', fontFamily: '"Outfit", sans-serif', color: '#fff' }}>— Ramesh K.</strong>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '18px', marginBottom: '15px' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px', color: '#eef2f1' }}>
                "Excellent care and personalized treatment. The therapists are very knowledgeable and supportive throughout the whole process."
              </p>
              <strong style={{ display: 'block', fontSize: '15px', fontFamily: '"Outfit", sans-serif', color: '#fff' }}>— Priya S.</strong>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '18px', marginBottom: '15px' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px', color: '#eef2f1' }}>
                "After my knee surgery, Aurevia helped me regain my mobility and confidence. Highly recommended to anyone in need of rehab!"
              </p>
              <strong style={{ display: 'block', fontSize: '15px', fontFamily: '"Outfit", sans-serif', color: '#fff' }}>— Mani V.</strong>
            </div>

          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8faf9', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', background: '#fff', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.04)', border: '1px solid #eef2f1' }}>
            <h2 style={{ fontSize: '32px', fontFamily: '"Outfit", sans-serif', color: '#164344', marginBottom: '15px' }}>Ready to Move Better?</h2>
            <p style={{ fontSize: '16px', color: '#74817f', marginBottom: '35px' }}>Start your journey towards a pain-free and healthier life today.</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+919629765870" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--teal)', color: '#fff', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', transition: 'background 0.3s ease' }}>
                <i className="fa-regular fa-calendar-check"></i> Book Appointment
              </a>
              <a href="tel:+919629765870" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#fff', color: '#164344', border: '1px solid #d4e0df', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', transition: 'all 0.3s ease' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#eaf1ed', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)' }}>
                  <i className="fa-solid fa-phone"></i>
                </div>
                9629765870
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;