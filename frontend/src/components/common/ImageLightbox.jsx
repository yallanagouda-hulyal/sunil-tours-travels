import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ images = [], currentIndex = 0, onClose, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;

  const currentImage = typeof images[currentIndex] === 'string' 
    ? { url: images[currentIndex], caption: '' }
    : images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(9, 23, 17, 0.95)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justify: 'space-between',
        padding: '20px'
      }}
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          color: 'var(--color-warm-ivory)',
          zIndex: 10000
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-adventure-yellow)' }}>
          Photo {currentIndex + 1} of {images.length}
        </span>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: 'none',
            color: '#FFFFFF',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev Arrow */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(18, 60, 42, 0.85)',
              border: '1px solid rgba(255, 212, 41, 0.5)',
              color: 'var(--color-adventure-yellow)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <img
          src={currentImage.url || currentImage}
          alt={currentImage.caption || 'Chikkamagaluru Landmark'}
          style={{
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
          }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80';
          }}
        />

        {/* Next Arrow */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(18, 60, 42, 0.85)',
              border: '1px solid rgba(255, 212, 41, 0.5)',
              color: 'var(--color-adventure-yellow)',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {/* Caption Bar */}
      {currentImage.caption && (
        <div
          style={{
            color: 'var(--color-warm-ivory)',
            textAlign: 'center',
            fontSize: '0.95rem',
            padding: '10px 20px',
            background: 'rgba(18, 60, 42, 0.6)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: '10px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {currentImage.caption}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
