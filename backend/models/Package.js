const mongoose = require('mongoose');

const dayItinerarySchema = new mongoose.Schema({
  day: { type: Number, required: true },
  title: { type: String, required: true },
  places: [{ type: String }],
  description: { type: String, default: '' },
  image: { type: String, default: '' }
}, { _id: false });

const locationCardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, default: '' },
  badge: { type: String, default: 'Sightseeing' }
}, { _id: false });

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  duration: { type: String, required: true }, // e.g. "Full Day", "3 Days / 2 Nights"
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Sightseeing', 'Group', 'Student', 'Corporate', 'Adventure', 'Custom'], 
    default: 'Sightseeing' 
  },
  categories: [{ type: String }],
  price: { type: Number, required: true }, // Rate e.g. 3500
  priceLabel: { type: String, default: 'Vehicle charges' }, // "Vehicle charges", "Per Person"
  dayWiseItinerary: [dayItinerarySchema],
  locationCards: [locationCardSchema],
  gallery: [{ type: String }],
  travelTips: [{ type: String }],
  activities: [{ type: String }],
  inclusions: [{ type: String }],
  exclusions: [{ type: String }],
  image: { type: String, required: true },
  published: { type: Boolean, default: true },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
