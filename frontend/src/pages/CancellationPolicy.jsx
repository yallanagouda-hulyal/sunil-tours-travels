import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarX,
  ShieldCheck,
  FileText,
  PhoneCall,
  Clock,
  CreditCard,
  Info,
  Home,
  ChevronRight,
  MapPin,
  Compass,
  Phone,
  CheckCircle2,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsapp';
import './PolicyPages.css';

const CancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppEnquiry = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I am reviewing your Cancellation & Refund Policy and have a question regarding booking terms.'
    );
  };

  const handleWhatsAppCancellation = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I would like to request a cancellation/rescheduling for my booking. Please find my details: Full Name: [Your Name], Booking Date: [Travel Date], Package/Vehicle: [Vehicle Type].'
    );
  };

  return (
    <div className="policy-page-root">
      
      {/* ========================================================= */}
      {/* 1. SCENIC HERO BANNER (MOUNTAIN ROAD WITH LUXURY TOURIST BUS) */}
      {/* ========================================================= */}
      <section className="policy-hero-banner" aria-label="Cancellation Policy Banner">
        <div className="policy-hero-container">
          
          {/* Breadcrumb Navigation: Home > Cancellation & Refund Policy */}
          <nav className="policy-hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={15} /> Home
            </Link>
            <span className="separator">&gt;</span>
            <span className="current">Cancellation &amp; Refund Policy</span>
          </nav>

          {/* Official Badge */}
          <div className="policy-hero-badge">
            <CalendarX size={14} />
            <span>Official Policy &bull; Sunil Tours N Travels</span>
          </div>

          {/* Main Title with "Refund Policy" Highlighted in Yellow */}
          <h1 className="policy-hero-title">
            Cancellation &amp; <span className="highlight-yellow">Refund Policy</span>
          </h1>

          {/* Short Subtitle */}
          <p className="policy-hero-subtitle">
            Advance booking cancellation terms, refund percentages, formal request procedures, and processing timelines for tours in Chikkamagaluru.
          </p>

          {/* Meta Information */}
          <div className="policy-hero-meta">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={14} /> Last Updated: October 2026
            </span>
            <span>&bull;</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} /> Chikkamagaluru, Karnataka, India
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. POLICY HORIZONTAL NAVIGATION TABS */}
      {/* ========================================================= */}
      <section className="policy-tabs-section">
        <div className="policy-tabs-container">
          <nav className="policy-tabs-nav" aria-label="Policy Tabs">
            <Link to="/privacy-policy" className="policy-tab-link">
              <ShieldCheck size={16} />
              <span>Privacy Policy</span>
            </Link>
            <Link to="/terms-and-conditions" className="policy-tab-link">
              <FileText size={16} />
              <span>Terms &amp; Conditions</span>
            </Link>
            <Link to="/cancellation-policy" className="policy-tab-link active">
              <CalendarX size={16} />
              <span>Cancellation &amp; Refund Policy</span>
            </Link>
          </nav>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. TWO-COLUMN MAIN CONTENT LAYOUT */}
      {/* ========================================================= */}
      <main className="policy-main-section">
        <div className="policy-layout-grid">
          
          {/* ----------------------------------------------------- */}
          {/* LEFT COLUMN — POLICY CONTENT (LARGE WHITE CARD) */}
          {/* ----------------------------------------------------- */}
          <article className="policy-content-card">
            
            {/* Section 1: Advance Booking Cancellation Terms & 3 Refund Cards */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <CalendarX size={22} />
                </div>
                <h2 className="policy-block-title">Advance Booking Cancellation Terms</h2>
              </div>
              <p className="policy-p">
                We understand that travel plans can change unexpectedly. In the event of a cancellation, refunds of advance booking amounts are calculated strictly according to the following schedule:
              </p>

              {/* 3 Visually Distinct Refund Cards */}
              <div className="refund-tiers-grid">
                
                {/* Card 1: Full Refund — 100% */}
                <div className="refund-tier-card refund-tier-full">
                  <div className="refund-tier-header">
                    <span className="refund-tier-badge badge-full">
                      <CheckCircle2 size={13} /> Full Refund
                    </span>
                    <div className="refund-tier-icon icon-full">
                      <CheckCircle2 size={18} />
                    </div>
                  </div>

                  <div className="refund-tier-body">
                    <div className="refund-tier-percentage percent-full">100%</div>
                    <div className="refund-tier-timeline">48+ Hours Before Departure</div>
                    <p className="refund-tier-desc">
                      100% full refund of the advance booking amount for cancellations requested 48 hours or more prior to scheduled trip departure.
                    </p>
                  </div>
                </div>

                {/* Card 2: Partial Refund — 50% */}
                <div className="refund-tier-card refund-tier-partial">
                  <div className="refund-tier-header">
                    <span className="refund-tier-badge badge-partial">
                      <Clock size={13} /> Partial Refund
                    </span>
                    <div className="refund-tier-icon icon-partial">
                      <Clock size={18} />
                    </div>
                  </div>

                  <div className="refund-tier-body">
                    <div className="refund-tier-percentage percent-partial">50%</div>
                    <div className="refund-tier-timeline">24 to 48 Hours Before</div>
                    <p className="refund-tier-desc">
                      50% of the advance booking amount refunded if cancelled between 24 and 48 hours before scheduled trip departure.
                    </p>
                  </div>
                </div>

                {/* Card 3: No Refund — 0% */}
                <div className="refund-tier-card refund-tier-none">
                  <div className="refund-tier-header">
                    <span className="refund-tier-badge badge-none">
                      <AlertTriangle size={13} /> No Refund
                    </span>
                    <div className="refund-tier-icon icon-none">
                      <AlertTriangle size={18} />
                    </div>
                  </div>

                  <div className="refund-tier-body">
                    <div className="refund-tier-percentage percent-none">0%</div>
                    <div className="refund-tier-timeline">Within 24 Hours / No-Show</div>
                    <p className="refund-tier-desc">
                      Advance booking amount is strictly non-refundable for cancellations made within 24 hours of travel or in case of a guest no-show.
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: How to Request a Cancellation */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <PhoneCall size={22} />
                </div>
                <h2 className="policy-block-title">How to Request a Cancellation</h2>
              </div>
              <p className="policy-p">
                To request a cancellation, travelers must contact Sunil Tours N Travels directly through one of our official communication channels:
              </p>
              
              <div className="policy-subcard">
                <div className="policy-subcard-title">Direct Official Channels</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <strong>1. Direct Telephone Call:</strong>
                    <span>Speak with our reservation manager at</span>
                    <a href="tel:+918197007359" style={{ color: '#123C2A', fontWeight: 800, textDecoration: 'underline' }}>
                      +91 8197007359
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <strong>2. Official WhatsApp Message:</strong>
                    <span>Send a cancellation request from the phone number used during booking to</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppCancellation}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        color: '#0E6838',
                        fontWeight: 800,
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        fontSize: '0.92rem'
                      }}
                    >
                      +91 8197007359 (Click to Chat)
                    </button>
                  </div>
                </div>
              </div>

              <p className="policy-p" style={{ marginTop: '12px' }}>
                Please provide your <strong>full name, travel date, vehicle type or package booked, and reason for cancellation</strong> so our management can process your request without delay.
              </p>
            </section>

            {/* Section 3: How Cancellation Time is Determined */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Clock size={22} />
                </div>
                <h2 className="policy-block-title">How Cancellation Time is Determined</h2>
              </div>
              <p className="policy-p">
                The cancellation time is officially recorded based on the timestamp when your telephone call or WhatsApp message is received and logged by our management during standard business hours (8:00 AM – 9:00 PM IST).
              </p>
              <p className="policy-p">
                Messages received outside operational hours will be timestamped at the opening of the next business morning for refund tier calculation purposes.
              </p>
            </section>

            {/* Section 4: How Refunds Are Processed */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <CreditCard size={22} />
                </div>
                <h2 className="policy-block-title">How Refunds Are Processed</h2>
              </div>
              <p className="policy-p">
                Eligible refunds under the 100% or 50% tiers will be transferred back using the original payment channel (such as UPI ID / Google Pay / PhonePe or direct NEFT/IMPS bank transfer) from which the advance payment was received.
              </p>
            </section>

            {/* Section 5: Notice for Travelers */}
            <div className="policy-page-notice">
              <Info size={24} className="policy-page-notice-icon" />
              <div>
                <span className="policy-page-notice-title">Notice for Travelers &bull; Operational Confirmation</span>
                <div>
                  Exact banking turnaround times (e.g. standard bank clearance of 5–7 business days) and any non-recoverable third-party payment gateway transaction deductions are subject to direct confirmation with the business operator upon cancellation.
                </div>
                <div style={{ marginTop: '8px' }}>
                  In exceptional circumstances involving natural disasters, heavy landslides, or official district road closures that prevent travel, rescheduling or refund options will be reviewed directly by the operator on a case-by-case basis.
                </div>
              </div>
            </div>

          </article>

          {/* ----------------------------------------------------- */}
          {/* RIGHT COLUMN — QUICK LINKS & SUPPORT (STICKY SIDEBAR) */}
          {/* ----------------------------------------------------- */}
          <aside className="policy-sidebar" aria-label="Quick Links & Support">
            
            {/* Sidebar Card 1: Quick Links */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Quick Links</h3>
              <p className="sidebar-subtitle">
                Explore our official policies and company details
              </p>

              <nav className="sidebar-nav-list" aria-label="Sidebar Navigation">
                <Link to="/privacy-policy" className="sidebar-nav-item">
                  <div className="nav-left">
                    <ShieldCheck size={16} />
                    <span>Privacy Policy</span>
                  </div>
                  <ChevronRight size={15} />
                </Link>

                <Link to="/terms-and-conditions" className="sidebar-nav-item">
                  <div className="nav-left">
                    <FileText size={16} />
                    <span>Terms &amp; Conditions</span>
                  </div>
                  <ChevronRight size={15} />
                </Link>

                <Link to="/cancellation-policy" className="sidebar-nav-item active">
                  <div className="nav-left">
                    <CalendarX size={16} />
                    <span>Cancellation Policy</span>
                  </div>
                  <ChevronRight size={15} />
                </Link>

                <Link to="/about" className="sidebar-nav-item">
                  <div className="nav-left">
                    <Compass size={16} />
                    <span>About Us</span>
                  </div>
                  <ChevronRight size={15} />
                </Link>

                <Link to="/contact" className="sidebar-nav-item">
                  <div className="nav-left">
                    <PhoneCall size={16} />
                    <span>Contact Us</span>
                  </div>
                  <ChevronRight size={15} />
                </Link>
              </nav>
            </div>

            {/* Sidebar Card 2: Have Questions? Scenic Support Card */}
            <div className="sidebar-support-card">
              <span className="support-badge">
                <FaWhatsapp size={12} /> Direct Operator
              </span>
              <h3 className="support-heading">Have Questions?</h3>
              <p className="support-text">
                Need help with a trip cancellation, rescheduling due to weather, or advance booking refunds? Chat directly with us on WhatsApp.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="support-whatsapp-btn"
                aria-label="Chat on WhatsApp with Sunil Tours"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Sidebar Card 3: Direct Assistance Card */}
            <div className="sidebar-assistance-card">
              <div className="assistance-header">
                <div className="assistance-icon">
                  <Phone size={18} />
                </div>
                <h3 className="assistance-title">Direct Assistance</h3>
              </div>

              <a href="tel:+918197007359" className="assistance-phone">
                +91 8197007359
              </a>
              <div className="assistance-hours">
                Daily: 8:00 AM – 9:00 PM IST
              </div>

              <a href="tel:+918197007359" className="assistance-call-btn">
                <PhoneCall size={15} />
                <span>Call Our Helpline</span>
              </a>
            </div>

          </aside>

        </div>
      </main>

    </div>
  );
};

export default CancellationPolicy;
