import React from 'react';
import { Link } from 'react-router-dom';

const Specialities = () => {
  return (
    <>
      <section style={{ padding: '100px 0 60px', background: 'linear-gradient(135deg, #f8faf9 0%, #eaf1ed 100%)', textAlign: 'center', borderBottom: '1px solid #eef2f1' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ color: 'var(--teal)', fontWeight: '700', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>
            Conditions We Treat
          </div>
          <h1 style={{ fontSize: '46px', fontFamily: '"Outfit", sans-serif', marginBottom: '20px', color: '#164344', lineHeight: '1.2' }}>
            Helping You Overcome Everyday Challenges
          </h1>
          <p style={{ fontSize: '18px', margin: '0 auto', color: '#4a5b5a', lineHeight: '1.7' }}>
            Aurevia supports patients with common pain conditions, sports injuries, and complex rehabilitation needs. We are dedicated to restoring your mobility.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
            
            {/* Condition Cards */}
            {[
              { icon: 'fa-person', title: 'Back Pain' },
              { icon: 'fa-person-walking', title: 'Neck Pain' },
              { icon: 'fa-person-running', title: 'Knee Pain' },
              { icon: 'fa-person', title: 'Shoulder Pain' },
              { icon: 'fa-bone', title: 'Arthritis' },
              { icon: 'fa-person-running', title: 'Sports Injuries' },
              { icon: 'fa-brain', title: 'Stroke Recovery' }
            ].map((condition, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '35px 25px', 
                  background: '#fff', 
                  borderRadius: '16px', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.03)', 
                  border: '1px solid #f1f4f3', 
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease' 
                }} 
                onMouseOver={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-5px)'; 
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(22, 67, 68, 0.08)'; 
                  e.currentTarget.style.borderColor = 'var(--teal)';
                }} 
                onMouseOut={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.03)'; 
                  e.currentTarget.style.borderColor = '#f1f4f3';
                }}
              >
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#eaf1ed', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'var(--teal)', fontSize: '28px' }}>
                  <i className={`fa-solid ${condition.icon}`}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontFamily: '"Outfit", sans-serif', color: '#164344', margin: 0 }}>
                  {condition.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f8faf9', borderTop: '1px solid #eef2f1' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ color: 'var(--teal)', fontWeight: '700', letterSpacing: '2px', marginBottom: '15px', textTransform: 'uppercase' }}>
              Our Services
            </div>
            <h2 style={{ fontSize: '36px', fontFamily: '"Outfit", sans-serif', margin: 0, color: '#164344' }}>
              Physiotherapy Care for Every Need
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { icon: 'fa-person-walking', title: 'Pain Management', desc: 'Effective treatment to reduce and manage chronic and acute pain.' },
              { icon: 'fa-bone', title: 'Orthopaedic Rehabilitation', desc: 'Recover from bone, joint and muscle injuries with targeted therapy.' },
              { icon: 'fa-person-running', title: 'Sports Injury Rehabilitation', desc: 'Get back to your game stronger, safer, and faster.' },
              { icon: 'fa-bed', title: 'Post-Operative Rehabilitation', desc: 'Regain strength and mobility safely after surgical procedures.' },
              { icon: 'fa-brain', title: 'Neurological Rehabilitation', desc: 'Support for stroke, paralysis and other neurological conditions.' },
              { icon: 'fa-person', title: 'Women\'s Health Physiotherapy', desc: 'Specialized care for sensitive and specific women\'s health needs.' }
            ].map((service, index) => (
              <div key={index} style={{ padding: '30px', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #edf0ea', display: 'flex', gap: '20px', alignItems: 'flex-start', transition: 'box-shadow 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 15px 40px rgba(22, 67, 68, 0.06)'} onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)'}>
                <div style={{ flexShrink: 0, width: '50px', height: '50px', borderRadius: '12px', background: '#fdf7e8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontSize: '20px' }}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: '"Outfit", sans-serif', color: '#164344', marginBottom: '8px' }}>{service.title}</h3>
                  <p style={{ color: '#74817f', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto', background: '#164344', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 50px rgba(22,67,68,0.15)' }}>
            <h2 style={{ fontSize: '32px', fontFamily: '"Outfit", sans-serif', color: '#fff', marginBottom: '15px' }}>Ready to Move Better?</h2>
            <p style={{ fontSize: '16px', color: '#a8c0bf', marginBottom: '35px' }}>Start your journey towards a pain-free and healthier life today.</p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:+919629765870" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--gold)', color: '#164344', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontWeight: '700', fontSize: '16px', transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <i className="fa-regular fa-calendar-check"></i> Book Appointment
              </a>
              <a href="tel:+919629765870" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 32px', borderRadius: '40px', textDecoration: 'none', fontWeight: '600', fontSize: '16px', transition: 'background 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}>
                <i className="fa-solid fa-phone"></i> 9629765870
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialities;