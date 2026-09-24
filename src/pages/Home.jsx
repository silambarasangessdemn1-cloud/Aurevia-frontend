import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

<section className="hero" id="home">
<div className="hero-grid">
<div className="hero-content container">
<div className="eyebrow">
                WELCOME TO AUREVIA
            </div>
<h1>
                Move Better.<br/>
<span>Live Better.</span>
</h1>
<p className="hero-desc">
                Personalized physiotherapy and rehabilitation care
                to help you recover, regain strength, and live pain-free.
            </p>
<div className="hero-buttons">
<a className="btn-primary" href="#contact">
<i className="fa-regular fa-calendar"></i>

                      Book an Appointment

                    <i className="fa-solid fa-chevron-right"></i>
</a>
<a className="btn-secondary" href="#services">

                    Explore Services

                    <i className="fa-solid fa-chevron-right"></i>
</a>
</div>
<div className="hero-features">
<div className="hero-feature">
<div className="feature-icon">
<i className="fa-solid fa-people-group"></i>
</div>

                    Expert Physiotherapists

                </div>
<div className="hero-feature">
<div className="feature-icon">
<i className="fa-regular fa-heart"></i>
</div>

                    Personalized Care

                </div>
<div className="hero-feature">
<div className="feature-icon">
<i className="fa-solid fa-chart-line"></i>
</div>

                    Evidence-Based Treatment

                </div>
</div>
</div>
<div className="hero-image">
<img alt="Physiotherapy treatment" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/>
<div className="hero-tag">
                Stronger<br/>
                Movement<br/>
                Healthier<br/>
                Lives
            </div>
<button className="slider-arrow slider-left">
<i className="fa-solid fa-chevron-left"></i>
</button>
<button className="slider-arrow slider-right">
<i className="fa-solid fa-chevron-right"></i>
</button>
</div>
</div>
</section><section className="section services" id="services">
<div className="container">
<div className="section-head">
<div className="section-label">
OUR SERVICES
</div>
<h2 className="section-title">
Physiotherapy Care for Every Need
</h2>
</div>
<div className="services-grid">
<div className="service-card">
<div className="service-icon">
<i className="fa-solid fa-person-walking"></i>
</div>
<h3>Pain Management</h3>
<p>
Effective treatment to reduce and manage pain.
</p>
</div>
<div className="service-card">
<div className="service-icon">
<i className="fa-solid fa-bone"></i>
</div>
<h3>Orthopaedic Rehabilitation</h3>
<p>
Recover from bone, joint and muscle injuries.
</p>
</div>
<div className="service-card">
<div className="service-icon">
<i className="fa-solid fa-person-running"></i>
</div>
<h3>Sports Injury Rehabilitation</h3>
<p>
Get back to your game stronger and safer.
</p>
</div>
<div className="service-card">
<div className="service-icon">
<i className="fa-solid fa-bed"></i>
</div>
<h3>Post-Operative Rehabilitation</h3>
<p>
Regain strength after surgery.
</p>
</div>
<div className="service-card">
<div className="service-icon">
<i className="fa-solid fa-brain"></i>
</div>
<h3>Neurological Rehabilitation</h3>
<p>
Support for stroke, paralysis and neurological conditions.
</p>
</div>
<div className="service-card">
<div className="service-icon">
<i className="fa-solid fa-person"></i>
</div>
<h3>Women's Health Physiotherapy</h3>
<p>
Specialized care for women's health needs.
</p>
</div>
</div>
</div>
</section><section className="about" id="about">
<div className="about-grid">
<div className="about-content container">
<div className="section-label">
ABOUT AUREVIA
</div>
<h2>
Your Partner in Recovery<br/>
and Better Movement
</h2>
<p>
At Aurevia Physiotherapy &amp; Rehabilitation Centre,
we provide personalized care to help individuals recover
from injuries, manage pain, improve mobility, and regain
confidence in their everyday lives.
</p>
<a className="learn-btn" href="#contact">

Learn More About Us

