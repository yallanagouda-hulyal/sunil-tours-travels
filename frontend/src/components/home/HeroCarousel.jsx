import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 5 Authentic Real HD Images for Chikkamagaluru Carousel
  const slides = [
    {
      id: 1,
      title: 'Mullayanagiri Peak',
      subtitle: 'Highest Peak in Karnataka (1,930m)',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
      thumb: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Off-Road 4x4 Jeep Safari',
      subtitle: 'Rugged Mountain & Stream Trails',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80',
      thumb: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Hebbe & Jhari Waterfalls',
      subtitle: 'Cascading Waterfalls inside Coffee Estates',
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=80',
      thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Z Point & Kemmanagundi',
      subtitle: 'Breathtaking Sunrise & Sunset Vistas',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80',
      thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      title: 'Belur Heritage Temple',
      subtitle: '12th Century Hoysala Stone Heritage',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
      thumb: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg'
    }
  ];

  // Automatic slideshow timer - changes slide every 5 seconds
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="hero-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scenic Image Carousel"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-carousel-slide ${index === activeSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
          aria-hidden={index !== activeSlide}
        >
          <div className="hero-carousel-overlay" />
          <div className="hero-carousel-caption">
            <span className="hero-carousel-tag">FEATURED LANDMARK</span>
            <h4 className="hero-carousel-title">{slide.title}</h4>
            <p className="hero-carousel-sub">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Floating Yellow Emblem Badge */}
      <div className="hero-emblem-badge" aria-hidden="true">
        <span>Nature</span>
        <span>Adventure</span>
        <span>Memories</span>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={handlePrev}
        className="carousel-arrow prev"
        aria-label="Previous Slide"
        type="button"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={handleNext}
        className="carousel-arrow next"
        aria-label="Next Slide"
        type="button"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators Dots */}
      <div className="carousel-dots-wrapper">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`carousel-dot ${idx === activeSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
            type="button"
          />
        ))}
      </div>

      {/* 5 Thumbnail Preview Cards */}
      <div className="carousel-thumbnails-wrapper">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(idx)}
            className={`carousel-thumb-card ${idx === activeSlide ? 'active' : ''}`}
            aria-label={`Select ${slide.title}`}
            type="button"
          >
            <img src={slide.thumb} alt={slide.title} />
            <span className="thumb-title">{slide.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
