import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle, MessageSquare, Compass, ShieldAlert, Sparkles, MapPin, Clock } from 'lucide-react';
import PricingDisclaimer from '../components/common/PricingDisclaimer';
import API from '../services/api';
import { openWhatsApp, buildPackageWhatsAppMessage } from '../utils/whatsapp';
import { defaultPackages, matchPackageCategory, getSerialWeight } from '../data/packagesData';

const Packages = ({ onOpenBooking }) => {
  const [packages, setPackages] = useState(defaultPackages);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = [
    { key: 'All', label: 'All Packages' },
    { key: 'Sightseeing', label: 'Day Sightseeing' },
    { key: 'Group', label: 'Group Tours' },
    { key: 'Student', label: 'Student Trips' },
    { key: 'Corporate', label: 'Corporate' },
    { key: 'Adventure', label: 'Adventure' },
    { key: 'Custom', label: 'Custom Day' }
  ];

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await API.get('/packages');
        if (res.success && res.packages && res.packages.length > 0) {
          const rawPackages = [...res.packages];
          // Guarantee strict serial order: Day 1 -> Day 2 -> Day 3 -> Day 4
          rawPackages.sort((a, b) => getSerialWeight(a) - getSerialWeight(b));
          setPackages(rawPackages);
        }
      } catch (err) {
        console.warn('API unavailable for packages, using authentic local dataset:', err?.message || err);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const filtered = packages
    .filter((p) => matchPackageCategory(p, selectedCategory))
    .sort((a, b) => getSerialWeight(a) - getSerialWeight(b));

  const handleCardClick = (e, slug) => {
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    navigate(`/packages/${slug}`);
  };

  // Helper to extract serial badge label (e.g. DAY 1, DAY 2, DAY 3, DAY 4)
  const getDayBadge = (pkg) => {
    const slug = (pkg.slug || '').toLowerCase();
    const name = (pkg.name || '').toLowerCase();
    if (slug === 'day-1' || name.startsWith('day 1')) return 'DAY 1';
    if (slug === 'day-2' || name.startsWith('day 2')) return 'DAY 2';
    if (slug === 'day-3' || name.startsWith('day 3')) return 'DAY 3';
    if (slug === 'day-4' || name.startsWith('day 4')) return 'DAY 4';
    if (slug.includes('3-day') || name.includes('3-day')) return '3-DAY EXPLORER';
    return pkg.category.toUpperCase();
  };

  return (
    <div style={{ background: '#F7F4E9', padding: '90px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
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
            CHIKKAMAGALURU TOUR & SIGHTSEEING PACKAGES
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
            Explore <span style={{ color: '#B28C00', borderBottom: '3px solid #FFD429' }}>Curated Tour Circuits</span>
          </h1>
          <p style={{ color: '#52645C', fontSize: '1.02rem', lineHeight: 1.6, margin: '0 auto' }}>
            Explore fixed day-wise sightseeing circuits arranged in serial order, off-road 4x4 jeep trekking, heritage tours, and custom student & corporate packages.
          </p>
        </div>

        {/* Clean Balanced Category Filter Pills */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '30px',
            border: '1.5px solid #E2E5D9',
            padding: '14px 22px',
            marginBottom: '40px',
            boxShadow: '0 6px 20px rgba(18, 60, 42, 0.06)',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '2px', maxWidth: '100%' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '24px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    border: '1.5px solid #123C2A',
                    background: isActive ? '#123C2A' : '#F7F4E9',
                    color: isActive ? '#FFFFFF' : '#123C2A',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#123C2A';
                      e.currentTarget.style.color = '#FFD429';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#F7F4E9';
                      e.currentTarget.style.color = '#123C2A';
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mandatory Pricing Disclaimer */}
        <PricingDisclaimer />

        {/* Packages Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#123C2A', fontSize: '1.1rem', fontWeight: 700 }}>
            Loading tour packages in serial order...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#52645C' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#123C2A', marginBottom: '12px' }}>No packages found in this category.</h3>
            <button
              onClick={() => setSelectedCategory('All')}
              style={{
                padding: '10px 24px',
                borderRadius: '30px',
                background: '#123C2A',
                color: '#F7F4E9',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              View All Packages
            </button>
          </div>
        ) : (
          <div className="packages-responsive-grid">
            {filtered.map((pkg) => {
              const dayBadge = getDayBadge(pkg);

              return (
                <div
                  key={pkg._id}
                  onClick={(e) => handleCardClick(e, pkg.slug)}
                  className="glancey-dest-card"
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    cursor: 'pointer',
                    border: '1.5px solid rgba(18, 60, 42, 0.12)',
                    boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative'
                  }}
                >
                  <div>
                    {/* Image Header with Zoom & Gradient Overlay */}
                    <div className="img-zoom-container" style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="glancey-card-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      />
                      
                      {/* Gradient Overlay for visual depth */}
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

                      {/* Prominent Dark Green & Gold Glassmorphic Day Badge */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: 'rgba(18, 60, 42, 0.9)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#FFD429',
                          fontWeight: 800,
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(255, 212, 41, 0.5)',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {dayBadge}
                      </span>

                      {/* Duration Badge */}
                      {pkg.duration && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '14px',
                            right: '14px',
                            background: 'rgba(9, 23, 17, 0.85)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '0.78rem',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                          }}
                        >
                          ⏱ {pkg.duration}
                        </span>
                      )}
                    </div>

                    {/* Body Content */}
                    <div style={{ padding: '22px 22px 16px' }}>
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
                        {pkg.name}
                      </h3>

                      {/* Glanceable Micro-Info Chips */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                        {pkg.category && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              background: 'rgba(18, 60, 42, 0.06)',
                              color: '#123C2A',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              padding: '5px 12px',
                              borderRadius: '16px',
                              border: '1px solid rgba(18, 60, 42, 0.1)'
                            }}
                          >
                            <Compass size={13} color="#123C2A" />
                            <span>{pkg.category} Circuit</span>
                          </span>
                        )}
                        {pkg.duration && (
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              background: 'rgba(255, 212, 41, 0.15)',
                              color: '#7A6000',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              padding: '5px 12px',
                              borderRadius: '16px',
                              border: '1px solid rgba(255, 212, 41, 0.4)'
                            }}
                          >
                            <Clock size={13} color="#7A6000" />
                            <span>{pkg.duration}</span>
                          </span>
                        )}
                      </div>

                      <p style={{ fontSize: '0.9rem', color: '#52645C', lineHeight: 1.6, marginBottom: '18px' }}>
                        {pkg.description}
                      </p>

                      {/* Vehicle Charges Price Banner */}
                      <div
                        style={{
                          background: 'rgba(18, 60, 42, 0.04)',
                          border: '1.5px solid rgba(18, 60, 42, 0.1)',
                          padding: '14px 18px',
                          borderRadius: '18px',
                          marginBottom: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <span style={{ fontSize: '0.75rem', color: '#52645C', display: 'block', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 800, marginBottom: '2px' }}>
                            {pkg.priceLabel || 'VEHICLE CHARGES'}:
                          </span>
                          <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#123C2A', lineHeight: 1 }}>
                            ₹{pkg.price ? pkg.price.toLocaleString() : 'Quote'}
                          </span>
                        </div>
                        <span
                          style={{
                            background: 'rgba(255, 212, 41, 0.25)',
                            color: '#7A6000',
                            border: '1px solid rgba(255, 212, 41, 0.6)',
                            fontWeight: 800,
                            padding: '5px 12px',
                            borderRadius: '20px',
                            fontSize: '0.78rem',
                            letterSpacing: '0.5px'
                          }}
                        >
                          OWNER RATES
                        </span>
                      </div>

                      {/* Inclusions & Exclusions */}
                      <div className="grid grid-2" style={{ gap: '16px', fontSize: '0.85rem', marginBottom: '20px' }}>
                        <div>
                          <strong style={{ color: '#123C2A', display: 'block', marginBottom: '8px', fontWeight: 800 }}>Inclusions:</strong>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', color: '#52645C' }}>
                            {pkg.inclusions && pkg.inclusions.slice(0, 3).map((inc, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', lineHeight: 1.4 }}>
                                <CheckCircle2 size={15} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <strong style={{ color: '#991B1B', display: 'block', marginBottom: '8px', fontWeight: 800 }}>Exclusions:</strong>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', color: '#52645C' }}>
                            {pkg.exclusions && pkg.exclusions.slice(0, 3).map((exc, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', lineHeight: 1.4 }}>
                                <XCircle size={15} color="#DC2626" style={{ marginTop: '2px', flexShrink: 0 }} />
                                <span>{exc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div style={{ padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Link
                        to={`/packages/${pkg.slug}`}
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
                          padding: '12px 18px',
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
                        onClick={() => onOpenBooking(pkg.name)}
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: '#FFD429',
                          color: '#123C2A',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          padding: '12px 18px',
                          borderRadius: '30px',
                          border: 'none',
                          boxShadow: '0 4px 14px rgba(255, 212, 41, 0.35)',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 212, 41, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 212, 41, 0.35)';
                        }}
                      >
                        Book Package
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => openWhatsApp(buildPackageWhatsAppMessage({ packageName: pkg.name }))}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: '#25D366',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        padding: '12px 20px',
                        borderRadius: '30px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#20BA5A';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#25D366';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.35)';
                      }}
                    >
                      <MessageSquare size={16} color="#FFFFFF" />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Responsive Grid Helper */}
        <style>{`
          .packages-responsive-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            align-items: stretch;
          }
          @media (max-width: 1024px) {
            .packages-responsive-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 768px) {
            .packages-responsive-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }
          }
        `}</style>

      </div>
    </div>
  );
};

export default Packages;
