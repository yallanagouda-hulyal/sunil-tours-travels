import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './FaqSection.css';

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: 'What are the vehicle charges for Chikkamagaluru sightseeing?',
      a: 'Day 1 sightseeing is ₹3,500; Day 2 sightseeing is ₹4,000; Day 3 sightseeing is ₹3,500; Day 4 custom sightseeing is ₹3,500. Rates cover vehicle charges only.'
    },
    {
      q: 'Are entry tickets, waterfall jeep rides, and zipline included in vehicle prices?',
      a: 'No. Sightseeing rates cover private vehicle, driver allowance, fuel, and tolls. Entry tickets, Jhari/Hebbe jeep safaris, and adventure activity fees are paid directly at location checkpoints.'
    },
    {
      q: 'Do you provide 10-seater Tempo Travellers and 50-seater buses?',
      a: 'Yes! We have 10-seater Force Tempo Travellers for families and 50-seater luxury buses equipped with soft pushback seats and sound systems for large college or corporate outings.'
    },
    {
      q: 'How can I book a student or corporate group tour?',
      a: 'You can submit an enquiry form or message us directly on WhatsApp at +91 8197007359. We provide custom group quotations including transport, bonfire, and resort assistance.'
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="faq-section-wrapper">
      {/* Upper Foliage Vector Overlay */}
      <svg className="faq-bg-foliage-left" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20 -20 C 40 30, 80 100, 30 160 C 10 180, -20 200, -20 200 Z" fill="#123C2A" opacity="0.06" />
        <path d="M-10 10 Q 50 30, 90 90 T 130 140" stroke="#123C2A" strokeWidth="3" opacity="0.12" strokeLinecap="round" />
        <path d="M30 40 Q 60 20, 80 40 Q 60 60, 30 40 Z" fill="#123C2A" opacity="0.09" />
        <path d="M50 70 Q 90 60, 110 80 Q 80 100, 50 70 Z" fill="#123C2A" opacity="0.09" />
        <path d="M70 110 Q 110 100, 135 125 Q 105 140, 70 110 Z" fill="#123C2A" opacity="0.09" />
      </svg>

      <svg className="faq-bg-foliage-right" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20 -20 C 40 30, 80 100, 30 160 C 10 180, -20 200, -20 200 Z" fill="#123C2A" opacity="0.06" />
        <path d="M-10 10 Q 50 30, 90 90 T 130 140" stroke="#123C2A" strokeWidth="3" opacity="0.12" strokeLinecap="round" />
        <path d="M30 40 Q 60 20, 80 40 Q 60 60, 30 40 Z" fill="#123C2A" opacity="0.09" />
        <path d="M50 70 Q 90 60, 110 80 Q 80 100, 50 70 Z" fill="#123C2A" opacity="0.09" />
        <path d="M70 110 Q 110 100, 135 125 Q 105 140, 70 110 Z" fill="#123C2A" opacity="0.09" />
      </svg>

      {/* Mountain Scenery Vector Silhouettes */}
      <svg className="faq-bg-mountain-left" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 180 L0 100 L40 130 L90 80 L140 120 L210 50 L280 110 L340 90 L400 180 Z" fill="#123C2A" opacity="0.08" />
        <path d="M0 180 L0 120 L60 145 L130 90 L200 140 L290 85 L360 130 L400 180 Z" fill="#123C2A" opacity="0.06" />
        <polygon points="40,130 30,155 50,155" fill="#123C2A" opacity="0.12" />
        <polygon points="120,95 110,125 130,125" fill="#123C2A" opacity="0.12" />
        <polygon points="210,50 198,85 222,85" fill="#123C2A" opacity="0.14" />
        <polygon points="275,110 265,135 285,135" fill="#123C2A" opacity="0.12" />
      </svg>

      <svg className="faq-bg-mountain-right" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 180 L0 100 L40 130 L90 80 L140 120 L210 50 L280 110 L340 90 L400 180 Z" fill="#123C2A" opacity="0.08" />
        <path d="M0 180 L0 120 L60 145 L130 90 L200 140 L290 85 L360 130 L400 180 Z" fill="#123C2A" opacity="0.06" />
        <polygon points="40,130 30,155 50,155" fill="#123C2A" opacity="0.12" />
        <polygon points="120,95 110,125 130,125" fill="#123C2A" opacity="0.12" />
        <polygon points="210,50 198,85 222,85" fill="#123C2A" opacity="0.14" />
      </svg>

      <div className="faq-outer-container">
        {/* Header Block */}
        <div className="faq-header">
          <div className="faq-badge">
            <HelpCircle size={15} strokeWidth={2.5} />
            <span>COMMON QUESTIONS</span>
          </div>

          <h2 className="faq-title">
            <span className="faq-title-green">Frequently Asked </span>
            <span className="faq-title-yellow">Questions</span>
          </h2>

          <p className="faq-subtitle">
            “Get quick answers to the most common questions about our Chikkamagaluru tours, vehicles, bookings, and travel services.”
          </p>

          <div className="faq-gold-divider" />
        </div>

        {/* Content Layout with Cards */}
        <div className="faq-content-layout">
          {/* Accordion Cards */}
          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-card ${isOpen ? 'faq-card-active' : ''}`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div
                    className="faq-card-header"
                    onClick={() => toggleFaq(index)}
                    role="button"
                    aria-expanded={isOpen}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleFaq(index);
                      }
                    }}
                  >
                    <div className="faq-question-icon-bg">
                      ?
                    </div>

                    <h3 className="faq-question-text">
                      {faq.q}
                    </h3>

                    <div className={`faq-chevron-bg ${isOpen ? 'faq-chevron-rotated' : ''}`}>
                      <ChevronDown size={20} strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                    <div className="faq-answer-inner">
                      <div className="faq-answer-content">
                        <div className="faq-answer-divider">
                          <p className="faq-answer-text">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp Help Line */}
        <div className="faq-whatsapp-container">
          <div className="faq-whatsapp-line" />
          <button
            type="button"
            onClick={() => openWhatsApp('Hello Sunil Tours N Travels, I have a question regarding tours and bookings.')}
            className="faq-whatsapp-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            <MessageSquare size={19} className="faq-whatsapp-icon" />
            <span>Need more help? Chat with us on WhatsApp</span>
          </button>
          <div className="faq-whatsapp-line" />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
