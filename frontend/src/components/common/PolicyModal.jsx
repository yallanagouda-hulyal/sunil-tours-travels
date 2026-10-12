import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ShieldCheck,
  FileText,
  CalendarX,
  UserCheck,
  Compass,
  MessageSquare,
  Lock,
  Clock,
  Car,
  AlertTriangle,
  CloudRain,
  Shield,
  CreditCard,
  PhoneCall,
  CheckCircle2,
  Info
} from 'lucide-react';
import './PolicyModal.css';

/**
 * Enhanced, fully responsive PolicyModal component for Sunil Tours N Travels.
 * Displays Privacy Policy, Terms & Conditions, and Cancellation Policy.
 * Header, tab bar, and footer remain fixed while only the content body scrolls.
 */
const PolicyModal = ({ isOpen, policyType = 'privacy', onClose }) => {
  const [activeTab, setActiveTab] = useState(policyType || 'privacy');
  const bodyRef = useRef(null);
  const privacyTabRef = useRef(null);
  const termsTabRef = useRef(null);
  const cancellationTabRef = useRef(null);

  // Sync activeTab when policyType prop changes
  useEffect(() => {
    if (policyType) {
      setActiveTab(policyType);
    }
  }, [policyType]);

  // Reset scroll to top and ensure active tab is visible when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }

    const tabRefs = {
      privacy: privacyTabRef,
      terms: termsTabRef,
      cancellation: cancellationTabRef
    };

    const targetRef = tabRefs[activeTab]?.current;
    if (targetRef && typeof targetRef.scrollIntoView === 'function') {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeTab]);

  // Handle keyboard Escape and lock document/html scroll while modal is active
  useEffect(() => {
    if (!isOpen) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="policy-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-dialog-title"
    >
      <div
        className="policy-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="policy-modal-header">
          <div className="policy-header-left">
            <span className="policy-badge">
              <ShieldCheck size={13} />
              <span>Official Policy &bull; Sunil Tours N Travels</span>
            </span>
            <h2 id="policy-dialog-title" className="policy-modal-title">
              {activeTab === 'privacy' && 'Privacy Policy'}
              {activeTab === 'terms' && 'Terms & Conditions'}
              {activeTab === 'cancellation' && 'Cancellation Policy'}
            </h2>
            <p className="policy-modal-subtitle">
              Chikkamagaluru, Karnataka &bull; Direct Tourist Guidelines
            </p>
          </div>

          <button
            type="button"
            className="policy-modal-close-btn"
            onClick={onClose}
            aria-label="Close policy dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Fixed Tab Switcher Bar */}
        <div className="policy-tab-bar-container">
          <div className="policy-tab-bar" role="tablist" aria-label="Policy Selection Tabs">
            <button
              ref={privacyTabRef}
              type="button"
              role="tab"
              aria-selected={activeTab === 'privacy'}
              className={`policy-tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleTabChange('privacy')}
            >
              <ShieldCheck size={14} />
              <span>Privacy Policy</span>
            </button>

            <button
              ref={termsTabRef}
              type="button"
              role="tab"
              aria-selected={activeTab === 'terms'}
              className={`policy-tab-button ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleTabChange('terms')}
            >
              <FileText size={14} />
              <span>Terms &amp; Conditions</span>
            </button>

            <button
              ref={cancellationTabRef}
              type="button"
              role="tab"
              aria-selected={activeTab === 'cancellation'}
              className={`policy-tab-button ${activeTab === 'cancellation' ? 'active' : ''}`}
              onClick={() => handleTabChange('cancellation')}
            >
              <CalendarX size={14} />
              <span>Cancellation Policy</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body (Only this area scrolls) */}
        <div className="policy-modal-body" ref={bodyRef}>
          {/* ========================================================= */}
          {/* 1. PRIVACY POLICY */}
          {/* ========================================================= */}
          {activeTab === 'privacy' && (
            <>
              {/* Section 1: Information We Collect */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <UserCheck size={18} />
                  </div>
                  <h3 className="policy-section-title">Information We Collect</h3>
                </div>
                <p className="policy-text">
                  To provide reliable sightseeing and vehicle rental services across Chikkamagaluru, Sunil Tours N Travels collects basic traveler details submitted directly through our website forms or direct conversations:
                </p>
                <ul className="policy-list">
                  <li><strong>Personal Contact Information:</strong> Full name and phone/mobile number.</li>
                  <li><strong>Optional Email Address:</strong> Provided voluntarily when sending booking inquiries via our contact form.</li>
                  <li><strong>Travel Preferences &amp; Dates:</strong> Preferred dates of travel, passenger headcount, selected sightseeing circuits, and pickup/drop locations.</li>
                  <li><strong>Enquiry &amp; Vehicle Requirements:</strong> Specific vehicle type requests (e.g. 10-seater Tempo Traveller, 4x4 Jeep, Sedan/SUV, 50-seater Luxury Bus) and special passenger requests.</li>
                </ul>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <Compass size={18} />
                  </div>
                  <h3 className="policy-section-title">How We Use Your Information</h3>
                </div>
                <p className="policy-text">
                  We use the information gathered solely to facilitate and manage your travel services:
                </p>
                <ul className="policy-list">
                  <li><strong>Responding to Enquiries:</strong> Answering price quotes, checking vehicle availability, and confirming tour itineraries.</li>
                  <li><strong>Arranging Travel &amp; Sightseeing:</strong> Planning customized routes to destinations such as Mullayanagiri, Kemmanagundi, Bababudangiri, Belur, and Halebidu.</li>
                  <li><strong>Vehicle &amp; Driver Allocation:</strong> Assigning appropriate vehicles from our fleet and allocating vetted, experienced local drivers.</li>
                  <li><strong>Operational Communications:</strong> Sharing driver contact numbers, pickup timing updates, route advisories, or weather-related notifications.</li>
                </ul>
              </div>

              {/* Section 3: WhatsApp and Phone Communication */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <MessageSquare size={18} />
                  </div>
                  <h3 className="policy-section-title">WhatsApp &amp; Phone Communication</h3>
                </div>
                <p className="policy-text">
                  When you click on booking links, WhatsApp buttons, or phone numbers on our website, your device directly initiates communication through the WhatsApp application or your phone dialer.
                </p>
                <p className="policy-text">
                  Please be aware that communications transmitted over WhatsApp or telecom networks are governed by the third-party privacy policies and terms of Meta (WhatsApp) and your cellular service provider. We encourage travelers to review WhatsApp&apos;s privacy practices when using their messaging services.
                </p>
              </div>

              {/* Section 4: Data Sharing and Security */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <Lock size={18} />
                  </div>
                  <h3 className="policy-section-title">Data Sharing &amp; Security</h3>
                </div>
                <p className="policy-text">
                  <strong>We do not sell, rent, or trade your personal information</strong> with third-party marketing brokers or advertising companies under any circumstances.
                </p>
                <p className="policy-text">
                  Your contact details are shared only on a strictly necessary operational basis with the assigned driver or transport coordinator responsible for your pickup and trip navigation.
                </p>
                <p className="policy-text">
                  While we take reasonable administrative precautions to handle your contact numbers and booking messages with care, no internet data transmission or mobile messaging channel can be guaranteed to be 100% invulnerable or completely immune from unauthorized interception. We do not make misleading claims of automated deletion or impenetrable digital storage.
                </p>
              </div>

              {/* Section 5: Data Retention and Contact */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <Clock size={18} />
                  </div>
                  <h3 className="policy-section-title">Data Retention &amp; Contact</h3>
                </div>
                <p className="policy-text">
                  We retain customer booking inquiries and trip communication records only for as long as necessary to fulfill legitimate business, operational, customer service, or accounting purposes.
                </p>
                <p className="policy-text">
                  If you have questions about how your information is handled, or wish to review, update, or request the removal of your contact information from our communication records, please contact us:
                </p>
                <ul className="policy-list">
                  <li><strong>Operator:</strong> Sunil Tours N Travels</li>
                  <li><strong>Phone / WhatsApp:</strong> <a href="tel:+918197007359" style={{ color: '#123C2A', fontWeight: 700 }}>+91 8197007359</a></li>
                  <li><strong>Email:</strong> <a href="mailto:suniltoursckm@gmail.com" style={{ color: '#123C2A', fontWeight: 700 }}>suniltoursckm@gmail.com</a></li>
                  <li><strong>Location:</strong> Main Road, Chikkamagaluru, Karnataka 577101, India</li>
                </ul>
              </div>
            </>
          )}

          {/* ========================================================= */}
          {/* 2. TERMS & CONDITIONS */}
          {/* ========================================================= */}
          {activeTab === 'terms' && (
            <>
              {/* 1. Booking Enquiries and Confirmation */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <h3 className="policy-section-title">1. Booking Enquiries and Confirmation</h3>
                </div>
                <p className="policy-text">
                  Submitting an enquiry via our website, WhatsApp, or telephone does not constitute an automatically confirmed reservation.
                </p>
                <p className="policy-text">
                  A booking is considered confirmed only after vehicle availability and travel dates are mutually confirmed, and any agreed advance booking deposit has been received and acknowledged directly by Sunil Tours N Travels.
                </p>
              </div>

              {/* 2. Vehicle Charges and Inclusions */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <Car size={18} />
                  </div>
                  <h3 className="policy-section-title">2. Vehicle Charges and Inclusions</h3>
                </div>
                <p className="policy-text">
                  Listed sightseeing package prices and vehicle hire quotes strictly cover vehicle rental charges, driver allowance (bata), and fuel (diesel/petrol) for the agreed itinerary route only, unless explicitly stated otherwise in writing.
                </p>
                <p className="policy-text">
                  Vehicles will operate within normal day sightseeing timings (typically 8:30 AM to 6:30 PM). Continuous driving without adequate driver rest or night journeys outside the planned itinerary must be agreed upon in advance.
                </p>
              </div>

              {/* 3. Additional Expenses */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <AlertTriangle size={18} />
                  </div>
                  <h3 className="policy-section-title">3. Additional Expenses and Exclusions</h3>
                </div>
                <p className="policy-text">
                  Package rates do <strong>not</strong> include destination-level entrance fees, commercial checkpoint charges, or third-party activity costs. The following are payable directly by guests at the respective checkpoints:
                </p>
                <ul className="policy-list">
                  <li><strong>Destination &amp; Heritage Entry Tickets:</strong> Belur &amp; Halebidu temple fees, Mullayanagiri/Kemmanagundi entry, garden passes, or museum charges.</li>
                  <li><strong>Forest Department &amp; Eco Fees:</strong> Forest checkpost entry permits and eco-tourism charges.</li>
                  <li><strong>Parking &amp; Tolls:</strong> Vehicle parking fees at tourist spots, viewpoint parking, and road toll charges.</li>
                  <li><strong>Adventure Activities:</strong> 4x4 off-road jeep trekking to Hebbe Falls or Bababudangiri interior, zipline, water sports, and coffee estate entry tickets.</li>
                  <li><strong>Personal Expenses:</strong> Food, beverages, personal snacks, and accommodation.</li>
                </ul>
              </div>

              {/* 4. Itinerary and Weather */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <CloudRain size={18} />
                  </div>
                  <h3 className="policy-section-title">4. Itinerary, Route, and Weather Conditions</h3>
                </div>
                <p className="policy-text">
                  The mountain roads and ghat sections of Chikkamagaluru and the Western Ghats are subject to sudden weather shifts, dense fog, heavy rainfall, and potential landslides.
                </p>
                <p className="policy-text">
                  Travel itineraries, sightseeing schedules, and destination sequences may be modified, delayed, or substituted due to inclement weather, road maintenance, or sudden forest department and district administration restrictions.
                </p>
                <p className="policy-text">
                  Sunil Tours N Travels and our drivers prioritize passenger safety at all times. We are not liable for missed viewpoints or schedule adjustments caused by natural events or government restrictions beyond our control.
                </p>
              </div>

              {/* 5. Passenger Responsibilities */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <Shield size={18} />
                  </div>
                  <h3 className="policy-section-title">5. Passenger Responsibilities &amp; Safety</h3>
                </div>
                <p className="policy-text">
                  Passengers are required to maintain scheduled pickup times and cooperate with the driver for safe navigation across hilly terrain:
                </p>
                <ul className="policy-list">
                  <li>Follow all local forest department rules, avoid littering, and adhere to strict zero-plastic regulations in protected hill zones.</li>
                  <li>Respect traditional dress codes and decorum when visiting holy temple sites (Belur, Halebidu, Sringeri, Horanadu).</li>
                  <li><strong>Smoking and alcohol consumption inside hire vehicles are strictly prohibited</strong> at all times.</li>
                  <li>Passengers are solely responsible for their personal baggage and valuables; Sunil Tours N Travels is not responsible for lost or unattended belongings.</li>
                </ul>
              </div>

              {/* 6. Pricing and Payment */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <CreditCard size={18} />
                  </div>
                  <h3 className="policy-section-title">6. Pricing, Payment Terms, and Detours</h3>
                </div>
                <p className="policy-text">
                  Final pricing, required advance booking deposit, and payment terms must be confirmed directly with the operator prior to departure.
                </p>
                <p className="policy-text">
                  Any itinerary extensions, detours outside the agreed package route, or extra kilometers requested during the trip will be billed at prevailing per-kilometer or hourly vehicle rates.
                </p>
                <p className="policy-text">
                  Advance payments can be made via UPI or bank transfer as directed by the operator. Balance payment must be settled upon completion of the trip or as mutually agreed before departure.
                </p>
              </div>
            </>
          )}

          {/* ========================================================= */}
          {/* 3. CANCELLATION POLICY */}
          {/* ========================================================= */}
          {activeTab === 'cancellation' && (
            <>
              {/* Highlighted Cancellation Schedule Cards */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <CalendarX size={18} />
                  </div>
                  <h3 className="policy-section-title">Advance Booking Cancellation Terms</h3>
                </div>
                <p className="policy-text">
                  We understand that travel plans may change. In the event of a cancellation, refunds of advance booking amounts are determined by the following schedule:
                </p>

                <div className="cancellation-tier-grid">
                  {/* Tier 1 */}
                  <div className="cancellation-tier-card tier-full-refund">
                    <div className="cancellation-tier-top">
                      <span className="tier-badge badge-full">Full Refund</span>
                      <div className="tier-percentage">100%</div>
                    </div>
                    <div className="tier-timeframe">48+ Hours Before Departure</div>
                    <p className="tier-desc">
                      Advance booking amount refunded in full if cancelled 48 hours or more before scheduled departure.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div className="cancellation-tier-card tier-partial-refund">
                    <div className="cancellation-tier-top">
                      <span className="tier-badge badge-partial">Partial Refund</span>
                      <div className="tier-percentage">50%</div>
                    </div>
                    <div className="tier-timeframe">24 to 48 Hours Before</div>
                    <p className="tier-desc">
                      50% of the advance booking amount refunded if cancelled between 24 and 48 hours before scheduled departure.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div className="cancellation-tier-card tier-no-refund">
                    <div className="cancellation-tier-top">
                      <span className="tier-badge badge-none">No Refund</span>
                      <div className="tier-percentage">0%</div>
                    </div>
                    <div className="tier-timeframe">Within 24 Hours / No-Show</div>
                    <p className="tier-desc">
                      Non-refundable for cancellations made less than 24 hours prior to travel time or in case of a no-show.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: How to Request a Cancellation */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <PhoneCall size={18} />
                  </div>
                  <h3 className="policy-section-title">How to Request a Cancellation</h3>
                </div>
                <p className="policy-text">
                  To request a cancellation, travelers must contact Sunil Tours N Travels directly using one of the following methods:
                </p>
                <ul className="policy-list">
                  <li><strong>Direct Phone Call:</strong> Speak with our reservation manager at <a href="tel:+918197007359" style={{ color: '#123C2A', fontWeight: 700 }}>+91 8197007359</a>.</li>
                  <li><strong>WhatsApp Message:</strong> Send an official cancellation message from the phone number used during the initial booking to <a href="https://wa.me/918197007359" target="_blank" rel="noopener noreferrer" style={{ color: '#123C2A', fontWeight: 700 }}>+91 8197007359</a>.</li>
                </ul>
                <p className="policy-text" style={{ marginTop: '10px' }}>
                  Please clearly provide your <strong>full name, travel date, vehicle or package booked, and reason for cancellation</strong> so we can process your request promptly.
                </p>
              </div>

              {/* Section 3: How Cancellation Time is Determined */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <Clock size={18} />
                  </div>
                  <h3 className="policy-section-title">How Cancellation Time is Determined</h3>
                </div>
                <p className="policy-text">
                  The cancellation time is officially recorded based on the timestamp when your telephone call or WhatsApp message is received and logged by our management during standard business hours (8:00 AM – 9:00 PM IST).
                </p>
                <p className="policy-text">
                  Messages received outside operational hours will be timestamped at the opening of the next business morning for tier calculation purposes.
                </p>
              </div>

              {/* Section 4: How Refunds Are Processed */}
              <div className="policy-section-card">
                <div className="policy-section-header">
                  <div className="policy-section-icon">
                    <CreditCard size={18} />
                  </div>
                  <h3 className="policy-section-title">How Refunds Are Processed</h3>
                </div>
                <p className="policy-text">
                  Eligible refunds under the 100% or 50% tiers will be transferred back using the original payment channel (such as UPI ID / Google Pay / PhonePe or direct NEFT/IMPS bank transfer) from which the advance payment was received.
                </p>
              </div>

              {/* Section 5: Notice for Travelers / Operational Details */}
              <div className="policy-notice-box">
                <Info size={20} className="policy-notice-box-icon" />
                <div>
                  <span className="policy-notice-title">Notice for Travelers &bull; Operational Confirmation</span>
                  <div>
                    Exact banking turnaround times (e.g. standard bank clearance of 5–7 business days) and any non-recoverable third-party payment gateway transaction deductions are subject to direct confirmation with the business operator upon cancellation.
                  </div>
                  <div style={{ marginTop: '6px' }}>
                    In exceptional circumstances involving natural disasters, heavy landslides, or official district road closures that prevent travel, rescheduling or refund options will be reviewed directly by the operator on a case-by-case basis.
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Fixed Footer (Always visible at bottom) */}
        <div className="policy-modal-footer">
          <div className="policy-footer-contact">
            <PhoneCall size={15} color="#123C2A" />
            <span>
              Direct Assistance: <a href="tel:+918197007359">+91 8197007359</a>
            </span>
          </div>

          <button
            type="button"
            className="policy-close-cta"
            onClick={onClose}
          >
            <span>Close Window</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
