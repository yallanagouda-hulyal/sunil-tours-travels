import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  FileText,
  CalendarX,
  UserCheck,
  Compass,
  Share2,
  Lock,
  Cookie,
  KeyRound,
  RefreshCw,
  PhoneCall,
  Home,
  ChevronRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Info
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsapp';
import './PolicyPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppEnquiry = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I am reviewing your Privacy Policy and would like to enquire about tour packages and vehicle hire in Chikkamagaluru.'
    );
  };

  return (
    <div className="policy-page-root">
      
      {/* ========================================================= */}
      {/* 1. SCENIC HERO BANNER (MOUNTAIN ROAD WITH LUXURY TOURIST BUS) */}
      {/* ========================================================= */}
      <section className="policy-hero-banner" aria-label="Privacy Policy Banner">
        <div className="policy-hero-container">
          
          {/* Breadcrumb Navigation: Home > Privacy Policy */}
          <nav className="policy-hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={15} /> Home
            </Link>
            <span className="separator">&gt;</span>
            <span className="current">Privacy Policy</span>
          </nav>

          {/* Official Badge */}
          <div className="policy-hero-badge">
            <ShieldCheck size={14} />
            <span>Official Policy &bull; Sunil Tours N Travels</span>
          </div>

          {/* Main Title with "Policy" Highlighted in Yellow */}
          <h1 className="policy-hero-title">
            Privacy <span className="highlight-yellow">Policy</span>
          </h1>

          {/* Short Subtitle */}
          <p className="policy-hero-subtitle">
            At Sunil Tours N Travels, your privacy is paramount. Learn how we collect, safeguard, and respect your personal information when booking sightseeing tours, off-road jeep safaris, and vehicle hire across Chikkamagaluru.
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
            <Link to="/privacy-policy" className="policy-tab-link active">
              <ShieldCheck size={16} />
              <span>Privacy Policy</span>
            </Link>
            <Link to="/terms-and-conditions" className="policy-tab-link">
              <FileText size={16} />
              <span>Terms &amp; Conditions</span>
            </Link>
            <Link to="/cancellation-policy" className="policy-tab-link">
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
            
            {/* Section 1: Information We Collect */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <UserCheck size={22} />
                </div>
                <h2 className="policy-block-title">1. Information We Collect</h2>
              </div>
              <p className="policy-p">
                To coordinate mountain sightseeing tours, off-road 4x4 jeep excursions, and passenger vehicle hire across Chikkamagaluru, Sunil Tours N Travels collects basic traveler details submitted voluntarily through our website booking forms, telephone calls, or WhatsApp chats:
              </p>
              <ul className="policy-checklist">
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Personal Contact Details:</strong> Full name and primary mobile/telephone contact number.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Optional Email Address:</strong> Provided voluntarily when sending inquiries or formal group itinerary requests.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Travel Preferences &amp; Dates:</strong> Scheduled travel dates, passenger headcount, selected sightseeing circuits (e.g. Mullayanagiri, Kemmanagundi, Bababudangiri, Belur, Halebidu), and preferred pickup/drop points in Chikkamagaluru, Bangalore, or Mysore.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Vehicle Fleet Requirements:</strong> Specific vehicle category requests (e.g., 10-seater Tempo Traveller, 4x4 Off-Road Jeep, Sedan/SUV, 50-seater Luxury Bus) and special passenger considerations.</span>
                </li>
              </ul>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Compass size={22} />
                </div>
                <h2 className="policy-block-title">2. How We Use Your Information</h2>
              </div>
              <p className="policy-p">
                Information collected from travelers is used strictly for organizing, fulfilling, and coordinating your requested travel services:
              </p>
              
              <div className="policy-subcard">
                <div className="policy-subcard-title">Strict Purpose Limitation</div>
                We use customer contact records solely to arrange vehicle transportation, verify driver allocations, and communicate essential tour logistics. We never repurpose customer data for unrelated marketing schemes.
              </div>

              <ul className="policy-checklist">
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Responding to Inquiries:</strong> Providing transparent vehicle rate quotes, checking fleet availability, and recommending custom sightseeing itineraries.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Vehicle &amp; Driver Allocation:</strong> Assigning appropriate vehicles from our fleet and allocating vetted local hill drivers experienced in Western Ghats mountain roads.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Operational Logistics:</strong> Sharing assigned driver contact numbers, vehicle registration details, pickup timing alerts, and route advisories.</span>
                </li>
              </ul>
            </section>

            {/* Section 3: Information Sharing */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Share2 size={22} />
                </div>
                <h2 className="policy-block-title">3. Information Sharing</h2>
              </div>
              <p className="policy-p">
                <strong>We do not sell, rent, lease, trade, or monetize your contact information</strong> with third-party advertising companies, marketing brokers, or data aggregators under any circumstances.
              </p>
              <p className="policy-p">
                Your name and mobile number are shared strictly on an operational, need-to-know basis with the designated driver or vehicle coordinator assigned to execute your pickup and journey navigation.
              </p>
              <div className="policy-subcard">
                <div className="policy-subcard-title">WhatsApp &amp; Telecom Communication Disclosure</div>
                When initiating inquiries via website WhatsApp buttons or phone links, communication opens your device&apos;s WhatsApp application or cellular dialer. Such transmissions are governed by Meta&apos;s WhatsApp Terms &amp; Privacy Policy and your telecom carrier&apos;s terms.
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Lock size={22} />
                </div>
                <h2 className="policy-block-title">4. Data Security</h2>
              </div>
              <p className="policy-p">
                We implement reasonable administrative, technical, and organizational measures to safeguard customer contact details from unauthorized access, accidental alteration, or disclosure.
              </p>
              <p className="policy-p">
                We believe in full transparency: while we apply diligent care in protecting your booking information, no internet data transmission or mobile messaging network can be guaranteed to be 100% impenetrable. We do not make false claims of unbreakable digital storage or automated deletion systems.
              </p>
            </section>

            {/* Section 5: Cookies and Website Usage */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Cookie size={22} />
                </div>
                <h2 className="policy-block-title">5. Cookies and Website Usage</h2>
              </div>
              <p className="policy-p">
                Our website utilizes standard, essential browser session storage to maintain basic site navigation, remember user form interactions, and ensure fast page loading speeds.
              </p>
              <p className="policy-p">
                We do not deploy intrusive third-party cross-site advertising trackers, behavioral profiling scripts, or retargeting pixels on our website visitors.
              </p>
            </section>

            {/* Section 6: Your Privacy Rights */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <KeyRound size={22} />
                </div>
                <h2 className="policy-block-title">6. Your Privacy Rights</h2>
              </div>
              <p className="policy-p">
                As a valued traveler with Sunil Tours N Travels, you retain full rights regarding your personal contact details:
              </p>
              <ul className="policy-checklist">
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Access &amp; Review:</strong> You may request confirmation of what contact details we have logged regarding your tour inquiry.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Correction:</strong> You may request prompt updates or corrections to your name, contact phone number, or itinerary notes.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Deletion:</strong> You may request the deletion of your contact records from our communication channels once your trip is concluded, subject only to mandatory legal or accounting requirements.</span>
                </li>
              </ul>
            </section>

            {/* Section 7: Policy Updates */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <RefreshCw size={22} />
                </div>
                <h2 className="policy-block-title">7. Policy Updates</h2>
              </div>
              <p className="policy-p">
                We may periodically review and update this Privacy Policy to reflect enhancements in our travel services, local regulatory standards, or operational procedures.
              </p>
              <p className="policy-p">
                Any modifications will be posted directly on this page with an updated &ldquo;Last Updated&rdquo; date at the top of the policy. We encourage travelers to review this page periodically when planning new journeys.
              </p>
            </section>

            {/* Section 8: Contact Information */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <PhoneCall size={22} />
                </div>
                <h2 className="policy-block-title">8. Contact Information</h2>
              </div>
              <p className="policy-p">
                If you have questions regarding this Privacy Policy, wish to exercise your data rights, or want to discuss tour arrangements in Chikkamagaluru, please contact us directly:
              </p>

              <div className="policy-contact-grid">
                <div className="policy-contact-box">
                  <span className="policy-contact-label">Tour Operator</span>
                  <span className="policy-contact-val">Sunil Tours N Travels</span>
                </div>

                <div className="policy-contact-box">
                  <span className="policy-contact-label">Helpline / WhatsApp</span>
                  <a href="tel:+918197007359" className="policy-contact-val">+91 8197007359</a>
                </div>

                <div className="policy-contact-box">
                  <span className="policy-contact-label">Email Address</span>
                  <a href="mailto:suniltoursckm@gmail.com" className="policy-contact-val">suniltoursckm@gmail.com</a>
                </div>

                <div className="policy-contact-box">
                  <span className="policy-contact-label">Operating Hours</span>
                  <span className="policy-contact-val">8:00 AM – 9:00 PM IST (Daily)</span>
                </div>
              </div>

              <div className="policy-subcard" style={{ marginTop: '16px' }}>
                <div className="policy-subcard-title">Office Location</div>
                Sunil Tours N Travels, Main Road, Chikkamagaluru, Karnataka 577101, India.
              </div>
            </section>

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
                <Link to="/privacy-policy" className="sidebar-nav-item active">
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

                <Link to="/cancellation-policy" className="sidebar-nav-item">
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
                Need immediate clarification on our policies, custom sightseeing circuits, or vehicle hire rates? Connect with us directly on WhatsApp.
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

export default PrivacyPolicy;
