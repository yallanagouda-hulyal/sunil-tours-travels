import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Users,
  MapPin,
  Truck,
  MessageSquare,
  AlertCircle,
  Clock,
  Sparkles,
  Check,
  Send,
  Compass,
  Building,
  GraduationCap
} from 'lucide-react';
import {
  openWhatsApp,
  buildPackageWhatsAppMessage,
  buildVehicleWhatsAppMessage,
  buildGroupTourWhatsAppMessage
} from '../../utils/whatsapp';

const packageOptions = [
  'Day 1: Mullayanagiri Circuit (₹3,500)',
  'Day 2: Kemmanagundi Tour (₹4,000)',
  'Day 3: Belur & Halebidu Tour (₹3,500)',
  'Day 4: Custom Sightseeing & Trekking (₹3,500)',
  '3-Day Complete Chikkamagaluru Package',
  'Mullayanagiri & Bababudangiri Tour',
  'Kemmanagundi & Hebbe Falls Tour',
  'Belur & Halebidu Heritage Tour',
  'Custom Sightseeing Trip'
];

const vehicleOptions = [
  '10-Seater Force Tempo Traveller',
  '50-Seater Luxury Tourist Bus',
  '4x4 Off-Road Mahindra Jeep',
  'Sedan / SUV Car (Innova / Ertiga / Dzire)',
  'Standard Sightseeing Vehicle'
];

const groupTypeOptions = [
  'Student / College Group',
  'Corporate Team Outing',
  'Family & Friends Group',
  'School Excursion',
  'Custom Group Tour'
];

