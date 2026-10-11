import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';
import ImageLightbox from '../common/ImageLightbox';
import './Gallery.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: 'Mullayanagiri Mountain Peak',
      subtitle: '1,930m Altitude Misty Trekking Trail',
      tag: 'Mountain Peak',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
      className: 'gallery-card-1'
    },
    {
      id: 2,
      title: 'Hebbe Cascading Waterfalls',
      subtitle: '2-Stage Coffee Rainforest Waterfall',
      tag: 'Waterfalls',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
      className: 'gallery-card-2'
    },
    {
      id: 3,
      title: 'Belur Chennakeshava Temple',
      subtitle: '12th Century Hoysala Star Temple',
      tag: 'Hoysala Heritage',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
      className: 'gallery-card-3'
    },
    {
      id: 4,
      title: '4x4 Off-Road Jeep Safari',
      subtitle: 'Thrilling Mountain Jeep Trekking',
      tag: 'Jeep Safari',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      className: 'gallery-card-4'
    },
    {
      id: 5,
      title: 'Halebidu Hoysaleswara Temple',
      subtitle: 'Ancient Mythology Relief Friezes',
      tag: 'Heritage',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg',
      className: 'gallery-card-5'
    }
  ];

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = galleryItems.map((item) => ({
    url: item.image,
    caption: `${item.title} — ${item.subtitle}`
  }));

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        
        {/* Header Row */}
        <div className="gallery-header-row">
          <div>
            <span className="gallery-badge">PHOTO HIGHLIGHTS</span>
            <h2 className="gallery-title">
              Moments <i>Worth Remembering</i>
            </h2>
            <p className="gallery-subtitle">
              Discover the natural beauty, waterfalls and heritage of Chikkamagaluru.
            </p>
          </div>

          <Link to="/destinations" className="btn-gallery-view">
            <span>View Full Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="editorial-gallery-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              className={`gallery-card ${item.className}`}
              onClick={() => handleOpenLightbox(idx)}
            >
              <img src={item.image} alt={item.title} />

              <div className="gallery-card-overlay">
                <span className="gallery-tag">{item.tag}</span>

                <div className="gallery-zoom-icon" title="View Full Photo">
                  <Maximize2 size={16} />
                </div>

                <div className="gallery-card-info">
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <div className="gallery-card-sub">{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Popup */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))}
          onNext={() => setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))}
        />
      )}
    </section>
  );
};

export default Gallery;
