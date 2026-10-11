import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Phone, Calendar, ChevronDown, ChevronUp, MapPin, Check } from 'lucide-react';
import Hero from '../components/home/Hero';
import JeepAdventure from '../components/home/JeepAdventure';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Gallery from '../components/home/Gallery';
import FaqSection from '../components/home/FaqSection';
import PricingDisclaimer from '../components/common/PricingDisclaimer';
import API from '../services/api';
import {
  openWhatsApp,
  buildPackageWhatsAppMessage,
  buildVehicleWhatsAppMessage,
  buildGroupTourWhatsAppMessage,
  buildDestinationWhatsAppMessage,
  buildGeneralTripWhatsAppMessage
} from '../utils/whatsapp';

const Home = ({ onOpenBooking }) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await API.get('/destinations');
        if (res.success) setDestinations(res.destinations || []);
      } catch (err) {
        console.error('Error fetching destinations:', err);
      }
    };
    fetchDestinations();
  }, []);

  // Top 3 Featured Popular Destinations with Subtle Theme Accents
  const popularDestinations = [
    {
      name: 'Mullayanagiri Peak',
      badge: 'Trekking & Viewpoints',
      badgeBg: '#166534',
      cardBg: '#F0FDF4',
      borderColor: 'rgba(22, 101, 52, 0.2)',
      chipBg: 'rgba(22, 101, 52, 0.08)',
      chipColor: '#14532D',
      location: 'Chikkamagaluru (22 km)',
      description: 'Highest peak in Karnataka standing tall at 1,930 meters. Experience misty mountain trails, 360° valley vistas, and serene temple views at the summit.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
      slug: 'mullayanagiri-peak',
      chips: [
        { label: 'Elevation: 1,930 m', icon: '⛰️' },
        { label: 'Duration: 2-3 Hours', icon: '⏱️' },
        { label: 'Trek: Moderate', icon: '🥾' }
      ]
    },
    {
      name: 'Hebbe Waterfalls',
      badge: 'Waterfalls & Safari',
      badgeBg: '#0284C7',
      cardBg: '#F0F9FF',
      borderColor: 'rgba(2, 132, 199, 0.2)',
      chipBg: 'rgba(2, 132, 199, 0.08)',
      chipColor: '#0369A1',
      location: 'Kemmanagundi (65 km)',
      description: 'Spectacular 2-stage waterfall cascading 168 meters inside dense coffee estate rainforests, reachable via an adventurous 4x4 off-road jeep trek.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
      slug: 'hebbe-waterfalls',
      chips: [
        { label: 'Height: 168 m', icon: '💧' },
        { label: 'Duration: 3-4 Hours', icon: '⏱️' },
        { label: 'Access: 4x4 Jeep', icon: '🚜' }
      ]
    },
    {
      name: 'Belur Chennakeshava Temple',
      badge: 'Heritage & Architecture',
      badgeBg: '#B45309',
      cardBg: '#FFFBEB',
      borderColor: 'rgba(180, 83, 9, 0.2)',
      chipBg: 'rgba(180, 83, 9, 0.08)',
      chipColor: '#B45309',
      location: 'Belur, Hassan (26 km)',
      description: 'World-famous 12th-century star-shaped stone temple on the Yagachi River, celebrated globally for its intricate Hoysala rock carvings and craftsmanship.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
      slug: 'belur-chennakeshava-temple',
      chips: [
        { label: 'Built: 1117 AD', icon: '🏛️' },
        { label: 'Duration: 2 Hours', icon: '⏱️' },
        { label: 'Style: Hoysala Heritage', icon: '✨' }
      ]
    }
  ];

  const galleryImages = [
    { title: 'Mullayanagiri Misty Mountain Peak', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg' },
    { title: 'Hebbe Cascading Waterfalls', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg' },
    { title: 'Belur Chennakeshava Hoysala Temple', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg' },
    { title: 'Halebidu Hoysaleswara Twin Temple', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg' },
    { title: 'Kalhattagiri Temple Waterfalls', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg' },
    { title: '4x4 Off-Road Mountain Jeep Trek', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div>
      {/* 1. ANIMATED PREMIUM HERO SECTION */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. POPULAR DESTINATIONS SECTION */}
      <section className="section-padding" style={{ paddingTop: '90px', paddingBottom: '90px', background: '#F7F4E9' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Centered Section Heading */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(18, 60, 42, 0.1)',
                color: '#123C2A',
                border: '1px solid rgba(18, 60, 42, 0.25)',
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.6px',
                marginBottom: '12px'
              }}
            >
              Karnataka's Natural Beauty
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', lineHeight: 1.2 }}>
              Popular <i>Destinations</i>
            </h2>
            <p style={{ color: '#556B60', fontSize: '1.02rem', lineHeight: 1.6, margin: '0 auto 20px' }}>
              Explore iconic mountain peaks, cascading waterfalls, and ancient Hoysala heritage temples in Chikkamagaluru.
            </p>
            <Link
              to="/destinations"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#123C2A',
                border: '1.5px solid #123C2A',
                padding: '9px 24px',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#123C2A';
                e.currentTarget.style.color = '#FFD429';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#123C2A';
              }}
            >
              <span>View All Destinations</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* 3 Column Equal Height Responsive Grid */}
          <div className="popular-destinations-grid">
            {popularDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="glancey-dest-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  height: '100%',
                  border: '1.5px solid rgba(18, 60, 42, 0.12)',
                  boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Card Image Header with Zoom & Gradient Overlay */}
                  <Link to={`/destinations/${dest.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="img-zoom-container" style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={dest.image}
                        alt={dest.name}
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
                      
                      {/* Glassmorphic Category Badge - Top Left */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: 'rgba(18, 60, 42, 0.9)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#FFD429',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          padding: '6px 14px',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 212, 41, 0.5)',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {dest.badge}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content Body */}
                  <div style={{ padding: '22px 22px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    
                    {/* Title */}
                    <Link to={`/destinations/${dest.slug}`} style={{ textDecoration: 'none' }}>
                      <h3
                        className="glancey-card-title"
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 800,
                          color: '#123C2A',
                          marginBottom: '10px',
                          lineHeight: 1.3,
                          transition: 'color 0.25s ease'
                        }}
                      >
                        {dest.name}
                      </h3>
                    </Link>

                    {/* Location Badge */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        color: '#123C2A',
                        fontWeight: 700,
                        marginBottom: '14px',
                        background: 'rgba(18, 60, 42, 0.06)',
                        padding: '5px 12px',
                        borderRadius: '16px',
                        border: '1px solid rgba(18, 60, 42, 0.1)',
                        alignSelf: 'flex-start'
                      }}
                    >
                      <MapPin size={13} color="#123C2A" />
                      <span>{dest.location}</span>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '0.9rem', color: '#52645C', marginBottom: '18px', lineHeight: 1.6, flex: 1 }}>
                      {dest.description}
                    </p>

                    {/* Compact Information Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                      {dest.chips.map((chip, i) => (
                        <span
                          key={i}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: i === 0 ? 'rgba(255, 212, 41, 0.15)' : 'rgba(18, 60, 42, 0.06)',
                            border: i === 0 ? '1px solid rgba(255, 212, 41, 0.4)' : '1px solid rgba(18, 60, 42, 0.1)',
                            color: i === 0 ? '#7A6000' : '#123C2A',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            padding: '5px 11px',
                            borderRadius: '16px'
                          }}
                        >
                          <span>{chip.icon}</span>
                          <span>{chip.label}</span>
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Card Action Area at Bottom */}
                <div style={{ padding: '0 22px 22px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Link
                    to={`/destinations/${dest.slug}`}
                    className="glancey-btn-main"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: '#123C2A',
                      color: '#F7F4E9',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      padding: '12px 20px',
                      borderRadius: '30px',
                      border: '1px solid rgba(255, 212, 41, 0.4)',
                      textDecoration: 'none',
                      boxShadow: '0 4px 16px rgba(18, 60, 42, 0.2)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} color="#FFD429" className="glancey-arrow" style={{ transition: 'transform 0.25s ease' }} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildDestinationWhatsAppMessage(dest.name))}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: '#25D366',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.4)';
                    }}
                    title="Enquire on WhatsApp"
                    aria-label={`Enquire about ${dest.name} on WhatsApp`}
                  >
                    <MessageSquare size={18} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CSS Grid Helper */}
          <style>{`
            .popular-destinations-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
              align-items: stretch;
            }
            @media (max-width: 1024px) {
              .popular-destinations-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
              }
            }
            @media (max-width: 640px) {
              .popular-destinations-grid {
                grid-template-columns: 1fr;
                gap: 20px;
              }
            }
          `}</style>

        </div>
      </section>

      {/* 3. SIGHTSEEING PACKAGES */}
      <section style={{ background: 'var(--color-warm-ivory-dark)', padding: '80px 0' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
            <div>
              <span className="badge badge-yellow">Fixed Vehicle Rates</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '2.25rem', marginTop: '6px' }}>
                Sightseeing Packages — <i>Choose Your Perfect Adventure</i>
              </h2>
            </div>
            <Link to="/packages" className="btn btn-outline-green btn-sm" style={{ marginTop: '10px' }}>
              View All Packages <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-4">
            
            {/* Day 1 Card */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div>
                <div className="img-zoom-container" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg"
                    alt="Day 1 Mullayanagiri"
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
                      top: '12px',
                      left: '12px',
                      background: 'rgba(18, 60, 42, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: '#FFD429',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 212, 41, 0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    DAY 1
                  </span>
                </div>

                <div style={{ padding: '20px 18px 14px' }}>
                  <h4
                    className="glancey-card-title"
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#123C2A',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                      transition: 'color 0.25s ease'
                    }}
                  >
                    Day 1: Mullayanagiri & Bababudangiri Circuit
                  </h4>
                  <div
                    style={{
                      background: 'rgba(18, 60, 42, 0.04)',
                      border: '1px solid rgba(18, 60, 42, 0.1)',
                      padding: '10px 14px',
                      borderRadius: '14px',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#52645C', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>
                        VEHICLE CHARGES:
                      </span>
                      <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C2A' }}>
                        ₹3,500
                      </span>
                    </div>
                    <span style={{ background: 'rgba(255, 212, 41, 0.25)', color: '#7A6000', border: '1px solid rgba(255, 212, 41, 0.6)', fontWeight: 800, padding: '4px 10px', borderRadius: '16px', fontSize: '0.72rem' }}>
                      OWNER RATES
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#52645C', lineHeight: 1.5, marginBottom: '12px' }}>
                    Mullayanagiri, Z Point trek, Jhari waterfalls 4x4 jeep safari, Honnamanahalla falls & Bababudangiri caves.
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link
                  to="/packages/day-1"
                  className="glancey-btn-main"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#123C2A',
                    color: '#F7F4E9',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 212, 41, 0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} color="#FFD429" className="glancey-arrow" style={{ transition: 'transform 0.25s ease' }} />
                </Link>
                <button
                  type="button"
                  onClick={() => openWhatsApp(buildPackageWhatsAppMessage({ packageName: 'Day 1: Mullayanagiri & Bababudangiri Circuit (₹3,500)' }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageSquare size={14} color="#FFFFFF" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Day 2 Card */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div>
                <div className="img-zoom-container" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg"
                    alt="Day 2 Hebbe Waterfalls"
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
                      top: '12px',
                      left: '12px',
                      background: 'rgba(18, 60, 42, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: '#FFD429',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 212, 41, 0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    DAY 2
                  </span>
                </div>

                <div style={{ padding: '20px 18px 14px' }}>
                  <h4
                    className="glancey-card-title"
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#123C2A',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                      transition: 'color 0.25s ease'
                    }}
                  >
                    Day 2: Kemmanagundi & Waterfalls Circuit
                  </h4>
                  <div
                    style={{
                      background: 'rgba(18, 60, 42, 0.04)',
                      border: '1px solid rgba(18, 60, 42, 0.1)',
                      padding: '10px 14px',
                      borderRadius: '14px',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#52645C', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>
                        VEHICLE CHARGES:
                      </span>
                      <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C2A' }}>
                        ₹4,000
                      </span>
                    </div>
                    <span style={{ background: 'rgba(255, 212, 41, 0.25)', color: '#7A6000', border: '1px solid rgba(255, 212, 41, 0.6)', fontWeight: 800, padding: '4px 10px', borderRadius: '16px', fontSize: '0.72rem' }}>
                      OWNER RATES
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#52645C', lineHeight: 1.5, marginBottom: '12px' }}>
                    Siri Cafe statue, Devaramane temple, Kalhatti falls, Kemmanagundi gardens & Hebbe falls safari.
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link
                  to="/packages/day-2"
                  className="glancey-btn-main"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#123C2A',
                    color: '#F7F4E9',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 212, 41, 0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} color="#FFD429" className="glancey-arrow" style={{ transition: 'transform 0.25s ease' }} />
                </Link>
                <button
                  type="button"
                  onClick={() => openWhatsApp(buildPackageWhatsAppMessage({ packageName: 'Day 2: Kemmanagundi & Waterfalls Circuit (₹4,000)' }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageSquare size={14} color="#FFFFFF" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Day 3 Card */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div>
                <div className="img-zoom-container" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg"
                    alt="Day 3 Belur Temple"
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
                      top: '12px',
                      left: '12px',
                      background: 'rgba(18, 60, 42, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: '#FFD429',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 212, 41, 0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    DAY 3
                  </span>
                </div>

                <div style={{ padding: '20px 18px 14px' }}>
                  <h4
                    className="glancey-card-title"
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#123C2A',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                      transition: 'color 0.25s ease'
                    }}
                  >
                    Day 3: Belur & Halebidu Heritage Circuit
                  </h4>
                  <div
                    style={{
                      background: 'rgba(18, 60, 42, 0.04)',
                      border: '1px solid rgba(18, 60, 42, 0.1)',
                      padding: '10px 14px',
                      borderRadius: '14px',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#52645C', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>
                        VEHICLE CHARGES:
                      </span>
                      <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C2A' }}>
                        ₹3,500
                      </span>
                    </div>
                    <span style={{ background: 'rgba(255, 212, 41, 0.25)', color: '#7A6000', border: '1px solid rgba(255, 212, 41, 0.6)', fontWeight: 800, padding: '4px 10px', borderRadius: '16px', fontSize: '0.72rem' }}>
                      OWNER RATES
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#52645C', lineHeight: 1.5, marginBottom: '12px' }}>
                    12th-century Belur Chennakeshava & Halebidu Hoysaleswara stone temples, Yagachi water sports.
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link
                  to="/packages/day-3"
                  className="glancey-btn-main"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#123C2A',
                    color: '#F7F4E9',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 212, 41, 0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} color="#FFD429" className="glancey-arrow" style={{ transition: 'transform 0.25s ease' }} />
                </Link>
                <button
                  type="button"
                  onClick={() => openWhatsApp(buildPackageWhatsAppMessage({ packageName: 'Day 3: Belur & Halebidu Heritage Circuit (₹3,500)' }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageSquare size={14} color="#FFFFFF" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Day 4 Card */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div>
                <div className="img-zoom-container" style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg"
                    alt="Day 4 Custom Sightseeing"
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
                      top: '12px',
                      left: '12px',
                      background: 'rgba(18, 60, 42, 0.9)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      color: '#FFD429',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 212, 41, 0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    DAY 4
                  </span>
                </div>

                <div style={{ padding: '20px 18px 14px' }}>
                  <h4
                    className="glancey-card-title"
                    style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#123C2A',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                      transition: 'color 0.25s ease'
                    }}
                  >
                    Day 4: Custom Sightseeing & Trekking
                  </h4>
                  <div
                    style={{
                      background: 'rgba(18, 60, 42, 0.04)',
                      border: '1px solid rgba(18, 60, 42, 0.1)',
                      padding: '10px 14px',
                      borderRadius: '14px',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.7rem', color: '#52645C', display: 'block', textTransform: 'uppercase', fontWeight: 800 }}>
                        VEHICLE CHARGES:
                      </span>
                      <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C2A' }}>
                        ₹3,500
                      </span>
                    </div>
                    <span style={{ background: 'rgba(255, 212, 41, 0.25)', color: '#7A6000', border: '1px solid rgba(255, 212, 41, 0.6)', fontWeight: 800, padding: '4px 10px', borderRadius: '16px', fontSize: '0.72rem' }}>
                      OWNER RATES
                    </span>
                  </div>
                  <p style={{ fontSize: '0.84rem', color: '#52645C', lineHeight: 1.5, marginBottom: '12px' }}>
                    Tailor-made day sightseeing circuit including Kudremukh trails, Horanadu, or custom spot pick.
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 18px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link
                  to="/packages/day-4"
                  className="glancey-btn-main"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#123C2A',
                    color: '#F7F4E9',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 212, 41, 0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight size={14} color="#FFD429" className="glancey-arrow" style={{ transition: 'transform 0.25s ease' }} />
                </Link>
                <button
                  type="button"
                  onClick={() => openWhatsApp(buildPackageWhatsAppMessage({ packageName: 'Day 4: Custom Sightseeing & Trekking (₹3,500)' }))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    width: '100%',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    padding: '10px 16px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageSquare size={14} color="#FFFFFF" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

          {/* Mandatory Note Disclaimer */}
          <PricingDisclaimer />

        </div>
      </section>

      {/* 4. PREMIUM JEEP ADVENTURE SECTION */}
      <JeepAdventure />

      {/* 5. VEHICLE HIRE */}
      <section className="section-padding" style={{ background: '#F7F4E9', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(18, 60, 42, 0.1)',
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
              TRAVEL TOGETHER. EXPLORE MORE.
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', lineHeight: 1.2 }}>
              Vehicle Hire & <i>Group Transport</i>
            </h2>
            <p style={{ color: '#52645C', fontSize: '1.02rem', lineHeight: 1.6, margin: '0 auto' }}>
              Comfortable group transport for sightseeing, student trips, corporate outings, and family adventures.
            </p>
          </div>

          <div className="vehicle-hire-responsive-grid" style={{ gap: '26px' }}>
            
            {/* 10 Seater Vehicles */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div className="img-zoom-container" style={{ width: '190px', height: '150px', borderRadius: '18px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"
                  alt="10 Seater Tempo"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(18, 60, 42, 0.6) 0%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(18, 60, 42, 0.9)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    color: '#FFD429',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 212, 41, 0.4)'
                  }}
                >
                  10-SEATER
                </span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <h3
                    className="glancey-card-title"
                    style={{ fontSize: '1.25rem', fontWeight: 800, color: '#123C2A', marginBottom: '8px', lineHeight: 1.3 }}
                  >
                    10 Seater Vehicles
                  </h3>
                  <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#52645C', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Group sightseeing & family trips</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Small group adventures & luggage space</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Custom pickup and drop</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    onClick={() => onOpenBooking('10-Seater Tempo Traveller Hire')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '24px',
                      background: '#FFD429',
                      color: '#123C2A',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(255, 212, 41, 0.35)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildVehicleWhatsAppMessage({ vehicleType: '10-Seater Force Tempo Traveller', passengers: '10 Persons', duration: '1 Day' }))}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#25D366',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                      transition: 'transform 0.25s ease'
                    }}
                    title="Enquire on WhatsApp"
                    aria-label="Enquire 10-Seater Tempo Traveller on WhatsApp"
                  >
                    <MessageSquare size={16} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>

            {/* 50 Seater Buses */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div className="img-zoom-container" style={{ width: '190px', height: '150px', borderRadius: '18px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
                  alt="50 Seater Bus"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(18, 60, 42, 0.6) 0%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(18, 60, 42, 0.9)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    color: '#FFD429',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 212, 41, 0.4)'
                  }}
                >
                  50-SEATER BUS
                </span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <h3
                    className="glancey-card-title"
                    style={{ fontSize: '1.25rem', fontWeight: 800, color: '#123C2A', marginBottom: '8px', lineHeight: 1.3 }}
                  >
                    50 Seater Buses
                  </h3>
                  <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#52645C', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> College tours & school excursions</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Large corporate outings</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Group transport enquiries</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    onClick={() => onOpenBooking('50-Seater Bus Hire')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '24px',
                      background: '#FFD429',
                      color: '#123C2A',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(255, 212, 41, 0.35)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildVehicleWhatsAppMessage({ vehicleType: '50-Seater Luxury Tourist Bus', passengers: '50 Persons', duration: '1 Day' }))}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#25D366',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                      transition: 'transform 0.25s ease'
                    }}
                    title="Enquire on WhatsApp"
                    aria-label="Enquire 50-Seater Luxury Bus on WhatsApp"
                  >
                    <MessageSquare size={16} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>

            {/* Student Trips */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div className="img-zoom-container" style={{ width: '190px', height: '150px', borderRadius: '18px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                  alt="Student Group"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(18, 60, 42, 0.6) 0%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(18, 60, 42, 0.9)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    color: '#FFD429',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 212, 41, 0.4)'
                  }}
                >
                  STUDENT TRIPS
                </span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <h3
                    className="glancey-card-title"
                    style={{ fontSize: '1.25rem', fontWeight: 800, color: '#123C2A', marginBottom: '8px', lineHeight: 1.3 }}
                  >
                    Student Trips
                  </h3>
                  <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#52645C', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> College sightseeing & educational tours</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Group transport & campfire arrangements</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Customized student itineraries</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    onClick={() => onOpenBooking('Student College Group Special Tour')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '24px',
                      background: '#FFD429',
                      color: '#123C2A',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(255, 212, 41, 0.35)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildGroupTourWhatsAppMessage({
                      groupType: 'Student / College Group',
                      groupSize: '30-50 Students',
                      requirements: 'Luxury Bus + Campfire + Sightseeing + Local Guide'
                    }))}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#25D366',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                      transition: 'transform 0.25s ease'
                    }}
                    title="Enquire on WhatsApp"
                    aria-label="Enquire Student College Group Tour on WhatsApp"
                  >
                    <MessageSquare size={16} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>

            {/* Corporate Trips */}
            <div
              className="glancey-dest-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                border: '1.5px solid rgba(18, 60, 42, 0.12)',
                boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              <div className="img-zoom-container" style={{ width: '190px', height: '150px', borderRadius: '18px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=600&q=80"
                  alt="Corporate Outings"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(18, 60, 42, 0.6) 0%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    background: 'rgba(18, 60, 42, 0.9)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    color: '#FFD429',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 212, 41, 0.4)'
                  }}
                >
                  CORPORATE TRIPS
                </span>
              </div>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <div>
                  <h3
                    className="glancey-card-title"
                    style={{ fontSize: '1.25rem', fontWeight: 800, color: '#123C2A', marginBottom: '8px', lineHeight: 1.3 }}
                  >
                    Corporate Trips
                  </h3>
                  <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#52645C', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Employee outings & team trips</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Doorstep Bangalore/Mysore transport</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Check size={14} color="#16A34A" /> Group sightseeing & resort stays</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    onClick={() => onOpenBooking('Corporate Team Outing & Retreat')}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '24px',
                      background: '#FFD429',
                      color: '#123C2A',
                      fontWeight: 800,
                      fontSize: '0.84rem',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(255, 212, 41, 0.35)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildGroupTourWhatsAppMessage({
                      groupType: 'Corporate Team Outing',
                      groupSize: '15-30 Members',
                      requirements: 'Doorstep Transport + 3-Star Resort + Team Activities'
                    }))}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#25D366',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                      transition: 'transform 0.25s ease'
                    }}
                    title="Enquire on WhatsApp"
                    aria-label="Enquire Corporate Team Outing Package on WhatsApp"
                  >
                    <MessageSquare size={16} color="#FFFFFF" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Responsive CSS Grid Helper */}
          <style>{`
            .vehicle-hire-responsive-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 26px;
            }
            @media (max-width: 1024px) {
              .vehicle-hire-responsive-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

        </div>
      </section>

      {/* 6. PREMIUM ANIMATED WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* 7. PREMIUM EDITORIAL GALLERY SECTION */}
      <Gallery />

      {/* 8. FAQ ACCORDION SECTION */}
      <FaqSection />

      {/* 9. FINAL PRE-FOOTER CTA BANNER */}
      <section style={{ background: 'var(--color-primary-green-dark)', color: 'var(--color-warm-ivory)', padding: '70px 20px', textAlign: 'center', borderTop: '2px solid var(--color-adventure-yellow)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '14px' }}>
            Your Chikkamagaluru Adventure Starts Here.
          </h2>
          <p style={{ color: '#CBD8D2', fontSize: '1.05rem', marginBottom: '30px' }}>
            Gather your friends, bring your family, or plan your next group trip. Let's make your journey memorable.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onOpenBooking()} className="btn btn-yellow btn-lg">
              <Calendar size={18} /> Book Your Trip
            </button>
            <a href="tel:+918197007359" className="btn btn-outline-light btn-lg">
              <Phone size={18} /> Call Us (+91 8197007359)
            </a>
            <button
              type="button"
              onClick={() => openWhatsApp(buildGeneralTripWhatsAppMessage('Chikkamagaluru Sightseeing & Adventure Trip'))}
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} /> WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
