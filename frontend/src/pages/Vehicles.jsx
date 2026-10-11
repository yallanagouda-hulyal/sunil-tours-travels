import React, { useState, useEffect } from 'react';
import { Users, Bus, ShieldCheck, Check, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import PricingDisclaimer from '../components/common/PricingDisclaimer';
import API from '../services/api';
import { openWhatsApp, buildVehicleWhatsAppMessage } from '../utils/whatsapp';

const defaultVehicles = [
  {
    _id: '1',
    name: 'Ertiga / Innova / Dzire AC Car',
    category: 'SEDAN / SUV',
    seatingCapacity: 6,
    luggageCapacity: '3-4 Medium Bags',
    description: 'Clean, comfortable family car for smooth private sightseeing across Chikkamagaluru, Belur, Halebidu and Mudigere with polite local hill drivers.',
    facilities: ['Air Conditioning', 'Comfortable Plush Seats', 'Clean Interior', 'Polite Local Driver'],
    suitableFor: 'Couples & Small Families (4-6 persons)',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 3500,
    priceLabel: 'per day vehicle charge'
  },
  {
    _id: '2',
    name: '4x4 Off-Road Mahindra Jeep',
    category: '4X4 OFF-ROAD JEEP',
    seatingCapacity: 7,
    luggageCapacity: 'Compact Rear Space',
    description: 'Heavy duty 4-wheel drive off-road jeep specially built for rugged Chikkamagaluru hill terrains, Jhari falls water stream crossing & Hebbe falls estate track.',
    facilities: ['4WD Mountain Drive', 'Open Top / Canopy', 'Expert Hill Driver', 'Rugged All-Terrain Tires'],
    suitableFor: 'Waterfalls Safari & Off-Road Thrills',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 2500,
    priceLabel: 'per safari trip'
  },
  {
    _id: '3',
    name: '10-Seater Force Tempo Traveller',
    category: 'TEMPO TRAVELLER',
    seatingCapacity: 10,
    luggageCapacity: 'Carrier for 10 large bags',
    description: 'Spacious 10-seater pushback seat Tempo Traveller with air conditioning, music system, and wide glass windows for mountain viewing.',
    facilities: ['AC & Non-AC option', 'Reclining pushback seats', 'Stereo Music System', 'Roof Luggage Carrier', 'Charging Points'],
    suitableFor: 'Families, Friends & Group Sightseeing',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 3500,
    priceLabel: 'per day vehicle charge'
  },
  {
    _id: '4',
    name: '50-Seater Luxury Tourist Bus',
    category: 'LUXURY COACH BUS',
    seatingCapacity: 50,
    luggageCapacity: 'Underbelly Luggage Compartment',
    description: 'High-deck 50-seater luxury bus ideal for college trips, school excursions, large corporate outings, and wedding guest transportation.',
    facilities: ['50 Soft Pushback Seats', 'Surround Sound System & LED Screen', 'Air Suspension for ghat roads', 'Spacious Legroom', 'Driver + Helper Assistance'],
    suitableFor: 'Student Groups & Corporate Outings',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 12000,
    priceLabel: 'per day bus charge'
  }
];

const Vehicles = ({ onOpenBooking }) => {
  const [vehicles, setVehicles] = useState(defaultVehicles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await API.get('/vehicles');
        if (res.success && res.vehicles && res.vehicles.length > 0) {
          setVehicles(res.vehicles);
        }
      } catch (err) {
        console.log('Using default vehicles fleet dataset');
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div style={{ background: '#F7F4E9', padding: '90px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
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
              marginBottom: '12px'
            }}
          >
            SUNIL TOURS TRANSPORT FLEET
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              color: '#123C2A',
              fontSize: '2.6rem',
              fontWeight: 800,
              marginBottom: '14px',
              lineHeight: 1.25
            }}
          >
            Sightseeing & <span style={{ color: '#B28C00', borderBottom: '3px solid #FFD429' }}>Group Vehicles</span>
          </h1>
          <p style={{ color: '#52645C', fontSize: '1.02rem', lineHeight: 1.6, margin: '0 auto' }}>
            From 4x4 off-road jeeps to 10-seater Tempo Travellers and 50-seater luxury buses for college and corporate trips.
          </p>
        </div>

        {/* Pricing Disclaimer */}
        <PricingDisclaimer />

        {/* Vehicles Grid */}
        <div className="vehicles-responsive-grid" style={{ marginTop: '36px' }}>
          {vehicles.map((v) => {

            return (
              <div
                key={v._id || v.name}
                className="glancey-dest-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  border: '1.5px solid rgba(18, 60, 42, 0.12)',
                  boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Image Header with Zoom & Gradient Overlay */}
                  <div className="img-zoom-container" style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={v.image}
                      alt={v.name}
                      className="glancey-card-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    />
                    
                    {/* Gradient Overlay for visual depth */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(18, 60, 42, 0.75) 0%, rgba(18, 60, 42, 0.2) 50%, transparent 100%)',
                        pointerEvents: 'none'
                      }}
                    />

                    {/* Passenger Capacity Badge - Top Left */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(18, 60, 42, 0.9)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        color: '#FFD429',
                        fontWeight: 800,
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(255, 212, 41, 0.5)',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                      }}
                    >
                      👥 {v.seatingCapacity} Passengers Capacity
                    </span>

                    {/* Category Badge - Top Right */}
                    {v.category && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          right: '14px',
                          background: 'rgba(9, 23, 17, 0.85)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          padding: '6px 14px',
                          borderRadius: '20px',
                          fontSize: '0.78rem',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {v.category}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '22px 22px 16px' }}>
                    <h3
                      className="glancey-card-title"
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#123C2A',
                        marginBottom: '10px',
                        lineHeight: 1.3,
                        transition: 'color 0.25s ease'
                      }}
                    >
                      {v.name}
                    </h3>

                    {/* Glanceable Micro-Info Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                      {v.suitableFor && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'rgba(18, 60, 42, 0.06)',
                            color: '#123C2A',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            padding: '5px 12px',
                            borderRadius: '16px',
                            border: '1px solid rgba(18, 60, 42, 0.1)'
                          }}
                        >
                          <Users size={13} color="#123C2A" />
                          <span>{v.suitableFor}</span>
                        </span>
                      )}
                      {v.luggageCapacity && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'rgba(255, 212, 41, 0.15)',
                            color: '#7A6000',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            padding: '5px 12px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 212, 41, 0.4)'
                          }}
                        >
                          <ShieldCheck size={13} color="#7A6000" />
                          <span>{v.luggageCapacity}</span>
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: '#52645C', lineHeight: 1.6, marginBottom: '18px' }}>
                      {v.description}
                    </p>

                    {/* Starting Rate Banner */}
                    <div
                      style={{
                        background: 'rgba(18, 60, 42, 0.04)',
                        border: '1.5px solid rgba(18, 60, 42, 0.1)',
                        padding: '14px 18px',
                        borderRadius: '18px',
                        marginBottom: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.75rem', color: '#52645C', display: 'block', textTransform: 'uppercase', letterSpacing: '0.6px', fontWeight: 800, marginBottom: '2px' }}>
                          STARTING RATE:
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                          <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#123C2A', lineHeight: 1 }}>
                            ₹{v.startingPrice ? v.startingPrice.toLocaleString() : 'Quote'}
                          </span>
                          <span style={{ fontSize: '0.78rem', color: '#52645C', fontWeight: 600 }}>
                            {v.priceLabel || 'per day'}
                          </span>
                        </div>
                      </div>
                      <span
                        style={{
                          background: 'rgba(255, 212, 41, 0.25)',
                          color: '#7A6000',
                          border: '1px solid rgba(255, 212, 41, 0.6)',
                          fontWeight: 800,
                          padding: '5px 12px',
                          borderRadius: '20px',
                          fontSize: '0.78rem',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {v.category || 'FLEET'}
                      </span>
                    </div>

                    {/* Vehicle Facilities List */}
                    {v.facilities && v.facilities.length > 0 && (
                      <div style={{ marginBottom: '16px' }}>
                        <strong style={{ fontSize: '0.85rem', color: '#123C2A', display: 'block', marginBottom: '10px', fontWeight: 800 }}>
                          Vehicle Facilities & Equipment:
                        </strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {v.facilities.map((fac, fIdx) => (
                            <span
                              key={fIdx}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                background: 'rgba(22, 163, 74, 0.08)',
                                color: '#123C2A',
                                border: '1px solid rgba(22, 163, 74, 0.25)',
                                padding: '5px 12px',
                                borderRadius: '16px',
                                fontSize: '0.8rem',
                                fontWeight: 700
                              }}
                            >
                              <Check size={14} color="#16A34A" />
                              <span>{fac}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div style={{ padding: '0 22px 22px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => onOpenBooking(v.name)}
                      className="glancey-btn-main"
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: '#123C2A',
                        color: '#F7F4E9',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        padding: '12px 18px',
                        borderRadius: '30px',
                        border: '1px solid rgba(255, 212, 41, 0.4)',
                        boxShadow: '0 4px 16px rgba(18, 60, 42, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <Calendar size={16} color="#FFD429" />
                      <span>Enquire Vehicle</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openWhatsApp(buildVehicleWhatsAppMessage({ vehicleType: v.name, passengers: String(v.seatingCapacity) }))}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        background: '#25D366',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        padding: '12px 18px',
                        borderRadius: '30px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#20BA5A';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#25D366';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.35)';
                      }}
                    >
                      <MessageSquare size={16} color="#FFFFFF" />
                      <span>Book WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Responsive Grid Helper */}
        <style>{`
          .vehicles-responsive-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            align-items: stretch;
          }
          @media (max-width: 1024px) {
            .vehicles-responsive-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 768px) {
            .vehicles-responsive-grid {
              grid-template-columns: 1fr;
              gap: 22px;
            }
          }
        `}</style>

      </div>
    </div>
  );
};

export default Vehicles;
