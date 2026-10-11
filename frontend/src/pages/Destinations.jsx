import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import API from '../services/api';
import { openWhatsApp, buildDestinationWhatsAppMessage } from '../utils/whatsapp';

const defaultLandmarks = [
  {
    _id: '1',
    name: 'Mullayanagiri Peak',
    category: 'Nature',
    subCategory: 'Viewpoints',
    tags: ['nature', 'viewpoints', 'adventure'],
    location: 'Chikkamagaluru (22 km)',
    duration: '2-3 Hours',
    description: 'Highest peak in Karnataka standing tall at 1,930m. Enjoy panoramic green mountain ridges, misty valleys, and serene temple views.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
    slug: 'mullayanagiri-peak'
  },
  {
    _id: '2',
    name: 'Hebbe Waterfalls',
    category: 'Waterfalls',
    subCategory: 'Nature',
    tags: ['waterfalls', 'nature', 'adventure'],
    location: 'Kemmanagundi (65 km)',
    duration: '3-4 Hours',
    description: 'Spectacular 2-stage waterfall cascading 168 meters inside dense coffee estate rainforests, reachable via 4x4 jeep trek.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
    slug: 'hebbe-waterfalls'
  },
  {
    _id: '3',
    name: 'Belur Chennakeshava Temple',
    category: 'Heritage',
    subCategory: 'Temples',
    tags: ['heritage', 'temples'],
    location: 'Belur, Hassan (26 km)',
    duration: '2 Hours',
    description: 'Famed 12th-century star-shaped stone temple on the Yagachi River, renowned for detailed Hoysala architectural carvings.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
    slug: 'belur-chennakeshava-temple'
  },
  {
    _id: '4',
    name: 'Halebidu Hoysaleswara Temple',
    category: 'Heritage',
    subCategory: 'Temples',
    tags: ['heritage', 'temples'],
    location: 'Halebidu (31 km)',
    duration: '2 Hours',
    description: 'Intricately carved twin Hoysala temple dedicated to Lord Shiva with ancient mythological relief friezes and sculptures.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg',
    slug: 'halebidu-hoysaleswara-temple'
  },
  {
    _id: '5',
    name: 'Kalhatti Falls',
    category: 'Waterfalls',
    subCategory: 'Nature',
    tags: ['waterfalls', 'nature', 'temples'],
    location: 'Kemmanagundi (55 km)',
    duration: '2 Hours',
    description: 'Cascading waters falling over ancient rock-cut Veerabhadra temple near Kemmanagundi hill station.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg',
    slug: 'kalhattagiri-waterfalls'
  },
  {
    _id: '6',
    name: '4x4 Off-Road Jeep Trek',
    category: 'Adventure',
    subCategory: 'Nature',
    tags: ['adventure', 'nature'],
    location: 'Western Ghats Trails',
    duration: '3-5 Hours',
    description: 'Thrilling 4x4 off-road jeep safari through rugged Western Ghats trails, coffee estates, and mountain viewpoints.',
    mainImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    slug: 'kemmanagundi-z-point'
  }
];

