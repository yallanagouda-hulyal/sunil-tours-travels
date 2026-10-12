import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Common Public Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import Chatbot from './components/common/Chatbot';
import BookingModal from './components/common/BookingModal';

// Public Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import Vehicles from './pages/Vehicles';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/common/ScrollToTop';

const PublicLayout = ({ children, onOpenBooking }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`public-layout-root ${isHome ? 'is-home-page' : ''}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onOpenBooking={onOpenBooking} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <WhatsAppFloat isHome={isHome} />
      <Chatbot isHome={isHome} />
    </div>
  );
};

const App = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState('');

  const handleOpenBooking = (item = '') => {
    setSelectedBookingItem(item);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedBookingItem('');
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Website Routes */}
        <Route
          path="/"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <Home onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        <Route
          path="/destinations"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <Destinations onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        <Route
          path="/destinations/:slug"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <DestinationDetail onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        {/* Singular URL aliases */}
        <Route path="/destination" element={<Navigate to="/destinations" replace />} />
        <Route
          path="/destination/:slug"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <DestinationDetail onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        <Route
          path="/packages"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <Packages onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        <Route
          path="/packages/:slug"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <PackageDetail onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        <Route
          path="/vehicles"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <Vehicles onOpenBooking={handleOpenBooking} />
            </PublicLayout>
          }
        />
        <Route
          path="/about"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <About />
            </PublicLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <Contact />
            </PublicLayout>
          }
        />

        {/* Dedicated Full-Page Policy Routes */}
        <Route
          path="/privacy-policy"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <PrivacyPolicy />
            </PublicLayout>
          }
        />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />

        <Route
          path="/terms-and-conditions"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <TermsConditions />
            </PublicLayout>
          }
        />
        <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />

        <Route
          path="/cancellation-policy"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <CancellationPolicy />
            </PublicLayout>
          }
        />
        <Route path="/cancellation" element={<Navigate to="/cancellation-policy" replace />} />
        <Route path="/cancellation-and-refund-policy" element={<Navigate to="/cancellation-policy" replace />} />

        {/* 404 Catch All */}
        <Route
          path="*"
          element={
            <PublicLayout onOpenBooking={handleOpenBooking}>
              <NotFound />
            </PublicLayout>
          }
        />
      </Routes>

      {/* Global WhatsApp Booking & Enquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        defaultItem={selectedBookingItem}
      />
    </>
  );
};

export default App;
