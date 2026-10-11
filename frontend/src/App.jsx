import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
import NotFound from './pages/NotFound';

const PublicLayout = ({ children, onOpenBooking }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onOpenBooking={onOpenBooking} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <Chatbot />
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
