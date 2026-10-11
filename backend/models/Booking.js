const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingReference: { type: String, required: true, unique: true },
  customerName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true, default: '' },
  packageOrDestination: { type: String, required: true },
  travelDate: { type: Date, required: true },
  returnDate: { type: Date },
  passengerCount: { type: Number, required: true, min: 1 },
  vehicleType: { type: String, default: 'Standard Sightseeing Vehicle' },
  pickupLocation: { type: String, default: 'Chikkamagaluru' },
  tripDuration: { type: String, default: '1 Day' },
  specialRequests: { type: String, default: '' },
  preferredContact: { type: String, enum: ['whatsapp', 'phone', 'email'], default: 'whatsapp' },
  status: { 
    type: String, 
    enum: ['New', 'Contacted', 'Quoted', 'Confirmed', 'Completed', 'Cancelled'], 
    default: 'New' 
  },
  quotedAmount: { type: Number, default: 0 },
  paymentStatus: { type: String, enum: ['Pending', 'Partial', 'Paid', 'Refunded'], default: 'Pending' },
  adminNotes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