const BookingModal = ({ isOpen, onClose, defaultItem = '' }) => {
  // Mode: 'package' | 'vehicle' | 'group'
  const [activeTab, setActiveTab] = useState('package');

  // Package Form State
  const [pkgData, setPkgData] = useState({
    packageName: packageOptions[0],
    travelDate: '',
    numberOfTravellers: '2',
    pickupLocation: 'Chikkamagaluru Town',
    specialRequests: ''
  });

  // Vehicle Form State
  const [vehicleData, setVehicleData] = useState({
    vehicleType: vehicleOptions[0],
    travelDate: '',
    passengers: '10',
    pickup: 'Chikkamagaluru Town',
    drop: 'Chikkamagaluru Town',
    duration: '1 Day',
    additionalRequirements: ''
  });

  // Group Form State
  const [groupData, setGroupData] = useState({
    groupType: 'Student / College Group',
    groupSize: '30',
    travelDate: '',
    duration: '2 Days',
    pickupLocation: 'Chikkamagaluru',
    requirements: 'Vehicle + Sightseeing + Campfire',
    notes: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [hasOpenedWhatsApp, setHasOpenedWhatsApp] = useState(false);
  const [lastMessageSent, setLastMessageSent] = useState('');

  // Auto-detect mode based on defaultItem
  useEffect(() => {
    if (!defaultItem) return;

    const itemStr = typeof defaultItem === 'string' ? defaultItem : defaultItem.packageName || defaultItem.packageOrDestination || '';
    const lower = itemStr.toLowerCase();

    if (lower.includes('bus') || lower.includes('tempo') || lower.includes('jeep') || lower.includes('vehicle') || lower.includes('fleet')) {
      setActiveTab('vehicle');
      const match = vehicleOptions.find(v => v.toLowerCase().includes(lower) || lower.includes(v.toLowerCase()));
      setVehicleData(prev => ({
        ...prev,
        vehicleType: match || itemStr,
        travelDate: typeof defaultItem === 'object' && defaultItem.travelDate ? defaultItem.travelDate : prev.travelDate,
        passengers: typeof defaultItem === 'object' && defaultItem.passengers ? defaultItem.passengers : prev.passengers
      }));
    } else if (lower.includes('student') || lower.includes('college') || lower.includes('corporate') || lower.includes('team')) {
      setActiveTab('group');
      const gType = lower.includes('student') || lower.includes('college')
        ? 'Student / College Group'
        : 'Corporate Team Outing';
      setGroupData(prev => ({
        ...prev,
        groupType: gType,
        travelDate: typeof defaultItem === 'object' && defaultItem.travelDate ? defaultItem.travelDate : prev.travelDate
      }));
    } else {
      setActiveTab('package');
      setPkgData(prev => ({
        ...prev,
        packageName: itemStr || packageOptions[0],
        travelDate: typeof defaultItem === 'object' && defaultItem.travelDate ? defaultItem.travelDate : prev.travelDate,
        numberOfTravellers: typeof defaultItem === 'object' && defaultItem.passengerCount ? String(defaultItem.passengerCount) : prev.numberOfTravellers
      }));
    }

    setHasOpenedWhatsApp(false);
    setErrorMsg('');
  }, [defaultItem, isOpen]);

  if (!isOpen) return null;

  const todayStr = new Date().toISOString().slice(0, 10);

  const handleClose = () => {
    setErrorMsg('');
    setHasOpenedWhatsApp(false);
    onClose();
  };

  // 1. Submit Package WhatsApp Enquiry
  const handlePackageSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!pkgData.packageName) {
      return setErrorMsg('Please select a sightseeing package.');
    }
    if (!pkgData.travelDate) {
      return setErrorMsg('Please choose your intended travel date.');
    }
    if (pkgData.travelDate < todayStr) {
      return setErrorMsg('Travel date cannot be in the past.');
    }
    if (!pkgData.pickupLocation.trim()) {
      return setErrorMsg('Please specify a pickup location.');
    }

    const message = buildPackageWhatsAppMessage({
      packageName: pkgData.packageName,
      travelDate: pkgData.travelDate,
      numberOfTravellers: pkgData.numberOfTravellers,
      pickupLocation: pkgData.pickupLocation,
      specialRequests: pkgData.specialRequests
    });

    setLastMessageSent(message);
    openWhatsApp(message);
    setHasOpenedWhatsApp(true);
  };

  // 2. Submit Vehicle Hire WhatsApp Enquiry
  const handleVehicleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!vehicleData.vehicleType) {
      return setErrorMsg('Please select a vehicle type.');
    }
    if (!vehicleData.travelDate) {
      return setErrorMsg('Please choose your travel date.');
    }
    if (vehicleData.travelDate < todayStr) {
      return setErrorMsg('Travel date cannot be in the past.');
    }
    if (!vehicleData.pickup.trim()) {
      return setErrorMsg('Please specify a pickup location.');
    }
    if (!vehicleData.drop.trim()) {
      return setErrorMsg('Please specify a drop location.');
    }

    const message = buildVehicleWhatsAppMessage({
      vehicleType: vehicleData.vehicleType,
      travelDate: vehicleData.travelDate,
      passengers: vehicleData.passengers,
      pickup: vehicleData.pickup,
      drop: vehicleData.drop,
      duration: vehicleData.duration,
      additionalRequirements: vehicleData.additionalRequirements
    });

    setLastMessageSent(message);
    openWhatsApp(message);
    setHasOpenedWhatsApp(true);
  };

  // 3. Submit Group Tour WhatsApp Enquiry
  const handleGroupSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!groupData.travelDate) {
      return setErrorMsg('Please select your preferred travel date.');
    }
    if (groupData.travelDate < todayStr) {
      return setErrorMsg('Travel date cannot be in the past.');
    }
    if (!groupData.groupSize.trim()) {
      return setErrorMsg('Please enter approximate group size.');
    }
    if (!groupData.pickupLocation.trim()) {
      return setErrorMsg('Please enter pickup location.');
    }

    const message = buildGroupTourWhatsAppMessage({
      groupType: groupData.groupType,
      groupSize: groupData.groupSize,
      travelDate: groupData.travelDate,
      duration: groupData.duration,
      pickupLocation: groupData.pickupLocation,
      requirements: groupData.requirements,
      notes: groupData.notes
    });

    setLastMessageSent(message);
    openWhatsApp(message);
    setHasOpenedWhatsApp(true);
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="glass-card"
        style={{
          maxWidth: '680px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '28px',
          position: 'relative',
          background: '#F7F4E9',
          color: '#123C2A',
          borderRadius: '24px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)',
          border: '1.5px solid rgba(18, 60, 42, 0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(18, 60, 42, 0.08)',
            border: 'none',
            color: '#123C2A',
            padding: '8px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(18, 60, 42, 0.16)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(18, 60, 42, 0.08)')}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#25D366', color: '#FFFFFF', padding: '4px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '8px' }}>
            <MessageSquare size={13} />
            <span>DIRECT WHATSAPP BOOKING & ENQUIRY</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: '#123C2A', fontSize: '1.75rem', fontWeight: 800, margin: '2px 0 6px', lineHeight: 1.25 }}>
            Book With Sunil Tours N Travels
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#52645C', lineHeight: 1.5, margin: 0 }}>
            Fill in your details to open WhatsApp with a prefilled enquiry. Our operator will confirm vehicle charges, availability, and itinerary details.
          </p>
        </div>

        {/* Enquiry Category Switcher Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '22px', borderBottom: '1.5px solid rgba(18, 60, 42, 0.15)', paddingBottom: '12px', overflowX: 'auto' }}>
          <button
            type="button"
            onClick={() => { setActiveTab('package'); setErrorMsg(''); setHasOpenedWhatsApp(false); }}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: activeTab === 'package' ? '1.5px solid #123C2A' : '1px solid rgba(18, 60, 42, 0.2)',
              background: activeTab === 'package' ? '#123C2A' : '#FFFFFF',
              color: activeTab === 'package' ? '#FFD429' : '#123C2A',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Compass size={14} />
            <span>Sightseeing Package</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('vehicle'); setErrorMsg(''); setHasOpenedWhatsApp(false); }}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: activeTab === 'vehicle' ? '1.5px solid #123C2A' : '1px solid rgba(18, 60, 42, 0.2)',
              background: activeTab === 'vehicle' ? '#123C2A' : '#FFFFFF',
              color: activeTab === 'vehicle' ? '#FFD429' : '#123C2A',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Truck size={14} />
            <span>Vehicle Hire</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('group'); setErrorMsg(''); setHasOpenedWhatsApp(false); }}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: activeTab === 'group' ? '1.5px solid #123C2A' : '1px solid rgba(18, 60, 42, 0.2)',
              background: activeTab === 'group' ? '#123C2A' : '#FFFFFF',
              color: activeTab === 'group' ? '#FFD429' : '#123C2A',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Users size={14} />
            <span>Student & Corporate</span>
          </button>
        </div>

        {/* Helpful Validation Error Alert */}
        {errorMsg && (
          <div
            style={{
              background: '#FEE2E2',
              border: '1.5px solid #FCA5A5',
              color: '#991B1B',
              padding: '12px 16px',
              borderRadius: '12px',
              fontSize: '0.88rem',
              fontWeight: 600,
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Informative Guidance Banner after WhatsApp opens */}
        {hasOpenedWhatsApp && (
          <div
            style={{
              background: '#DCFCE7',
              border: '1.5px solid #86EFAC',
              color: '#166534',
              padding: '16px',
              borderRadius: '16px',
              marginBottom: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '0.96rem', marginBottom: '4px' }}>
              <Check size={18} color="#16A34A" />
              <span>WhatsApp Opened with Prefilled Enquiry!</span>
            </div>
            <p style={{ fontSize: '0.88rem', margin: '4px 0 10px', lineHeight: 1.5 }}>
              <strong>Important step:</strong> Please press <strong>Send</strong> in WhatsApp to deliver your enquiry to Mr. Sunil. Opening WhatsApp prepares your details but does not automatically finalize a booking until availability is confirmed.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => openWhatsApp(lastMessageSent)}
                className="btn btn-whatsapp btn-sm"
                style={{ fontSize: '0.82rem', padding: '8px 14px' }}
              >
                <MessageSquare size={14} /> Re-open WhatsApp
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-outline-green btn-sm"
                style={{ fontSize: '0.82rem', padding: '8px 14px' }}
              >
                Done / Close
              </button>
            </div>
          </div>
        )}

        {/* ===================== TAB 1: SIGHTSEEING PACKAGE ===================== */}
        {activeTab === 'package' && (
          <form onSubmit={handlePackageSubmit}>
            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                Sightseeing Package *
              </label>
              <select
                value={pkgData.packageName}
                onChange={(e) => { setPkgData({ ...pkgData, packageName: e.target.value }); setErrorMsg(''); }}
                className="form-select"
                style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                required
              >
                {packageOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-2" style={{ gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Travel Date *
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={pkgData.travelDate}
                  onChange={(e) => { setPkgData({ ...pkgData, travelDate: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Number of Travellers *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 adults, 1 child"
                  value={pkgData.numberOfTravellers}
                  onChange={(e) => { setPkgData({ ...pkgData, numberOfTravellers: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                Pickup Location *
              </label>
              <input
                type="text"
                placeholder="e.g. Chikkamagaluru Bus Stand / Resort / Homestay"
                value={pkgData.pickupLocation}
                onChange={(e) => { setPkgData({ ...pkgData, pickupLocation: e.target.value }); setErrorMsg(''); }}
                className="form-input"
                style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                Special Requests / Notes (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Any special requests regarding vehicle type, timing, or itinerary spots..."
                value={pkgData.specialRequests}
                onChange={(e) => setPkgData({ ...pkgData, specialRequests: e.target.value })}
                className="form-textarea"
                style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
              />
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
              <button type="button" onClick={handleClose} className="btn btn-outline-green btn-sm">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ padding: '12px 24px', fontSize: '0.92rem', borderRadius: '30px' }}
              >
                <MessageSquare size={18} />
                <span>Enquire Package on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

        {/* ===================== TAB 2: VEHICLE HIRE ===================== */}
        {activeTab === 'vehicle' && (
          <form onSubmit={handleVehicleSubmit}>
            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                Selected Vehicle Type *
              </label>
              <select
                value={vehicleData.vehicleType}
                onChange={(e) => { setVehicleData({ ...vehicleData, vehicleType: e.target.value }); setErrorMsg(''); }}
                className="form-select"
                style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                required
              >
                {vehicleOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-3" style={{ gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Travel Date *
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={vehicleData.travelDate}
                  onChange={(e) => { setVehicleData({ ...vehicleData, travelDate: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Passengers *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10 persons"
                  value={vehicleData.passengers}
                  onChange={(e) => { setVehicleData({ ...vehicleData, passengers: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Duration *
                </label>
                <select
                  value={vehicleData.duration}
                  onChange={(e) => setVehicleData({ ...vehicleData, duration: e.target.value })}
                  className="form-select"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                >
                  <option value="1 Day">1 Day</option>
                  <option value="2 Days">2 Days</option>
                  <option value="3 Days">3 Days</option>
                  <option value="4+ Days">4+ Days</option>
                </select>
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Pickup Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chikkamagaluru Bus Stand / Resort"
                  value={vehicleData.pickup}
                  onChange={(e) => { setVehicleData({ ...vehicleData, pickup: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Drop Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chikkamagaluru Town / Bangalore / Mysore"
                  value={vehicleData.drop}
                  onChange={(e) => { setVehicleData({ ...vehicleData, drop: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                Additional Requirements (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="AC/Non-AC, luggage carriers, early morning pickup, etc..."
                value={vehicleData.additionalRequirements}
                onChange={(e) => setVehicleData({ ...vehicleData, additionalRequirements: e.target.value })}
                className="form-textarea"
                style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
              <button type="button" onClick={handleClose} className="btn btn-outline-green btn-sm">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ padding: '12px 24px', fontSize: '0.92rem', borderRadius: '30px' }}
              >
                <MessageSquare size={18} />
                <span>Enquire Vehicle on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

        {/* ===================== TAB 3: STUDENT & CORPORATE GROUP TOURS ===================== */}
        {activeTab === 'group' && (
          <form onSubmit={handleGroupSubmit}>
            <div className="grid grid-2" style={{ gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Group Type *
                </label>
                <select
                  value={groupData.groupType}
                  onChange={(e) => setGroupData({ ...groupData, groupType: e.target.value })}
                  className="form-select"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                >
                  {groupTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Group Size *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 45 students / 20 employees"
                  value={groupData.groupSize}
                  onChange={(e) => { setGroupData({ ...groupData, groupSize: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Travel Date *
                </label>
                <input
                  type="date"
                  min={todayStr}
                  value={groupData.travelDate}
                  onChange={(e) => { setGroupData({ ...groupData, travelDate: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Trip Duration *
                </label>
                <select
                  value={groupData.duration}
                  onChange={(e) => setGroupData({ ...groupData, duration: e.target.value })}
                  className="form-select"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                >
                  <option value="1 Day Sightseeing">1 Day Sightseeing</option>
                  <option value="2 Days / 1 Night">2 Days / 1 Night</option>
                  <option value="3 Days / 2 Nights">3 Days / 2 Nights</option>
                  <option value="Custom Duration">Custom Duration</option>
                </select>
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '14px', marginBottom: '14px' }}>
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Pickup Location *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Bangalore / Mysore / Chikkamagaluru"
                  value={groupData.pickupLocation}
                  onChange={(e) => { setGroupData({ ...groupData, pickupLocation: e.target.value }); setErrorMsg(''); }}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                  Requirements *
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50-Seater Bus + Meals + Campfire + Guide"
                  value={groupData.requirements}
                  onChange={(e) => setGroupData({ ...groupData, requirements: e.target.value })}
                  className="form-input"
                  style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" style={{ fontWeight: 700, color: '#123C2A', marginBottom: '6px', display: 'block', fontSize: '0.88rem' }}>
                Additional Notes
              </label>
              <textarea
                rows="2"
                placeholder="College/Company name, special accommodation needs, budget preferences..."
                value={groupData.notes}
                onChange={(e) => setGroupData({ ...groupData, notes: e.target.value })}
                className="form-textarea"
                style={{ borderRadius: '12px', padding: '10px 14px', border: '1.5px solid rgba(18, 60, 42, 0.2)', background: '#FFFFFF', width: '100%', fontSize: '0.92rem' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', alignItems: 'center' }}>
              <button type="button" onClick={handleClose} className="btn btn-outline-green btn-sm">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-whatsapp"
                style={{ padding: '12px 24px', fontSize: '0.92rem', borderRadius: '30px' }}
              >
                <MessageSquare size={18} />
                <span>Get Group Quotation on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
