import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import HeroCarousel from './HeroCarousel';
import BookingSearch from './BookingSearch';
import { openWhatsApp } from '../../utils/whatsapp';
import './Hero.css';

const Hero = ({ onOpenBooking }) => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I would like to plan a trip to Chikkamagaluru. Please share your sightseeing packages, vehicle rates, and available dates.'
    );
  };

  return (
    <section className="hero-split-section" aria-label="Sunil Tours Hero Section">
      <div className="hero-split-container">
        
        {/* LEFT COLUMN: Text Content & CTAs (~45% width) */}
        <div className="hero-left-column">
          
          {/* Eyebrow Tagline Badge */}
          <div className="hero-eyebrow-badge">
            <Compass size={16} />
            <span>YOUR CHIKKAMAGALURU ADVENTURE STARTS HERE</span>
          </div>

          {/* Large Animated Heading */}
          <h1 className="hero-split-heading">
            <span className="heading-line-ivory">Explore the Hills.</span>
            <span className="heading-line-yellow">Feel the Thrill.</span>
          </h1>

          {/* Description */}
          <p className="hero-split-description">
            Discover breathtaking mountains, refreshing waterfalls, jeep adventures, and unforgettable sightseeing experiences with Sunil Tours N Travels.
          </p>

          {/* 4 Feature Badges */}
          <div className="hero-feature-badges-grid">
            <span className="hero-badge-pill">🌿 Scenic Sightseeing</span>
            <span className="hero-badge-pill">🚙 Jeep Adventures</span>
            <span className="hero-badge-pill">👨‍👩‍👧‍👦 Group Travel</span>
            <span className="hero-badge-pill">✨ Nature Memories</span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <Link to="/destinations" className="hero-primary-btn">
              <span>Explore Destinations</span>
              <ArrowRight size={18} className="btn-arrow-motion" />
            </Link>

            <button
              onClick={handleWhatsAppClick}
              className="hero-whatsapp-btn"
              type="button"
            >
              <MessageSquare size={18} />
              <span>Book on WhatsApp</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Automatic Image Carousel (~55% width) */}
        <div className="hero-right-column">
          <HeroCarousel />
        </div>

      </div>

      {/* WIDE GLASS BOOKING SEARCH PANEL (FLOATING OVERLAY BELOW HERO) */}
      <div className="container">
        <BookingSearch onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
};

export default Hero;
