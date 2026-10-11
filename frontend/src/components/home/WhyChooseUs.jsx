import React, { useEffect, useRef, useState } from 'react';
import { Bus, Compass, Users, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Once visible, keep observer inactive
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleWhatsAppCardClick = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I would like to enquire about your tour packages and vehicle hire in Chikkamagaluru. Please share available options and rates.'
    );
  };

  const features = [
    {
      id: 1,
      title: 'Convenient Vehicle Hire',
      desc: '10 seater to 50 seater options available for all group sizes.',
      icon: <Bus size={28} color="#FFD429" />,
      isLink: false
    },
    {
      id: 2,
      title: 'Customized Sightseeing',
      desc: 'Flexible itineraries tailored according to your travel plans.',
      icon: <Compass size={28} color="#FFD429" />,
      isLink: false
    },
    {
      id: 3,
      title: 'Group-Friendly Travel',
      desc: 'Specialized in student college trips, corporate outings and family travel.',
      icon: <Users size={28} color="#FFD429" />,
      isLink: false
    },
    {
      id: 4,
      title: 'Easy WhatsApp Enquiries',
      desc: 'Quick and hassle-free booking enquiries through WhatsApp.',
      icon: <MessageSquare size={28} color="#25D366" />,
      isLink: true
    }
  ];

  return (
    <section ref={sectionRef} className="why-choose-section">
      {/* Background Decorative SVG Elements */}
      <div className="why-choose-bg-decoration">
        {/* Subtle Mountain Silhouette */}
        <svg className="mountain-silhouette" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L0,70 L180,20 L360,90 L540,10 L720,80 L900,30 L1080,85 L1260,15 L1440,75 L1440,120 Z"></path>
        </svg>

        {/* Decorative Floating Leaves */}
        <svg className="floating-leaf floating-leaf-1" viewBox="0 0 24 24" fill="#123C2A">
          <path d="M17,8C8,10 59,16.17 3.82,21.34L5.23,22.75C10.4,17.58 16.58,15 17,8M6,3C6,3 10,7 10,11C10,12.5 9.5,14 9,15C8,13.5 7.5,12 7.5,10.5C7.5,9.5 8,7.5 8,7.5M19,3C19,3 15,7 15,11C15,12.5 15.5,14 16,15C17,13.5 17.5,12 17.5,10.5C17.5,9.5 17,7.5 17,7.5" />
        </svg>
        <svg className="floating-leaf floating-leaf-2" viewBox="0 0 24 24" fill="#123C2A">
          <path d="M17,8C8,10 59,16.17 3.82,21.34L5.23,22.75C10.4,17.58 16.58,15 17,8M6,3C6,3 10,7 10,11C10,12.5 9.5,14 9,15C8,13.5 7.5,12 7.5,10.5C7.5,9.5 8,7.5 8,7.5" />
        </svg>
        <svg className="floating-leaf floating-leaf-3" viewBox="0 0 24 24" fill="#FFD429">
          <path d="M17,8C8,10 59,16.17 3.82,21.34L5.23,22.75C10.4,17.58 16.58,15 17,8" />
        </svg>
      </div>

      <div className="why-choose-container">
        {/* Section Heading */}
        <div className={`why-choose-header ${isInView ? 'in-view' : ''}`}>
          <span className="trust-badge">TRUST & RELIABILITY</span>
          <h2 className="why-choose-title">
            Why Choose <span className="highlight-gold">Sunil Tours N Travels</span>?
          </h2>
          
          <div className="heading-divider">
            <div className="divider-line"></div>
            <div className="divider-dot"></div>
            <div className="divider-line"></div>
          </div>
        </div>

        {/* 4 Feature Cards Row */}
        <div className="why-choose-grid">
          {features.map((item, idx) => {
            const cardContent = (
              <>
                <div className={`icon-container ${item.isLink ? 'whatsapp-icon-bg' : ''}`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-divider"></div>
                  <p className="card-desc">{item.desc}</p>
                </div>
                {item.isLink && (
                  <span className="whatsapp-badge">
                    <MessageSquare size={12} color="#25D366" />
                    Click to Enquire on WhatsApp
                  </span>
                )}
              </>
            );

            if (item.isLink) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={handleWhatsAppCardClick}
                  className={`feature-card whatsapp-card ${isInView ? 'in-view' : ''}`}
                  style={{ transitionDelay: `${idx * 120}ms`, border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%' }}
                >
                  {cardContent}
                </button>
              );
            }

            return (
              <div
                key={item.id}
                className={`feature-card ${isInView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
