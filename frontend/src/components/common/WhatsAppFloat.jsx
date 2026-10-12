import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './WhatsAppFloat.css';

const WhatsAppFloat = ({ isHome: propIsHome }) => {
  const phoneNumber = '+918197007359';
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const isHome = propIsHome !== undefined ? propIsHome : location.pathname === '/';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWhatsAppClick = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I would like to enquire about Chikkamagaluru sightseeing packages, off-road jeep safaris, and vehicle hire.'
    );
  };

  return (
    <div className={`whatsapp-float-container ${isHome ? 'home-page-floating-whatsapp' : ''}`}>
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Sunil Tours"
        title="Call +91 8197007359"
        className="whatsapp-float-call-btn"
      >
        <Phone size={isMobile ? 20 : 24} />
      </a>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        type="button"
        aria-label="Chat on WhatsApp"
        title="WhatsApp +91 8197007359"
        className="whatsapp-float-chat-btn"
      >
        <MessageSquare size={isMobile ? 24 : 30} />
        <span className="whatsapp-float-online-dot" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
