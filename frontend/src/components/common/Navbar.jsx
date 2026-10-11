import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import logoImg from '../../assets/images/sunil-tours-logo.png';
import './Navbar.css';

const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly 6 core navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="site-header">
      <div className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        
        {/* Approved Logo 1 Image Only */}
        <Link to="/" className="navbar-logo">
          <img
            src={logoImg}
            alt="Sunil Tours N Travels Chikkamagaluru"
          />
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${active ? 'active' : ''}`}
              >
                {link.name}
                {active && <div className="active-indicator" />}
              </Link>
            );
          })}
        </nav>

        {/* Right Desktop Action Buttons */}
        <div className="desktop-actions">
          {/* Outlined Glass-Style Phone Button */}
          <a
            href="tel:+918197007359"
            className="nav-phone-btn"
          >
            <Phone size={15} color="#FFD429" />
            <span>+91 8197007359</span>
          </a>

          {/* Prominent Yellow Book Now Button */}
          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="nav-book-btn"
          >
            <Calendar size={16} color="#123C2A" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X size={26} color="#FFD429" />
          ) : (
            <Menu size={26} color="#F7F4E9" />
          )}
        </button>
      </div>

      {/* Mobile Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`mobile-link ${active ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mobile-actions">
            <a
              href="tel:+918197007359"
              className="btn btn-outline-light"
              style={{ justifyContent: 'center', borderRadius: '30px' }}
            >
              <Phone size={16} color="#FFD429" />
              <span>Call +91 8197007359</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="btn btn-yellow"
              style={{ justifyContent: 'center', borderRadius: '30px' }}
            >
              <Calendar size={18} />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
