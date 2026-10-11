import React from 'react';
import { Mountain, Compass, ShieldCheck, Bus, Users, Phone, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const About = () => {
  const pillars = [
    {
      icon: <ShieldCheck size={28} color="#123C2A" />,
      title: 'Safety-Conscious Travel',
      tag: 'EXPERIENCED HILL DRIVERS',
      description: 'Navigating Western Ghat mountain roads requires skill and expertise. All our drivers are experienced local hill navigators with years of mountain driving knowledge.',
      points: ['Local Ghat Road Experts', 'Regular Vehicle Maintenance', 'Safe Mountain Navigation']
    },
    {
      icon: <Compass size={28} color="#123C2A" />,
      title: 'Transparent Vehicle Pricing',
      tag: 'FIXED OWNER RATES',
      description: 'No hidden fees or surprise charges. We clearly separate vehicle transport charges from optional local waterfall jeep safaris and entry checkpoint tickets.',
      points: ['No Hidden Surcharges', 'Clear Breakdown of Rates', 'Fixed Daily Vehicle Tariffs']
    },
    {
      icon: <Bus size={28} color="#123C2A" />,
      title: 'Group Transport Specialists',
      tag: '10 TO 50 SEATER FLEET',
      description: 'Fully equipped to handle large student college excursions, family group reunions, and corporate retreats with 10-seater Tempo Travellers and 50-seater luxury buses.',
      points: ['50-Seater Luxury Buses', '10-14 Seater Tempo Travellers', 'Doorstep Bangalore/Mysore Pickups']
    }
  ];

  return (
    <div style={{ background: '#F7F4E9', padding: '90px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(18, 60, 42, 0.08)',
              color: '#123C2A',
              border: '1px solid rgba(18, 60, 42, 0.25)',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            ABOUT SUNIL TOURS N TRAVELS
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              color: '#123C2A',
              fontSize: '2.6rem',
              fontWeight: 800,
              marginBottom: '14px',
              lineHeight: 1.25
            }}
          >
            Your Reliable <span style={{ color: '#B28C00', borderBottom: '3px solid #FFD429' }}>Travel Partner</span> in Chikkamagaluru
          </h1>
          <p style={{ color: '#52645C', fontSize: '1.02rem', lineHeight: 1.6, margin: '0 auto' }}>
            Based in Chikkamagaluru, Karnataka, Sunil Tours N Travels specializes in hill station sightseeing, off-road 4x4 jeep safaris, 10-seater Tempo Travellers, and 50-seater luxury bus hire for student and corporate groups.
          </p>
        </div>

        {/* Story Section */}
        <div
          className="about-story-grid"
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '36px',
            border: '1.5px solid rgba(18, 60, 42, 0.12)',
            boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07)',
            marginBottom: '60px'
          }}
        >
          <div className="img-zoom-container" style={{ borderRadius: '20px', height: '380px', position: 'relative', overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80"
              alt="Sunil Tours Sightseeing Vehicle Fleet"
              className="glancey-card-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'linear-gradient(to top, rgba(18, 60, 42, 0.75) 0%, rgba(18, 60, 42, 0.2) 50%, transparent 100%)',
                pointerEvents: 'none'
              }}
            />
            <span
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(18, 60, 42, 0.9)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#FFD429',
                fontSize: '0.8rem',
                fontWeight: 800,
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 212, 41, 0.5)',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
              }}
            >
              🚍 SIGHTSEEING FLEET & 4x4 JEEPS
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#7A6000', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
              AUTHENTIC LOCAL TOURISM
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.1rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.3 }}>
              Promoting Authentic & Safe Coffee Land Tourism
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#52645C', lineHeight: 1.7, marginBottom: '14px' }}>
              Chikkamagaluru is celebrated for its breathtaking misty peaks, lush coffee estates, cascading waterfalls, and world-renowned Hoysala stone temples. Our mission is to make every traveler’s journey safe, comfortable, and memorable.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#52645C', lineHeight: 1.7, marginBottom: '24px' }}>
              Whether you are a couple looking for a private day tour, a family requiring a 10-seater Tempo Traveller, or a college organizer coordinating transport for 50+ students in a luxury bus, we provide transparent vehicle charges and expert local hill drivers.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="tel:+918197007359"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#123C2A',
                  color: '#F7F4E9',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: '1px solid rgba(255, 212, 41, 0.4)',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(18, 60, 42, 0.2)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Phone size={16} color="#FFD429" />
                <span>Call +91 8197007359</span>
              </a>

              <button
                type="button"
                onClick={() => openWhatsApp('Hello Sunil Tours N Travels, I would like to enquire about your services.')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.25s ease'
                }}
              >
                <MessageSquare size={16} color="#FFFFFF" />
                <span>WhatsApp Operator</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pillars / Values Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(18, 60, 42, 0.08)',
              color: '#123C2A',
              border: '1px solid rgba(18, 60, 42, 0.25)',
              padding: '6px 18px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}
          >
            OUR CORE COMMITMENT
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.3rem', fontWeight: 800 }}>
            Why Travelers Choose <span style={{ color: '#B28C00' }}>Sunil Tours</span>
          </h2>
        </div>

        {/* Pillars / Values Cards */}
        <div className="about-pillars-responsive-grid">
          {pillars.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '30px 24px',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header Icon & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      background: 'rgba(18, 60, 42, 0.08)',
                      border: '1px solid rgba(18, 60, 42, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    style={{
                      background: 'rgba(255, 212, 41, 0.25)',
                      color: '#7A6000',
                      border: '1px solid rgba(255, 212, 41, 0.5)',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '0.72rem',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <h3
                  className="glancey-card-title"
                  style={{ fontSize: '1.3rem', fontWeight: 800, color: '#123C2A', marginBottom: '10px', lineHeight: 1.3 }}
                >
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#52645C', lineHeight: 1.6, marginBottom: '20px' }}>
                  {pillar.description}
                </p>
              </div>

              {/* Point Highlights */}
              <div style={{ borderTop: '1px solid rgba(18, 60, 42, 0.1)', paddingTop: '16px' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', color: '#123C2A', fontSize: '0.85rem', fontWeight: 700 }}>
                  {pillar.points.map((pt, ptIdx) => (
                    <li key={ptIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Check size={14} color="#16A34A" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Grid Helpers */}
        <style>{`
          .about-story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }
          .about-pillars-responsive-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            align-items: stretch;
          }
          @media (max-width: 1024px) {
            .about-story-grid {
              grid-template-columns: 1fr;
              gap: 28px;
            }
            .about-pillars-responsive-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 22px;
            }
          }
          @media (max-width: 640px) {
            .about-pillars-responsive-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}</style>

      </div>
    </div>
  );
};

export default About;
