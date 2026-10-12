import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  ShieldCheck,
  CalendarX,
  CheckCircle2,
  Car,
  AlertTriangle,
  CloudRain,
  Shield,
  CreditCard,
  PhoneCall,
  Home,
  ChevronRight,
  Clock,
  MapPin,
  Compass,
  Phone
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp } from '../utils/whatsapp';
import './PolicyPages.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppEnquiry = () => {
    openWhatsApp(
      'Namaste Sunil Tours N Travels! I am reviewing your Terms & Conditions and would like to clarify details regarding tour bookings and vehicle hire.'
    );
  };

  return (
    <div className="policy-page-root">
      
      {/* ========================================================= */}
      {/* 1. SCENIC HERO BANNER (MOUNTAIN ROAD WITH LUXURY TOURIST BUS) */}
      {/* ========================================================= */}
      <section className="policy-hero-banner" aria-label="Terms and Conditions Banner">
        <div className="policy-hero-container">
          
          {/* Breadcrumb Navigation: Home > Terms & Conditions */}
          <nav className="policy-hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <Home size={15} /> Home
            </Link>
            <span className="separator">&gt;</span>
            <span className="current">Terms &amp; Conditions</span>
          </nav>

          {/* Official Badge */}
          <div className="policy-hero-badge">
            <FileText size={14} />
            <span>Official Policy &bull; Sunil Tours N Travels</span>
          </div>

          {/* Main Title with "Conditions" Highlighted in Yellow */}
          <h1 className="policy-hero-title">
            Terms &amp; <span className="highlight-yellow">Conditions</span>
          </h1>

          {/* Short Subtitle */}
          <p className="policy-hero-subtitle">
            Booking agreements, vehicle hire inclusions, passenger safety responsibilities, and operational guidelines for tours and travel services in Chikkamagaluru.
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
            <Link to="/terms-and-conditions" className="policy-tab-link active">
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
            
            {/* Section 1: Booking Enquiries and Confirmation */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <CheckCircle2 size={22} />
                </div>
                <h2 className="policy-block-title">1. Booking Enquiries and Confirmation</h2>
              </div>
              <p className="policy-p">
                Submitting an inquiry through our website, WhatsApp message, or direct telephone conversation does not constitute an automatically binding reservation.
              </p>
              <p className="policy-p">
                A booking is officially confirmed only after vehicle availability and travel dates are mutually verified, and any agreed advance booking deposit has been received and acknowledged directly by Sunil Tours N Travels.
              </p>
              <div className="policy-subcard">
                <div className="policy-subcard-title">Advance Reservation Notice</div>
                During peak holiday seasons, long weekends, and festival periods, advance booking is strongly recommended to secure preferred vehicle models and driver allocations.
              </div>
            </section>

            {/* Section 2: Vehicle Charges and Inclusions */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Car size={22} />
                </div>
                <h2 className="policy-block-title">2. Vehicle Charges and Inclusions</h2>
              </div>
              <p className="policy-p">
                Listed sightseeing package prices and vehicle hire quotes strictly cover vehicle rental charges, experienced driver allowance (bata), and fuel (diesel/petrol) for the agreed itinerary circuit only, unless explicitly stated otherwise in writing.
              </p>
              <p className="policy-p">
                Vehicles operate within standard day tour timings (typically between 8:30 AM and 6:30 PM). Continuous driving without adequate rest intervals or late-night driving outside the planned itinerary must be mutually agreed upon in advance with the operator.
              </p>
            </section>

            {/* Section 3: Additional Expenses and Exclusions */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <AlertTriangle size={22} />
                </div>
                <h2 className="policy-block-title">3. Additional Expenses and Exclusions</h2>
              </div>
              <p className="policy-p">
                Sightseeing rates do <strong>not</strong> include destination entry tickets, government checkpoint charges, or optional third-party adventure activities. The following expenses are payable directly by travelers at destination counters:
              </p>
              <ul className="policy-checklist">
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Destination &amp; Heritage Entry Tickets:</strong> Belur &amp; Halebidu temple fees, Mullayanagiri/Kemmanagundi entrance, botanical gardens, and museum admissions.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Forest Department &amp; Eco Fees:</strong> Forest checkpost entry permits and hill station eco-tourism tariffs.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Parking &amp; Toll Charges:</strong> Viewpoint parking fees and national/state highway toll plaza charges.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Adventure Safaris &amp; Activities:</strong> Local 4x4 off-road jeep safaris to Hebbe Falls or Bababudangiri interior, ziplines, coffee plantation tour fees, and water sports.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Personal Expenses:</strong> Food, bottled water, snacks, personal beverages, and hotel accommodation.</span>
                </li>
              </ul>
            </section>

            {/* Section 4: Itinerary, Route, and Weather Conditions */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <CloudRain size={22} />
                </div>
                <h2 className="policy-block-title">4. Itinerary, Route, and Weather Conditions</h2>
              </div>
              <p className="policy-p">
                Mountain roads and ghat sections across Chikkamagaluru and the Western Ghats are subject to rapid weather shifts, dense mist, heavy monsoon rainfall, and temporary landslides.
              </p>
              <p className="policy-p">
                Travel schedules, sightseeing order, and destination routes may be modified, delayed, or substituted if roads are closed by District Authorities, Forest Department orders, or adverse weather conditions.
              </p>
              <p className="policy-p">
                Sunil Tours N Travels and our drivers prioritize traveler safety above all else. We shall not be held liable for missed viewpoints or schedule adjustments caused by natural events or government restrictions beyond our control.
              </p>
            </section>

            {/* Section 5: Passenger Responsibilities & Safety */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <Shield size={22} />
                </div>
                <h2 className="policy-block-title">5. Passenger Responsibilities &amp; Safety</h2>
              </div>
              <p className="policy-p">
                Passengers are requested to adhere to agreed departure times and cooperate with the driver for safe navigation along mountain roads:
              </p>
              <ul className="policy-checklist">
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span>Adhere strictly to Karnataka Forest Department regulations, avoid littering, and comply with zero-plastic rules in eco-sensitive hill zones.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span>Respect traditional decorum and dress codes when visiting holy pilgrimage temples (Belur, Halebidu, Sringeri, Horanadu).</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span><strong>Smoking and consumption of alcohol inside hire vehicles are strictly prohibited</strong> at all times.</span>
                </li>
                <li className="policy-checklist-item">
                  <CheckCircle2 size={18} className="policy-checklist-icon" />
                  <span>Passengers are solely responsible for their personal baggage and valuables; Sunil Tours N Travels is not liable for lost or unattended personal items.</span>
                </li>
              </ul>
            </section>

            {/* Section 6: Pricing, Payment Terms, and Detours */}
            <section className="policy-section-block">
              <div className="policy-block-header">
                <div className="policy-block-icon">
                  <CreditCard size={22} />
                </div>
                <h2 className="policy-block-title">6. Pricing, Payment Terms, and Detours</h2>
              </div>
              <p className="policy-p">
                Final trip pricing, advance deposit requirements, and payment schedules must be confirmed directly with Sunil Tours N Travels before the tour begins.
              </p>
              <p className="policy-p">
                Unscheduled route detours, extra kilometers outside the agreed package route, or extended waiting hours beyond agreed timings will attract additional per-kilometer or hourly vehicle charges based on standard prevailing rates.
              </p>
              <p className="policy-p">
                Advance payments may be made via UPI or bank transfer as directed by the operator. Balance payment must be settled upon trip completion or on the departure day as mutually agreed.
              </p>
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
                <Link to="/privacy-policy" className="sidebar-nav-item">
                  <div className="nav-left">
                    <ShieldCheck size={16} />
                    <span>Privacy Policy</span>
                  </div>
                  <ChevronRight size={15} />
                </Link>

                <Link to="/terms-and-conditions" className="sidebar-nav-item active">
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
                Need clarification on vehicle charges, driver allowance, or custom package terms? Chat with our reservation manager directly on WhatsApp.
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

export default TermsConditions;
