import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Info, ArrowLeft, ArrowRight, MessageSquare, Calendar, Compass } from 'lucide-react';
import PricingDisclaimer from '../components/common/PricingDisclaimer';
import API from '../services/api';
import { openWhatsApp, buildDestinationWhatsAppMessage } from '../utils/whatsapp';
import { findDestination, getRelatedDestinations, defaultDestinations } from '../data/destinationsData';

const DestinationDetail = ({ onOpenBooking }) => {
  const { slug } = useParams();

  // Instant local lookup so direct URL, refresh, or static deploys never show empty screens
  const initialLocalDest = findDestination(slug);
  const [destination, setDestination] = useState(initialLocalDest || null);
  const [related, setRelated] = useState(initialLocalDest ? getRelatedDestinations(initialLocalDest) : []);
  const [loading, setLoading] = useState(!initialLocalDest);

  useEffect(() => {
    window.scrollTo(0, 0);

    const localMatch = findDestination(slug);
    if (localMatch) {
      setDestination(localMatch);
      setRelated(getRelatedDestinations(localMatch));
      setLoading(false);
    } else {
      setLoading(true);
    }

    const fetchDetail = async () => {
      try {
        const res = await API.get(`/destinations/${slug}`);
        if (res.success && res.destination) {
          setDestination(res.destination);
          if (res.related && res.related.length > 0) {
            setRelated(res.related);
          } else if (localMatch) {
            setRelated(getRelatedDestinations(res.destination));
          }
        }
      } catch (err) {
        // If API fails or is unreachable, we smoothly preserve the local fallback
        if (!localMatch) {
          console.warn('Destination not found via API and no local match for slug:', slug);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [slug]);

  // Loading Screen
  if (loading) {
    return (
      <div
        style={{
          background: '#F7F4E9',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px'
        }}
      >
        <div
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            border: '4px solid rgba(18, 60, 42, 0.15)',
            borderTopColor: '#123C2A',
            animation: 'spin 1s linear infinite',
            marginBottom: '20px'
          }}
        />
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '1.4rem' }}>
          Loading destination details...
        </h2>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Friendly Destination Not Found Screen (Requirement 6)
  if (!destination) {
    return (
      <div
        style={{
          background: '#F7F4E9',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '90px 24px'
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            background: '#FFFFFF',
            borderRadius: '28px',
            padding: '48px 36px',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(18, 60, 42, 0.08)',
            border: '1.5px solid rgba(18, 60, 42, 0.12)'
          }}
        >
          <div
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              background: 'rgba(18, 60, 42, 0.07)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              border: '2px solid rgba(18, 60, 42, 0.12)'
            }}
          >
            <Compass size={38} color="#123C2A" />
          </div>

          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255, 212, 41, 0.2)',
              color: '#7A6000',
              border: '1px solid rgba(255, 212, 41, 0.5)',
              padding: '4px 14px',
              borderRadius: '16px',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              marginBottom: '14px'
            }}
          >
            DESTINATION NOT FOUND
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              color: '#123C2A',
              fontSize: '2.1rem',
              fontWeight: 800,
              marginBottom: '12px',
              lineHeight: 1.25
            }}
          >
            Looking for a Sightseeing Spot?
          </h2>

          <p style={{ color: '#52645C', fontSize: '0.98rem', lineHeight: 1.65, marginBottom: '30px' }}>
            The destination you are trying to view could not be found or may have been updated. Explore all of our verified Chikkamagaluru destinations, viewpoints, waterfalls, and adventure trails.
          </p>

          <Link
            to="/destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: '#123C2A',
              color: '#FFD429',
              padding: '13px 30px',
              borderRadius: '30px',
              fontWeight: 800,
              fontSize: '0.96rem',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(18, 60, 42, 0.25)',
              border: '1.5px solid #FFD429',
              transition: 'all 0.25s ease'
            }}
          >
            <ArrowLeft size={18} color="#FFD429" />
            <span>Back to Destinations</span>
          </Link>
        </div>
      </div>
    );
  }

  // Authentic Destination Detail View
  return (
    <div style={{ background: '#F7F4E9' }}>
      
      {/* Detail Hero Section */}
      <section
        style={{
          position: 'relative',
          height: '52vh',
          minHeight: '380px',
          backgroundImage: `linear-gradient(rgba(9, 23, 17, 0.45), rgba(18, 60, 42, 0.9)), url("${destination.mainImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#F7F4E9',
          paddingBottom: '44px'
        }}
      >
        <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          
          <Link
            to="/destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#FFD429',
              fontWeight: 700,
              fontSize: '0.92rem',
              textDecoration: 'none',
              marginBottom: '16px',
              background: 'rgba(18, 60, 42, 0.6)',
              padding: '6px 14px',
              borderRadius: '20px',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)'
            }}
          >
            <ArrowLeft size={16} /> Back to Destinations
          </Link>

          <span
            style={{
              display: 'inline-block',
              background: '#FFD429',
              color: '#123C2A',
              fontWeight: 800,
              fontSize: '0.8rem',
              padding: '5px 14px',
              borderRadius: '16px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}
          >
            {destination.category}
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#F7F4E9',
              textShadow: '0 2px 12px rgba(0,0,0,0.4)'
            }}
          >
            {destination.name}
          </h1>

        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 24px' }}>
          
          <div className="dest-detail-layout">
            
            {/* Left Main Content */}
            <div style={{ flex: '1 1 65%', minWidth: '300px' }}>
              
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '36px',
                  border: '1.5px solid rgba(18, 60, 42, 0.1)',
                  boxShadow: '0 6px 24px rgba(18, 60, 42, 0.05)',
                  marginBottom: '32px'
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#123C2A',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    marginBottom: '16px'
                  }}
                >
                  About {destination.name}
                </h2>

                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.75,
                    color: '#2D3748',
                    marginBottom: '20px'
                  }}
                >
                  {destination.description}
                </p>

                {/* Tags if present */}
                {destination.tags && destination.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                    {destination.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'rgba(18, 60, 42, 0.06)',
                          color: '#123C2A',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          padding: '4px 12px',
                          borderRadius: '14px',
                          textTransform: 'capitalize'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Photo Gallery if present */}
              {destination.gallery && destination.gallery.length > 0 && (
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '36px',
                    border: '1.5px solid rgba(18, 60, 42, 0.1)',
                    boxShadow: '0 6px 24px rgba(18, 60, 42, 0.05)',
                    marginBottom: '32px'
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      color: '#123C2A',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      marginBottom: '20px'
                    }}
                  >
                    Photo Gallery
                  </h3>
                  
                  <div className="dest-gallery-grid">
                    {destination.gallery.map((imgUrl, i) => (
                      <div
                        key={i}
                        className="img-zoom-container"
                        style={{
                          height: '210px',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`${destination.name} scenery ${i + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visitor Guidelines Card */}
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '32px',
                  border: '1.5px solid rgba(18, 60, 42, 0.1)',
                  boxShadow: '0 6px 24px rgba(18, 60, 42, 0.05)',
                  marginBottom: '32px'
                }}
              >
                <h3
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#123C2A',
                    fontSize: '1.3rem',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 800
                  }}
                >
                  <Info size={22} color="#B28C00" />
                  <span>Visitor Information & Guidelines</span>
                </h3>

                <p style={{ fontSize: '0.98rem', color: '#52645C', lineHeight: 1.65 }}>
                  {destination.visitorInfo ||
                    'Best visited during morning hours. Please carry suitable walking shoes and rain gear during monsoon.'}
                </p>

                {destination.additionalFees && (
                  <div
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(18, 60, 42, 0.1)',
                      fontSize: '0.9rem',
                      color: '#123C2A',
                      fontWeight: 700
                    }}
                  >
                    Note on Local Charges: {destination.additionalFees}
                  </div>
                )}
              </div>

              {/* Pricing Disclaimer */}
              <PricingDisclaimer />

            </div>

            {/* Right Action Sidebar Card */}
            <div style={{ flex: '1 1 32%', minWidth: '280px' }}>
              <div
                style={{
                  background: '#123C2A',
                  color: '#F7F4E9',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  position: 'sticky',
                  top: '100px',
                  boxShadow: '0 12px 36px rgba(18, 60, 42, 0.25)',
                  border: '1.5px solid rgba(255, 212, 41, 0.3)'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(255, 212, 41, 0.15)',
                    color: '#FFD429',
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '14px',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    marginBottom: '12px'
                  }}
                >
                  CHIKKAMAGALURU TOUR
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#FFD429',
                    marginBottom: '22px',
                    fontSize: '1.5rem',
                    fontWeight: 800
                  }}
                >
                  Plan Your Visit
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.95rem', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div
                      style={{
                        background: 'rgba(255, 212, 41, 0.15)',
                        padding: '8px',
                        borderRadius: '10px',
                        display: 'flex'
                      }}
                    >
                      <MapPin size={20} color="#FFD429" />
                    </div>
                    <div>
                      <span style={{ color: '#A0B2A9', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'block' }}>
                        LOCATION
                      </span>
                      <strong style={{ color: '#F7F4E9', fontSize: '1rem' }}>{destination.location}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div
                      style={{
                        background: 'rgba(255, 212, 41, 0.15)',
                        padding: '8px',
                        borderRadius: '10px',
                        display: 'flex'
                      }}
                    >
                      <Clock size={20} color="#FFD429" />
                    </div>
                    <div>
                      <span style={{ color: '#A0B2A9', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', display: 'block' }}>
                        RECOMMENDED DURATION
                      </span>
                      <strong style={{ color: '#F7F4E9', fontSize: '1rem' }}>{destination.duration}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    onClick={() => onOpenBooking && onOpenBooking(destination.name)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: '#FFD429',
                      color: '#123C2A',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      padding: '14px 20px',
                      borderRadius: '30px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(255, 212, 41, 0.35)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Calendar size={18} />
                    <span>Book Sightseeing Vehicle</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildDestinationWhatsAppMessage(destination.name))}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: '#25D366',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      padding: '14px 20px',
                      borderRadius: '30px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <MessageSquare size={18} />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Related Sightseeing Spots Section */}
          {related && related.length > 0 && (
            <div style={{ marginTop: '70px', paddingTop: '50px', borderTop: '1.5px solid rgba(18, 60, 42, 0.15)' }}>
              
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(18, 60, 42, 0.08)',
                    color: '#123C2A',
                    padding: '5px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    marginBottom: '10px'
                  }}
                >
                  DISCOVER MORE
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: '#123C2A',
                    fontSize: '2rem',
                    fontWeight: 800
                  }}
                >
                  Other Sightseeing Spots in Chikkamagaluru
                </h3>
              </div>

              <div className="dest-gallery-grid">
                {related.map((rel) => (
                  <div
                    key={rel._id || rel.slug}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1.5px solid rgba(18, 60, 42, 0.1)',
                      boxShadow: '0 6px 20px rgba(18, 60, 42, 0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <Link to={`/destinations/${rel.slug || rel._id}`} style={{ display: 'block', textDecoration: 'none' }}>
                        <div className="img-zoom-container" style={{ height: '180px', position: 'relative' }}>
                          <img
                            src={rel.mainImage}
                            alt={rel.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            loading="lazy"
                          />
                          <span
                            style={{
                              position: 'absolute',
                              top: '10px',
                              left: '10px',
                              background: '#123C2A',
                              color: '#FFD429',
                              fontSize: '0.72rem',
                              fontWeight: 800,
                              padding: '4px 10px',
                              borderRadius: '12px'
                            }}
                          >
                            {rel.category}
                          </span>
                        </div>
                      </Link>

                      <div style={{ padding: '16px' }}>
                        <Link to={`/destinations/${rel.slug || rel._id}`} style={{ textDecoration: 'none' }}>
                          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C2A', marginBottom: '8px' }}>
                            {rel.name}
                          </h4>
                        </Link>
                        <p style={{ fontSize: '0.85rem', color: '#52645C', lineHeight: 1.5, marginBottom: '12px' }}>
                          {rel.description && rel.description.length > 90
                            ? rel.description.substring(0, 90) + '...'
                            : rel.description}
                        </p>
                      </div>
                    </div>

                    <div style={{ padding: '0 16px 16px' }}>
                      <Link
                        to={`/destinations/${rel.slug || rel._id}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          background: '#123C2A',
                          color: '#F7F4E9',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          padding: '10px 16px',
                          borderRadius: '24px',
                          textDecoration: 'none'
                        }}
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} color="#FFD429" />
                      </Link>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Responsive layout styles */}
      <style>{`
        .dest-detail-layout {
          display: flex;
          gap: 36px;
          align-items: flex-start;
        }
        .dest-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 992px) {
          .dest-detail-layout {
            flex-direction: column;
          }
          .dest-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .dest-gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </div>
  );
};

export default DestinationDetail;
