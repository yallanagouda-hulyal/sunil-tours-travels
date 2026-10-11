import React from 'react';
import { AlertCircle } from 'lucide-react';

const PricingDisclaimer = ({ customText }) => {
  const disclaimer = customText || "Listed sightseeing rates cover vehicle charges only. Waterfall entry fees, entry tickets, jeep trekking, zipline, adventure activities, and other optional activity charges are not included unless explicitly stated. Additional expenses and package inclusions will be confirmed before booking.";

  return (
    <div
      style={{
        background: 'rgba(255, 212, 41, 0.12)',
        border: '1px solid rgba(255, 212, 41, 0.4)',
        borderRadius: 'var(--radius-md)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px',
        margin: '20px 0',
        backdropFilter: 'blur(8px)'
      }}
    >
      <AlertCircle size={22} color="var(--color-primary-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
      <div>
        <h5 style={{ fontWeight: 700, color: 'var(--color-primary-green)', marginBottom: '4px', fontSize: '0.92rem' }}>
          Important Pricing Disclaimer & Vehicle Charges
        </h5>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
          {disclaimer}
        </p>
      </div>
    </div>
  );
};

export default PricingDisclaimer;
