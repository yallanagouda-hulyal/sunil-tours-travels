import { Phone, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

const WhatsAppFloat = () => {
  const phoneNumber = '+918197007359';

  const handleWhatsAppClick = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I would like to enquire about Chikkamagaluru sightseeing packages, off-road jeep safaris, and vehicle hire.'
    );
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'flex-end'
      }}
    >
      {/* Phone Call Floating Button */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Sunil Tours"
        title="Call +91 8197007359"
        style={{
          background: 'var(--color-primary-green)',
          color: '#FFFFFF',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(18, 60, 42, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          border: '2px solid rgba(255, 255, 255, 0.3)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        type="button"
        aria-label="Chat on WhatsApp"
        title="WhatsApp +91 8197007359"
        style={{
          background: '#25D366',
          color: '#FFFFFF',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageSquare size={30} />
        <span
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '14px',
            height: '14px',
            background: 'var(--color-adventure-yellow)',
            borderRadius: '50%',
            border: '2px solid #25D366'
          }}
        />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
