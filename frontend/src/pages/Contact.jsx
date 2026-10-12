import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Compass,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Check,
  ArrowRight
} from 'lucide-react';
import API from '../services/api';
import { openWhatsApp } from '../utils/whatsapp';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tourType: 'Chikkamagaluru Sightseeing',
    groupSize: '',
    travelDate: '',
    pickupLocation: 'Chikkamagaluru',
    numberOfDays: '1 Day',
    vehicleRequirement: 'SUV / Car',
    foodAccommodation: 'Transport Only',
    message: ''
  });

  const [siteSettings, setSiteSettings] = useState(null);
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await API.get('/settings');
        if (res.success && res.settings) {
          setSiteSettings(res.settings);
        }
      } catch (err) {
        console.error('Error fetching settings:', err);
      }
    };
    fetchSettings();
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatusMsg({ type: '', text: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      return setStatusMsg({ type: 'error', text: 'Please enter your full name.' });
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (cleanPhone.length < 10) {
      return setStatusMsg({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
    }

    if (!formData.message.trim()) {
      return setStatusMsg({ type: 'error', text: 'Please enter your message or travel details.' });
    }

    let whatsappMsg = '';
    if (
      formData.tourType === 'Student Tour' ||
      formData.tourType === 'Corporate Tour' ||
      formData.tourType === 'Family and Friends Tour'
    ) {
      whatsappMsg = `Namaste! I would like a customized group tour quotation with Sunil Tours N Travels.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}${formData.email ? `\nEmail: ${formData.email.trim()}` : ''}
Group Type: ${formData.tourType}
Group Size: ${formData.groupSize ? formData.groupSize.trim() : 'Not specified'}
Travel Date: ${formData.travelDate || 'Flexible'}
Duration: ${formData.numberOfDays || '1 Day'}
Pickup Location: ${formData.pickupLocation || 'Chikkamagaluru'}
Vehicle Requirement: ${formData.vehicleRequirement || 'SUV / Car'}
Accommodation/Meals: ${formData.foodAccommodation || 'Transport Only'}
Requirements & Notes: ${formData.message.trim()}

Please share the available options and final quotation.`;
    } else if (formData.tourType === 'Vehicle Hire') {
      whatsappMsg = `Namaste! I would like to enquire about vehicle hire with Sunil Tours N Travels.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Vehicle Type: ${formData.vehicleRequirement || 'SUV / Car'}
Travel Date: ${formData.travelDate || 'Flexible'}
Passengers: ${formData.groupSize ? formData.groupSize.trim() : 'Not specified'}
Pickup: ${formData.pickupLocation || 'Chikkamagaluru'}
Duration: ${formData.numberOfDays || '1 Day'}
Additional Requirements: ${formData.message.trim()}

Please confirm availability and the total quotation.`;
    } else {
      whatsappMsg = `Namaste Sunil Tours N Travels! I am interested in booking/enquiring about a tour.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}${formData.email ? `\nEmail: ${formData.email.trim()}` : ''}
Tour / Package: ${formData.tourType}
Travel Date: ${formData.travelDate || 'Flexible'}
Number of Travellers: ${formData.groupSize ? formData.groupSize.trim() : 'Not specified'}
Pickup Location: ${formData.pickupLocation || 'Chikkamagaluru'}
Duration: ${formData.numberOfDays || '1 Day'}
Vehicle Requirement: ${formData.vehicleRequirement || 'SUV / Car'}
Stay Preference: ${formData.foodAccommodation || 'Transport Only'}
Details: ${formData.message.trim()}

Please share the itinerary, final vehicle charges, availability, and booking details.`;
    }

    openWhatsApp(whatsappMsg);

    setStatusMsg({
      type: 'success',
      text: 'WhatsApp has opened with your prefilled enquiry! Please click "Send" in WhatsApp to submit your message to Sunil Tours N Travels.'
    });
  };

  const displayPhone = '+91 8197007359';

  return (
    <div style={{ background: '#F7F4E9', minHeight: '80vh' }}>
      
      {/* ==========================================================================
         1. HERO SECTION (SPLIT-LAYOUT WITH HD MOUNTAIN PHOTOGRAPHY)
         ========================================================================== */}
      <section className="contact-hero-section" aria-label="Contact Us Hero">
        <div className="contact-hero-container">
          
          {/* LEFT COLUMN */}
          <div>
            <div className="contact-eyebrow-badge">
              <Compass size={16} color="#FFD429" />
              <span>LET'S PLAN YOUR JOURNEY</span>
            </div>

            <h1 className="contact-hero-heading">
              <span style={{ color: '#FFFFFF', display: 'block' }}>
                Let’s Make Your Next Trip
              </span>
              <span style={{ color: '#FFD429', display: 'block' }}>
                Unforgettable.
              </span>
            </h1>

            <p className="contact-hero-description">
              Discover breathtaking Chikkamagaluru mountains, waterfalls, off-road jeep trekking, 10-seater Travellers, 50-seater buses, food, accommodation, and guided group tours with Sunil Tours N Travels.
            </p>

            {/* CTAs */}
            <div className="contact-hero-cta-group">
              <button
                type="button"
                onClick={() => openWhatsApp('Hello Sunil Tours N Travels, I would like to plan a trip to Chikkamagaluru.')}
                className="contact-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  padding: '13px 26px',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.25s ease'
                }}
              >
                <MessageSquare size={18} color="#FFFFFF" /> Enquire on WhatsApp
              </button>

              <a
                href="tel:+918197007359"
                className="contact-cta-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFD429',
                  color: '#123C2A',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  padding: '13px 26px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(255, 212, 41, 0.35)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Phone size={18} color="#123C2A" /> Call Us ({displayPhone})
              </a>
            </div>

            {/* 4 Service Highlight Pills */}
            <div className="contact-service-highlights">
              <span className="contact-highlight-pill">🌿 Customized Tours</span>
              <span className="contact-highlight-pill">🎓 Student & Corporate Tours</span>
              <span className="contact-highlight-pill">🏨 3-Star Lodge Stay</span>
              <span className="contact-highlight-pill">🚩 Experienced Tour Guides</span>
            </div>
          </div>

          {/* RIGHT COLUMN — HD PHOTOGRAPH */}
          <div>
            <div className="contact-hero-image-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg"
                alt="Mullayanagiri Peak Chikkamagaluru Mountain Landscape"
                className="contact-hero-image"
              />
              <div className="contact-image-badge">
                <Sparkles size={16} color="#123C2A" />
                <span>Chikkamagaluru Travel Experts</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================================================
         2. MAIN CONTACT SECTION (LEFT STACKED CARDS & RIGHT ENQUIRY FORM)
         ========================================================================== */}
      <section className="contact-main-section" id="enquiry-form">
        <div className="container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 45px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(18, 60, 42, 0.08)',
                color: '#123C2A',
                border: '1px solid rgba(18, 60, 42, 0.25)',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              DIRECT CONTACT & TRIP ENQUIRY
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.4rem', fontWeight: 800 }}>
              Get in Touch with Our Travel Team
            </h2>
            <p style={{ color: '#52645C', fontSize: '1rem', marginTop: '6px' }}>
              Reach us instantly via Call, WhatsApp, or submit your trip details for a customized quotation.
            </p>
          </div>

          <div className="contact-split-grid">
            
            {/* ==================== LEFT COLUMN: CARDS ONE BY ONE ==================== */}
            <div className="contact-left-col">
              
              {/* 1. Call Us Directly Card */}
              <div className="glancey-dest-card contact-info-card-left">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      background: 'rgba(18, 60, 42, 0.08)',
                      border: '1px solid rgba(18, 60, 42, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={26} color="#123C2A" />
                  </div>
                  <div>
                    <h3 className="glancey-card-title" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#123C2A', marginBottom: '4px' }}>
                      Call Us Directly
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#52645C', lineHeight: 1.5 }}>
                      Speak with Mr. Sunil for vehicle rates, itinerary advice, and trip bookings.
                    </p>
                  </div>
                </div>

                <div className="contact-info-row" style={{ background: '#F7F4E9' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#52645C', textTransform: 'uppercase' }}>Phone Number</span>
                  <span className="contact-phone-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#123C2A' }}>{displayPhone}</span>
                </div>

                <a
                  href="tel:+918197007359"
                  className="glancey-btn-main contact-cta-btn"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#123C2A',
                    color: '#F7F4E9',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    padding: '13px 20px',
                    borderRadius: '30px',
                    border: '1px solid rgba(255, 212, 41, 0.4)',
                    textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(18, 60, 42, 0.2)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Phone size={16} color="#FFD429" />
                  <span>Call Now (+91 8197007359)</span>
                </a>
              </div>

              {/* 2. WhatsApp Chat Card */}
              <div className="glancey-dest-card contact-info-card-left">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      background: 'rgba(37, 211, 102, 0.12)',
                      border: '1px solid rgba(37, 211, 102, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MessageSquare size={26} color="#25D366" />
                  </div>
                  <div>
                    <h3 className="glancey-card-title" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#123C2A', marginBottom: '4px' }}>
                      WhatsApp Chat
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#52645C', lineHeight: 1.5 }}>
                      Chat with our team for quick estimates, itinerary customization & vehicle photos.
                    </p>
                  </div>
                </div>

                <div className="contact-info-row" style={{ background: 'rgba(37, 211, 102, 0.08)' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>WhatsApp Number</span>
                  <span className="contact-phone-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#25D366' }}>{displayPhone}</span>
                </div>

                <button
                  type="button"
                  onClick={() => openWhatsApp('Hello Sunil Tours N Travels, I would like to chat regarding tour packages and vehicle hire.')}
                  className="contact-cta-btn"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    padding: '13px 20px',
                    borderRadius: '30px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <MessageSquare size={16} color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>

              {/* 3. Send Email / Gmail Support Card */}
              <div className="glancey-dest-card contact-info-card-left">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '18px',
                      background: 'rgba(234, 67, 53, 0.12)',
                      border: '1px solid rgba(234, 67, 53, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={26} color="#EA4335" />
                  </div>
                  <div>
                    <h3 className="glancey-card-title" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#123C2A', marginBottom: '4px' }}>
                      Email Support (Gmail)
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#52645C', lineHeight: 1.5 }}>
                      Send official travel enquiries, custom itineraries & corporate booking requests.
                    </p>
                  </div>
                </div>

                <div className="contact-info-row" style={{ background: 'rgba(234, 67, 53, 0.08)' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#C5221F', textTransform: 'uppercase' }}>Email Address</span>
                  <span className="contact-email-display" style={{ fontSize: '0.92rem', fontWeight: 800, color: '#EA4335' }}>suniltoursckm@gmail.com</span>
                </div>

                <a
                  href="mailto:suniltoursckm@gmail.com?subject=Chikkamagaluru%20Tour%20Enquiry"
                  className="contact-cta-btn"
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#EA4335',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    padding: '13px 20px',
                    borderRadius: '30px',
                    border: 'none',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(234, 67, 53, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <Mail size={16} color="#FFFFFF" />
                  <span>Send Email via Gmail</span>
                </a>
              </div>

              {/* 3. Location & Business Hours Card */}
              <div className="glancey-dest-card contact-info-card-left">
                <h3 className="glancey-card-title" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#123C2A', marginBottom: '16px' }}>
                  Office Location & Hours
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: 'rgba(18,60,42,0.08)', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                      <MapPin size={18} color="#123C2A" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#52645C', fontWeight: 700, textTransform: 'uppercase' }}>Location</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#123C2A' }}>
                        {siteSettings?.location || 'Chikkamagaluru, Karnataka, India'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: 'rgba(18,60,42,0.08)', padding: '8px', borderRadius: '10px', flexShrink: 0 }}>
                      <Clock size={18} color="#123C2A" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#52645C', fontWeight: 700, textTransform: 'uppercase' }}>Business Hours</div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#123C2A' }}>
                        {siteSettings?.businessHours || '8:00 AM – 9:00 PM Daily (7 Days)'}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Chikkamagaluru,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#123C2A',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>View location on Google Maps</span> <ExternalLink size={14} />
                </a>
              </div>

              {/* 4. Tour Services Highlights Card */}
              <div className="glancey-dest-card contact-info-card-left" style={{ background: '#123C2A', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <ShieldCheck size={20} color="#FFD429" />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                    Why Choose Sunil Tours?
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: '#CBD8D2', fontWeight: 600 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#FFD429" /> Student, College & Corporate Group Tours</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#FFD429" /> Clean 10-Seater Travellers & 50-Seater Buses</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#FFD429" /> Experienced Hill Drivers & Local Guides</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#FFD429" /> 3-Star Lodges & Resort Stay Packages</li>
                </ul>
              </div>

            </div>

            {/* ==================== RIGHT COLUMN: ENQUIRY FORM ==================== */}
            <div className="contact-right-col">
              <div className="contact-form-wrapper">
                
                <div style={{ textAlign: 'left', marginBottom: '28px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(18, 60, 42, 0.08)',
                      color: '#123C2A',
                      border: '1px solid rgba(18, 60, 42, 0.25)',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      marginBottom: '8px'
                    }}
                  >
                    CHIKKAMAGALURU TRIP ENQUIRY
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.1rem', fontWeight: 800, marginTop: '2px' }}>
                    Send Us an Enquiry
                  </h2>
                  <p style={{ color: '#52645C', fontSize: '0.92rem', lineHeight: 1.5, marginTop: '4px' }}>
                    Fill in your travel details below and our team will get back to you with custom pricing and recommendations.
                  </p>
                </div>

                {/* Status Alert Banner */}
                {statusMsg.text && (
                  <div
                    style={{
                      padding: '14px 18px',
                      borderRadius: '16px',
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      fontWeight: 600,
                      background: statusMsg.type === 'success' ? '#DCFCE7' : '#FEE2E2',
                      color: statusMsg.type === 'success' ? '#166534' : '#991B1B',
                      border: statusMsg.type === 'success' ? '1px solid #86EFAC' : '1px solid #FCA5A5'
                    }}
                  >
                    {statusMsg.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                    <span>{statusMsg.text}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="form-input"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="form-input"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Tour Type */}
                  <div className="grid grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="form-input"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Tour Type *</label>
                      <select
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        className="form-select"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                        required
                      >
                        <option value="Chikkamagaluru Sightseeing">Chikkamagaluru Sightseeing</option>
                        <option value="3-Day Tour">3-Day Tour</option>
                        <option value="Student Tour">Student Tour</option>
                        <option value="Corporate Tour">Corporate Tour</option>
                        <option value="Family and Friends Tour">Family and Friends Tour</option>
                        <option value="Vehicle Hire">Vehicle Hire</option>
                        <option value="Custom Tour">Custom Tour</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Group Size, Date, Days */}
                  <div className="grid grid-3" style={{ gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Group Size</label>
                      <input
                        type="text"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        placeholder="e.g. 4 people / 40 students"
                        className="form-input"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Travel Date</label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="form-input"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Number of Days</label>
                      <select
                        name="numberOfDays"
                        value={formData.numberOfDays}
                        onChange={handleChange}
                        className="form-select"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      >
                        <option value="1 Day">1 Day</option>
                        <option value="2 Days">2 Days</option>
                        <option value="3 Days">3 Days</option>
                        <option value="4+ Days">4+ Days</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Pickup, Vehicle, Accommodation */}
                  <div className="grid grid-3" style={{ gap: '16px', marginBottom: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Pickup Location</label>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="e.g. Chikkamagaluru"
                        className="form-input"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Vehicle Needed</label>
                      <select
                        name="vehicleRequirement"
                        value={formData.vehicleRequirement}
                        onChange={handleChange}
                        className="form-select"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      >
                        <option value="SUV / Car">SUV / Car (Sedan)</option>
                        <option value="10-Seater Tempo">10-Seater Tempo Traveller</option>
                        <option value="50-Seater Bus">50-Seater Luxury Bus</option>
                        <option value="4x4 Off-road Jeep">4x4 Off-road Jeep Safari</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Accommodation</label>
                      <select
                        name="foodAccommodation"
                        value={formData.foodAccommodation}
                        onChange={handleChange}
                        className="form-select"
                        style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      >
                        <option value="Transport Only">Transport Only</option>
                        <option value="Transport + 3-Star Lodge Stay">Transport + 3-Star Lodge Stay</option>
                        <option value="Transport + Resort Stay + Meals">Transport + Resort Stay + Meals</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group" style={{ marginBottom: '22px' }}>
                    <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>Message / Requirements *</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details such as preferred destinations, timing, budget, or specific group requirements..."
                      className="form-textarea"
                      style={{ borderRadius: '12px', padding: '12px 14px', border: '1.5px solid rgba(18, 60, 42, 0.18)', background: '#FFFFFF', fontSize: '0.92rem' }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="contact-submit-btn"
                  >
                    <MessageSquare size={18} color="#25D366" />
                    <span>Submit Enquiry via WhatsApp</span>
                  </button>

                  <p style={{ marginTop: '12px', fontSize: '0.82rem', color: '#52645C', textAlign: 'center', lineHeight: 1.5 }}>
                    ℹ️ Clicking submit prepares a prefilled WhatsApp message with your selected details. Please tap <strong>Send</strong> inside WhatsApp to connect with our team.
                  </p>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. HELP AND LOCATION SECTION ("How Can We Help?")
         ========================================================================== */}
      <section className="contact-help-section" style={{ background: '#F7F4E9', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 45px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(18, 60, 42, 0.08)',
                color: '#123C2A',
                border: '1px solid rgba(18, 60, 42, 0.25)',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              LOCATION & SUPPORT
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '2.4rem', fontWeight: 800 }}>
              How Can We Help?
            </h2>
          </div>

          <div className="help-grid">
            
            {/* Left 3 Info Panels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Panel 1 — Our Location */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(18, 60, 42, 0.12)',
                  boxShadow: '0 8px 24px rgba(18, 60, 42, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                  <div style={{ background: 'rgba(18,60,42,0.1)', color: '#123C2A', padding: '10px', borderRadius: '50%' }}>
                    <MapPin size={22} color="#123C2A" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C2A' }}>
                      Our Location
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#52645C' }}>
                      {siteSettings?.location || 'Chikkamagaluru, Karnataka, India'}
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Chikkamagaluru,+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#123C2A',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    marginTop: '6px'
                  }}
                >
                  View on Google Maps <ExternalLink size={14} />
                </a>
              </div>

              {/* Panel 2 — Working Hours */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(18, 60, 42, 0.12)',
                  boxShadow: '0 8px 24px rgba(18, 60, 42, 0.06)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ background: 'rgba(18,60,42,0.1)', color: '#123C2A', padding: '10px', borderRadius: '50%' }}>
                    <Clock size={22} color="#123C2A" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C2A' }}>
                      Working Hours
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#52645C' }}>
                      {siteSettings?.businessHours || '8:00 AM – 9:00 PM Daily (7 Days a Week)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Panel 3 — Quick Support */}
              <div
                style={{
                  background: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(18, 60, 42, 0.12)',
                  boxShadow: '0 8px 24px rgba(18, 60, 42, 0.06)'
                }}
              >
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C2A', marginBottom: '12px' }}>
                  Quick Support & Helpline
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#52645C', marginBottom: '16px' }}>
                  Call or WhatsApp us for instant tour quotes or emergency travel support.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href="tel:+918197007359"
                    className="contact-cta-btn"
                    style={{
                      flex: '1 1 140px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: '#123C2A',
                      color: '#F7F4E9',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      padding: '10px 16px',
                      borderRadius: '30px',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={14} color="#FFD429" /> Call ({displayPhone})
                  </a>
                  <button
                    type="button"
                    onClick={() => openWhatsApp('Hello Sunil Tours N Travels, I need quick assistance regarding trip booking.')}
                    className="contact-cta-btn"
                    style={{
                      flex: '1 1 140px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: '#25D366',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      padding: '10px 16px',
                      borderRadius: '30px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <MessageSquare size={14} color="#FFFFFF" /> WhatsApp
                  </button>
                </div>
              </div>

            </div>

            {/* Right Visual Gallery (4 Genuine Photos Grid) */}
            <div className="help-gallery-grid">
              
              {/* Photo 1: Map / Peak View */}
              <div className="help-gallery-card glancey-dest-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg"
                  alt="Chikkamagaluru Mountain Peak Map Location"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div className="help-gallery-label" style={{ fontWeight: 800, background: 'linear-gradient(to top, rgba(18, 60, 42, 0.9) 0%, transparent 100%)' }}>
                  📍 Chikkamagaluru Hills
                </div>
              </div>

              {/* Photo 2: Tourist Vehicle / Bus */}
              <div className="help-gallery-card glancey-dest-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                  alt="50-Seater Tourist Bus for Group Outings"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div className="help-gallery-label" style={{ fontWeight: 800, background: 'linear-gradient(to top, rgba(18, 60, 42, 0.9) 0%, transparent 100%)' }}>
                  🚌 Group Tourist Vehicles
                </div>
              </div>

              {/* Photo 3: Waterfall Destination */}
              <div className="help-gallery-card glancey-dest-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80"
                  alt="Hebbe & Jhari Rainforest Waterfalls"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div className="help-gallery-label" style={{ fontWeight: 800, background: 'linear-gradient(to top, rgba(18, 60, 42, 0.9) 0%, transparent 100%)' }}>
                  🌊 Waterfall Safaris
                </div>
              </div>

              {/* Photo 4: Comfortable Lodge Room */}
              <div className="help-gallery-card glancey-dest-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                  alt="Comfortable 3-Star Lodge Room Stay"
                  className="glancey-card-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
                <div className="help-gallery-label" style={{ fontWeight: 800, background: 'linear-gradient(to top, rgba(18, 60, 42, 0.9) 0%, transparent 100%)' }}>
                  🏨 3-Star Lodge Stays
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