<i className="fa-solid fa-chevron-right"></i>
</a>
</div>
<div className="about-image">
<img alt="Physiotherapist helping patient" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/>
</div>
</div>
</section><section className="why" id="why">
<div className="container">
<div className="why-grid">
<div className="why-intro">
<div className="section-label">
WHY CHOOSE AUREVIA?
</div>
<h2>
Care That<br/>
Makes a Difference
</h2>
</div>
<div className="why-item">
<div className="why-icon">
<i className="fa-solid fa-user-doctor"></i>
</div>
<h4>
Individualised Assessment &amp; Treatment
</h4>
<p>
Tailored care that suits your unique needs.
</p>
</div>
<div className="why-item">
<div className="why-icon">
<i className="fa-solid fa-file-waveform"></i>
</div>
<h4>
Evidence-Based Physiotherapy
</h4>
<p>
Latest techniques and proven methods.
</p>
</div>
<div className="why-item">
<div className="why-icon">
<i className="fa-solid fa-people-group"></i>
</div>
<h4>
One-to-One Patient Care
</h4>
<p>
Focused attention for faster and better outcomes.
</p>
</div>
<div className="why-item">
<div className="why-icon">
<i className="fa-solid fa-chart-column"></i>
</div>
<h4>
Focus on Functional Recovery
</h4>
<p>
Helping you return to your daily activities.
</p>
</div>
</div>
</div>
</section><section className="conditions" id="specialities">
<div className="container">
<div className="section-head">
<div className="section-label">
CONDITIONS WE TREAT
</div>
<h2 className="section-title">
Helping You Overcome Everyday Challenges
</h2>
</div>
<div className="conditions-grid">
<div className="condition">
<i className="fa-solid fa-person"></i>
<span>Back Pain</span>
</div>
<div className="condition">
<i className="fa-solid fa-person-walking"></i>
<span>Neck Pain</span>
</div>
<div className="condition">
<i className="fa-solid fa-person-running"></i>
<span>Knee Pain</span>
</div>
<div className="condition">
<i className="fa-solid fa-person"></i>
<span>Shoulder Pain</span>
</div>
<div className="condition">
<i className="fa-solid fa-bone"></i>
<span>Arthritis</span>
</div>
<div className="condition">
<i className="fa-solid fa-person-running"></i>
<span>Sports Injuries</span>
</div>
<div className="condition">
<i className="fa-solid fa-brain"></i>
<span>Stroke Recovery</span>
</div>
</div>
</div>
</section><section className="process">
<div className="container">
<div className="section-head">
<div className="section-label">
HOW IT WORKS
</div>
<h2 className="section-title">
Your Journey to Better Movement
</h2>
</div>
<div className="process-grid">
<div className="process-item">
<div className="process-number">
01
</div>
<div className="process-icon">
<i className="fa-regular fa-calendar-check"></i>
</div>
<h4>
Book an Appointment
</h4>
<p>
Schedule your consultation.
</p>
</div>
<div className="process-item">
<div className="process-number">
02
</div>
<div className="process-icon">
<i className="fa-regular fa-clipboard"></i>
</div>
<h4>
Assessment
</h4>
<p>
Our physiotherapist understands your condition.
</p>
</div>
<div className="process-item">
<div className="process-number">
03
</div>
<div className="process-icon">
<i className="fa-solid fa-bed"></i>
</div>
<h4>
Personalized Treatment
</h4>
<p>
Receive a treatment plan designed for you.
</p>
</div>
<div className="process-item">
<div className="process-number">
04
</div>
<div className="process-icon">
<i className="fa-solid fa-person-running"></i>
</div>
<h4>
Recover &amp; Move Better
</h4>
<p>
Regain strength, mobility and confidence.
</p>
</div>
</div>
</div>
</section><section className="gallery" id="gallery">
<div className="container">
<div className="section-head">
<div className="section-label">OUR GALLERY</div>
<h2 className="section-title">A Look Inside Aurevia</h2>
<p className="gallery-intro">
                Explore our comfortable clinic, treatment spaces and rehabilitation environment.
            </p>
</div>
<div className="gallery-filter">
<button className="gallery-filter-btn active" data-filter="all" type="button">All</button>
<button className="gallery-filter-btn" data-filter="clinic" type="button">Clinic</button>
<button className="gallery-filter-btn" data-filter="treatment" type="button">Treatment</button>
<button className="gallery-filter-btn" data-filter="rehab" type="button">Rehabilitation</button>
</div>
<div className="gallery-grid gallery-grid-large">
<button className="gallery-item gallery-card" data-category="clinic" type="button">
<img alt="Aurevia clinic" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="gallery-overlay"><strong>Clinic Space</strong><small>Comfortable environment</small></span>
</button>
<button className="gallery-item gallery-card gallery-wide" data-category="treatment" type="button">
<img alt="Physiotherapy treatment room" src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&amp;fit=crop&amp;w=1200&amp;q=85"/>
<span className="gallery-overlay"><strong>Treatment Room</strong><small>Focused one-to-one care</small></span>
</button>
<button className="gallery-item gallery-card" data-category="rehab" type="button">
<img alt="Rehabilitation equipment" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="gallery-overlay"><strong>Rehabilitation</strong><small>Movement-focused care</small></span>
</button>
<button className="gallery-item gallery-card" data-category="treatment" type="button">
<img alt="Physiotherapist helping patient" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="gallery-overlay"><strong>Patient Care</strong><small>Personalized treatment</small></span>
</button>
<button className="gallery-item gallery-card gallery-tall" data-category="rehab" type="button">
<img alt="Physiotherapy rehabilitation" src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="gallery-overlay"><strong>Recovery Journey</strong><small>Strength and mobility</small></span>
</button>
<button className="gallery-item gallery-card" data-category="clinic" type="button">
<img alt="Modern healthcare space" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="gallery-overlay"><strong>Care Environment</strong><small>Clean and welcoming</small></span>
</button>
</div>
</div>
</section><section className="blog" id="blog">
<div className="container">
<div className="section-head">
<div className="section-label">AUREVIA INSIGHTS</div>
<h2 className="section-title">Helpful Tips for Better Movement</h2>
<p className="blog-intro">
                Simple, practical information to help you understand movement, recovery and physiotherapy care.
            </p>