const Destinations = () => {
  const [destinations, setDestinations] = useState(defaultLandmarks);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Nature', 'Waterfalls', 'Viewpoints', 'Temples', 'Adventure', 'Heritage'];

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await API.get('/destinations');
        if (res.success && res.destinations && res.destinations.length > 0) {
          setDestinations(res.destinations);
        }
      } catch (err) {
        console.log('Using default landmark dataset');
      }
    };
    fetchDestinations();
  }, []);

  const filtered = destinations.filter((item) => {
    const selectedCat = category.toLowerCase();
    
    let matchesCategory = false;
    if (category === 'All') {
      matchesCategory = true;
    } else {
      const itemCat = (item.category || '').toLowerCase();
      const itemSub = (item.subCategory || '').toLowerCase();
      const itemTags = (item.tags || []).map((t) => t.toLowerCase());
      matchesCategory = itemCat === selectedCat || itemSub === selectedCat || itemTags.includes(selectedCat);
    }

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: '#F7F4E9', padding: '90px 0', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Centered Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
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
            CHIKKAMAGALURU SIGHTSEEING SPOTS
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
            Explore <span style={{ color: '#B28C00', borderBottom: '3px solid #FFD429' }}>Top Destinations</span>
          </h1>
          <p style={{ color: '#52645C', fontSize: '1.02rem', lineHeight: 1.6, margin: '0 auto' }}>
            Discover high altitude peaks, waterfalls, ancient Hoysala heritage temples, and breezy hill stations.
          </p>
        </div>

        {/* Category Filters & Search Bar */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '30px',
            border: '1.5px solid #E2E5D9',
            padding: '14px 22px',
            marginBottom: '44px',
            boxShadow: '0 6px 20px rgba(18, 60, 42, 0.06)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            
            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', maxWidth: '100%' }}>
              {categories.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    style={{
                      padding: '8px 20px',
                      borderRadius: '24px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      border: '1.5px solid #123C2A',
                      background: active ? '#123C2A' : '#F7F4E9',
                      color: active ? '#FFFFFF' : '#123C2A',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = '#123C2A';
                        e.currentTarget.style.color = '#FFD429';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = '#F7F4E9';
                        e.currentTarget.style.color = '#123C2A';
                      }
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '260px', flexShrink: 0 }}>
              <Search size={18} color="#52645C" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search destination..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 16px 10px 42px',
                  borderRadius: '24px',
                  border: '1.5px solid #E2E5D9',
                  background: '#F7F4E9',
                  color: '#123C2A',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  outline: 'none'
                }}
              />
            </div>

          </div>
        </div>

        {/* Destination Cards Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#52645C', fontSize: '1.05rem' }}>
            No sightseeing spots found matching your search or category filter.
          </div>
        ) : (
          <div className="destinations-responsive-grid">
            {filtered.map((item) => (
              <div
                key={item._id}
                className="glancey-dest-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1.5px solid rgba(18, 60, 42, 0.12)',
                  boxShadow: '0 10px 30px rgba(18, 60, 42, 0.07), 0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Photo Header with Zoom & Gradient Overlay */}
                  <Link to={`/destinations/${item.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
                    <div className="img-zoom-container" style={{ height: '230px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={item.mainImage}
                        alt={item.name}
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
                      
                      {/* Category Badge - Top Left */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '14px',
                          left: '14px',
                          background: 'rgba(18, 60, 42, 0.9)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#FFD429',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          padding: '6px 14px',
                          borderRadius: '20px',
                          border: '1px solid rgba(255, 212, 41, 0.5)',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content Body */}
                  <div style={{ padding: '22px 22px 16px' }}>
                    
                    {/* Title */}
                    <Link to={`/destinations/${item.slug}`} style={{ textDecoration: 'none' }}>
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
                        {item.name}
                      </h3>
                    </Link>

                    {/* Glanceable Micro-Info Chips */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '14px'
                      }}
                    >
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
                        <MapPin size={13} color="#123C2A" />
                        <span>{item.location}</span>
                      </span>
                      {item.duration && (
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
                          <Clock size={13} color="#7A6000" />
                          <span>{item.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Concise Description */}
                    <p style={{ fontSize: '0.9rem', color: '#52645C', lineHeight: 1.6, marginBottom: '16px' }}>
                      {item.description}
                    </p>

                  </div>
                </div>

                {/* Card Action Area at Bottom */}
                <div style={{ padding: '0 22px 22px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  
                  {/* View Details Primary Button */}
                  <Link
                    to={`/destinations/${item.slug}`}
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
                      padding: '12px 20px',
                      borderRadius: '30px',
                      border: '1px solid rgba(255, 212, 41, 0.4)',
                      textDecoration: 'none',
                      boxShadow: '0 4px 16px rgba(18, 60, 42, 0.2)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} color="#FFD429" className="glancey-arrow" style={{ transition: 'transform 0.25s ease' }} />
                  </Link>

                  {/* Circular WhatsApp Action Button */}
                  <button
                    type="button"
                    onClick={() => openWhatsApp(buildDestinationWhatsAppMessage(item.name))}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: '#25D366',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.4)';
                    }}
                    title="Enquire on WhatsApp"
                    aria-label={`Enquire about ${item.name} on WhatsApp`}
                  >
                    <MessageSquare size={18} color="#FFFFFF" />
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Responsive Grid Helper */}
        <style>{`
          .destinations-responsive-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 26px;
            align-items: stretch;
          }
          @media (max-width: 1024px) {
            .destinations-responsive-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 22px;
            }
          }
          @media (max-width: 640px) {
            .destinations-responsive-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}</style>

      </div>
    </div>
  );
};

export default Destinations;
