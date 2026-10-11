import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import './JeepAdventure.css';

const JeepAdventure = () => {
  const handleWhatsAppEnquiry = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I would like to enquire about 4x4 off-road jeep trekking and adventure safari packages in Chikkamagaluru (Mullayanagiri, Jhari Falls, Bababudangiri, Hebbe Falls). Please share details, vehicle rates, and availability.'
    );
  };

  const features = [
    { id: 1, emoji: '🚐', title: 'Jeep Trekking' },
    { id: 2, emoji: '🏔️', title: 'Scenic Viewpoints' },
    { id: 3, emoji: '🌊', title: 'Waterfall Visits' },
    { id: 4, emoji: '🧗', title: 'Optional Zipline Activities' },
  ];

  return (
    <section className="jeep-adventure-section" aria-label="Jeep Adventure and Offroad Safaris">
      <div className="jeep-adventure-container">
        
        {/* LEFT COLUMN: Large Jeep Photograph (~48% width) */}
        <motion.div
          className="jeep-left-column"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="jeep-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
              alt="Rugged 4x4 Off-Road Jeep Trekking in Chikkamagaluru Western Ghats Mountain Trails"
              className="jeep-main-image"
              loading="lazy"
            />

            {/* Floating Yellow Pill Badge */}
            <div className="jeep-floating-badge" aria-label="Adventure Awaits">
              <Sparkles size={16} className="badge-sparkle-icon" />
              <span>Adventure Awaits</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Content, Feature List & WhatsApp CTA (~42% width) */}
        <motion.div
          className="jeep-right-column"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Badge */}
          <div className="jeep-eyebrow-badge">
            <span>THRILL & OFFROAD SAFARIS</span>
          </div>

          {/* Large Ivory and Yellow Heading */}
          <h2 className="jeep-heading">
            <span className="heading-line-ivory">Beyond Sightseeing.</span>
            <span className="heading-line-yellow">Into Adventure.</span>
          </h2>

          {/* Descriptive Paragraph */}
          <p className="jeep-description">
            Experience the thrill of Chikkamagaluru with jeep adventures, mountain viewpoints, nature trails, and unforgettable group experiences.
          </p>

          {/* 2-Column Feature List */}
          <div className="jeep-features-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                className="jeep-feature-item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.25 + idx * 0.08 }}
              >
                <Check size={18} className="jeep-check-icon" />
                <span className="jeep-feature-emoji" role="img" aria-label={feature.title}>
                  {feature.emoji}
                </span>
                <span className="jeep-feature-text">{feature.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Large Yellow WhatsApp Enquiry Button */}
          <div className="jeep-cta-wrapper">
            <button
              onClick={handleWhatsAppEnquiry}
              className="jeep-whatsapp-btn"
              type="button"
              aria-label="Enquire on WhatsApp about jeep trekking and adventure packages"
            >
              <span>Enquire on WhatsApp</span>
              <MessageSquare size={20} className="cta-chat-icon" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JeepAdventure;