</div>
<div className="blog-grid">
<article className="blog-card">
<div className="blog-image">
<img alt="Back pain and movement" src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="blog-tag">Pain Care</span>
</div>
<div className="blog-content">
<div className="blog-meta"><i className="fa-regular fa-calendar"></i> Movement &amp; Recovery</div>
<h3>Understanding Common Causes of Back Pain</h3>
<p>Learn about everyday factors that can contribute to back discomfort and why assessment matters.</p>
<button className="blog-read" data-blog-title="Understanding Common Causes of Back Pain" type="button">Read Article <i className="fa-solid fa-arrow-right"></i></button>
</div>
</article>
<article className="blog-card">
<div className="blog-image">
<img alt="Physiotherapy exercise" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="blog-tag">Physiotherapy</span>
</div>
<div className="blog-content">
<div className="blog-meta"><i className="fa-regular fa-circle-check"></i> Treatment Guide</div>
<h3>Why Personalized Physiotherapy Matters</h3>
<p>Every person's movement needs are different. A tailored plan can focus care around individual goals.</p>
<button className="blog-read" data-blog-title="Why Personalized Physiotherapy Matters" type="button">Read Article <i className="fa-solid fa-arrow-right"></i></button>
</div>
</article>
<article className="blog-card">
<div className="blog-image">
<img alt="Rehabilitation treatment" src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&amp;fit=crop&amp;w=900&amp;q=85"/>
<span className="blog-tag">Recovery</span>
</div>
<div className="blog-content">
<div className="blog-meta"><i className="fa-solid fa-person-running"></i> Rehabilitation</div>
<h3>Building Strength After an Injury</h3>
<p>Recovery is more than reducing symptoms. Rehabilitation can support strength, mobility and confidence.</p>
<button className="blog-read" data-blog-title="Building Strength After an Injury" type="button">Read Article <i className="fa-solid fa-arrow-right"></i></button>
</div>
</article>
</div>
</div>
</section><section className="testimonials">
<div className="container">
<div className="section-head">
<div className="section-label">
PATIENT TESTIMONIALS
</div>
<h2 className="section-title">
Real People. Real Results.
</h2>
</div>
<div className="testimonial-grid">
<div className="testimonial">
<div className="stars">
★★★★★
</div>
<p>
"I had severe back pain and after a few sessions
at Aurevia, I feel so much better. The staff are
professional and caring."
</p>
<strong>
— Ramesh K.
</strong>
</div>
<div className="testimonial">
<div className="stars">
★★★★★
</div>
<p>
"Excellent care and personalized treatment.
The therapists are very knowledgeable and supportive."
</p>
<strong>
— Priya S.
</strong>
</div>
<div className="testimonial">
<div className="stars">
★★★★★
</div>
<p>
"After my knee surgery, Aurevia helped me regain
my mobility and confidence. Highly recommended!"
</p>
<strong>
— Mani V.
</strong>
</div>
</div>
</div>
</section><section className="cta" id="contact">
<div className="container">
<div className="cta-inner">
<div>
<h2>
Ready to Move Better?
</h2>
<p>
Start your journey towards a pain-free and healthier life.
</p>
</div>
<div className="cta-right">
<a className="cta-btn" href="tel:+919629765870">
<i className="fa-regular fa-calendar"></i>

  Book Your Appointment

<i className="fa-solid fa-chevron-right"></i>
</a>
<a className="phone" href="tel:+919629765870">
<i className="fa-solid fa-phone"></i>
<div>
<strong>
9629765870
</strong>
<small>
Call us for appointments
</small>
</div>
</a>
</div>
</div>
</div>
</section>
    </>
  );
};

export default Home;