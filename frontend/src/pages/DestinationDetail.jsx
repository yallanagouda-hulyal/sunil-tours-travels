import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Info, AlertCircle, ArrowLeft, MessageSquare, Calendar } from 'lucide-react';
import PricingDisclaimer from '../components/common/PricingDisclaimer';
import API from '../services/api';
import { openWhatsApp, buildDestinationWhatsAppMessage } from '../utils/whatsapp';

const DestinationDetail = ({ onOpenBooking }) => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const res = await API.get(`/destinations/${slug}`);
        if (res.success) {
          setDestination(res.destination);
          setRelated(res.related || []);
        }
      } catch (err) {
        console.error('Error fetching destination details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="section-padding" style={{ textAlign: 'center', color: 'var(--color-primary-green)' }}>
        Loading destination details...
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="section-padding" style={{ textAlign: 'center' }}>
        <h2>Destination not found.</h2>
        <Link to="/destinations" className="btn btn-green" style={{ marginTop: '16px' }}>
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Detail Hero Section */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '350px',
          backgroundImage: `linear-gradient(rgba(9, 23, 17, 0.4), rgba(18, 60, 42, 0.85)), url("${destination.mainImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          color: 'var(--color-warm-ivory)',
          paddingBottom: '40px'
        }}
      >
        <div className="container">
          <Link to="/destinations" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-adventure-yellow)', fontWeight: 600, marginBottom: '14px' }}>
            <ArrowLeft size={16} /> Back to Destinations
          </Link>
          <span className="badge badge-yellow" style={{ display: 'table', marginBottom: '8px' }}>
            {destination.category}
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700 }}>
            {destination.name}
          </h1>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="section-padding">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
            
            {/* Left Main Content */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', marginBottom: '16px' }}>
                About {destination.name}
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text-main)', marginBottom: '30px' }}>
                {destination.description}
              </p>

              {/* Photo Gallery if present */}
              {destination.gallery && destination.gallery.length > 0 && (
                <div style={{ marginBottom: '40px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-primary-green)', marginBottom: '16px', fontSize: '1.4rem' }}>
                    Photo Gallery
                  </h3>
                  <div className="grid grid-2">
                    {destination.gallery.map((imgUrl, i) => (
                      <div key={i} className="img-zoom-container" style={{ height: '200px', borderRadius: '12px' }}>
                        <img src={imgUrl} alt={`${destination.name} photo ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visitor Guidelines Card */}
              <div className="glass-card" style={{ padding: '24px', marginBottom: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-green)', fontSize: '1.25rem', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                  <Info size={20} color="var(--color-adventure-yellow)" /> Visitor Information & Guidelines
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {destination.visitorInfo || 'Best visited during morning hours. Please carry suitable walking shoes and rain gear during monsoon.'}
                </p>
                {destination.additionalFees && (
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(18,60,42,0.1)', fontSize: '0.88rem', color: 'var(--color-primary-green)', fontWeight: 600 }}>
                    Local Charges Disclaimer: {destination.additionalFees}
                  </div>
                )}
              </div>

              {/* Pricing Disclaimer */}
              <PricingDisclaimer />

            </div>

            {/* Right Action Sidebar Card */}
            <div>
              <div className="glass-card-dark" style={{ padding: '24px', sticky: 'top', top: '100px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-adventure-yellow)', marginBottom: '20px', fontSize: '1.3rem' }}>
                  Plan Your Visit
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.95rem', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MapPin size={20} color="var(--color-adventure-yellow)" />
                    <div>
                      <span style={{ color: '#B0C2B9', fontSize: '0.8rem', display: 'block' }}>LOCATION</span>
                      <strong>{destination.location}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Clock size={20} color="var(--color-adventure-yellow)" />
                    <div>
                      <span style={{ color: '#B0C2B9', fontSize: '0.8rem', display: 'block' }}>RECOMMENDED DURATION</span>
                      <strong>{destination.duration}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button onClick={() => onOpenBooking(destination.name)} className="btn btn-yellow" style={{ width: '100%', justifyContent: 'center' }}>
                    <Calendar size={18} /> Book Sightseeing Vehicle
                  </button>

                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildDestinationWhatsAppMessage(destination.name))}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageSquare size={18} /> Enquire on WhatsApp
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
