const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, trim: true, lowercase: true, default: '' },
  tourType: { type: String, default: 'Chikkamagaluru Sightseeing' },
  groupSize: { type: String, default: '' },
  travelDate: { type: String, default: '' },
  pickupLocation: { type: String, default: '' },
  numberOfDays: { type: String, default: '' },
  vehicleRequirement: { type: String, default: '' },
  foodAccommodation: { type: String, default: '' },
  message: { type: String, required: true },
  followUpStatus: { 
    type: String, 
    enum: ['New', 'Contacted', 'Quotation Sent', 'Confirmed', 'Closed', 'Resolved', 'Archived'], 
    default: 'New' 
  },
  adminNotes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);
