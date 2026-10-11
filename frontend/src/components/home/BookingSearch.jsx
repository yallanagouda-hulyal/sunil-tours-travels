import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Truck, MapPin, AlertCircle } from 'lucide-react';

const BookingSearch = ({ onOpenBooking }) => {
  const [selectedCircuit, setSelectedCircuit] = useState('Day 1: Mullayanagiri Circuit (₹3,500)');
  const [travelDate, setTravelDate] = useState(new Date().toISOString().slice(0, 10));
  const [passengers, setPassengers] = useState('1-4');
  const [vehicleType, setVehicleType] = useState('Standard Sightseeing Vehicle');
  const [errorMsg, setErrorMsg] = useState('');

  const todayStr = new Date().toISOString().slice(0, 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!travelDate) {
      return setErrorMsg('Please select a travel date.');
    }

    if (travelDate < todayStr) {
      return setErrorMsg('Travel date cannot be in the past.');
    }

    if (onOpenBooking) {
      onOpenBooking({
        packageOrDestination: selectedCircuit,
        travelDate,
        passengerCount: passengers,
        vehicleType
      });
    }
  };

  return (
    <div className="glass-booking-search-panel">
      <div className="search-panel-header">
        <div>
          <h3 className="search-panel-title">Plan Your Trip</h3>
          <p className="search-panel-subtitle">Quick enquiry for your next adventure</p>
        </div>
        {errorMsg && (
          <div className="search-panel-error">
            <AlertCircle size={16} />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="search-panel-form">
        
        {/* Destination Select */}
        <div className="search-form-group">
          <label htmlFor="search-destination" className="search-form-label">
            Destination / Package
          </label>
          <div className="search-input-wrapper">
            <MapPin size={16} className="search-field-icon" />
            <select
              id="search-destination"
              value={selectedCircuit}
              onChange={(e) => setSelectedCircuit(e.target.value)}
              className="search-select-input"
            >
              <option value="Day 1: Mullayanagiri Circuit (₹3,500)">Day 1: Mullayanagiri Sightseeing (₹3,500)</option>
              <option value="Day 2: Kemmanagundi Tour (₹4,000)">Day 2: Waterfalls & Viewpoints (₹4,000)</option>
              <option value="Day 3: Belur & Halebidu Tour (₹3,500)">Day 3: Heritage & Temples (₹3,500)</option>
              <option value="Day 4: Custom Sightseeing (₹3,500)">Day 4: Custom Sightseeing (₹3,500)</option>
              <option value="10-Seater Tempo Traveller Hire">10-Seater Tempo Traveller Hire</option>
              <option value="50-Seater Bus Hire">50-Seater Luxury Bus Hire</option>
              <option value="4x4 Off-Road Jeep Safari">4x4 Off-Road Jeep Safari</option>
            </select>
          </div>
        </div>

        {/* Travel Date */}
        <div className="search-form-group">
          <label htmlFor="search-date" className="search-form-label">
            Travel Date
          </label>
          <div className="search-input-wrapper">
            <Calendar size={16} className="search-field-icon" />
            <input
              id="search-date"
              type="date"
              min={todayStr}
              value={travelDate}
              onChange={(e) => {
                setTravelDate(e.target.value);
                setErrorMsg('');
              }}
              className="search-text-input"
              required
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="search-form-group">
          <label htmlFor="search-passengers" className="search-form-label">
            Passengers
          </label>
          <div className="search-input-wrapper">
            <Users size={16} className="search-field-icon" />
            <select
              id="search-passengers"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="search-select-input"
            >
              <option value="1-4">1 - 4 Passengers (Car)</option>
              <option value="5-10">5 - 10 Passengers (Tempo)</option>
              <option value="11-50">11 - 50 Passengers (Luxury Bus)</option>
            </select>
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="search-form-group">
          <label htmlFor="search-vehicle" className="search-form-label">
            Vehicle Type
          </label>
          <div className="search-input-wrapper">
            <Truck size={16} className="search-field-icon" />
            <select
              id="search-vehicle"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="search-select-input"
            >
              <option value="Standard Sightseeing Vehicle">Standard Sightseeing Vehicle</option>
              <option value="10-Seater Force Tempo Traveller">10-Seater Tempo Traveller</option>
              <option value="50-Seater Luxury Tourist Bus">50-Seater Luxury Bus</option>
              <option value="4x4 Off-Road Jeep Safari">4x4 Off-Road Jeep Safari</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="search-form-group button-group">
          <button type="submit" className="search-submit-btn">
            <span>Search Trips</span>
            <ArrowRight size={18} className="btn-arrow-icon" />
          </button>
        </div>

      </form>
    </div>
  );
};

export default BookingSearch;
