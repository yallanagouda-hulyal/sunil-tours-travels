import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import logoImg from '../../assets/images/sunil-tours-logo.png';
import { openWhatsApp } from '../../utils/whatsapp';

const Footer = () => {

  return (
    <footer style={{ background: 'var(--color-primary-green-dark)', color: 'var(--color-text-light)', paddingTop: '60px', paddingBottom: '30px', marginTop: 'auto', borderTop: '2px solid var(--color-adventure-yellow)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Column 1: Brand Info with Approved Logo 1 Asset */}
          <div>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.96)',
                padding: '6px 14px',
                borderRadius: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.18), 0 0 12px rgba(255, 212, 41, 0.25)',
                border: '1px solid rgba(255, 212, 41, 0.5)',
                textDecoration: 'none',
                marginBottom: '20px',
                transition: 'transform 0.25s ease'
              }}
            >
              <img
                src={logoImg}
                alt="Sunil Tours N Travels Chikkamagaluru"
                style={{
                  width: '195px',
                  maxHeight: '52px',
                  objectFit: 'contain',
                  display: 'block',
                  imageRendering: '-webkit-optimize-contrast'
                }}
              />
            </Link>
            <p style={{ color: '#B0C2B9', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
              Your trusted travel partner in Chikkamagaluru, Karnataka. Offering unforgettable mountain sightseeing, 4x4 off-road jeep trekking, 10-seater Tempo Travellers, and 50-seater luxury bus hire.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', color: '#E1306C', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }}>
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', color: '#1877F2', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }}>
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', color: '#FF0000', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }}>
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', color: '#0A66C2', padding: '10px', borderRadius: '50%', display: 'flex', transition: 'transform 0.2s' }}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--color-adventure-yellow)', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li><Link to="/" style={{ color: '#CBD8D2' }}>Home</Link></li>
              <li><Link to="/destinations" style={{ color: '#CBD8D2' }}>Destinations</Link></li>
              <li><Link to="/packages" style={{ color: '#CBD8D2' }}>Sightseeing Packages</Link></li>
              <li><Link to="/vehicles" style={{ color: '#CBD8D2' }}>Vehicle Fleet Hire</Link></li>
              <li><Link to="/about" style={{ color: '#CBD8D2' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: '#CBD8D2' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Sightseeing */}
          <div>
            <h4 style={{ color: 'var(--color-adventure-yellow)', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>
              Popular Tours
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem' }}>
              <li><Link to="/packages/day-1" style={{ color: '#CBD8D2' }}>Day 1: Mullayanagiri Circuit (₹3,500)</Link></li>
              <li><Link to="/packages/day-2" style={{ color: '#CBD8D2' }}>Day 2: Kemmanagundi Tour (₹4,000)</Link></li>
              <li><Link to="/packages/day-3" style={{ color: '#CBD8D2' }}>Day 3: Belur & Halebidu Tour (₹3,500)</Link></li>
              <li><Link to="/packages/student-college-group-tour" style={{ color: '#CBD8D2' }}>Student Group Packages</Link></li>
              <li><Link to="/packages/corporate-team-outing-package" style={{ color: '#CBD8D2' }}>Corporate Outings & Retreats</Link></li>
              <li><Link to="/vehicles" style={{ color: '#CBD8D2' }}>50-Seater Luxury Bus Hire</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 style={{ color: 'var(--color-adventure-yellow)', fontSize: '1.1rem', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>
              Contact Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.92rem', color: '#CBD8D2' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="var(--color-adventure-yellow)" style={{ marginTop: '3px' }} />
                <span>Sunil Tours N Travels, Main Road, Chikkamagaluru, Karnataka 577101, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--color-adventure-yellow)" />
                <a href="tel:+918197007359" style={{ color: '#CBD8D2' }}>+91 8197007359</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={18} color="#25D366" />
                <button
                  type="button"
                  onClick={() => openWhatsApp('Hello Sunil Tours N Travels, I would like to enquire about your tour packages.')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#CBD8D2',
                    cursor: 'pointer',
                    fontSize: '0.92rem',
                    textAlign: 'left'
                  }}
                  onMouseOver={(e) => (e.target.style.color = '#25D366')}
                  onMouseOut={(e) => (e.target.style.color = '#CBD8D2')}
                >
                  WhatsApp: +91 8197007359
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--color-adventure-yellow)" />
                <a
                  href="mailto:suniltoursckm@gmail.com"
                  style={{ color: '#CBD8D2', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseOver={(e) => (e.target.style.color = '#FFD429')}
                  onMouseOut={(e) => (e.target.style.color = '#CBD8D2')}
                >
                  suniltoursckm@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Links & Policies */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '24px',
          paddingBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.88rem',
          color: '#9EAF95'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Sunil Tours N Travels. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link
              to="/privacy-policy"
              style={{ color: '#CBD8D2', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseOver={(e) => (e.target.style.color = '#FFD429')}
              onMouseOut={(e) => (e.target.style.color = '#CBD8D2')}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              style={{ color: '#CBD8D2', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseOver={(e) => (e.target.style.color = '#FFD429')}
              onMouseOut={(e) => (e.target.style.color = '#CBD8D2')}
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/cancellation-policy"
              style={{ color: '#CBD8D2', fontSize: '0.88rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseOver={(e) => (e.target.style.color = '#FFD429')}
              onMouseOut={(e) => (e.target.style.color = '#CBD8D2')}
            >
              Cancellation Policy
            </Link>
          </div>

          {/* EXACT Mandatory Developer Credit */}
          <a
            href="https://bookmywebsite.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-adventure-yellow)',
              fontWeight: 600,
              fontSize: '0.88rem',
              background: 'rgba(255, 212, 41, 0.1)',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 212, 41, 0.25)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Designed and Developed by bookmywebsite.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
