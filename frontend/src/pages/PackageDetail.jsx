import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  ShieldAlert,
  Compass,
  Camera,
  Info
} from 'lucide-react';
import PricingDisclaimer from '../components/common/PricingDisclaimer';
import ImageLightbox from '../components/common/ImageLightbox';
import API from '../services/api';
import { openWhatsApp, buildPackageWhatsAppMessage } from '../utils/whatsapp';
import { findPackage } from '../data/packagesData';

const PackageDetail = ({ onOpenBooking }) => {
  const { slug } = useParams();
  const initialLocalPkg = findPackage(slug);
  const [pkg, setPkg] = useState(initialLocalPkg || null);
  const [loading, setLoading] = useState(!initialLocalPkg);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(initialLocalPkg?.gallery?.[0] || null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const localMatch = findPackage(slug);
    if (localMatch) {
      setPkg(localMatch);
      if (localMatch.gallery && localMatch.gallery.length > 0) {
        setSelectedGalleryImg(localMatch.gallery[0]);
      }
      setLoading(false);
    } else {
      setLoading(true);
    }

    const fetchPackage = async () => {
      try {
        const res = await API.get(`/packages/${slug}`);
        if (res.success && res.package) {
          setPkg(res.package);
          if (res.package.gallery && res.package.gallery.length > 0) {
            setSelectedGalleryImg(res.package.gallery[0]);
          }
        }
      } catch (err) {
        if (!localMatch) {
          console.warn('API error fetching package details:', err?.message || err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [slug]);

  if (loading) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', padding: '120px 20px', color: 'var(--color-primary-green)' }}>
        <h2>Loading authentic package & destination details...</h2>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '2.2rem', marginBottom: '16px' }}>
          Package Not Found
        </h2>
        <p className="text-muted" style={{ marginBottom: '24px' }}>
          The requested tour package route could not be found or has been updated.
        </p>
        <Link to="/packages" className="btn btn-yellow">
          <ArrowLeft size={16} /> Back to Tour Packages
        </Link>
      </div>
    );
  }


  // Prepare full list of images for Lightbox viewer
  const allImages = pkg.gallery && pkg.gallery.length > 0 
    ? pkg.gallery.map((url, i) => ({ url, caption: `${pkg.name} — Photo ${i + 1}` }))
    : [{ url: pkg.image, caption: pkg.name }];

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  return (
    <div>
      {/* 1. HERO HEADER WITH HD LANDSCAPE IMAGE */}
      <section
        style={{
          position: 'relative',
          minHeight: '440px',
          backgroundImage: `linear-gradient(180deg, rgba(9, 23, 17, 0.45) 0%, rgba(9, 23, 17, 0.85) 100%), url("${selectedGalleryImg || pkg.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          color: 'var(--color-warm-ivory)',
          padding: '60px 0 36px'
        }}
      >
        <div className="container">
          <Link
            to="/packages"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-adventure-yellow)',
              fontWeight: 700,
              marginBottom: '16px',
              textDecoration: 'none',
              background: 'rgba(18,60,42,0.7)',
              padding: '6px 16px',
              borderRadius: '20px',
              backdropFilter: 'blur(6px)'
            }}
          >
            <ArrowLeft size={16} /> Back to Tour Packages
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
            <span className="badge badge-yellow" style={{ fontSize: '0.85rem', fontWeight: 800 }}>
              ⏱ {pkg.duration}
            </span>
            <span className="badge badge-green" style={{ fontSize: '0.85rem', fontWeight: 700 }}>
              📍 {pkg.category} Package
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, textShadow: '0 4px 15px rgba(0,0,0,0.5)', maxWidth: '900px' }}>
            {pkg.name}
          </h1>
        </div>
      </section>

      {/* 2. MAIN DETAILS & SIDEBAR */}
      <section className="section-padding" style={{ paddingTop: '50px' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '40px' }}>
            
            {/* LEFT CONTENT COLUMN */}
            <div>
              
              {/* Tour Overview */}
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '1.8rem', marginBottom: '14px' }}>
                  Tour Overview & Highlights
                </h2>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text-main)' }}>
                  {pkg.description}
                </p>
              </div>

              {/* HD Destination Photo Gallery with Lightbox Trigger */}
              {pkg.gallery && pkg.gallery.length > 0 && (
                <div style={{ marginBottom: '45px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Camera size={20} color="var(--color-primary-green)" /> Genuine Chikkamagaluru Photo Gallery
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      Click photo to enlarge
                    </span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
                    {pkg.gallery.map((imgUrl, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedGalleryImg(imgUrl);
                          handleOpenLightbox(i);
                        }}
                        className="img-zoom-container"
                        style={{
                          height: '110px',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          border: selectedGalleryImg === imgUrl ? '3px solid var(--color-adventure-yellow)' : '1px solid rgba(18,60,42,0.15)',
                          boxShadow: selectedGalleryImg === imgUrl ? '0 0 15px rgba(255,212,41,0.5)' : 'none'
                        }}
                      >
                        <img
                          src={imgUrl}
                          alt={`Chikkamagaluru landmark photo ${i + 1}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sightseeing Destinations Location Cards Grid */}
              {pkg.locationCards && pkg.locationCards.length > 0 && (
                <div style={{ marginBottom: '45px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={22} color="var(--color-primary-green)" /> Sightseeing Destinations Covered
                  </h3>

                  <div className="grid grid-2" style={{ gap: '20px' }}>
                    {pkg.locationCards.map((loc, idx) => (
                      <div key={idx} className="glass-card glass-card-hover" style={{ borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div className="img-zoom-container" style={{ height: '170px', position: 'relative' }}>
                          <img
                            src={loc.image}
                            alt={loc.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80';
                            }}
                          />
                          <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--color-primary-green)', color: 'var(--color-adventure-yellow)', fontSize: '0.76rem', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>
                            {loc.badge || 'Landmark'}
                          </span>
                        </div>
                        <div style={{ padding: '16px' }}>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-green)', marginBottom: '4px' }}>
                            {loc.name}
                          </h4>
                          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                            {loc.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Day-Wise Detailed Itinerary */}
              <div style={{ marginBottom: '45px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Compass size={22} color="var(--color-primary-green)" /> Day-Wise Sightseeing Itinerary
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {pkg.dayWiseItinerary && pkg.dayWiseItinerary.map((dayItem, index) => (
                    <div key={index} className="glass-card" style={{ padding: '24px', borderLeft: '5px solid var(--color-adventure-yellow)', borderRadius: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
                        <span style={{ background: 'var(--color-primary-green)', color: 'var(--color-adventure-yellow)', padding: '5px 14px', borderRadius: '20px', fontWeight: 800, fontSize: '0.88rem' }}>
                          DAY {dayItem.day}
                        </span>
                        <h4 style={{ fontWeight: 700, color: 'var(--color-primary-green)', fontSize: '1.2rem' }}>
                          {dayItem.title}
                        </h4>
                      </div>

                      <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                        {dayItem.description}
                      </p>

                      {dayItem.places && dayItem.places.length > 0 && (
                        <div>
                          <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary-green)', display: 'block', marginBottom: '8px' }}>
                            Key Landmarks & Spots:
                          </strong>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {dayItem.places.map((place, pIdx) => (
                              <span key={pIdx} style={{ background: 'rgba(18,60,42,0.08)', border: '1px solid rgba(18,60,42,0.15)', color: 'var(--color-primary-green)', padding: '5px 12px', borderRadius: '14px', fontSize: '0.84rem', fontWeight: 600 }}>
                                • {place}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel Tips & Adventure Activities */}
              <div className="grid grid-2" style={{ gap: '24px', marginBottom: '45px' }}>
                {pkg.travelTips && pkg.travelTips.length > 0 && (
                  <div className="glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '1.15rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Info size={18} color="var(--color-primary-green)" /> Travel Tips & Guidance
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                      {pkg.travelTips.map((tip, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: 'var(--color-adventure-yellow)', fontWeight: 800 }}>•</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.activities && pkg.activities.length > 0 && (
                  <div className="glass-card" style={{ padding: '24px', borderRadius: '16px' }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', fontSize: '1.15rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Sparkles size={18} color="var(--color-primary-green)" /> Available Activities
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {pkg.activities.map((act, idx) => (
                        <span key={idx} className="badge badge-yellow" style={{ fontSize: '0.82rem' }}>
                          ⚡ {act}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Inclusions & Exclusions Card */}
              <div className="glass-card" style={{ padding: '28px', borderRadius: '18px', marginBottom: '36px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', marginBottom: '20px', fontSize: '1.4rem' }}>
                  Inclusions & Exclusions Breakdown
                </h3>

                <div className="grid grid-2" style={{ gap: '24px' }}>
                  <div>
                    <h4 style={{ color: '#16A34A', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: '14px' }}>
                      <CheckCircle2 size={18} /> What's Included
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                      {pkg.inclusions && pkg.inclusions.map((inc, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#16A34A', fontWeight: 800 }}>✓</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ color: '#DC2626', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: '14px' }}>
                      <XCircle size={18} /> What's Excluded
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: 'var(--color-text-main)' }}>
                      {pkg.exclusions && pkg.exclusions.map((exc, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <span style={{ color: '#DC2626', fontWeight: 800 }}>✕</span> {exc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mandatory Pricing Disclaimer */}
              <PricingDisclaimer />

            </div>

            {/* RIGHT SIDEBAR: ACTION & BOOKING PANEL */}
            <div>
              <div
                className="glass-card-dark"
                style={{
                  padding: '28px',
                  position: 'sticky',
                  top: '100px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '20px', marginBottom: '22px' }}>
                  <span style={{ color: 'var(--color-adventure-yellow)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                    {pkg.priceLabel || 'Vehicle charges'}
                  </span>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-warm-ivory)', margin: '4px 0 2px' }}>
                    ₹{pkg.price ? pkg.price.toLocaleString() : 'Quote'}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#CBD8D2' }}>
                    Covers private vehicle, driver allowance & fuel.
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  
                  {/* Book This Package Button */}
                  <button
                    onClick={() => onOpenBooking(pkg.name)}
                    className="btn btn-yellow btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Calendar size={18} /> Book This Package
                  </button>

                  {/* WhatsApp Enquiry Button */}
                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildPackageWhatsAppMessage({ packageName: pkg.name }))}
                    className="btn btn-whatsapp btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageSquare size={18} /> Enquire on WhatsApp
                  </button>

                  {/* Call Now Button */}
                  <a
                    href="tel:+918197007359"
                    className="btn btn-outline-light btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Phone size={18} /> Call Now (+91 8197007359)
                  </a>

                  {/* Back to Packages */}
                  <Link
                    to="/packages"
                    style={{
                      textAlign: 'center',
                      color: 'var(--color-adventure-yellow)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      marginTop: '8px',
                      textDecoration: 'none'
                    }}
                  >
                    ← Back to All Tour Packages
                  </Link>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FULL-SCREEN IMAGE LIGHTBOX VIEWER */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % allImages.length)}
        />
      )}
    </div>
  );
};

export default PackageDetail;
